import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


function ViewSubscriber() {
//shows info for one user - DETAILS
//search allows to show user 
const { id } = useParams()
const { contact } = useFetch('http://localhost:3000/api/contact/' + id)

// change this to subscribers after you the update the table
const navigate=useNavigate()
const backtolist=()=>{
  //return back to previous page (-1)
  navigate(-1)
}







  return (
    <div>
      {contact && <div>
     <Card style={{ width: '18rem' }}></Card>
     <Card.Img variant="top" src="mina-rad-90zUYr3KDjA-unsplash.jpg/100px180?text=Image cap" />
     <Card.Body>
        <Card.Title>Individual Contact page</Card.Title>
        <Card.Text>
           This is one of your contacts
        </Card.Text>    
        </Card.Body>  
        <ListGroup className="list-group-flush">
        <ListGroup.Item> Contact Name is: {contact.fullname} and the id is {contact.id}</ListGroup.Item>  
        <ListGroup.Item>Their email is: {contact.email}</ListGroup.Item>
        <ListGroup.Item>Their phone is:{contact.phone}</ListGroup.Item>
        <ListGroup.Item>New notes {contact.notes}</ListGroup.Item>
        </ListGroup>
       <div>
          <button className="btn btn-danger" onClick={backtolist}>Back</button> 
       </div>
      
    </div>}
    </div>

  );
}

export default ViewSubscriber
