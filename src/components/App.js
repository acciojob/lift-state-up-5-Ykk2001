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
isLoggedIn ? (<p>You are Logged In!</p>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
}

</div>
)
}

export default App