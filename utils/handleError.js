const handleHttpError =  (res,message = 'algo sucedio',code=403) =>{
    res.status(code);
    res.status({error:message});
}

module.exports = {handleHttpError}