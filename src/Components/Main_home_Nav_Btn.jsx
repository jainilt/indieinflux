import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import VideoCompo from './VideoCompo'
import { Routes, Route, Link } from 'react-router-dom';


function Main_home_Nav_Btn() {
  return (
    <>
      
     
      <VideoCompo/>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image className='logoImg' src="/src/img/logo.svg" rounded />
          </Col>
        </Row>
      </Container>
      <Stack className="myclass">
        <Button variant="secondary">Drop6</Button>
        <Button variant="outline-secondary">Women</Button>
        <Button variant="outline-secondary">Kids</Button>
        <Button variant="outline-secondary">GenZ</Button>
        <Button variant="outline-secondary">Sale</Button>
        <Button variant="outline-secondary">Sale</Button>
        <Button variant="outline-secondary">Sale</Button>
      </Stack>
    </>
  )
}

export default Main_home_Nav_Btn