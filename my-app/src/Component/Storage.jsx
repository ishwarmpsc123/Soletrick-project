import { Wrench, MapPin, Sun, Battery, Building2, Settings } from "lucide-react";

function Services() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100">

      {/* 🔥 Hero Section */}
      <div className="h-[400px] flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-pulse">
          Our Solar Services
        </h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Complete solar solutions from consultation to installation and maintenance.
        </p>
      </div>

      {/* 🔥 Services Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <Sun className="text-yellow-500 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">Solar Installation</h3>
            <p className="text-gray-600 text-sm">
              Professional installation for homes and industries with maximum efficiency.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <MapPin className="text-blue-500 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">Site Survey</h3>
            <p className="text-gray-600 text-sm">
              Free inspection and expert consultation for best solar setup.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <Wrench className="text-gray-700 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
            <p className="text-gray-600 text-sm">
              Regular service and repair to ensure long-term performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <Settings className="text-purple-500 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">System Design</h3>
            <p className="text-gray-600 text-sm">
              Custom solar design based on your energy needs and space.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <Battery className="text-green-500 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">Battery Backup</h3>
            <p className="text-gray-600 text-sm">
              Reliable storage solutions for power during outages.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group">
            <Building2 className="text-indigo-500 mb-4 group-hover:scale-110 transition" size={40}/>
            <h3 className="text-xl font-semibold mb-2">Commercial Projects</h3>
            <p className="text-gray-600 text-sm">
              Large-scale installations for factories and businesses.
            </p>
          </div>

        </div>
      </div>

      {/* 🔥 Why Choose Us */}
      <div className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-lg">
          <div className="bg-gray-100 px-6 py-3 rounded-full shadow hover:scale-105 transition">9+ Years Experience</div>
          <div className="bg-gray-100 px-6 py-3 rounded-full shadow hover:scale-105 transition">1000+ Happy Customers</div>
          <div className="bg-gray-100 px-6 py-3 rounded-full shadow hover:scale-105 transition">Affordable Pricing</div>
          <div className="bg-gray-100 px-6 py-3 rounded-full shadow hover:scale-105 transition">Expert Team</div>
        </div>
      </div>

      {/* 🔥 CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Go Solar?
        </h2>

        <p className="text-gray-600 mb-6">
          Contact us today for a free consultation and start saving on electricity bills.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition">
          Get Free Consultation
        </button>
      </div>

    </div>
  );
}

export default Services;