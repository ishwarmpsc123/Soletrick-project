import img25 from "../assets/product.jpg";

function Products() {

  return (
    <div className="h-330 w-full bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100">


      <div className=" w-full relative">
        <img src={img25} className="w-full  object-cover" />


        <div className="absolute inset-0 bg-black/40"></div>


        <div className="absolute top-5 bg-black/40 backdrop-blur-md border border-indigo-400/40 text-indigo-300 left-1/2 -translate-x-1/2 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)] text-l font-semibold 
      tracking-wide ">Our Solar Products </div>


        <div className="absolute top-18 bg-black/40 backdrop-blur-md border border-indigo-400/40 text-indigo-300  left-1/2 -translate-x-1/2 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)] text-l font-semibold tracking-wide">High-Quality Solar Solutions for Every Need
        </div>


        <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md border border-yellow-400/40 text-yellow-300 
px-5 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)] text-sm font-semibold tracking-wide">

          ⭐ Sol-E-Trick Founder
          <br />
          Rahul Ramchandra Rokade

        </div>


        <div className="absolute bottom-6 left-6 text-white bg-black/40 px-4 py-2 rounded-lg">
          <h2 className="text-xl font-bold">9+ Years Experience</h2>
        </div>


        <div className="absolute bottom-6 right-6 text-white bg-black/40 px-4 py-2 rounded-lg">
          <h2 className="text-xl font-bold">1000+ Happy Customers</h2>
        </div>


      </div>





      <div className="shadow-[0_0_25px_rgba(0,0,0,0.25)] w-full h-[30px]"></div>
      <div className="max-w-5xl mx-auto text-center py-10 px-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Powering Your Future with Solar Energy
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          We offer a wide range of high-performance solar products including panels,
          inverters, batteries, and accessories. Our solutions are designed to deliver
          maximum efficiency, long-term savings, and reliable energy for your home and business.
        </p>
      </div>






      <div className="max-w-7x1 mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://insolationenergy.in/public/upload/blog/mobilebanner/20240305151028.jpg" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Solar Panels</h3>
              <p className="text-gray-600 text-sm">
                High-efficiency panels that convert sunlight into electricity with maximum performance.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://australianpremiumsolar.co.in/wp-content/uploads/2024/04/APS-SOLAR-INVERTER.jpg" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Solar Inverters</h3>
              <p className="text-gray-600 text-sm">
                Advanced inverters that convert DC to AC power for smooth and efficient usage.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://5.imimg.com/data5/DC/VS/MY-64895474/solar-panel-battery.jpg" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Solar Batteries</h3>
              <p className="text-gray-600 text-sm">
                Store excess energy and use it during night or power cuts.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://tiimg.tistatic.com/fp/2/003/836/solar-module-mounting-structures-216.jpg" className="h-48 w-full object-cover ml-[63px] " />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Mounting Structures</h3>
              <p className="text-gray-600 text-sm">
                Strong and durable structures for secure solar panel installation.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://www.solarpartscomponents.com/wp-content/uploads/2018/06/Solar-Panel-Parts-Components-Accessories.jpg" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Solar Accessories</h3>
              <p className="text-gray-600 text-sm">
                Wires, connectors, junction boxes and everything needed for setup.
              </p>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src="https://5.imimg.com/data5/ZW/MM/KM/SELLER-89158486/3-kw-complete-bos-solution-500x500.jpg" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Complete Solar Kits</h3>
              <p className="text-gray-600 text-sm">
                All-in-one solar solutions for homes, shops, and industries.
              </p>
            </div>
          </div>

        </div>
      </div>







    </div>

  )
}
export default Products;