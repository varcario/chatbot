import React from 'react'
import log from '../services/log-service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/home'
import Messages from '../components/messages'

export default function AppRoutes(){
    const name = AppRoutes.name
    log.info(`${name} component being creation`)
    log.info(`${name} component end creation`)
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<Messages />} />                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}