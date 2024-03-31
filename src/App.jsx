//style
import "./App.css";

//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300?random=1",
      firstName: "Rahmonjon",
      lastName: "Olimjonov",
      age: 20,
      job: "Frontend Developer",
      gender: "male",
    },
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300?random=1",
      firstName: "Rahmonjon",
      lastName: "Olimjonov",
      age: 20,
      job: "Frontend Developer",
      gender: "male",
    },
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300?random=1",
      firstName: "Rahmonjon",
      lastName: "Olimjonov",
      age: 20,
      job: "Frontend Developer",
      gender: "male",
    },
    {
      id: 1,
      imgUrl: "https://picsum.photos/200/300?random=1",
      firstName: "Rahmonjon",
      lastName: "Olimjonov",
      age: 20,
      job: "Frontend Developer",
      gender: "male",
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="no-user">{users.length === 0 && <h2>No user</h2>}</div>
        <UserList users={users} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
