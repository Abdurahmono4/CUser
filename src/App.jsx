//style
import "./App.css";

//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newuser/NewUserForm";

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
    console.log(id);
  };

  const closeModal = (e) => {
    if (e.target.className == "overlay") setShowModal(false);
    if (e.key == "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <div onKeyDown={closeModal} onClick={closeModal} className="App">
      <Navbar />
      <main>
        <div className="no-user">{users.length === 0 && <h2>No user</h2>}</div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
    </div>
  );
}

export default App;
