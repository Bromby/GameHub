import { useEffect, useState } from "react";
//import apiClient from "../services/api-client";
import axios from "axios";
//import { AxiosRequestConfig, CanceledError } from "axios";




const useS2gData= <T>() =>{
 
    //const endpoint = 'https://docs.safety2go.co/s2gservice.asmx?wsdl';


    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() =>{

        const controller = new AbortController();
        setIsLoading(true);

        axios.get('http://localhost:5169/api/Collective').then(res=>{
             console.log(res);
             //setData(res);
           }).catch(err=>{console.log(err)});
        // apiClient
        // .post(endpoint, {params:{ pid: '74E76449-8E26-4BF9-AE52-587B60155A81'}})
        // .then(res => {
        //     setData(res.data.results)
        //     console.log(data);
        //     setIsLoading(false);
        // })
        // .catch(err => {
        //     if (err instanceof CanceledError) return;
        //     setError(err.message);
        //     setIsLoading(false);
        // });
        

        return () => controller.abort();
    
    },[]);

    return {data, error, isLoading}

}

export default useS2gData;