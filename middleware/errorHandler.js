const errorHandler = (err,req,res,next) => {

   const statuscode = res.statuscode ? res.statuscode : 500;

   switch(statuscode){
    case VALIDATION_ERROR:
       res.json( {title: 'validation Failed' ,error: err.message , stackTrace : err.stack} );
    break;
    case NOT_FOUND:
    res.json( {title: 'Not Found' ,error: err.message , stackTrace : err.stack} );
    break;
    case UNAUTHORIZED:
    res.json( {title: 'Unauthorized' ,error: err.message , stackTrace : err.stack} );
    break;
    case FORBIDDEN:
    res.json( {title: 'forbidden' ,error: err.message , stackTrace : err.stack} );
    break;
    case SERVER_ERROR:
    res.json( {title: 'server error' ,error: err.message , stackTrace : err.stack} );
    break;
    default:
        console.log("NO Error , All Good !!")
    break;
}

}
module.exports = errorHandler