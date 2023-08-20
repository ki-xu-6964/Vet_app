import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'
import './styles/petCard.css'
import doggo from './products/dog.png'
import { usePets } from './petContext'
import { useParams, useNavigate} from 'react-router-dom'





export default function Edit() {

  const navigate = useNavigate();
  const {patchPets}= usePets();

  const {id} = useParams();
  const [field, setField ]=useState({});
  const [message, setMessage]=useState(false);
    
   
    useEffect( () => {
 
        fetch("/test/"+id).then(
          response => response.json()
        ).then(
          res => {setField(res) }
          )
      },[])
          
    const handleChange= e =>{

      let value = e.target.value; 
        setField( {...field ,[e.target.name]: value });
    
    }  

    const handleSubmit = e =>{
      e.preventDefault()
     patchPets(field,id)
   
    }  

  function saveFunction(){
    setMessage(true);
    setTimeout(()=> setMessage(false), 1000)

  }

  const navigateHome = () =>{
    navigate('/')
  }
  
  
      return (

<>

    <Card style={{ width: '18rem' }}>

        <Card.Img variant="top" src={doggo} className='pic-padding'/>
            <Card.Body>
              <form id='petForm' onSubmit={handleSubmit}>
                <input className='TextContainer'
                type="text"
                name="name"
                value={field.name}
                onChange={handleChange}
                />
                <input className='TextContainer'
                type="text"
                name="age"              
                value={field.age}
                onChange={handleChange}
                />
                <input className='TextContainer'
                type="text"
                name="breed"
                value={field.breed}
          
                onChange={handleChange}
                />
              <div>
        <button className='save-btn' onClick={()=>saveFunction()} >Save</button>
        <button className='cancel-btn' onClick={navigateHome} >Cancel</button>
        
        {message &&
        <div className='save-msg'>
        <text >Details Saved!</text>
        </div>
          }
        </div>


              </form>
            </Card.Body>
          
    </Card>
    
    </>

    
  )
}



//onSubmit={handleSubmit} 