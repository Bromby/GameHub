import { useEffect, useState } from "react";
//import apiClient from "../services/api-client";
import axios from "axios";
//import { AxiosRequestConfig, CanceledError } from "axios";




const useS2gData= <T>() =>{
 
    //const endpoint = 'https://docs.safety2go.co/s2gservice.asmx?wsdl';

    let xmls = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDocs xmlns="http://tempuri.org/">
          <pid>74E76449-8E26-4BF9-AE52-587B60155A81</pid>
        </GetDocs>
      </soap:Body>
    </soap:Envelope>`;

    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() =>{

        const controller = new AbortController();
        setIsLoading(true);

        axios.post('https://docs.safety2go.co/s2gservice.asmx?wsdl', 
           xmls, 
           {headers:
             {'Content-Type': 'text/xml','Access-Control-Allow-Origin':'*'}
           }).then(res=>{
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