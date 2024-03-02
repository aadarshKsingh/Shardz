import {React, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import cloud from '../Assets/cloud.png'
export const Verify = () => {
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        if (token) {
            sessionStorage.setItem("accessToken",token)
        }
    }, [location]);
  const verifyAccount = () => {
    fetch(process.env.REACT_APP_SERVER + '/verify', {
            method: "POST",
            mode: "cors",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({"token": sessionStorage.getItem("accessToken")}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          sessionStorage.setItem('accessToken',data.access_token);
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
      <img src={cloud} alt='cloud'/>
      <p className='font-thin text-7xl'>Shardz</p>
     <button onClick={verifyAccount} color='black' className='bg-black text-white w-96 btn py-2.5 mt-5 rounded-lg'>Verify Account</button>
    </div>
  </div>
  )
}
