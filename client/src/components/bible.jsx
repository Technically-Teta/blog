import { useState, useEffect } from "react";
import BibleCard from "./biblecard";


const Bible = () => {

    const [verses, setVerses] = useState([]);

    const loadData = () => {
        fetch('http://localhost:3003/api/verses/')
            .then((response) => response.json())
            .then(data => {
                setVerses(data);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='verses-container'>
                <span>Page 1</span>/{verses.length}
            </div>
            {verses.map((verse, index) => {
                return <BibleCard key={index} verse={verse} />
            })}
        </div>
    )

}

export default Bible;