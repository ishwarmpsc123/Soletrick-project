import { Phone, Mail, MapPin } from "lucide-react"

function Contact() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 min-h-screen">

      {/* 🔥 Heading */}
      <div className="text-center pt-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3">
          Get in touch with us for solar solutions
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 px-6">

        <div className="space-y-6">

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <Phone className="text-green-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 7263943278</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <Mail className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">Rahulrokade603@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <MapPin className="text-red-500" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Latur, Maharashtra, India</p>
            </div>
          </div>

        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">Send Message</h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Your Phone"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-2 gap-10 pb-10">

        <div className="bg-white p-6 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Our Office
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📍</span>
              <p className="text-gray-600">
                Latur, Maharashtra, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">📞</span>
              <p className="text-gray-600">
                +91 7263943278
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">📧</span>
              <p className="text-gray-600">
                Rahulrokade603@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-xl">⏰</span>
              <p className="text-gray-600">
                Mon - Sat : 9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Latur,Maharashtra&output=embed"
            className="w-full h-[300px] border-0"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </div>
  )
}

export default Contact