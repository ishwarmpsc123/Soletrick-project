import { useState, useEffect } from "react"

import img1 from "../assets/slider1.jpg"
import img2 from "../assets/slider2.jpg"
import img3 from "../assets/slider3.jpg"
import img4 from "../assets/slider4.jpg"
import img5 from "../assets/slider5.jpg"

function HeroSlider(){

const slides = [
{
image: img1,
title:"Solar Energy For Your Home",
desc:"Save Electricity With Solar"
},
{
image: img2,
title:"Reduce Electricity Bills",
desc:"Solar power helps you save money"
},
{
image: img3,
title:"Clean And Green Energy",
desc:"Protect environment with solar"
},
{
image: img4,
title:"Free Energy From Sun",
desc:"Use renewable solar power"
},
{
image: img5,
title:"Contact Us Today",
desc:"Best solar solutions for your home"
}
]

const [current,setCurrent]=useState(0)
const [pause,setPause]=useState(false)
const [fullscreen,setFullscreen]=useState(false)

useEffect(()=>{

if(pause) return

const interval=setInterval(()=>{
setCurrent((prev)=>(prev+1)%slides.length)
},2500)   // 2.5 sec slider speed

return ()=>clearInterval(interval)

},[pause])

const nextSlide=()=>{
setCurrent((prev)=>(prev+1)%slides.length)
}

const prevSlide=()=>{
setCurrent((prev)=>(prev-1+slides.length)%slides.length)
}

const handleClick=()=>{

setFullscreen(true)
setPause(true)

setTimeout(()=>{
setFullscreen(false)
setPause(false)
},1200)

}

return(

<div className="w-full h-[60vh] relative overflow-hidden">

{/* Slider Image */}
<img
src={slides[current].image}
onClick={handleClick}
className={`w-full h-full object-cover transition-all duration-700 cursor-pointer
${fullscreen ? "fixed top-0 left-0 w-screen h-screen z-50 scale-105" : ""}
`}
/>

{/* Founder Premium Badge */}
<div className="absolute top-5 right-5 
bg-black/40 backdrop-blur-md 
border border-yellow-400/40 
text-yellow-300 
px-5 py-2 
rounded-full 
shadow-[0_0_15px_rgba(255,215,0,0.7)] 
text-sm font-semibold 
tracking-wide">

⭐ Sol-E-Trick Founder  
<br/>
Rahul Ramchandra Rokade

</div>

{/* Top Center Headline */}
<div className="absolute top-6 left-1/2 -translate-x-1/2 
text-white font-bold text-xl bg-black/40 px-6 py-2 rounded-lg">
Contact to Us and Make Your Life Electricity Bill-Free
</div>

{/* Center Text */}
<div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 text-center">

<h1 className="text-4xl font-bold">
{slides[current].title}
</h1>

<p className="text-lg mt-3">
{slides[current].desc}
</p>

</div>

{/* Experience */}
<div className="absolute bottom-6 left-6 text-white bg-black/40 px-4 py-2 rounded-lg">
<h2 className="text-xl font-bold">9+ Years Experience</h2>
</div>

{/* Customers */}
<div className="absolute bottom-6 right-6 text-white bg-black/40 px-4 py-2 rounded-lg">
<h2 className="text-xl font-bold">1000+ Happy Customers</h2>
</div>

{/* Left Arrow */}
<button
onClick={prevSlide}
className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl px-3 py-1 rounded-full">
❮
</button>

{/* Right Arrow */}
<button
onClick={nextSlide}
className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white text-3xl px-3 py-1 rounded-full">
❯
</button>

</div>

)

}

export default HeroSlider