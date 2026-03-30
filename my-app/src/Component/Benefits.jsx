import { useEffect, useState } from "react";
import { ArrowBigRight } from 'lucide-react';
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";

function Benefits() {

  const images = [img1, img2, img3, img4, img5, img6]

  const [active, setActive] = useState(0)
  const [pause, setPause] = useState(false)
  const [showFull, setShowFull] = useState(false)

  useEffect(() => {

    if (pause) return

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)

  }, [pause])

  const handleClick = (index) => {

    setActive(index)
    setPause(true)
    setShowFull(true)

    setTimeout(() => {
      setPause(false)
      setShowFull(false)
    }, 3000)

  }

  return (

    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 pt-1 w-full h-[500px]">

      <div className="flex">

       


        <div className="w-[700px] h-[500px] borde rounded-xl ml-10   shadow-[0_0_25px_rgba(0,0,0,0.25)] mt-8  ">
          <div className="font-sans font-bold text-3xl text-green-600 flex pl-23 mt-5 flex items-center gap-4 ">Your Trust Our Service
            <div className=" pl-22  "><ArrowBigRight size={100} color="#3fc819" strokeWidth={1.75} /></div>
          </div>
          <ul
            className="list-disc pl-10 text-[15px]  ml-9 mr-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <li className="mt-2">We make our customers happy and help them pay less for electricity.</li>
            <li className="mt-2">With 9 years of experience, we have successfully completed thousands of projects with complete accuracy and customer satisfaction.</li>
            <li className="mt-2">Even after 9 years, we have not received a single complaint about our work. We always deliver high-quality and reliable service</li>
            <li className="mt-2">We use high-quality products from trusted brands, which helps increase the lifespan and performance of the solar system</li>
            <li className="mt-2">We have a skilled team of experienced engineers and workers who ensure precise and high-quality work.</li>
            <li className="mt-2">Therefore, we can confidently assure that our work will last for up to 25 years without any problems, a guarantee that very few companies in the market can offer.</li>


          </ul>


        </div>

        {/* </div> */}



        {/* Image Stack */}
        <div className="relative w-[360px] h-[370px] mt-12 ml-10 shadow-xl shadow-black ">

          {images.map((img, index) => {

            const position = (index - active + images.length) % images.length

            return (

              <img
                key={index}
                src={img}
                onClick={() => handleClick(index)}
                className={`absolute rounded-xl shadow-xl cursor-pointer transition-all duration-700
${showFull && index === active
                    ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[520px] object-contain bg-white z-[999]"
                    : "w-full h-full object-cover"}
`}
                style={{
                  transform: `translate(${position * 10}px,${position * 10}px) rotate(${position * 5}deg)`,
                  zIndex: images.length - position
                }}
              />

            )

          })}

        </div>

      </div>

    </div>

  )

}

export default Benefits