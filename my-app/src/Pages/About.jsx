import { Users, Award } from "lucide-react"
import rahulimg from"../assets/rahulimg.jpg"
import maheshimg from"../assets/maheshimg.jpg"
function About() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 min-h-screen">

      {/* 🔥 Heading */}
      <div className="text-center pt-16">
        <h1 className="text-4xl font-bold text-gray-800">
          About Our Company
        </h1>
        <p className="text-gray-600 mt-3">
          We provide smart solar solutions for your home and business.
        </p>
      </div>

      {/* 🔥 About Content */}
      <div className="max-w-5xl mx-auto mt-10 px-6 text-center">
        <p className="text-gray-700 text-lg">
          Our company is dedicated to providing high-quality solar energy solutions.
          We help customers reduce electricity bills and move towards clean and green energy.
          With years of experience, we ensure reliable and efficient service.
        </p>
      </div>

      {/* 🔥 Founders Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Founder */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
            <img
              src={rahulimg}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Rahul Rokade</h3>
            <p className="text-yellow-500 font-semibold">Founder</p>
            <p className="text-gray-600 mt-2">
              Leading the company with vision and experience in solar energy solutions.
            </p>
          </div>

          {/* Co-Founder */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
            <img
              src={maheshimg}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Mahesh Patil</h3>
            <p className="text-blue-500 font-semibold">Co-Founder</p>
            <p className="text-gray-600 mt-2">
              Supporting operations and ensuring top-quality service for customers.
            </p>
          </div>

        </div>
      </div>

      {/* 🔥 Stats Section */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition">
          <Users className="mx-auto text-blue-500 mb-3" size={40} />
          <h2 className="text-3xl font-bold">1000+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center hover:scale-105 transition">
          <Award className="mx-auto text-green-500 mb-3" size={40} />
          <h2 className="text-3xl font-bold">9+ Years</h2>
          <p className="text-gray-600">Experience</p>
        </div>

      </div>

      {/* 🔥 Bottom Line */}
      <div className="text-center mt-16 pb-10">
        <p className="text-gray-600">
          Join us and make your life electricity bill-free ☀️
        </p>
      </div>

    </div>
  )
}

export default About