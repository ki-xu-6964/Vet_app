import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './buttonStyle.css'
import { usePets } from './petContext';
import doggo from './Pet/dog.png'





export const PetCard = (props )=> {

  const { deleteData, currentPetId, setCurrentPetId, GetPets} = usePets();
  const {name, _id, age, breed, img} = props.data

const handleDelete=e=>{

  console.log(_id)
  console.log(name)
  deleteData(_id)
}




const handleClick=e=>{
 

}



  return (
    <>

  <Card style={{ width: '18rem' }} id={_id}>

      <Card.Img variant="top" src={doggo} className='pic-padding'/>
      <Card.Body>
        <Card.Text>
          Pet Name: {name}
        </Card.Text>
        <p>
        Pet Age: {age}
        </p>
        <p>
        Breed: {breed}
        </p>
      </Card.Body>
     <div className='container_button'>
      <button className='delete-btn' onClick={handleDelete}>delete</button>
      <Link className='edit-btn' to={`/edit/${_id}`} onClick={handleClick}  >Edit</Link>
      </div>
      </Card>
      
  
  
    </>
  )
}

