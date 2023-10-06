import { useEffect, useState } from "react";

const useFetch1 = (url) => {
    const [entryData, entryDataUpdate] = useState(null); // Initialize entryData with null or initial data
     

    useEffect(() => {
        const abortcont = new AbortController();
        fetch(url, { signal: abortcont.signal }).then(res => {
            if (!res.ok) {
                throw new Error("API call has issue");
            }
            return res.json();
        }).then(result => {
            setTimeout(() => {
               entryDataUpdate(result);
                
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
    return { entryData}
}

export default useFetch1;