import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isEdite, setIsEdite] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios.get("http://192.168.1.50:5000/api/users")
      .then(response => {
        setUsers(response.data || []);
      })
      .catch(err => console.log(err));
  };
  const addUser = (user) => {
    if (user.id !== 0 && user.name !="") {
      axios.post("http://192.168.1.50:5000/api/adduser", user)
        .then(() => {
          getUsers();
          // alert(`User ${user.name} added successfully`);
        })
        .catch(err => console.log(err));
    }else{
      alert("User id and name is required");};
  };
  const updateUser = (data) => {
    setIsEdite(true);
    if (data.id !== 0 && data.name != "") {
      axios.put('http://192.168.1.50:5000/api/updateuser', data)
        .then(() => {
          setIsEdite(false);
          getUsers();        
        })
    }
    else{
      alert("No updates were found");
      setIsEdite(false);
    }
  };
  const deleteUser = (id) => {
    if (id !== 0 ) {
      const deleteConfirmation = window.confirm("Are you sure you want to delete this user?");
      if (deleteConfirmation) {
        axios.delete('http://192.168.1.50:5000/api/deleteuser', {
          data: {id}
        })
        .then(() => {
          getUsers();
        })
        .catch(err => console.log(err));
      }else{
        alert("User was not deleted");
      }
      }
  };
  return (
    <div>
      <Form 
       user={user} 
       setIsEdite={setIsEdite}
       isEdite={isEdite} 
       addUser={addUser} 
       updateUser={updateUser}
     />
      <Table
        getUser={ user => setUser(user) }
        users={users}
        setIsEdite={setIsEdite}
        deleteUser={deleteUser}
       />
    </div>
  )
}
export default App;
