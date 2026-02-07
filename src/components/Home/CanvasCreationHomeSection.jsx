"use client"

import Image from "next/image"
import Link from "next/link"
import MainBtn from "../buttons/MainBtn"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CanvasCreationUnique() {

    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".canvas_creation_sec",
                start: "top 70%",
                // markers: true,
                toggleActions: 'play none none reverse'
            }    
        })
        tl.from(".grid_img_paren_1",{
            clipPath:'inset(50%)',
            opacity: 0,
            stagger:.2,
            ease:"expo.out",
            duration: .8
        })


    })

    return (
        <div className="  canvas_creation_sec relative w-full overflow-hidden  flex flex-col md:flex-row items-stretch  gap-x-44  px-[4vw] ">

            {/* Canvas Text Block */}
            <div className=" w-full md:w-1/2  flex justify-center flex-col relative">
                <h2 className='  uppercase text-[#EB8529] text-sm font-semibold lg:text-xl'>Enduring Legacies | Edition 2</h2>

                {/* Huge Title */}
                <h2 className=" text-3xl  lg:text-[4.5vw] leading-none">
                    Canvas <br /> & Creation
                </h2>
                <p className="mb-6 text-sm lg:text-lg   uppercase  ">
                    An SDAF Art Camp
                </p>
                <div className=" md:mt-8 ">

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        Sixteen artists. Three days. One purpose: to create.
                    </p>

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        In February 2026, SDAF brings together 16 of India’s most compelling
                        artists at Della Resorts, Lonavala — for three days of uninterrupted creation.
                    </p>

                    <p className="mb-6   text-sm lg:text-lg  opacity-80 ">
                        No briefs. No commissions. No constraints. Just time, space, and the
                        company of fellow creators.
                    </p>

                    <p className="mb-10   text-sm lg:text-lg  opacity-80 ">
                        The works produced will join the SDAF collection.
                    </p>

                    {/* CTA */}
                    <a
                        href="/canvas-and-creation"
                        className=""
                    >
                        <MainBtn txt="Learn More" />
                    </a>
                </div>
            </div>

            {/* Vertical Image Strip */}
            <div className=" w-full md:w-1/2  grid gap-5 grid-cols-2">

                <div className=" grid_img_paren_1 relative  aspect-6/7 w-[80%]">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1667238537543-f724580b800e?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Artist working"
                        className="cover grid_img_paren_1_inner"
                    />
                </div>
                <div className="relative grid_img_paren_1 mt-20 w-[100%] aspect-6/7">
                    <img
                        src="https://images.unsplash.com/photo-1701958213864-2307a737e853?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Canvas texture"
                        className="cover"
                    />
                </div>
                <div className="relative grid_img_paren_1 -mt-20  w-full aspect-6/7">
                    <img
                        src="https://images.unsplash.com/photo-1763494893402-1629cdd8f07e?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Studio detail"
                        className="cover scale-x-[-1]"
                    />
                </div>
                <div className="w-full flex justify-end items-end aspect-6/7">
                    <div className="relative grid_img_paren_1 w-[80%] aspect-6/7 ">
                        <img
                            alt="Abstract artwork"
                            src="https://images.unsplash.com/photo-1584285405368-5cec784a5025?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
