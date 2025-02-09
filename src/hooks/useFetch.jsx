import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
    const [data, setData] = useState({})
    const [loading, setLoading] =useState(true)
    const [error, setError] = useState(null)
    const getData = async()=>{
        try{
            const {data} = await axios.get(url);
            setData(data);
            setError(null);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
    }
}
useEffect(()=> {
    getData();
},[]);

    return{data, error, loading};


}
