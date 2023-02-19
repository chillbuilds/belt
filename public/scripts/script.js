let player = {
  power: {
    solar_panel_lvl: 1,
    power_cells: {
      used: 2,
      total: 2
    },
    use: {
      water_reclaim: 0,
      oxygen: 1,
      fuel: 1,
      farm: 0
    }
    
  }
}

let power = player.power

let powerUpdate = () => {
  $('#solar-panel-lvl').text(power.solar_panel_lvl.toString())
  $('#solar-panel-lvl').attr('val', power.solar_panel_lvl.toString())
  $('#power-cell-total').text(power.power_cells.total.toString())
  $('#power-cell-total').attr('val', power.power_cells.total.toString())
  $('#power-cell-used').text(player.power.power_cells.used.toString())
  $('#power-cell-used').attr('val', player.power.power_cells.used.toString())
  $('#water-reclaim-lvl').text(player.power.use.water_reclaim.toString())
  $('#water-reclaim-lvl').attr('val', player.power.use.water_reclaim.toString())
  $('#oxygen-lvl').text(player.power.use.oxygen.toString())
  $('#oxygen-lvl').attr('val', player.power.use.oxygen.toString())
  $('#fuel-lvl').text(player.power.use.fuel.toString())
  $('#fuel-lvl').attr('val', player.power.use.fuel.toString())
  $('#farm-lvl').text(player.power.use.farm.toString())
  $('#farm-lvl').attr('val', player.power.use.farm.toString())
}

$(document).on("contextmenu", function(e){
  // Prevent the default right-click menu from showing
  e.preventDefault()
  let clickedID = $(e.target).attr('id')
  // Perform your desired actions here
  // For example, you can display a custom context menu:
  if(clickedID == 'water_reclaim' && power.use.water_reclaim > 0){
    power.use.water_reclaim = power.use.water_reclaim-1
    power.power_cells.used = power.power_cells.used-1
    powerUpdate()
  }
  if(clickedID == 'oxygen' && power.use.oxygen > 0){
    power.use.oxygen = power.use.oxygen-1
    power.power_cells.used = power.power_cells.used-1
    powerUpdate()
  }
  if(clickedID == 'fuel' && power.use.fuel > 0){
    power.use.fuel = power.use.fuel-1
    power.power_cells.used = power.power_cells.used-1
    powerUpdate()
  }
  if(clickedID == 'farm' && power.use.farm > 0){
    power.use.farm = power.use.farm-1
    power.power_cells.used = power.power_cells.used-1
    powerUpdate()
  }
})

$('#power-usage').on('click', (e)=>{
  let clickedID = $(e.target).attr('id')
  let used = power.power_cells.used
  let total = power.power_cells.total

  if(clickedID == 'water_reclaim' && used < total){
    power.use.water_reclaim = power.use.water_reclaim+1
    power.power_cells.used = power.power_cells.used+1
    powerUpdate()
  }
  if(clickedID == 'oxygen' && used < total){
    power.use.oxygen = power.use.oxygen+1
    power.power_cells.used = power.power_cells.used+1
    powerUpdate()
  }
  if(clickedID == 'fuel' && used < total){
    power.use.fuel = power.use.fuel+1
    power.power_cells.used = power.power_cells.used+1
    powerUpdate()
  }
  if(clickedID == 'farm' && used < total){
    power.use.farm = power.use.farm+1
    power.power_cells.used = power.power_cells.used+1
    powerUpdate()
  }
})

powerUpdate()