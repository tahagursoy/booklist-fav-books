import React from 'react'
import { useApiContext } from '../components/contextapi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Favourites = () => {

  const {favs, delFromFav} = useApiContext()
  console.log(favs)
  return (
    <Container>
      {favs.map((book)=> (
        <Row className="my-3">
          <Col md={2} ><img src={book.image_url} alt='' style={{width:150, height:250}} /></Col>
          <Col md={10}>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <Button onClick={()=>delFromFav(book.id)}>Delete</Button>
          </Col>
          
        </Row>

      ))
    
    }

    
    </Container>

  )
}

export default Favourites