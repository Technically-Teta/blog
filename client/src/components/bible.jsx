/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BibleCard from "./biblecard";



const Bible = () => {

    const [verses, setVerses] = useState([]);
    

    const handleClick = (ev) => {
        ev.preventDefault();
      
        props.handleClick(verses);
      }
    

    const onChange = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types, no-undef
        props.onChange(verses)
      }
    

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
      
            {verses.length}
        
          {verses.map((verse, index) => {
            return (
              <BibleCard
                key={index}
                verse={verse}
                onChange={onChange}
                handleClick={handleClick}
              />
            );
          })}
          <button type="button" onClick={handleClick}>
            New Verses
          </button>
        </div>
      );
    };
export default Bible;


 