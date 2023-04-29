import log from '../services/log-service'
import { useEffect, useState } from 'react'
import { Button, Card, Container, FormControl, InputGroup, Row } from 'react-bootstrap'

export default function Messages() {
    
    const name = Messages.name
    log.info(`${name} component being creation`)
    const title = "Messages"
    const chatContainer = document.getElementById('chat-container');
    const messageContainer = document.getElementById('message-container');
    const [inputMessage, setInputMessage] = useState("")
    const [outputMessageQueue, setOutputMessageQueue] = useState({list:[]})

    const postMessage = () => {
        log.info(`${name} enter key pressed`)
        const nextId = outputMessageQueue.list.length + 1
        
        console.log("POST -> inputMessage", inputMessage)
        outputMessageQueue.list.push({
            id: nextId,
            source: "human",
            text: inputMessage
        })
        
        setOutputMessageQueue({list:outputMessageQueue.list})
        setInputMessage("")
    }

    const onKeyDownHandler = (event) => {
        if(event.key === "Enter")
        {
            postMessage()
        }
    }
    const onClickHandler = ()=>{
        postMessage()
    }

    log.info(`${name} component end creation`)
    return (<div className="container-fluid m-0 p-0 h-100">
        <Row className="m-0 align-items-center" style={{ background: "#FEFEFE", minHeight: "2rem", borderTop: "1px solid #EAECED", borderRight: "1px solid #EAECED", borderBottom: "1px solid #EAECED" }}>
            <div>
                {title}
            </div>
        </Row>
        <Row className="card rounded-0 border-0 h-100" style={{ padding: "0 0 4rem 0", margin: "0 0 -4rem 0" }} >
            <Container 
                className="me-0 m-0 h-100 d-flex flex-column justify-content-center align-items-center">
                <Card 
                    className="me-0 m-0 h-100 overflow-auto rounded-0" 
                    style={{flexDirection: "column-reverse", minWidth: "48rem", maxWidth: "48rem"}}>
                    <Card.Body >
                    {   
                        outputMessageQueue.list.map(m=>{
                            if(m.source === "bot")
                                return(
                                        <div key={m.id} className="d-flex align-item-baseline mb-4">
                                            <div className="pe-2">
                                                {m.text}
                                            </div>
                                        </div>
                                    )
                            else
                                return(
                                    <div key={m.id} className="d-flex align-item-baseline mb-4 text-end justify-content-end">
                                        <div className="pe-2">
                                            {m.text}
                                        </div>
                                    </div>
                                )
                        })
                    } 
                    </Card.Body>
                </Card>
            </Container>
        </Row>
        <Row className="card rounded-0 border-1 m-0 p-1 position absolute" style={{ background: "#FEFEFE", height: "4rem", border: "1px solid #EAECED", margin: "0 5rem 0 0" }} >
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Card style={{minWidth: "48rem", maxWidth: "48rem"}}>
                    <Card.Footer className="bg-transparent  border-0 bottom-0 m-0 p-0 align-item-baseline">
                        <InputGroup>
                            <FormControl 
                                type="text" 
                                tabIndex="0"
                                value={inputMessage} 
                                onChange={event=>{log.info(`${name} ${event.target.value}`); setInputMessage(event.target.value)}}
                                onKeyDown={onKeyDownHandler}
                                ></FormControl>
                            <InputGroup.Text className="bg-transparent b-0">
                                <Button 
                                    variant="primary" 
                                    onClick={onClickHandler}
                                    >send</Button>
                            </InputGroup.Text>
                        </InputGroup>
                    </Card.Footer>
                </Card>
            </Container>
        </Row>
    </div>)
}