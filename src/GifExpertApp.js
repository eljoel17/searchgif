import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    //onst categories = ['Dragon Ball','Sambomzado','México'];

    const [categories, setCategories] = useState(['Spiderman']);

    /* const handleAdd=()=>{

        setCategories([...categories,'Holaamigos']);

    } */


    return(

        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
        {
            categories.map(category =>
                <GifGrid 
                key={category}
                category={category}
                />
            )       
        }


        </ol>
        </>


    );



}

