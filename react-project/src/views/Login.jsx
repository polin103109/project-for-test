
import { useState } from 'react';
import './Login.css';
import { UserIcon } from '@heroicons/react/24/solid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const requestData = {
      email: email,
      password: password,
    };
    console.log("string",requestData);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="main-container">
        <div className="header">
          <UserIcon className="userIcon" />
          <h2 className="Head">Login Panel</h2>
        </div>

        <div className="form-container">
          <form onSubmit={handleLogin} className="form" action="#" method="POST">
            <div className="mail-div">
              <label htmlFor="email" className="block-text">
                Email Address
              </label>
              <div className="email-div">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                
                  className="input"
                />
              </div>
            </div>

            <div className="mail-div">
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="input"
                />
              </div>
            </div>

            <div className="button-div">
              <button type="submit">Login</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>

          <p className="">
            Are you new here?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
