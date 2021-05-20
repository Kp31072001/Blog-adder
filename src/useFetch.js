import { useState, useEffect  } from 'react';



const useFetch = (url) => {
        const [data, setData] = useState(null);

        const [isPending, setIsPending] = useState(true);

        const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {      ///setTime helps to see the loading no to 
            fetch(url, { signal: abortCont.signal }) ///done normally
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch data for that resource');

                }
                return res.json();
            })
            .then(data =>{
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            } )
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch abort')
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
                
               
            })
        }, 1000)

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}
 
export default useFetch;