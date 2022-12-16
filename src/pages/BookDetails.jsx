import React from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'
import { useApiContext } from '../components/contextapi'
import { useState } from 'react'

const BookDetails = () => {

    const [singleBook, setSingleBook] = useState({})
    const {url_details} = useApiContext()
    const {id} = useParams()
   
    useEffect(()=>{
        axios.get(url_details+id)
            .then(res=>{
                setSingleBook(res.data)
            })
    },[])

  return (
    <Container>
        <Row>
            <Col md={12}><h2>{singleBook.title}</h2></Col>
        </Row>
        <Row>
            <Col md={4}><img src={singleBook.image_url} alt='' /></Col>
            <Col md={5}>{singleBook.description}</Col>
            <Col md={3}>{singleBook.genre_list}</Col>
        </Row>        
    </Container>
  )
}

export default BookDetails