import cloud from '../Assets/cloud.png'
import { Button, TextInput } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSessionStorage } from 'react-storage-complete';
function App() {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [accessToken,setAccessToken] = useSessionStorage('access_token', '');
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
          fetch(process.env.REACT_APP_SERVER+'/login', {
            method: "POST",
            mode: "cors",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({"email": userEmail,"password": userPassword }),
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.access_token){
                  setAccessToken(data.access_token)
                  navigate("/")
                }
            })
            .catch((error) => {
              console.log(error)
            });
       
      };
  return (
    <div>
      <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
        <form className="flex w-96 flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className='w-96 flex flex-col justify-center align-center p-16'>
              <img src={cloud} alt="cloud"/>
              <p className='font-thin text-7xl'>Log In</p>
            </div>
            <TextInput value={userEmail} onChange={(e) => { setEmail(e.target.value)}} color="" id="email1" type="email" placeholder="Email" required />
          </div>
          <div className='py-2'>
            <TextInput value={userPassword} onChange={(e) => { setPassword(e.target.value)}} color="blue" id="password1" type="password" placeholder='Password' required />
          </div>
          <Button color='blue' className='bg-[#5793FB]' type="submit">Sign in</Button>
          <div class="flex items-center">
            <div class="bg-gray-400 flex-1 h-0.5" />

            <div>
              <NavLink to="/forgot-password"><p class="text-[#5793FB] text-center px-5 ">Forgot Password?</p></NavLink>
            </div>

            <div class="bg-gray-400 flex-1 h-0.5" />
          </div>
          
        </form>
        <NavLink to="/register"><p color='black' className='bg-black text-white w-96 btn py-2.5 mt-5 rounded-lg' type="submit">Sign up</p></NavLink>
      </div>
    </div>
  );
}

export default App;
