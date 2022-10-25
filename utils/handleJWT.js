const jsonwebtoken = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * debes pasar el usuario
 * @param {*} user 
 */
const tokenSign = async (user) =>{
    const sign =  jsonwebtoken.sign({
        _id: user._id,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "2h",
    }
    );
    return sign;
}
/**
 * debes pasar el token de sesion
 * @param {*} tokenJWT 
 * @returns 
 */
const verifyToken = async (tokenJWT) => {
    try {
        return jsonwebtoken.verify(tokenJWT,JWT_SECRET)
    } catch (e) {
        return null
    }
}

module.exports  = {tokenSign,verifyToken}