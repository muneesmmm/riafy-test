import React from 'react'
function ProducCard(props) {
  return (
    <div className=' mt-2'>
        <div className="card" style={{borderRadius:'10px'}} >
        <img className="card-img-top" style={{borderStartStartRadius:'10px',borderStartEndRadius:'10px'}} src={props.item.imageUrl} alt="imageurl"></img>
        <div className="card-body">
        <h5 className="card-title" size="0.85rem"  style={{fontWeight:700,color:'#30384d'}}>{props.item.Ingredient}</h5>
        <p className="card-text" style={{fontWeight:500,color:"#7e8a9a"}} size='0.7rem'>{props.item["Short text"]}</p>
  </div>
</div>
    </div>
    
  )
}

export default ProducCard