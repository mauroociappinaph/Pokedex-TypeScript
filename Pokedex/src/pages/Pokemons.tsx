import  Headers  from '../components/Headers';
import  Main  from '../components/Main'
import  Footer  from '../components/Footer';
import  { useState } from "react";

const Pokemons = () => {
    const [query , setQuery] = useState ("");
    return (
        <>
        <Headers query={query} setQuery={setQuery} />

        <Main />

        <Footer />

        
        </>
    );
}

export default Pokemons 