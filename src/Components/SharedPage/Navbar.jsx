import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import '../SharedPage/Style.css'
import { Link } from 'react-scroll';
const Navbar = () => {

    const navbar = <>

        <Link to='courses' className='lg:w-[74px] lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)} >





            <button className="Normal_text_color text-[16px] font-medium  ">Home</button>


        </Link>

        <Link to='About' spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className='lg:w-[75px] lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)} >





            <button className="Normal_text_color text-[16px] font-medium  ">About</button>




        </Link>


        <Link to='Program' spy={true}
            smooth={true}
            offset={50}
            duration={500} className='lg:w-[93px] lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




            <button className="Normal_text_color text-[16px] font-medium  ">Program</button>


        </Link>
        <Link to='Universities' spy={true}
            smooth={true}
            offset={50}
            duration={500} className='lg:w-[119px] lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




            <button className="Normal_text_color text-[16px] font-medium  ">Universities</button>


        </Link>
        <div className=' lg:hidden block'>

            <div className='flex flex-col'>
                <Link className='lg:w-[108px]   lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




                    <button className="Normal_text_color text-[16px] font-medium text-[#002626] ">Sign In</button>


                </Link>

                <Link className='lg:w-[212px] Create lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




                    <button className=" text-[16px]  text-white font-semibold  "><span>Create free account</span></button>


                </Link>
            </div>


        </div>















    </>

    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='container mx-auto lg:py-[30px]  2xl:my-[52px] Responsive_navbar ' >
                <div className=''>

                    <div className='flex justify-between'>
                        <div>
                            <Link to='/' className='flex items-center gap-[10px] ite font-bold primaryText  text-[18px] lg:text-[30px]  '>
                                <img src={logo} className='w-[40px] h-[40px]' alt="" />
                                <p className='gradient_text'>E-care</p></Link>

                        </div>






                        {/* laptop show */}

                        <div className='flex '>
                            <div className="hidden lg:block">
                                <nav aria-label="">
                                    <ul className="flex items-center gap-[16px] ">
                                        {navbar}
                                    </ul>
                                </nav>
                            </div>
                            <div className=' lg:block hidden'>

                                <div className='flex'>
                                    <Link className='lg:w-[108px]   lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




                                        <button className="Normal_text_color text-[16px] font-medium text-[#002626] ">Sign In</button>


                                    </Link>

                                    <Link className='lg:w-[212px] Create lg:h-[48px] lg:flex justify-center items-center' onClick={() => setOpen(!open)}  >




                                        <button className=" text-[16px]  text-white font-semibold  "><span>Create free account</span></button>


                                    </Link>
                                </div>


                            </div>
                        </div>









                        {/* Mobile */}

                        <div className={`block bg-white lg:hidden   lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500  ${open ? "w-full  p-5" : "w-0"}`}>

                            <div className='flex  justify-between'>
                                <ul className='flex  flex-col  '>

                                    {navbar}



                                </ul>

                                <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] menuBar' />
                            </div>
                        </div>



                        <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] menuBar' />}</button>






                    </div>




                </div>


            </div>

        </>
    );
};

export default Navbar;