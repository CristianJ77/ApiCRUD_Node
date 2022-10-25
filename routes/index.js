const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTHES = __dirname;

const removeExtension = (fileName) =>{


    //TODO tracks.js [tracks,js]
    return fileName.split('.').shift()


}


fs.readdirSync(PATH_ROUTHES).filter((file) => {
    const name = removeExtension(file) //TODO users,tracks,storage
    if(name !== 'index'){

        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`))
    }
})


module.exports = router ;