
import React, { useState, useEffect, useRef } from 'react';



const Parking = () => {

    const available_parking = useState(['small-vehicles','small-and-big-vehicles'])

    const [price, setprice] = useState('') 
    const [selectedslot, setselectedslot] = useState('')

    

    const parking_slots = {
        'small-vehicles':{
            'number':10,
            'cost':6000,
            'currency':'Ksh'
        },
        'small-and-big-vehicles':{
            'number':5,
            'cost':10000,
            'currency':'Ksh'

        }
    }
// iterate over an array to generate options for user to select
    const customoptions = (anArray) =>{
        var opt = anArray.map((item) => {
           return (
              <option key={item} value={item}> 
              {item}
              </option>
           )
        })
     return opt
        
     }

    const onchangeSlotSelected = (e) => {
        var selected_slot = e.target.value
        // setselectedslot(selected_slot)
        var price = parking_slots[selected_slot]['cost']
        console.log(price)
        // setallowedSensor(sensor)
     
     
     }
  return (
    <div className='slots'>
        <select
       onChange={onchangeSlotSelected}>
       <option value="Available Parking" hidden>Choose Parking</option>
         {customoptions(available_parking)}

          
       </select>

      
    </div>
  )
}

export default Parking
