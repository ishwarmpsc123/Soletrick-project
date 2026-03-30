import img8 from "../assets/Circuit.webp";

function Circuit() {

return(

<div className="bg-gradient-to-r from-cyan-50 via-blue-100 to-pink-100 pt-1 w-full min-h-[800px]">

{/* Top Shadow Line */}
<div className="shadow-[0_0_25px_rgba(0,0,0,0.25)] w-full h-[20px]"></div>

{/* Heading */}
<h2 className="text-[26px] font-semibold text-center mt-6 text-gray-800">
Just to make it easier for you to understand – Solar Powered Circuit Overview
</h2>

{/* Circuit Image */}
<img
src={img8}
className="w-[1100px] mx-auto mt-10 rounded-[15px] shadow-[0_0_25px_rgba(0,0,0,0.25)]"
/>

{/* Explanation Box */}
<div className="mt-10 max-w-[1100px] mx-auto bg-white/70 backdrop-blur-md p-8 rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-gray-700 text-[15px] leading-relaxed">

This circuit works in a similar way to a solar power system. Solar panels capture
sunlight and convert it into electricity, which becomes the main energy source.
In this circuit, the solar panels generate electrical energy just like in a real
solar installation. The generated power is sent to a charging module (TP4056),
which works like a controller in a solar system. It safely manages the charging
process of the lithium battery. The battery stores energy so it can be used later
when sunlight is not available. In large solar systems, batteries also store extra
energy for night use. The voltage regulator (MCP1700) then stabilizes the power
output, similar to how an inverter provides stable electricity in solar systems.
Capacitors help smooth the power and remove voltage fluctuations. Finally,
the regulated power is supplied to the device, just like solar systems supply
electricity to homes and appliances.

</div>

</div>

)
}

export default Circuit;