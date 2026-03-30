import { Gift, Percent, Sun, BadgeIndianRupee, ShieldCheck } from "lucide-react"

function Offers() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 min-h-screen">

      <div className="text-center pt-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Solar Offers & Subsidy
        </h1>
        <p className="text-gray-600 mt-3">
          Save more with government schemes and our special offers
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">
          <Percent className="text-green-500 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Government Subsidy</h2>
          <p className="text-gray-600">
            Get up to 30% to 40% subsidy on rooftop solar systems.
            Save thousands on installation and reduce your electricity bills.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">
          <Gift className="text-yellow-500 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Company Offers</h2>
          <p className="text-gray-600">
            Free installation, discounts, and 5 years maintenance support.
            EMI options available for easy payment.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition">
          <Sun className="text-orange-500 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Why Solar?</h2>
          <p className="text-gray-600">
            Reduce electricity bills, eco-friendly energy, and increase property value.
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <BadgeIndianRupee className="text-blue-500 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Easy EMI</h2>
          <p className="text-gray-600">
            Install solar with low-cost EMI plans. No need to pay full amount upfront.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <ShieldCheck className="text-green-600 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Warranty</h2>
          <p className="text-gray-600">
            20-25 years panel warranty and 5 years service warranty included.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <Sun className="text-yellow-500 mb-3" size={40} />
          <h2 className="text-xl font-bold mb-2">Daily Savings</h2>
          <p className="text-gray-600">
            Generate free electricity daily and reduce dependency on grid power.
          </p>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Subsidy Details
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Government provides subsidy under rooftop solar scheme.
          1kW to 3kW systems get higher subsidy, and above that limited benefits apply.
          Our team handles documentation, approval, and installation process for you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          How to Get Solar Installed?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold">1. Contact Us</h3>
            <p className="text-gray-600 text-sm mt-2">Call or fill enquiry form</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold">2. Site Visit</h3>
            <p className="text-gray-600 text-sm mt-2">We analyze your roof</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold">3. Installation</h3>
            <p className="text-gray-600 text-sm mt-2">Quick and safe setup</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold">4. Start Saving</h3>
            <p className="text-gray-600 text-sm mt-2">Enjoy free electricity</p>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold">
          Switch to Solar & Save Up to 40% ⚡
        </h2>
        <p className="mt-3 text-lg">
          Limited time offers available. Contact us today!
        </p>
      </div>

      <div className="text-center mt-10 pb-16">
        <p className="text-gray-600 text-lg">
          Make your home electricity bill-free ☀️
        </p>
      </div>

    </div>
  )
}

export default Offers