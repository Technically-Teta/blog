import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";


function EditSubscriber() {
// HANDLES THE FORM TO SUBMIT THE EDIT REQUEST       
    // Use states
    const [id, idChange] = useState(0);
    const [fullname, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [notes, notesChange] = useState('');
    const { coid } = useParams();
    const navigate = useNavigate();

// change to subscriber 
    useEffect(() => {
        fetch('http://localhost:3000/api/contacts/' + coid).then((res) => {
            return res.json();
        }).then((res) => {
            // console.log(res);
            idChange(res.id);
            nameChange(res.fullname);
            emailChange(res.email);
            phoneChange(res.phone);
            notesChange(res.notes);

        }).catch((err) => {
            console.log(err.message);
        })
    }, [coid]);





    const handleSubmit = (e) => {
        e.preventDefault();
        const contactInfo = { id, fullname, email, notes };

       fetch(`http://localhost:3000/api/contacts/` +id,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactInfo)
        }
      
    ).then(() => {
        console.log("data added");
        navigate(-1)
    }).catch((err) => {
        console.log(err.message);
    })
}


  
    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="contact-offset">
                    <h3>Edit Contact</h3>
                        <div className="form-group">
                            <label>ID</label>
                            <input value={id} disabled="disabled" className="form-control"></input>
                        </div>

                        <div className="form-group">
                        <label>Name</label>
                        <input value={fullname} onChange={e => nameChange(e.target.value)} className="form-control" required></input>
                        {fullname.length == 0 && <span className="errormessage"> Please enter your full name</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input value={email} onChange={e => emailChange(e.target.value)} className="form-control" ></input>
                           
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input value={phone} onChange={e => phoneChange(e.target.value)} className="form-control" required></input>
                            {phone.length == 0 && <span className="errormessage"> Please enter your phone</span>}
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <input value={email} onChange={e => emailChange(e.target.value)} className="form-control" ></input>
                            
                        </div>
                        <div className="form-group">
                            <br/>
                            <br/>
                            <button className="btn-btn-submit" type="submit">Submit</button>
                            
                        </div>



                 </div>
            </div>     
        </form>
    </div>
      )
    }
    
    export default 
    EditSubscriber
    