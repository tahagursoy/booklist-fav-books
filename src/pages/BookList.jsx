import React from 'react'
import { useEffect } from 'react'
// import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Book from '../components/book';
import {useApiContext} from '../components/contextapi'

const BookList = () => {

    // const url ='https://example-data.draftbit.com/books?_limit=20'
    // const [books, setBooks] = useState([])
    const {getBooks, books} = useApiContext()

    useEffect(()=>{
        // axios.get(url)
        //     .then((res) => setBooks(res.data)) 
        getBooks()    
    },[])


  return (
    <Container>
    <Row>
        {books.map((item)=> (
            <Col key={item.id} md={3}><Book book={item} /></Col>
        ))}
      
    </Row>
  </Container>
  )
}

export default BookList

