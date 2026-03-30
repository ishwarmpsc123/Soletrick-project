
 import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer(){

 const navigate = useNavigate();



    return(

<div>
    <div className="h-115 w-full bg-gray-900">
          
          
          <div className="h-65 w-full  flex">
                <div>
                    <div className="text-indigo-500 pl-13 pt-2 w-60 text-[22px] font-bold mt- ">
                        Sol-e-trick
                    </div>
                    
                    <div className="text-gray-400 mt-3 pl-13 w-80 ">
                       We provide reliable and efficient solar energy solutions to help homes and businesses reduce electricity costs and switch to clean energy. 
Our expert team ensures high-quality solar panel installation, long-term performance, and sustainable power for a greener future.
                     </div>

                </div>
{/* first box */}

                <div>
                    <div className="text-gray-500 pl-8 pt-2 w-50 text-[19px] ">
                        Tradzoo Products
                    </div>
                    
                 

                </div>
{/* second box */}

                                    <div>
                    <div className="text-gray-500 pl-8 pt-2 w-50 text-[19px] ">
                        Learn And share
                    </div>
                    
                    <div className="text-gray-300 mt-3 pl-8 w-40 ">
                        <p className='mt-1 cursor-pointer hover:text-gray-500'>Social</p>
                        
                        <p className='mt-1 cursor-pointer hover:text-gray-500'>Learn</p>
                        
                      <p className='mt-1 cursor-pointer hover:text-gray-500'>  Blog</p>   
                      </div>

                </div>

{/* third box */}
                                       <div className=''>
                    <div className="text-gray-500 pl-9  pt-2 w-60 text-[19px] ">
                        Important Links
                    </div>
                    
                    <div className="text-gray-300 mt-3 pl-9 w-50 ">
                        <p 
                        //  onClick={() => navigate("/PrivacyPolicy")}
                        className='mt-1 cursor-pointer hover:text-gray-500'>Privacy Policy</p>
                        
                    <p 
                     onClick={() => navigate("/Terms")}
                    className='mt-1 cursor-pointer hover:text-gray-500'>Terms & Conditions</p>
                    
                   <p 
                //    onClick={() => navigate("/RefundPolicy")}
                   className='mt-1 cursor-pointer hover:text-gray-500'> Refound Policy</p>
                    
                   <p className='mt-1 cursor-pointer hover:text-gray-500'> Community Guidelines</p>
                       </div>

                </div>

{/* fourth box */}   
                                       <div>
                    <div className="text-indigo-500 pl-8 pt-2 w-60 text-[22px] font-bold  ">
                        Disclaimer
                    </div>
                    
                    <div className="text-gray-400 mt-3 pl-8 w-70 ">
                        The information provided on this website is for general informational 
    purposes only. Actual solar savings and performance may vary depending 
    on location, electricity usage, and installation conditions. Our company 
    does not guarantee exact savings and recommends consulting with our 
    experts for accurate assessment before installation.
                        </div>

                </div>

                </div>
{/* bootum part */}

{/* last page part start black page */}
                 <div className="w-full h-35 flex">
{/* ----------------------------------------------------------------------------------onediv------------------------- */}
                  <div>
                     <div className="  w-30 ml-15 mt-4 text-white text-[22px]">Find Us On</div>
            {/* logo               */}

                         <div className="flex mt-2 ml-12">
                            <div className=" bg-orange-500 h-12 w-12  mx-4 my-7 flex items-center justify-items-cente rounded-full shadow-md shadow-gray-400 hover:bg-[#CD201F]">

                                <img src=" https://cdn-icons-png.flaticon.com/128/1384/1384015.png " className=" mt-2 size-[40px]  mx-1 my-2 hover:-translate-y-3 duration-600 bg-[#FFFFFF] hover:bg-[#f73344] rounded-[20px]" ></img>
                            </div>

            {/* logo 2 */}                 
                               <div className=" bg-[#FF0000] h-12 w-12  my-7 flex items-center justify-items-cente rounded-full shadow-md shadow-gray-400 hover:bg-[#CD201F] ">

                                <img src="https://cdn-icons-png.flaticon.com/128/4494/4494467.png " className=" mt-2 size-[40px]  mx-1 my-2 hover:-translate-y-3 duration-600 bg-[#FFFFFF] hover:bg-[#CD201F] rounded-[20px]" ></img>
                            </div>
                            
{/* logo 3 */}
                              <div className=" bg-[#0088CC] h-12 w-12 mx-4 my-7 flex items-center justify-items-cente rounded-full shadow-md shadow-gray-400 hover:bg-[#0088CC] ">

                                <img src=" https://cdn-icons-png.flaticon.com/128/3536/3536705.png " className=" mt-2 size-[38px]  mx-1 my-2 hover:-translate-y-3 duration-600 bg-[#FFFFFF] hover:bg-[#0088CC] rounded-[20px]" ></img>
                            </div>

{/* logo 4 */}
                                  <div className=" bg-[#1877F2] h-12 w-12 mx-1 my-7 flex items-center justify-items-cente rounded-full shadow-md shadow-gray-400 hover:bg-[#1877F2]">

                                
                                <img src=" https://cdn-icons-png.flaticon.com/128/13147/13147340.png " className=" mt-2 size-[40px]  mx-1 my-2 hover:-translate-y-3 duration-600 bg-[#FFFFFF] hover:bg-[#1877F2] rounded-[20px]" ></img>
                            </div>

                         </div>

                      </div>
{/* ------------------------------------------------------------onedic complt------------------------------------ */}
                               <div className=" ml-33 mt-4">
                                     <div className="w-50 text-white text-[22px] ml-8">Help-Support</div>
                                     <br/>
                                      <a href="" className="text-indigo-500 cursor-pointer hover:text-indigo-800">Rahulrokade603@gmail.com</a><br/>
                                    <a href="" className="text-indigo-500 hover:text-indigo-800 ml-12">7263943278</a>
                                 
                               </div>
{/* ------------------------------------------------------------twodiv---------------------------------------------- -*/}
                        
{/* botum main div end */}
                 </div>
          </div>


    </div>

    )
}
export default Footer;