import React from 'react'
import categoriesStore from "../stores/catgStore";
import { observer } from "mobx-react";

function CategoreisList() {
    const handleChange =(e)=>{
        console.log(e.target.value)
    }
  
  return (
     <div className="catg">
            
    <label for="catg">Choose a category : </label>
    <select name="catgo" id="category" onChange={handleChange}>
      {categoriesStore.categories.map((e)=>
      <option value={e._id}>{e.name}</option>)}
      
    
    </select>
    
 
</div>
  )
}

export default observer(CategoreisList) 