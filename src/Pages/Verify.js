import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cloud from '../Assets/cloud.png'
import { useSessionStorage } from 'react-storage-complete';
export const Verify = () => {
    const { vToken } = useParams();
    const [accessToken, setAccessToken] = useSessionStorage('access_token','');
    const navigate = useNavigate()
    const verifyAccount = () =>{
          fetch(process.env.SERVER+'/verify?token='+vToken)
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
    }
  return (
    <div>
    <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
      <img src={cloud} alt='cloud'/>
      <p className='font-thin text-7xl'>Shardz</p>
      <p color='black' onClick={()=>verifyAccount} className='bg-black text-white w-96 btn py-2.5 mt-5 rounded-lg'>Verify Account</p>
    </div>
  </div>
  )
}
