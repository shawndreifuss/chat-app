import React, { useState, } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import Logo from '../assets/login.svg'

const Login = () => {



  const [err, setErr] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
   try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
       

   } catch (err) {
     setErr(true);
   }
  };
  return (
   
   
    <div className="gradient-form h-screen bg-nuetral-200 dark:bg-neutral-700">
      <div className="container  m-auto h-full  p-10">
        <div className="g-6 flex  h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full ">
            <div className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="gap-0 lg:flex lg:flex-wrap">
                 <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <div className="container pb-12">
                        <div className="avatar mx-auto w-64 h-64  overflow-hidden ">
                          <img src={Logo} alt="logo" />
                        </div>
                      </div>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                       Company Name
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 text-center">Please Login to your account</p>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      
                          id="exampleFormControlInput1"
                          placeholder="email"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                      <button type="button" onClick={handleSubmit} className="w-full text-lg  f-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
  <a href="#!">Forgot password?</a>
                      </div>
  <div className="flex items-center justify-between pb-6">
  <p>Dont have an account?<a className="cursor-pointer text-blue-900"><Link to="/register"><strong className='underline text-blue'>Register</strong></Link></a> </p> 
                       
 </div>
                    </form>
                  </div>
                </div> 


<div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <div className=" pt-6 text-white h-1/2 md:mx-6 md:p-12">
  <h4 className="mb-10 text-4xl pb-34 font-semibold">
  Fully Responsive Chat Application created with React, Firebase, and TailwindCSS

               </h4>
               <h6 className='text-center font-semibold text-xl underline'>For More Checkout <a href="https://github.com/shawndreifuss">https://github.com/shawndreifuss</a> </h6>
                 <br />
                
              
  </div>
</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login 


 