"use client";
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(".hero_bg_img", {
            y: -200,
        }, {
            scrollTrigger: {
                trigger: ".homePage_hero_sec",
                start: "top top",
                endTrigger: ".hero_img_wrap",
                end: "bottom top",
                scrub: true
            },
            ease: "linear",
            y: 200
        })
    })

    return (
        <>
            <div className=" homePage_hero_sec   pt-[15vw] ">
                <div className=" text-[10vw] capitalize leading-[10vw] font-thin">
                <div className="w-full pl-2">
                    <h2>Art belongs</h2>
                </div>
                <div className="w-full text-end">
                    <h2> to everyone.</h2>
                </div>
                </div>
                <div className=" hero_img_wrap mt-5 w-full h-[150vh] overflow-hidden relative">

                    <div className=" text-sm lg:text-lg   w-[30%] text-white z-10 normal-case absolute top-[20%] left-[4vw]">
                        <p>The Shivdutt Das Art Foundation supports artists, preserves cultural heritage, and makes India's creative legacy accessible to all.</p>
                    </div>

                    <div className=" text-sm lg:text-lg   w-[30%] text-white z-10 normal-case absolute bottom-[20%] right-[4vw]">
                        <p className="mb-4">
                            We believe India’s creative heritage — past and present — deserves to be seen,
                            celebrated, and supported. We preserve the work of artists and artisans who
                            shaped India’s cultural life, often from behind the scenes.
                        </p>

                        <p>
                            At the same time, we support living artists by giving them what they need most:
                            time, space, and freedom to create — bringing important work into the light
                            through exhibitions, artist programs, and public access initiatives.
                        </p>
                    </div>

                    <img className=' hero_bg_img cover' src="https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68107066e5a8ff2c90e9b55e_about_heritage.avif" alt="" />

                </div>
            </div>
        </>
    )
}

export default Hero