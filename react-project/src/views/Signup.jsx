import './App.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from "../api/axios"
import { UserIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'



export default function SignUp() {
  
  const [firstName,setFirstName] =useState('');
  const [lastName,setLastName] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const navigate = useNavigate();
 
const handleRegister = async (event) => {
   event.preventDefault();
   try{
    await axios.post('/api/signup',{firstName,lastName,email,password});
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    navigate("/");
  }catch(error){
    console.log(error);

  }

};
  
  return (
    <>
    
      <div className="main-container">
        <div className="header">
        <UserIcon className='userIcon'/>
          <h2 className="Head">
            Registration Panel
          </h2>
          <h1>Register for free</h1>
          <p className=''>or{""}
          <Link to="/login" className=''>
            Login with your account
          </Link>
          </p>
        </div>

        <div className="form-container">
          <form  onSubmit={handleRegister} className="form" action="#" method="POST">
          <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                First Name
              </label>
              <div className="email-div">
                <input
                  id="name"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                Last Name
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
           
            
            <div className='mail-div'>
              <label htmlFor="email" className="block-text">
                Email address
              </label>
              <div className="email-div">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="input "
                />
              </div>
            </div>
           

            <div className='mail-div'> 
              <div className="pass-div">
                <label htmlFor="password" className="block-text">
                  Password
                </label>
                
              </div>
              <div className="password-div">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input"
                />
              </div>
            </div>

            <div className="button-div">
              <button
                type="submit"
                className=""
              >
                Register
              </button>
              <button
                type="submit"
                className=""
              >
                Cancel
              </button>
            </div>
          </form>

         
         
        </div>
      </div>
    </>
  )
}