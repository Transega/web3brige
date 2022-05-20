import React from 'react'

import { useState } from 'react'

const parking = () => {

    const available_parking = useState(['small-vehicles','small-and-big-vehicles'])

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

    // const onchangeSlotSelecte = (e) => {
    //     var selected_slot = e.target.value
    //     // setplatformSelected(selectedp)
    //     // var sensor = Object.keys(rsProducts[selectedp])
    //     // // console.log(sensor)
    //     // setallowedSensor(sensor)
     
     
    //  }
  return (
    <div>
        <Select
       onChange={onAdm0Chnage}>
       <option value="" hidden>Adm0</option>
         {customoptions(adm0Array)}

          
       </Select>

      
    </div>
  )
}

export default parking
