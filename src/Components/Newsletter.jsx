import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-11/12 lg:w-7/12 mx-auto mb-14'>
            <div className='border p-6 rounded-xl  bg-gradient-to-r from-orange-300/50 to-orange-300'>
             <div className='bg-white rounded-xl px-3 py-20 flex flex-col items-center justify-center space-y-3' >
                <h1 className='text-3xl font-bold text-center'>Subscribe to our Newsletter</h1>
                <p className='text-gray-400 text-center'>get the latest updates and news right in your inbox!</p>

                <div className='flex flex-col md:flex-row gap-4'>
                    <input type="text" placeholder="Enter your email" className='py-4 px-8 bg-[#FFFFFF] rounded-xl border outline-none w-26 md:w-80'/>
                    <button className='py-4 px-8 shadow-[inset 4px_4px_20px_0px_rgba(19,19,19,0.3)] bg-gradient-to-r from-orange-400  to-orange-300 rounded-xl font-bold'
                    >Subscribe</button>
                   </div>
             </div>
             </div>
        </div>
    );
};

export default Newsletter;