import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import useFetch from "./useFetch";
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function EntriesList() {

        // Form Page uses a get request
      const {entriesData} = useFetch("http://localhost:3003/api/entries/");
      
   

      const entriesDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this contact?')) {
          fetch("http://localhost:3003/api/entries/" + id, { method: 'DELETE' })
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
        <Card  style={{ width: '50rem' }}  body outline color="success" className="mx-auto my-3"   >
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
              
                      <td>
                       <Button variant="warning"onClick={() => entriesDelete(item.id)}>Warning</Button>{'Delete'}
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

 