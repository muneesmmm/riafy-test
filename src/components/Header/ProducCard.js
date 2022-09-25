import React from 'react'
function ProducCard(props) {
  return (
    <div className='mb-3'>
        <div className="card " >
        <img className="card-img-top" src={props.item.imageUrl} alt="imageurl"></img>
        <div className="card-body">
        <h5 className="card-title" size="0.85rem"  style={{fontWeight:700,color:'#30384d'}}>{props.item.Ingredient}</h5>
        <p className="card-text" style={{fontWeight:500,color:"#7e8a9a"}} size='0.7rem'>{props.item["Short text"]}</p>
  </div>
</div>
    </div>
    
  )
}

export default ProducCard