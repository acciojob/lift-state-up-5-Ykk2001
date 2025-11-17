import { useState } from "react";
import React from "react";
function LoginForm({setIsLoggedIn})
{
const[username,setUserName]=useState('');
const[password,setPassword]=useState('');

function handleSubmit(e)
{
e.preventDefault();
setIsLoggedIn(true)
}
return (
<form onSubmit={handleSubmit}>

<div>
<label>Username:</label>
<input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
</div>

<div>
<label>Password:</label>
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
</div>

<button type="submit">Login</button>


</form>
)
}
export default LoginForm;