import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
// import SignUp from '../../backend/src/signup/SignUp';
// import Login from './login/Login'
import Home from './homepage/Home'
import SignUp from './signup/SignUp'
import Project from "./Projects/Project.jsx"
// import Dashboard from "./Dashboard/Dashboard"
import Contact from './contact/Contact';
// import AddProject from './Dashboard/AddProject';
import { Calender } from './Calender/Calender';
import { Calender1 } from './Calender/Calender1';
// import {useSelector} from ":react-redux"
// import { selectUser } from './features/userSlice';
import Chatting from './chat/Chatting'
import Logins from './Logins';
import Loginfrist from './login/Loginfrist';
import Loginsadmin from './Loginsadmin';
import Loginsleader from './Loginsleader';
import Loginsmember from './Loginsmember';
import FeesManagement from './Dashboard/FeesManagment';
import Profile from './navbar/Profile';
import Feedback from './feedback/Feedback';
import Home1 from './homepage/Home1';
import FeesManagement1 from './Dashboard/FeesManagement1';
import Chatting1 from './chat/Chatting1';
import Contact1 from './contact/Contact1';
import Feedback1 from './feedback/Feedback1';
import Project1 from './Projects/Project1';
import Home2 from './homepage/Home2';
import FeesManagement2 from './Dashboard/FeesManagement2';
import Project2 from './Projects/Project2';
import Chatting2 from './chat/Chatting2';
import Basic from './Attendance/Basic';
import PrivacyPolicy from './Privacy/privacy';
import terms from './Terms/terms';

// import cal from './Calender/cal';
// import ListEmployeeComponent from './Dashboard/ListEmployeeComponenet'
// import AddEmployeeComponent from './Dashboard/AddEmployeeComponent'
function App() {
  
  return (
    <div>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Loginfrist/>}></Route>
  
    {/* <Route path="/emp" element={<ListEmployeeComponent />} /> */}
          {/* <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} /> */}
    <Route path="/loginadmin" element={<Loginsadmin/>}></Route>
    <Route path="/loginleader" element={<Loginsleader/>}></Route>
    <Route path="/loginmember" element={<Loginsmember/>}></Route>
    <Route  path="/signup" element={<SignUp/>}></Route>
    <Route  className='App' path="/login" element={<Logins/>}></Route>
    <Route   path="/home" element={<Home/>}></Route>
    <Route   path="/home1" element={<Home1/>}></Route>
    <Route   path="/home2" element={<Home2/>}></Route>
    <Route   path="/pro" element={<Project/>}></Route>
    <Route   path="/pro1" element={<Project1/>}></Route>
    <Route   path="/pro2" element={<Project2/>}></Route>
    {/* <Route path="/cal" element={<cal/>}></Route> */}
    
    {/* <Route   path="/dash" element={<Dashboard/>}></Route> */}
    <Route   path="/cont" element={<Contact/>}></Route>
    <Route   path="/cont1" element={<Contact1/>}></Route>
    {/* <Route   path="/create" element={<AddProject/>}></Route> */}
    <Route   path="/cal" element={<Calender/>}></Route>
    <Route   path="/cal2" element={<Calender1/>}></Route>
    <Route   path="/chat" element={<Chatting/>}></Route>
    <Route   path="/chat1" element={<Chatting1/>}></Route>
    <Route   path="/chat2" element={<Chatting2/>}></Route>
    <Route   path="/fee" element={<FeesManagement/>}></Route>
    <Route   path="/fee1" element={<FeesManagement1/>}></Route>
    <Route   path="/fee2" element={<FeesManagement2/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/backback" element={<Feedback/>}></Route>
    <Route path="/backback1" element={<Feedback1/>}></Route>
    <Route path="/attend" element={<Basic/>}></Route>
    <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
    <Route path="/terms" element={<terms/>}></Route>
    </Routes></BrowserRouter>
    </div>
  );
}

export default App;