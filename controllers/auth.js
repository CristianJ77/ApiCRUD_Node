const {matchedData} = require("express-validator");
const {tokenSign} = require("../utils/handleJWT")
const {usersModel} = require("../models")
const {encrypt,compare} = require("../utils/handlePassword")

const loginCtrl = async (req,res) => {
req = matchedData(req);
const passwordHash = await encrypt(req.password)
const body = {...req,password:passwordHash}
const dataUser = await usersModel.create(body)
dataUser.set('password',undefined,{strict:false})

const data ={
    token: await tokenSign(dataUser),
    user:dataUser
}

res.send({data})
}

module.exports = {loginCtrl}