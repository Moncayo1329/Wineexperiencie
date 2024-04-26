import React from "react";
import { Wines } from "../data/wines";
import {Wine} from "../data/wine";




function Inicio(){
return(
<div> 
    <div>
    <h1>Welcome to Wine experiencia</h1>
    <p>I am just an wine enthusiast</p> 
    <h2>You can see every wine that open every week and my future boghts.  </h2>
    </div>
<section className='Articulolist'>
    {Wines.map((Inicio,index) => (
    <Wine 
    key={Inicio.id} 
    img={Inicio.img}
    Title={Inicio.Title}
    Description={Inicio.Description} 
    Rate={Inicio.Rate}
    
    />
))}

</section>

</div>


)




}


export {Inicio}