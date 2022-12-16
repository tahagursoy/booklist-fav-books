import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useApiContext} from './contextapi'
import {useNavigate} from 'react-router-dom'

const Book = ({book}) => {

    const {addFav, delFromFav, favs} = useApiContext()

    const favoriKontrol = (id) => {
        let kontrol = favs.some((item)=> item.id===id)
        return kontrol
    }

    const navigate = useNavigate()


  return (
    <Card style={{width:280, marginTop: 50}}>
      <Card.Img onClick={()=>navigate(`/booklist/${book.id}`)} variant="top" src={book.image_url} style={{width:'100%', height:300,}} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.Quote1}
        </Card.Text>
        
        {
            favoriKontrol(book.id) 
            ? <Button variant="primary" size='sm' onClick={()=>delFromFav(book.id)}>Delete From Favourites</Button>
            : <Button variant="primary" size='sm' onClick={()=>addFav(book)}>Add Favourites</Button>
     
        }
        
        
        
      </Card.Body>
    </Card>
  )
}

export default Book
