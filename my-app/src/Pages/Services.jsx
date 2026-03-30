
import React from 'react'
import { Wrench, MapPin, Sun, Battery, Building2, Settings } from "lucide-react";
function Services() {
  return (



         <div className="h-290 w-full bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100">


                    <div className='flex justify-center items-center'>
         <h1 className='text-4xl mb-4 animate-pulse font-bold text-gray-800 md:text-5xl mt-25'>Our Solar Services</h1>
        </div>


         <div className='flex justify-center items-center'>
         <h1 className='text-xl mb-4  font-semibol text-gray-700 md:text-xl'>Delivering successful solar installations across homes, businesses, and industries..</h1>
         </div>


      
         <div className=' mt-27 flex'>

           <div className=' rounded-[20px] h-[170px] w-[350px] ml-[55px] shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 group bg-white'>
           <Sun className="text-yellow-500 mb-2 group-hover:scale-110 transition ml-5 mt-5 group-hover:scale-110 transition " size={40}/> 
              <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
            <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
            </p>
          
           </div>
        
          <div className=' rounded-[20px]  h-[170px] w-[350px] ml-[50px] shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 group bg-white'>
           <MapPin className="text-blue-500 mb-4 group-hover:scale-110 transition ml-5 mt-5 group-hover:scale-110 transition " size={40}/>
            <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
            <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
            </p> 
            </div>


            <div className=' rounded-[20px]  h-[170px] w-[350px] ml-[50px] shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 group bg-white'>
           <Wrench className="text-gray-700 mb-4 group-hover:scale-110 transition ml-5 mt-5 group-hover:scale-110 transition " size={40}/> 
            <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
            <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
            </p> 
           </div>

            </div>



            <div className=' mt-5 flex'>

             <div className=' rounded-[20px]  h-[170px] w-[350px] ml-[55px] shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 group bg-white'>
             <Settings className="text-purple-500 mb-4 group-hover:scale-110 transition ml-[20px] mt-5 group-hover:scale-110 transition " size={40}/>
              <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
             <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
              </p>  
             </div>

           <div className=' rounded-[20px]  h-[170px] w-[350px] ml-[55px] shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition duration-300 group bg-white'>
           <Battery className="text-green-500 mb-4 group-hover:scale-110 transition ml-[20px] mt-5 group-hover:scale-110 transition " size={40}/>
            <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
            <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
            </p>  
           </div>

            <div className=' rounded-[20px]  h-[170px] w-[350px] ml-[55px] shadow-[0_0_25px_rgba(0,0,0,0.25)]       hover:-translate-y-2 transition duration-300 group bg-white'>
           <Building2  className="text-indigo-500 mb-4 group-hover:scale-110 transition ml-[20px] mt-5 group-hover:scale-110 transition " size={40}/>
            <h3 className="text-xl font-semibold mb-2 ml-[20px]">Solar Installation</h3>
            <p className="text-gray-600 text-sm ml-[20px]">
              Professional installation for homes and industries with maximum efficiency.
            </p>  
            </div>


             </div>






           <div className="max-w-6xl mx-auto mt-20 px-6 text-center">

           <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Our Services Stand Out
           </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
               With years of experience in the solar industry, we provide reliable, efficient, 
                and affordable solar solutions tailored to your needs. Our team focuses on quality, 
                customer satisfaction, and long-term performance, ensuring you get the best value 
              for your investment.
             </p>

  
           <div className="grid md:grid-cols-3 gap-6">

           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">✔ Expert Team</h3>
            <p className="text-gray-600 text-sm">
             Skilled professionals with deep knowledge of solar technology.
            </p>
           </div>

           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">✔ Quality Work</h3>
           <p className="text-gray-600 text-sm">
            We use top-quality materials and ensure perfect installation.
           </p>
           </div>

           <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
           <h3 className="text-xl font-semibold mb-2 text-green-500">✔ Customer Satisfaction</h3>
           <p className="text-gray-600 text-sm">
            Our priority is your satisfaction and long-term savings.
      </p>
      </div>

       </div>
       </div>








    </div>
  )
}

export default Services
