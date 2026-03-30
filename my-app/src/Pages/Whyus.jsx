import { CheckCircle, Zap, Shield, Smile, BadgeIndianRupee, Phone, Users } from "lucide-react"

function Whyus() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 min-h-screen">

      {/* Heading */}
      <div className="text-center pt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Choose Us?
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Because we provide the best solar solutions with trust and quality.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-4 hover:shadow-2xl transition duration-300">
          <Zap className="mx-auto text-yellow-500 mb-3" size={40} />
          <h3 className="text-xl font-bold mb-2">Fast Installation</h3>
          <p className="text-gray-600">Quick and efficient solar setup.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-4 hover:shadow-2xl transition duration-300">
          <Shield className="mx-auto text-green-500 mb-3" size={40} />
          <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
          <p className="text-gray-600">Reliable and safe solar solutions.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-4 hover:shadow-2xl transition duration-300">
          <Smile className="mx-auto text-blue-500 mb-3" size={40} />
          <h3 className="text-xl font-bold mb-2">Happy Customers</h3>
          <p className="text-gray-600">1000+ satisfied customers.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:-translate-y-4 hover:shadow-2xl transition duration-300">
          <CheckCircle className="mx-auto text-indigo-500 mb-3" size={40} />
          <h3 className="text-xl font-bold mb-2">Best Quality</h3>
          <p className="text-gray-600">Top-quality solar equipment.</p>
        </div>

      </div>

      {/* Extra Benefits */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <BadgeIndianRupee size={40} className="mx-auto text-green-600 mb-3" />
          <h3 className="font-bold text-xl">Affordable Pricing</h3>
          <p className="text-gray-600 mt-2">Best market price with no hidden charges.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Users size={40} className="mx-auto text-blue-500 mb-3" />
          <h3 className="font-bold text-xl">Expert Team</h3>
          <p className="text-gray-600 mt-2">Skilled professionals for installation.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Shield size={40} className="mx-auto text-purple-500 mb-3" />
          <h3 className="font-bold text-xl">Long-Term Support</h3>
          <p className="text-gray-600 mt-2">After-sales service and maintenance.</p>
        </div>

      </div>

      {/* 🔥 WHY ONLY US (UPDATED CONTENT) */}
      <div className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Only Us?
        </h2>

        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">

          <p>
            We are more than just a solar installation company — we are your long-term energy partner.
            Our goal is to help you reduce electricity costs and move towards a sustainable future.
          </p>

          <p>
            With strong industry experience, we provide complete end-to-end solutions including
            consultation, system design, installation, and after-sales support. We make the entire
            process simple and hassle-free for you.
          </p>

          <p>
            Our expert team uses high-quality solar panels and advanced technology to ensure
            long-lasting performance and maximum savings. We also assist you with government subsidy
            processes and documentation.
          </p>

          <p>
            What truly makes us different is our commitment to customer satisfaction.
            Even after installation, we stay connected with you through maintenance and support.
          </p>

          <p className="font-semibold text-gray-800">
            Choosing us means choosing trust, quality, and a smarter energy future.
          </p>

        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-green-500">1000+</h2>
            <p className="text-gray-600">Customers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-blue-500">500+</h2>
            <p className="text-gray-600">Installations</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-yellow-500">10+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-purple-500">24/7</h2>
            <p className="text-gray-600">Support</p>
          </div>

        </div>
      </div>

      {/* Contact */}
      <div className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Us
        </h2>

        <div className="flex justify-center">
          <div className="bg-white p-5 rounded-lg shadow flex items-center gap-3">
            <Phone /> <span>+91 7263943278</span>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold">
          Switch to Solar & Save Money Today ⚡
        </h2>
        <p className="mt-3 text-lg">
          Make your home electricity bill-free with our smart solar solutions.
        </p>
      </div>

      <div className="text-center mt-10 pb-20">
        <p className="text-gray-600 text-lg">
          Trusted by hundreds of families and businesses ☀️
        </p>
      </div>

    </div>
  )
}

export default Whyus