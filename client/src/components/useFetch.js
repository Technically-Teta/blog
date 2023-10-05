import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [contactData, dataUpdate] = useState(null);
     

    useEffect(() => {
        const abortcont = new AbortController();
        fetch(url, { signal: abortcont.signal }).then(res => {
            if (!res.ok) {
                throw new Error("API call has issue");
            }
            return res.json();
        }).then(result => {
            setTimeout(() => {
                dataUpdate(result);
                
            }, 20);
        }).catch(err => {
            if (err.name === 'AbortError') {
              //  console.log('Abort error');
            } else {
                (err.message);
              
            }
        })
        return () => abortcont.abort();

    }, [url])
    return { contactData }
}

export default useFetch;