/* eslint-disable-next-line no-restricted-globals */
self.onmessage = ({data: [logLevel, msg, params] }) =>{
    switch(logLevel){
        case 1:
            console.error(msg, params)
            break;
        case 2:
            console.warn(msg, params)
            break;
        case 3:
            console.info(msg, params)
            break;
        case 4:
            console.debug(msg, params)
            break;
        case 5:
            console.trace(msg, params)
            break;            
        default:
            console.log(msg, params)
            break;
    }    
}