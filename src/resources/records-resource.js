import log from '../services/log-service'

export const recordsResource = (environment) => { 
    const name = recordsResource.name    
    log.info(`${name} agent begin creation, using ${environment} configuration`)
    log.info(`${name} agent end creation`)
    return {
        get: ()=>{
            log.info(`${name} preparing to get records`)

            log.info(`${name} records retrieved successfully`)
        }
    }
}

export default recordsResource