import React from 'react';

import Todolist from '../Todolist/TodoList';
import './Home.css';
import Footer from '../footer/Footer';
import Navbar2 from '../navbar/Navbar2';
function Home2() {
  return (
    <div>
    <div >
    <Navbar2 />
    </div>
    <div>
    <Todolist/>
    </div>
    <Footer/>
    </div>
  );
}

export default Home2;