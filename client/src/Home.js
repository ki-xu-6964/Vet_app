import React, {useEffect} from 'react'
import {PetCard} from './PetCard'
import './styles/petCard.css'
import {usePets} from './petContext'
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import kitties from './Pet/cat.png'


export default function Home() {
 

  const {animalData, setAnimalData, GetPets } = usePets();

  
  useEffect( () => {
    fetch('https://vet-app-5wfy.vercel.app/home').then(
      response => response.json()
    ).then(
      data => {setAnimalData(data) }
      )
  })


//GetPets('/test/home')


return (
    <>

  <h1 className='heading-style'>Welcome to Springwood Clinic! </h1>
  <div></div>
  <h1 className='heading-style'>Here are all our pets </h1>
  <div></div>
    <div className="grid-container card-img-top">
    
    {animalData.map(each=>
      <>
        <PetCard data={each} className='grid-item-1' key={each.id} >
         
        </PetCard>

        </>
        )}

    </div>
    
    </>

  )
}
