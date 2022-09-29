import React, {createContext, useContext, useEffect, useState} from "react";


const API_URL=`https://www.omdbapi.com/?i=tt3896198&apikey=578cc606`;
const AppContext=createContext();

const AppProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError]=useState({show:"false", mssg:""})
    const [query,setQuery]=useState("Titanic");
    const getMovies=async(url)=>{
        setIsLoading(true);
        try
        {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==="True")
            {
                setMovie(data.Search);
                setIsLoading(false);
                setIsError({show:"false"});
            }
            else
            {
                setIsError({
                    show:"true",
                    mssg:data.Error,
                });
            }
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        let timerout=setTimeout(() => {
            getMovies(`${API_URL}&s=${query.length===0? `titanic`:query}`);  
        }, 500);
        return ()=>clearTimeout(timerout);
    }, [query]);

    return (
    <AppContext.Provider value={{ isLoading, movie ,isError, query,setQuery }}>
        {children}
    </AppContext.Provider>
    );
};
const useGlobalContext=()=>{
    return useContext(AppContext);
}


export {AppContext,AppProvider,useGlobalContext};