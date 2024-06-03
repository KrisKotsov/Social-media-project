import { useState } from "react";

function SignIn() {
  const [userData, setUserData] = useState();

  function handleSignIn() {
    console.log(userData);
  }

  function handleInputChange({ target: { value, name, checked, type } }) {
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <>
      <h1>Sign In</h1>
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
      ></input>
      <input
        type="checkbox"
        name="rememberMe"
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
}

export default SignIn;
