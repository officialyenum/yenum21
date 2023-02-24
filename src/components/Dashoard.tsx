import React, { FC } from 'react';
import paraphraseLogo from '../assets/paraphrase.png';
import summarizeLogo from '../assets/summarize.png';
import rewriteLogo from '../assets/rewrite.png';
interface DashboardProps {
    onHandleClick: (componentName:string) => void
  }

const Dashboard: FC<DashboardProps> = ({onHandleClick}) => {
    const handleNavClick = (name: string) => {
        onHandleClick(name)
    }
  return (
    <div className="relative overflow-hidden bg-gray-800">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">Yenum 21</h1>
                <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
            </div>
            <div>
                <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-64 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <img src={summarizeLogo} alt="" className="h-full w-full object-cover object-center"/>
                            </div>
                            <div className="h-64 w-64 overflow-hidden rounded-lg">
                                <img src={paraphraseLogo} alt="" className="h-full w-full object-cover object-center"/>
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-64 overflow-hidden rounded-lg">
                                <img src={rewriteLogo} alt="" className="h-full w-full object-cover object-center"/>
                            </div>
                        </div>
                        {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center"/>
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="h-full w-full object-cover object-center"/>
                            </div>
                        </div> */}
                    </div>
                    </div>
                </div>

                <button onClick={() => handleNavClick("summarize")} className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Get Started With Summarize</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
