import React from 'react';
import { useState } from 'react';
import './App.css';

const Control = () => {
    const [Login,SetLogin]=useState({email:'',password:'',name:'',dob:''});
 
    const handleChange = event =>{
    const {name,value}= event.target;
    SetLogin({...Login ,[name]:value});
    };
    const handleSubmit =event =>{
        event.preventDefault();
        console.log(Login.email,Login.password,Login.name,Login.dob);
    };
    
  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' name='name' value={Login.name} onChange={handleChange}/>
        </label><br/><br/>
        <label>
            Email:
            <input type='email' name='email' value={Login.email} onChange={handleChange}/>
        </label><br/><br/>
        <label>
            Password:
            <input type='password' name='password' value={Login.password} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                Date of birth:
                <input type='date' name='dob' value={Login.dob} onChange={handleChange}/>
            </label><br/><br/>
            <br/><br/>
            <button type='submit' style={{color:'green'}}>Register</button>
      </form>
    </div>
  );
};

export default Control;
