import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const About = () => {
    return (
        <div className='lg:flex gap-10 lg:mx-24 lg:my-24 my-5 p-5 text-[#222222]'>
            <div className='lg:w-[800px]'>
                <h4 className=' text-lg uppercase font-bold text-[#140340] mb-3'>About The Event</h4>
                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>

                <p className=' my-5'>This course is aimed at people interested in UI/UX Design. We’ll start from the very beginning and work all the way through, step by step. If you already have some UI/UX Design experience but want to get up to speed using Adobe XD then this course is perfect for you too!
                </p>

                <p>First, we will go over the differences between UX and UI Design. We will look at what our brief for this real-world project is, then we will learn about low-fidelity wireframes and how to make use of existing UI design kits.</p>

                <p className='text-[#015abd] underline mt-5'>Show more</p>
            </div>
            <div className=' px-12 pt-10 shadow-lg  lg:mt-[-210px] lg:z-40 bg-white lg:w-[420px] h-[360px]'>

                <div className=' flex items-start justify-between font-semibold mb-10'>
                    <h3 className=' text-2xl'>$96.00</h3>
                    <div className=' flex gap-3 items-center'>
                        <p className=' line-through'>$76.00</p>
                        <p className='bg-[#00FF84] py-1 px-3 rounded'>91% off</p>
                    </div>
                </div>

                <div>
                    <div className=' flex items-center justify-between mb-3 '>
                        <div className=' flex items-center gap-2'>
                            <IoLocationOutline />
                            <p>Total Slot</p>
                        </div>
                        <p>587</p>
                    </div>
                    <hr />

                    <div className=' flex items-center justify-between mt-3 mb-10'>
                        <div className=' flex items-center gap-2'>
                            <IoLocationOutline />
                            <p>Booked Slot</p>
                        </div>
                        <p>987</p>
                    </div>
                </div>
                <input className=' block py-3 px-7 bg-[#6440FB] text-white hover:bg-white hover:border-2 hover:border-[#6440FB] hover:text-[#6440FB] rounded w-full uppercase my-4' type="submit" value="Book now" />

                <div className=' flex items-center justify-center gap-5 text-2xl my-10 cursor-pointer'>
                    <BsFacebook />
                    <AiFillTwitterCircle />
                    <FaInstagramSquare />
                    <AiFillLinkedin />
                </div>
            </div>
        </div>
    );
};

export default About;