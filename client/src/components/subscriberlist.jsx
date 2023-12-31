import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from "./useFetch";

// Use fetch works
function SubscriberList() {
  // Form Page uses a get request
const {subscriberData} = useFetch("http://localhost:3003/api/subscribers/");

  const navigate = useNavigate();

  const Redirectdetail = (id) => {
    // Take me to the subscriber page based on their id
    navigate('/viewsubscriber/' + id);
  };

  // Edit contact function
  const conEdit = (id) => {
    navigate('/viewsubscriber/' + id);
  };

  const conDelete = (id) => {
  
      if (window.confirm('Are you sure you want to delete this contact?')) {
        fetch("http://localhost:3003/api/subscribers/" + id, { method: 'DELETE' })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    };

  return (
    <div>
      <div className='card-container'>
        <Card  style={{ width: '50rem' }}  body outline color="success" className="mx-auto my-3"   >
          <Link className='btn btn-success' to="/addContact">Add New Contact</Link>
          <Card.Body>
            {subscriberData && 
              <Table className='table' striped="columns">
                <thead>
                  <tr>
                    <th>#Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriberData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.fullname}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.notes}</td>
                      
                        
                      
                      <td>
                        <button className="btn btn-primary" onClick={() => Redirectdetail(item.id)}>Details</button>
                        <button className="btn btn-primary" onClick={() => conEdit(item.id)}>Edit</button> |
                        <button className="btn btn-danger" onClick={() => conDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            }
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SubscriberList;





