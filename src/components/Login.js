"use-strict"
import React from 'react';



const Login = () => {
  return (
    <div className="container bg-light px-4 py-3 shadow-sm border p-2 align-items-center justify-content-between">
    <h2 className="">Login</h2>
    <form className="">
      <label className ="input-group-text my-3 shadow-sm border p-2" htmlFor="email" >
        User
      </label>
      <input placeholder="Username" className="text" id="email"></input>
      <label className ="input-group-text my-3 shadow-sm border p-2" htmlFor="password" >
        Password
      </label>
      <input placeholder="Password" className="text" id="password" required></input>
      <label className="form-check-label" htmlFor="dropdownCheck"> <input type="checkbox" className="form-check-input mx-2" id="dropdown" />Remember me</label>
      <button type="submit" className="btn btn-primary mx-2">Sign In</button>
    </form>
    
    </div>


  )
}
export default Login;