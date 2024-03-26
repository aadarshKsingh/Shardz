import { React, useEffect,useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
export const Success = () => {
    const [drive, setDrive] = useState('');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const driveParam = searchParams.get('drive');
        setDrive(driveParam);
    }, [location]);

    return (
        <div>
            <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
                {drive === "dropbox" && <img className='w-36 h-36 mb-10' src="https://ik.imagekit.io/shardz/icons/dropbox.png" alt='cloud' />}
                {drive === "box" && <img className='w-36 h-36 mb-10' src="https://ik.imagekit.io/shardz/icons/box.png" alt='cloud' />}
                <p className='font-thin text-4xl'>Drive Added Successfully.</p>
                <NavLink to="/dashboard"><p className='px-5 py-2 bg-blue-500 text-white rounded-lg my-5'>Go to dashboard</p></NavLink>
            </div>
        </div>
    );
};