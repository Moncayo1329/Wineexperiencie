import React from "react"; 

function Wine(props){
return(
    <React.Fragment>
   <article className='Articulo'>
      <img src={props.img} alt='' width='50px' />
      <h1>{props.Title}</h1>
      <h4 style={{color:'#617d98' , fontSize: '0.75rem', 
    marginTop: '0.25rem'}}>{props.Description}</h4>
    <p>{props.Rate}</p>
    </article>

  </React.Fragment>
)




}


export {Wine}