import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login'; 
import Signup from './Components/Signup';
import TimeSheetManagement from './Components/Basic';
import Manageproject from './Components/Basic1';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Siderbar'; // Correct the import path for Sidebar


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className='grid-container'>
          
              <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
           

          <Routes>
            {/* Render Login and Register pages */}
          
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            
            {/* Content pages */}
           
            <Route path="/time" element={<TimeSheetManagement />} />
            <Route path="/" element={<Login />} />
          
            <Route path="/manageproject" element={<Manageproject />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;