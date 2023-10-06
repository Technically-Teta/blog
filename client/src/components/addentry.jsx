import  { useState } from "react"; // Import React
import { useNavigate } from "react-router-dom";

const AddEntry = () => {
  const [id, idChange] = useState(0);
  const [notes, notesChange] = useState(' ');
  const [date, dateChange] = useState('');
  const [location, locationChange] = useState(0);

  const navigate = useNavigate();

  // Function to add a new contact
  const handlePOSTRequest = (e) => {
    e.preventDefault();
    const entryObj = { notes, date, location };

    fetch("http://localhost:3003/api/entries", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entryObj)
    })
      .then(() => {
        // console.log("data added");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(idChange); // This line might not be needed
        console.log(navigate);
      });
  };

  return (
    <div>
      <form className="container" onSubmit={handlePOSTRequest}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h3>Add contact</h3>
            <div className="form-group">
              <label>ID</label>
              <input
                value={id}
                disabled="disabled"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              {/* Note: You have a redundant div here */}
              <label>Notes</label>
              <input
                value={notes}
                onChange={(e) => notesChange(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                value={date}
                onChange={(e) => dateChange(e.target.value)}
                className="form-control"
                required
              ></input>
              {date.length === 0 && (
                <span className="errormessage">Enter the date yyyy/mm/dd</span>
              )}
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                value={location}
                onChange={(e) => locationChange(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <br></br>
              <button
                className="btn btn-success"
                // Use onSubmit on the form, not onClick on the button
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;





