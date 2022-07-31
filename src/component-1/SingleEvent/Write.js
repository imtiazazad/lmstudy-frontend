import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Write = () => {
    return (
        <div className='lg:mx-24 lg:my-24 m-5  text-[#140342] font-semibold'>
            <h5 className=' text-xl mb-4'>Write a Review</h5>
            <p className=' mb-2'>What is it like to Course?</p>
            <div className=' flex gap-3'>
                <AiFillStar className=' text-orange-500 text-lg' />
                <AiFillStar className=' text-orange-500 text-lg' />
                <AiFillStar className=' text-orange-500 text-lg' />
                <AiFillStar className=' text-orange-500 text-lg' />
                <AiFillStar className=' text-orange-500 text-lg' />
            </div>

            <form>
                <div>
                    <label className=' block mb-2 mt-8' htmlFor="title">Review Title</label>
                    <input type="text" name="title" id="" placeholder='Great courses' className=' border-2 border-slate-200 py-3 rounded pl-4 lg:w-1/2 w-full' />
                </div>

                <div>
                    <label className=' block mb-2 mt-8' htmlFor="message">Review Content</label>
                    <textarea type="text" name="title" id="" placeholder='message' className=' border-2 border-slate-200 py-3 rounded pl-4 lg:w-1/2 w-full h-36' />
                </div>

                <input className=' py-4 px-12 bg-[#6440FB] text-white hover:bg-white hover:border-2 hover:border-[#6440FB] hover:text-[#6440FB] rounded text-lg mt-8' type="submit" value="Submit Review" />
            </form>

        </div>
    );
};

export default Write;