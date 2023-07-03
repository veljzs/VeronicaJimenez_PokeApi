import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Container = () => {
	
	const [pokemonlist, setPokemonlist] = useState ([])
    
	 
    const option = {
        method: "GET"
    }

    function pokemonNames () {
        return pokemonlist.map((pokemon, i)=>{
            return <li key={i}>{pokemon.name}</li>;
       
        })
    };
    console.log (pokemonNames)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/",option)
            .then(response => {
                return response.json();
            })
            
            .then(responseTwo => {
                let pokemonArray = responseTwo.results
                console.log(pokemonArray)
                setPokemonlist(pokemonArray)
                
            })
            
            .catch(error => {
                console.log (error)
            })
    },[]);
    
    

    
    return(
        <div className="text-center mt-5">
            <ul>
                {pokemonNames()}
            </ul>  
        </div>
    )

};

export default Container;
