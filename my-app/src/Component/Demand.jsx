import img10 from "../assets/DemandGraph1.png";

function Demand() {

  return(

    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 w-full py-20">

      <div className="shadow-[0_0_25px_rgba(0,0,0,0.25)] w-full h-[20px]"></div>

      <div className="flex items-center justify-center gap-20 mt-10 px-10">

        {/* Image */}
        <div>
          <img 
          src={img10} 
          className="w-[500px] rounded-xl "
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold text-green-600 mb-6">
            Solar Energy Demand is Rising
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Solar energy demand is growing rapidly around the world. As electricity prices continue to increase, more people are choosing solar power as a smart and sustainable solution. Solar energy not only helps reduce electricity bills but also provides clean and renewable power for the future. Because of these advantages, the solar industry is expanding quickly and gaining the trust of many households and businesses. Solar panels are durable and require very little maintenance once installed. With modern technology, solar systems have become more efficient and affordable for everyone. Many governments are also encouraging solar adoption through subsidies and support programs. This helps people install solar systems at lower costs. As a result, solar energy is becoming one of the most reliable and eco-friendly power sources for the future
          </p>

        </div>

      </div>

    </div>

  )
}

export default Demand