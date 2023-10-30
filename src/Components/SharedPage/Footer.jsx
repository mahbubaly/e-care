import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { AiFillGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import google from '../../assets/Images/google-play.png'
import apple from '../../assets/Images/Apple Icon.png'
import logo from '../../assets/Images/logo.png'
import socialLogo from '../../assets/Images/Social.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[#101828] flex justify-center mt-[70px] lg:mt-[170px]  items-center'>
                <div className='container  mx-auto Responsive_navbar   pt-[90px]'>
                    <div className='lg:flex justify-between'>
                        <div className='lg:w-[334px]'>
                            <div>
                                <Link to='/' className='flex items-center gap-[10px] ite font-bold primaryText  text-[18px] lg:text-[30px]  '>
                                    <img src={logo} className='w-[40px] h-[40px]' alt="" />
                                    <p className='gradient_text'>E-care</p></Link>

                            </div>

                            <p className='lg:text-[16px] text-[14px]  text-[#E1E1E1] my-[30px] '>Learn anything from home with experts. Learn freelancing today. Quality Courses At Affordable Prices.</p>


                            {/* Laptop show */}

                            <div className=''>



                                <div className='flex gap-[30px]'>
                                    <div className='w-[155px] GooApp flex gap-[10px] h-[54px] justify-center items-center'>
                                        <img src={google} className='w-[24px] h-[24px]' alt="" />
                                        <div>
                                            <p className='text-[12px]'>Get it on </p>
                                            <p className='text-[14px] font-semibold'>Google play </p>
                                        </div>

                                    </div>

                                    <div className='w-[156px] GooApp flex gap-[10px] h-[54px] justify-center items-center'>
                                        <img src={apple} className='w-[24px] h-[24px]' alt="" />
                                        <div>
                                            <p className='text-[12px]'>Available on the</p>
                                            <p className='text-[14px] font-semibold'>Apple Store</p>
                                        </div>

                                    </div>
                                </div>

                            </div>




                        </div>

                        <div className='lg:flex gap-[100px]'>
                            <div className='lg:mt-0 mt-[40px]'>
                                <h2 className='text-[18px] text-[#E1E1E1] font-semibold'>Product</h2>
                                <Link className='text-[16px] text-primary lg:mt-[20px] mt-[14px] block'>Overview</Link>
                                <Link className='text-[16px] text-primary my-[10px] lg:my-[16px] block'>Features</Link>
                                <Link className='text-[16px] text-primary block'>Solutions</Link>
                                <Link className='text-[16px] text-primary mt-[10px] lg:mt-[16px] block'>Tutorials</Link>

                            </div>
                            <div className='lg:my-0 my-[30px]'>
                                <h2 className='text-[18px] text-[#E1E1E1] font-semibold'>Company</h2>
                                <Link className='text-[16px] text-primary lg:mt-[20px] mt-[14px] block'>About us</Link>
                                <Link className='text-[16px] text-primary my-[10px] lg:my-[16px] block'>Careers</Link>
                                <Link className='text-[16px] text-primary block'>Press</Link>
                                <Link className='text-[16px] text-primary mt-[10px] lg:mt-[16px] block'>News</Link>

                            </div>
                            <div>
                                <h2 className='text-[18px] text-[#E1E1E1] font-semibold'>Social</h2>
                                <Link className='text-[16px] text-primary lg:mt-[20px] mt-[14px] block'>Twitter</Link>
                                <Link className='text-[16px] text-primary my-[10px] lg:my-[16px] block'>LinkedIn</Link>
                                <Link className='text-[16px] text-primary block'>Facebook</Link>
                                <Link className='text-[16px] text-primary mt-[10px] lg:mt-[16px] block'>Instagram</Link>

                            </div>
                            <div>
                                <h2 className='text-[18px] text-[#E1E1E1] font-semibold'>Legal</h2>
                                <Link className='text-[16px] text-primary lg:mt-[20px] mt-[14px] block'>Terms</Link>
                                <Link className='text-[16px] text-primary my-[10px] lg:my-[16px] block'>Privacy</Link>
                                <Link className='text-[16px] text-primary block'>Cookies</Link>
                                <Link className='text-[16px] text-primary mt-[10px] lg:mt-[16px] block'>Contact</Link>

                            </div>



                        </div>
                    </div>



                    {/* mobile show */}






                    <div className='flex justify-between pb-[48px] items-center mt-[102px]'>
                        <p className='text-center text-[16px] text-primary  '>© 2023 E-care. All rights reserved.
                        </p>


                        <div className='  flex gap-[23px]'>
                            <Link className='w-[36px] h-[36px] flex bg-primary  justify-center items-center border-[1px] border-black hover:border-primary  rounded-[50%] '>
                                <AiOutlineTwitter className='w-[20px] text-white h-[20px]' />
                            </Link>

                            <Link className='w-[36px] flex bg-primary justify-center items-center border-[1px] border-black hover:border-primary h-[36px] rounded-[50%] '>
                                <BiLogoLinkedin className='w-[20px] text-white h-[20px]' />
                            </Link>



                            <Link className='w-[36px] flex justify-center items-center border-[1px] border-primary hover:border-primary h-[36px] bg-primary rounded-[50%] text-white'>
                                <BiLogoFacebook className='w-[24px] text-white h-[24px]' />
                            </Link>
                            
                            <Link className='w-[36px] flex justify-center items-center border-[1px] border-primary hover:border-primary h-[36px] bg-primary rounded-[50%] text-white'>
                                <AiFillGithub className='w-[24px] text-white h-[24px]' />
                            </Link>





                            <Link className='w-[36px] flex bg-primary justify-center items-center border-[1px] border-black hover:border-primary h-[36px] rounded-[50%] '>
                                <AiOutlineInstagram className='w-[20px] text-white h-[20px]' />
                            </Link>

                            <Link className='w-[36px] flex bg-primary justify-center items-center border-[1px] border-black hover:border-primary h-[36px] rounded-[50%] '>
                                <img src={socialLogo} className='w-[20px] text-white h-[20px]' />
                            </Link>
                        </div>


                    </div>

                </div>
            </div>


        </>
    );
};

export default Footer;