/* eslint-disable react/prop-types */


    const BibleCard = (props) => {
    
        return (
          <div className={"bible-section"}>
               
                                                            
             <div className='book-text'>{props.verse.book_name}</div>
             <div className='answer-section'>{props.verse.chapter}</div>
          
            
           
          </div>
        );
      };
    
    export default BibleCard;
