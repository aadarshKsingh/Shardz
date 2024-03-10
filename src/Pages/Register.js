import { React, useState } from "react";
import cloud from "../Assets/cloud.png";
import { Button, TextInput, Alert } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("Check your mail to verify account");
  const handleRegister = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_SERVER + "/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User already exists") {
          setMessage("User Already Exists");
        }
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
        <form className="flex w-96 flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <div className="w-96 flex flex-col justify-center align-center p-16">
              <img src={cloud} alt="cloud" />
              <p className="font-thin text-7xl">Sign Up</p>
              <div className="mt-5 -mb-10 p-0">
                {register ===false? (
                  <Alert color="info">
                    <span className="font-medium">{message}</span>
                  </Alert>
                ) : null}
              </div>
            </div>
            <TextInput
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="pb-6"
              color="blue"
              id="username1"
              type="text"
              placeholder="Name"
              required
            />
            <TextInput
              value={userEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              color="blue"
              id="email1"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="py-2">
            <TextInput
              value={userPassword}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              color="blue"
              id="password1"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <Button color="blue" className="bg-[#5793FB]" type="submit">
            Sign up
          </Button>
          <div class="flex items-center">
            <div class="bg-gray-400 flex-1 h-0.5" />

            <div>
              <p class="text-[#5793FB] text-center px-5 ">Forgot Password?</p>
            </div>
            <div class="bg-gray-400 flex-1 h-0.5" />
          </div>
        </form>
        <NavLink to="/login">
          <p
            color="black"
            className="bg-black text-white w-96 btn py-2.5 mt-5 rounded-lg"
            type="submit"
          >
            Sign in
          </p>
        </NavLink>
      </div>
    </div>
  );
};
