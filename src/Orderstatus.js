
import React, {useState, useEffect} from 'react';



import axios from 'axios';

 function OrderStatus() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[users, setUsers] =useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[singleUser, setSingleUser] = useState([]);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect (function(){

        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setUsers(response.data))
        .then((error) => console.log(error));

    });

    const onddleChange = (e) => {
      axios
        .get("https://jsonplaceholder.typicode.com/users/" +e.target.value)
        .then((response) => setSingleUser(response.data))
        .then((error) => console.log(error));
    }

    
  return (
    <div>
    <select onChange={onddleChange}>
      <option value="0">--Select OrderID--</option>
       { users.map((user) =>(
        <option key={user.id}  value ={user.id}>{user.id}</option>
        ))}
    </select>
    <br />
    <br />
    <table >
      {/* <thead>
        <tr>

          <td>Order</td>
          <td>Order confirm</td>
          <td>Order in progress</td>
          <td> order deliver</td>
          
        </tr>
      </thead> */}
      <tbody>
        {

          <tr>
            <td>{singleUser.id}</td>
            <td>{singleUser.name}</td>
            <td>{singleUser.username}</td>
            <td>{singleUser.email}</td>
          </tr>
        }
      </tbody>
    </table>
    </div>
  )
}
export default OrderStatus;
