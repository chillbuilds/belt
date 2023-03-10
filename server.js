module.exports = function () {
    const express = require('express')
    const path = require('path')
    const app = express()
    const port = process.env.PORT || 8080

    app.use(express.static(path.join(__dirname, 'public')))

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/html/index.html'))
    })
    // app.post('/test', function (req, res) {
    //     res.json(JSON.stringify())
    // })
    app.listen(port, () => {
        if(port == 8080){
            console.log('\nhttp://localhost:8080/\n')
        }else{
            console.log('server started on port ' + port)
        }
    })
}