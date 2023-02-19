let sec = 1000
let timeMultiplier =  2.5 // 5 
let playDamage = false

let player = {
  health: 100,
  power: {
    solar_panel_lvl: 1,
    power_capacity: 2,
    power_cells: 1,
  },
  attributes: {
    fuel: 20,
    oxygen: 5,
    hunger: 75,
    thirst: 50,
    health: 90
  }
}

let power = player.power
let attributes = player.attributes

let gameOver = () => {
  console.log('game over')
}

let resourceUpdate = () => {
  $('#power-cell-total').text((power.power_cells.toString()))
  $('#power-capacity').text((power.power_capacity.toString()))
  $('#fuel-total').text((attributes.fuel.toString()))
  $('#oxygen-total').text((attributes.oxygen.toString()))
  $('#food-total').text((attributes.hunger.toString()))
  $('#water-total').text((attributes.thirst.toString()))
  $('#health-total').text((attributes.health.toString()))
  if(playDamage == true){
    damageAnim()
    playDamage = false
  }
}

$(document).on("contextmenu", function(e){
  e.preventDefault()
  console.log('right clicked')
})

let damageAnim = () => {
  $('#damageAnim').css({
    'background': 'rgba(150, 0, 0, 0.5)'
  })
  setTimeout(()=>{
    $('#damageAnim').css({
      'background': 'rgba(150, 0, 0, 0.0)'
    })
  }, 200)
}

$('#power-usage').on('click', (e)=>{
  let clickedID = $(e.target).attr('id')
  let used = power.power_cells.used
  let total = power.power_cells.total

  if(clickedID == 'water_reclaim' && power.power_cells > 0){
    power.power_cells = power.power_cells-1
    attributes.thirst += 30
  }
  if(clickedID == 'oxygen' && power.power_cells > 0){
    power.power_cells = power.power_cells-1
    attributes.oxygen +=30
  }
  if(clickedID == 'fuel' && power.power_cells > 0){
    power.power_cells = power.power_cells-1
    attributes.fuel += 15
  }
  if(clickedID == 'farm' && power.power_cells > 0){
    power.power_cells = power.power_cells-1
    attributes.hunger += 30
  }
})

resourceUpdate()
let resourceUpdateTimer = setInterval(()=>{resourceUpdate()}, 10)

let powerCellTimer = setInterval(()=>{
  if(power.power_cells < power.power_capacity){
    power.power_cells = power.power_cells + 1
  }
}, ((sec * 20) * timeMultiplier) + (power.solar_panel_lvl * 0.5))

let oxygenTimer = setInterval(()=>{
  if(attributes.oxygen > 0){
    attributes.oxygen--
  }else{
    if(attributes.health > 0){
      attributes.health--
      playDamage = true
    }else{
      gameOver()
    }
  }
}, (sec * 1) * timeMultiplier)

let hungerTimer = setInterval(()=>{
  if(attributes.hunger > 0){
    attributes.hunger--
  }else{
    if(attributes.health > 0){
      attributes.health--
      playDamage = true
    }else{
      gameOver()
    }
  }
}, (sec * 5) * timeMultiplier)

let thirstTimer = setInterval(()=>{
  if(attributes.thirst > 0){
    attributes.thirst--
  }else{
    if(attributes.health > 0){
      attributes.health--
      playDamage = true
    }else{
      gameOver()
    }
  }
}, (sec * 2) * timeMultiplier)