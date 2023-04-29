const logWorker = new Worker(new URL('./log-worker.js', import.meta.url))

const logService = {
    error: (msg, ...params) => {
        logWorker.postMessage([1, `${new Date().toISOString()} ${msg}`, params])
    },
    warn: (msg, ...params) => {
        logWorker.postMessage([2, `${new Date().toISOString()} ${msg}`, params])
    },
    info: (msg, ...params) => {        
        logWorker.postMessage([3, `${new Date().toISOString()} ${msg}`, params])
    },
    debug: (msg, ...params) => {        
        logWorker.postMessage([4, `${new Date().toISOString()} ${msg}`, params])
    },
    trace: (msg, ...params) => {
        logWorker.postMessage([5, `${new Date().toISOString()} ${msg}`, params])
    }
}

export default logService