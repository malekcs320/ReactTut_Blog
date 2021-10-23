import { useState, useEffect } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    setIsPending(false);
                    throw Error('could not fetch zokomek');
                    
                }
                return res.json()
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                setError(err.message);
                console.log(err.message);
                }
            })
        },1000);
        return ()=>abortCont.abort();
    }, [url])

return {data, isPending, error};
}

export default useFetch;