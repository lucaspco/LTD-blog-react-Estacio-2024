import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import CreatePost from './pages/CreatePost/CreatePost.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import { AuthProviderBlog } from './context/AuthContextBlog.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAutenticacao } from './hooks/useAutenticacao.js';


function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAutenticacao()
  
  useEffect (() => {
    onAuthStateChanged (auth, (user) => {
      setUser(user)
    })
  },[auth])
  
  const loadingUser = user === undefined
  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProviderBlog value={{user}}> 
        <BrowserRouter>
          <Navbar />
            <div className='container'>
              <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path = '/login' element = {!user ? <Login/> : <Navigate to='/'/>} />
                <Route path = '/register' element = {!user ? <Register/> : <Navigate to="/"/>} />
                <Route path = '/post/create' element = {user ? <CreatePost/> : <Navigate to="/login"/>} />
                <Route path = '/dashboard' elemente = {user ? <Dashboard/> : <Navigate to="/login"/>} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProviderBlog>
    </div>
  )
}

export default App;
