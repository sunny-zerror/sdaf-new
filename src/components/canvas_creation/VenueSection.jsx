"use client";
import React from 'react'
import MainBtn from '../buttons/MainBtn'
import Marquee from 'react-fast-marquee';
import Footer from '../common/Footer';

const VenueSection = () => {
    return (
        <>
            <div className='w-full mt-20 flex flex-col items-center text-center'>
                <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>The venue</h2>
                <h2 className=" text-5xl leading-none">
                    Della Resorts, Lonavala
                </h2>
                <div className=" mt-5 w-[50%]">
                    <p className="mb-6 leading-tight   text-sm lg:text-lg  opacity-80 ">
                        Nestled in the Sahyadris, surrounded by mist and greenery that has inspired artists for generations.  For three days, this becomes a studio without walls — a sanctuary for uninterrupted creation.
                    </p>
                </div>

                <div className="w-full mt-10 flex">
                    <Marquee pauseOnClick={true} gradient gradientColor='#F1EDDF' >
                        <div className="w-[30vw] ml-10 aspect-4/3">
                            <img src="https://www.dellaresorts.com/new-images/new-data-home-feb.webp" alt="" />
                        </div>
                        <div className="w-[30vw] ml-10 aspect-4/3">
                            <img src="https://www.dellaresorts.com/new-images/new-data-home-feb.webp" alt="" />
                        </div>
                        <div className="w-[30vw] ml-10 aspect-4/3">
                            <img src="https://www.dellaresorts.com/new-images/new-data-home-feb.webp" alt="" />
                        </div>
                        <div className="w-[30vw] ml-10 aspect-4/3">
                            <img src="https://www.dellaresorts.com/new-images/new-data-home-feb.webp" alt="" />
                        </div>

                    </Marquee>
                </div>

            </div>

            <Footer/>

        </>
    )
}

export default VenueSection