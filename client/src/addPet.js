import React, { useState } from 'react'


import cat from './products/cat.png'
import './styles/petForm.css'
import { usePets } from './petContext'



export function AddPet() {
  
  const [name, setName] = useState()

  const {postPets} = usePets();


  const handleChange = (e) =>{
    e.preventDefault()
    let value = e.target.value; 
      setName( {...name ,[e.target.name]: value });
    
  }

  


  const handleSubmit = (e) => {
    e.preventDefault()
    postPets(name)
    document.getElementById("msform").reset();

  }

  
  

  return (
    <>
       <div>
    <div className='signup-container' >
    <div className='left-container'>
      <img className='pettie' src={cat} style={{width:'200px'}} alt="catto" />
      <div className='added-margin' >
      <p className='h1'> Let's add pets in the system!</p>
      </div>
      </div>
      
    <div className='right-container' >
   <form id="msform" onSubmit={handleSubmit}>
    <fieldset>
      <head1> Pet Details</head1>
      <div></div>
      <form-group className='form-group'>What is their name?</form-group>
    <input 
    type="text"
    name="name"
    onChange={handleChange}
    />
      <form-group className='form-group'>What is their breed?</form-group>
  <input
    type="text"
    name="breed"
    onChange={handleChange}
    />
    <form-group className='form-group'>What is their age?</form-group>
      <input
    type="text"
    name="age"
    onChange={handleChange}
    />
  <button className='submit-button'> Submit</button>

   </fieldset>
 
    
     </form>
    </div>
  
      </div> 
      </div>
    </>
        
  )
}




// styling: https://www.sliderrevolution.com/resources/css-forms/
//https://codepen.io/rickyeckhardt/pen/oNXeoZp