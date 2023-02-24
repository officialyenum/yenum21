import React, { FC } from 'react';
import rewriteLogo from '../assets/rewrite.png';


const Rewrite: FC<any> = () => {
    
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-gray-800 flex-row dark"
    >
        <div className="grid grid-flow-row auto-rows-max">

            <div className="mx-72 mb-8 h-32 w-32 flex justify-center">
                <img src={rewriteLogo} alt="" className="h-full w-full object-cover object-center rounded-lg"/>
            </div>
            <div className="flex mx-72 mb-8 justify-center">
                <p className='text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus fugiat nisi sunt architecto eum. Reiciendis non ex corrupti harum! Hic quam voluptates tempore aliquid ducimus, doloremque explicabo voluptatem qui!</p>
            </div>


            <div className="flex mx-2 justify-center">
                <div className="relative mb-2 xl:w-96" data-te-input-wrapper-init>
                    <textarea
                        className="block min-h-[auto] w-full rounded border-0 bg-gray-600 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        cols={8}
                        rows={6}
                        placeholder="Your message"></textarea>
                        <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                        Enter text you want to rewrite here
                    </label >
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="inline-block float-right rounded mt-2 py-2 px-5 bg-teal-600 text-white">
                        Submit
                    </button>
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default Rewrite;
