import cloud from '../Assets/cloud.png'
import { Button, TextInput } from 'flowbite-react';

function App() {
  return (
    <div>
      <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
        <form className="flex w-96 flex-col gap-4">
          <div>
            <div className='w-96 flex flex-row justify-center p-16'>
              <img src={cloud} alt="cloud" />
            </div>
            <TextInput color="" id="email1" type="email" placeholder="Email" required />
          </div>
          <div className='py-2'>
            <TextInput color="blue" id="password1" type="password" placeholder='Password' required />
          </div>
          <Button color='blue' className='bg-[#5793FB]' type="submit">Sign in</Button>
          <div class="flex items-center">
            <div class="bg-gray-400 flex-1 h-0.5" />

            <div>
              <p class="text-[#5793FB] text-center px-5 ">Forgot Password?</p>
            </div>

            <div class="bg-gray-400 flex-1 h-0.5" />
          </div>
          <Button color='black' className='bg-black text-white' type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
