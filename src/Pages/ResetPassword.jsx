import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const ResetPassword = () => {
    const { email:contextEmail}= useContext(AuthContext)
    const [email, setEmail] = useState(contextEmail || "");
    const handleSubmit = (e)=>{
        e.preventDefault();
      sendPasswordResetEmail(auth,email)
        .then((res)=>{

            toast('A password reset email has been send to your Email Address..')
            
            window.open("https://gmail.com", "_blank")
        })
        .catch(()=>{
            toast.error("Failed to send reset email. Please check your email address")
        })
    }

    
    return (
        <div className='flex flex-col justify-center items-center min-h-[44vh] py-12 '>
            <form onSubmit={handleSubmit} className='w-full max-w-sm border p-5 rounded-md'>
                <div className='my-4'>
                    <label className='font-medium text-lg'>Email</label>
                    <input type="email" name='email' onChange={(e) => setEmail(e.target.value)}   value={email && email} placeholder='Enter your email' className='input input-bordered  w-full' required/>
                </div>
                <button type='submit' className='btn rounded-md w-full py-2 bg-gradient-to-r from-orange-400 to-orange-200'>
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;