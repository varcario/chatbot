import log from '../services/log-service'

export const speakersResource = (environment) => { 
    const name = speakersResource.name    
    log.info(`${name} agent begin creation, using ${environment} configuration`)
    log.info(`${name} agent end creation`)
    return {
        get: ()=>{
            log.info(`${name} preparing to get records`)

            log.info(`${name} records retrieved successfully`)
        }
    }
}

export default speakersResource