import React, { useContext, createContext, useState, useEffect } from "react";

const testContext = createContext();


export function usePets(){
    return useContext(testContext)
}


export const PetProvider = ({children}) => {



    const [currentPetId, setcurrentPetId] = useState([{}]) 
    const [animalData, setAnimalData] = useState([{}]) 


function deleteData(id) {
    fetch("https://vet-app-5wfy.vercel.app/" + id , {
        method: "DELETE",
        headers: {
     "content-type": "application/json",
     accepts: "application/json"     
        }
        //params: JSON.stringify(data)
    })
}




function GetPets(){
    useEffect( () => {
    fetch("https://vet-app-5wfy.vercel.app/home").then(
      response => response.json()
    ).then(
      data => {setAnimalData(data) }
      )
  })}

  
function postPets(data){
    fetch('https://vet-app-5wfy.vercel.app/test/', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    } )
}

function patchPets(data, id){
    fetch('https://vet-app-5wfy.vercel.app/'+ id,{
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    
        })
}




return (
<testContext.Provider  value={{

currentPetId,
setcurrentPetId,
animalData,
setAnimalData,
deleteData,
postPets,
GetPets,
patchPets

}}
>
    {children}
</testContext.Provider>





)}