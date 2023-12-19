'use client'

import { useEffect, useState } from "react"


export default function Banner(){
    const [imageBanner, setImageBanner] = useState(1)

    useEffect(() =>{
        setTimeout(nextSlide, 3000)
    },[imageBanner])

    function nextSlide(){
        if(imageBanner <= 2){
            setImageBanner(imageBanner+1)
        } else{
            setImageBanner(1)

        }
    }


    return(
        <>
            <div className="">
                <img
                    src={`images/banner-${imageBanner}.jpg`}
                    className='w-full h-128'
                />
            </div>
        </>
    )
} 