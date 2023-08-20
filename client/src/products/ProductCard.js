import React from 'react'
import icon from "./img_avatar.png";
import { Card } from 'react-bootstrap';
import '../styles/productCart.css'
import '../buttonStyle.css'
import { usePets } from '../petContext';
import doggo from './dog.png'
import '../styles/productCart.css'




export const ProductCard = (props )=> {

  const { deleteData} = usePets();
  const {name, _id, age, breed, img} = props.data

const handleDelete = e => {

  console.log(_id)
  console.log({name})
  deleteData(_id)

}


/*
function useDelete(){
  useEffect(()=>{
    deleteData(_id)
    }, [animalData])
}
*/



  return (
    <>

  <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={doggo} className='pic-padding'/>
      <Card.Body>
        <Card.Text>
          This is {name}
        </Card.Text>
        <p>
        Their age is {age}
        </p>
        <p>
        Their breed is {breed}
        </p>
      </Card.Body>
      <button className='delete-btn' onClick={handleDelete}>delete</button>
      </Card>
      
  
  
    </>
  )
}



/*

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Text>
          This is {name}
        </Card.Text>
        <p>
        Their age is {age}
        </p>
        <p>
        Their breed is {breed}
        </p>
      </Card.Body>
      </Card>

*/