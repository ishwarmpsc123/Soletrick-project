import logo2 from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function Navbar()
{

  const navigate = useNavigate();

    return(
  <div>
<div className="pt- shadow-xl h-20 relative  bg-gradient-to-r from-cyan-100 via-blue-100 to-pink-100 flex items-center  ">
    
    <img  src={logo2}  className="size-[240px]  object-contain flex items-center    "/>

     <div 
             onClick={() => navigate("/screener")}

     className=" font-semibold ml-3 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">Home</div>
       <div
        onClick={() => navigate("/products")}
       className=" font-semibold ml-12 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">Products</div>

        <div
         onClick={() => navigate("/projects")}
        className=" font-semibold ml-12 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">Projects</div>

         <div
                  onClick={() => navigate("/services")}

         className=" font-semibold ml-12 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">Services</div>

          <div
           onClick={() => navigate("/about")}
          className=" font-semibold ml-12 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">About Us</div>

           <div
                      onClick={() => navigate("/contact")}
           className=" font-semibold ml-12 text-gray-700 hover:text-indigo-600 cursor-pointer text-l">Contact</div>

              <div
                                    onClick={() => navigate("/why")}

              className="ml-12 text-2xl font-bold animate-pulse cursor-pointer text-indigo-800">
           Why us  </div>

             <div
                                                 onClick={() => navigate("/offer")}

             className="ml-12 text-2xl font-bold animate-pulse cursor-pointer text-red-800">
           OFFERS </div>

            

           
</div>
  </div>

    )
}
export default Navbar;