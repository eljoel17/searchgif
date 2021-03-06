import { useEffect, useState } from "react"
import { getGifs } from "../components/helpers/getGifs";


export const useFetchGifs = (category) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{

        getGifs(category)
            .then(img =>{

                setTimeout(() => {
                    setstate({
                        data: img,
                        loading:  false
                    });
                    
                }, 1000);
            })

    },[category])
   


    return state;



}