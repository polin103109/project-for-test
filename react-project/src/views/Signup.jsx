import './App.css'
import {Link} from 'react-router-dom'
import axiosClient from '../api/axios'
import { UserIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'



export default function SignUp() {
  
  const [firstName,setFirstName] =useState('');
  const [lastName,setLastName] =useState('');
  const [address,setAddress] =useState('');
  const [phone,setPhone] =useState('');
  const [email,setEmail] =useState('');
  const [birthdate,setBirthdate] =useState('');
  const [password,setPassword] =useState('');
  const [error,setError] =useState({__html: ""});
const onSubmit = (event) => {
   event.preventDefault();
   setError({__html: ""})
  axiosClient.post('http://localhost:8000',{
    firstName:firstName,
    lastName:lastName,
    address:address,
    phone:phone,
    email,
    birthdate:birthdate,
    password,
})
.then(({data}) => {
  console.log(data)
})
.catch((error) => {
  console.log(error);
} );
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
          <form  onSubmit={onSubmit} className="form" action="#" method="POST">
          <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                First Name
              </label>
              <div className="email-div">
                <input
                  id="name"
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
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="address" className="block-text">
                Address
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="phone" className="block-text">
                Phone
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  type="number"
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
                  type="email"
                  autoComplete="email"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="address" className="block-text">
                Birthdate
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
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