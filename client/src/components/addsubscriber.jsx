 import { useState } from "react"
 import { useNavigate } from "react-router-dom";

 
const AddSubscriber =()=> {
    const [id, idChange] = useState(0);
    const [fullname, fullnameChange] = useState(' ');
    const [email, emailChange] = useState('')
    const [phone, phoneChange] = useState(0);
    const [notes, notesChange] = useState(' ');

    const navigate = useNavigate();

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
</svg>



  // Function to add a new contact
  const handlePOSTRequest = (e) => {
    e.preventDefault();
    const conobj ={fullname, email, phone, notes}

    fetch("http://localhost:3003/api/subscribers", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conobj)

    }).then(() => {
    //console.log("data added");
     navigate(-1);
     }).catch((err) => {
    console.log(err.message);
    console.log(idChange)
    console.log(navigate)
    })
    }



  return (
    <div>
        <form className="container" onSubmit={handlePOSTRequest}> 
        <div className="row">
                        <div className="form-group">
                        <h3>Add Subscriber</h3>
                        <div className="form-group">
                            <label>ID</label>
                            <input value={id} disabled="disabled" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={fullname} onChange={e => fullnameChange(e.target.value)} className="form-control" required></input>
                            {fullname.length == 0 && <span className="errormessage"> Please enter the full name</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input value={email} onChange={e => emailChange(e.target.value)} className="form-control" required></input>
                            {email.length == 0 && <span className="errormessage"> Please enter the Email</span>}
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input value={phone} onChange={e => phoneChange(e.target.value)} className="form-control" ></input>
                            {phone.length == 0 && <span className="errormessage"> Please enter the Email</span>}
                        </div>

                            <div className="form-group">
                            <label>Notes</label>
                            <input value={notes} onChange={e => notesChange(e.target.value)} className="form-control" ></input>
                        </div>




                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-success" onClick={handlePOSTRequest} type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}





export default AddSubscriber
