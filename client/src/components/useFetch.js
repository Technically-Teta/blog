import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [contactData, dataUpdate] = useState(null);
    const [entryData, entryDataUpdate] = useState(null); // Initialize entryData state

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
                entryDataUpdate(result); // Update entryData with the same data
            }, 20);
        }).catch(err => {
            if (err.name === 'AbortError') {
                // Handle abort error if needed
            } else {
                console.log(err.message);
            }
        })
        return () => abortcont.abort();
    }, [url])

    return { contactData, entryData }; // Return both contactData and entryData
}

export default useFetch;

