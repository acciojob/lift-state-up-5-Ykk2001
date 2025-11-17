import { useState } from "react";
import React from "react";
import LoginForm from "./LoginForm";
const App = () => {
const [isLoggedIn,setIsLoggedIn]=useState(false)
return (
<div>
{/* Do not remove the main div */}
<h1>Parent Component</h1>
{
isLoggedIn ? (<h2>You are Logged In!</h2>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
}

</div>
)
}

export default App