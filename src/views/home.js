
import log from './../services/log-service'
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Home() {
  const name = Home.name
  const title = "Chatbot"
  log.info(`${name} component begin creation`)
  log.info(`${name} component end creation`)
  return (
    <Container className="p-0 vh-100 overflow-hidden" fluid={true}>
        <Col>
            <Row className="w-100 m-0 text-white sticky-top align-items-center" style={{backgroundImage: "linear-gradient(#3269B9, #295EAE)", minHeight: "3rem", borderTop: "1px solid #9EBEDC", borderRight: "1px solid #EAECED", borderBottom: "0", borderLeft: "1px solid #EAECED"}}>                
                <Stack direction="horizontal" gap={3} style={{paddingLeft: "6px"}}>
                    <div>
                        {title}
                    </div>
                </Stack>
            </Row>
            <Row className="w-100 vh-100 m-0">               
                <Col className="h-100" style={{padding: "5rem 0 0 0", marginTop: "-5rem"}}>
                    <Outlet />                    
                </Col>
            </Row>
        </Col>
    </Container>
  )
}

export default Home;
