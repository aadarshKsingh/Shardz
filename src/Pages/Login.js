import cloud from '../Assets/cloud.png'
import { Button, TextInput, Alert } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [login,setLogin] = useState(false);
    const [message,setMessage] = useState("Welcome back to Shardz!")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
          fetch(process.env.REACT_APP_SERVER+'/login', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({"email": userEmail,"password": userPassword }),
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.access_token){
                  sessionStorage.setItem('accessToken',data.access_token) 
                  setMessage("Welcome back to Shardz!")
                  setLogin(true)
                  handleProfile()
                  handleDashboard()
                }
                if(data.message==="Invalid credentials"){
                  setMessage("Invalid credentials")
                  setLogin(true)
                }
            })
            .catch((error) => {
              console.log(error)
            });
       
      };
      const handleProfile = () => {
        fetch(process.env.REACT_APP_SERVER+'/profile', {
            method: 'GET',
            headers: {
                'Authorization': sessionStorage.getItem('accessToken'),
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('useremail',data.email)
            sessionStorage.setItem('username',data.name)
            sessionStorage.setItem('pfp',data.profile_picture)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    const handleDashboard = () => {
      fetch(process.env.REACT_APP_SERVER+'/dashboard', {
          method: 'GET',
          headers: {
              'Authorization': sessionStorage.getItem('accessToken'),
              'content-type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(async data => {
           sessionStorage.setItem('storage',JSON.stringify(data.storage))
           sessionStorage.setItem('drives',JSON.stringify(data.drives))
           sessionStorage.setItem('recent',JSON.stringify(data.recent_files))
          navigate("/dashboard")
        })
      .catch(error => {
          console.error('Error fetching data:', error);
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
            <TextInput value={userEmail} onChange={(e) => { setUserEmail(e.target.value)}} color="" id="email1" type="email" placeholder="Email" required />
          </div>
          <div className='py-2'>
            <TextInput value={userPassword} onChange={(e) => { setUserPassword(e.target.value)}} color="blue" id="password1" type="password" placeholder='Password' required />
          </div>
          <Button color='blue' className='bg-[#5793FB]' type="submit">Sign in</Button>
          <div className="flex items-center">
            <div className="bg-gray-400 flex-1 h-0.5" />

            <div>
              <NavLink to="/forgot-password"><p className="text-[#5793FB] text-center px-5 ">Forgot Password?</p></NavLink>
            </div>

            <div className="bg-gray-400 flex-1 h-0.5" />
          </div>
          
        </form>
        <NavLink to="/register"><p color='black' className='bg-black text-white w-96 btn py-2.5 mt-5 rounded-lg' type="submit">Sign up</p></NavLink>
        {login ? <Alert color="info" className='m-5'>
      <span className="font-medium">{message}</span>
    </Alert> : null}
      </div>
    </div>
  );
}

export default App;
