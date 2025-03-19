import logo from './logo.svg';
import './App.css';
import  React from 'react';

import Home from "./Components/Home"
import PostGet from './Components/Posts/PostGet'
import AllUsers from './Components/Users/UsersGet'
import TodoGet from './Components/Todos/TodosGet'
import { BrowserRouter as Router , Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='/Posts' element={<PostGet/>} />
          <Route path='/Users' element={<AllUsers/>} />
          <Route path='/Todos' element={<TodoGet/>} />
       </Route> 
        </Routes>
    </div>
  );
}

export default App;

