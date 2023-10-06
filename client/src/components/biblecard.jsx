/* eslint-disable react/prop-types */


    const BibleCard = (props) => {

      


    
        return (
          <div className={"bible-section"}>
               
               <div className='verses-container'>    

               <h1>My Favorite Scriptures</h1>                                         
                <div  className='book-text'>
                  <p>Book Name: <span className="verses-card">
                  {props.verse.book_name}
                  </span>
                  </p>
    
                  <p>Chapter: <span className="verses-card">
                  {props.verse.chapter}
                  </span>
                  </p>
                    
                  <p>Verse: <span className="verses-card">
                  {props.verse.verse}
                  </span>
                  </p>

                  <p>Text: <span className="verses-card">
                  {props.verse.text}
                  </span>
                  </p>

                        </div>
            
                        
                    
            </div>
            
           
          </div>
        );
      };
    
    export default BibleCard;


   