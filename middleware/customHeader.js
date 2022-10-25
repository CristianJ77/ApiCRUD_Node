const customHeader  = (req,res,next) => {
    try {
        const apiKey = req.headers.api_key;
        if(apiKey == 'CristianJF'){
            next();
        }
        else{
            res.status(403)
            res.send({error:"API_KEY_NO_COINCIDE"})
        }
        
    } catch (e) {
        res.status(403)
        res.send({error:"Algo_ocurrio_en_el_custom_header"})
    }
}

module.exports = customHeader;