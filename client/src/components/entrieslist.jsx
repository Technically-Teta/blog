import Table from 'react-bootstrap/Table';
import useFetch from "./useFetch";
import { Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
 






function EntriesList() {

        // Form Page uses a get request
      const {entriesData} = useFetch("http://localhost:3003/api/entries");
      
     
       const navigate = useNavigate();


       const Redirectsubs = (id) => {
        // Take me to the contacts page based on their id
        navigate('/viewcontact/' + id);
      };
    
      // Edit contact function
      const enEdit = (id) => {
        navigate('/viewcontact/' + id);
      };
    



      const entriesDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
          fetch("http://localhost:3003/api/entries" + id, { method: 'DELETE' })
            .then(() => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      };
  
 
  return (
    <div className='card-container'>
        <Card  style={{ width: '30rem' }}  body outline color="success" className="mx-auto my-3"   >
          <Link className='btn btn-success' to="/addContact">Add New Entry</Link>
          <Card.Body>
            {entriesData && 
              <Table className='table' striped="columns">
                <thead>
                  <tr>
                    <th>#Id</th>
                    <th>Notes</th>
                    <th>Date</th>
                    <th>Location</th>
                  
                  </tr>
                </thead>
                <tbody>
                  {entriesData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.notes}</td>
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <button className="btn btn-primary" onClick={() => Redirectsubs(item.id)}>Details</button>
                      <td>
                       <Link className='btn btn-warning' onClick={() => entriesDelete(item.id)} to="/addEntryt">Delete</Link>
                       <Link className='btn btn-info' onClick={() => enEdit(item.id)} to="/addEntry">Delete</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            }
          </Card.Body>
        </Card>
      </div>
    
  );
}

export default EntriesList

 