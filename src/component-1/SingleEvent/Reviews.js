import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            img: "https://creativelayers.net/themes/educrat-html/img/avatars/1.png",
            name: "Ali Tufan",
            time: "3 Days ago",
            title: "The best LMS Design",
            des: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
        },
        {
            img: "https://creativelayers.net/themes/educrat-html/img/avatars/1.png",
            name: "Ali Tufan",
            time: "3 Days ago",
            title: "The best LMS Design",
            des: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much.",
        },
    ]
    return (
        <div className='lg:mx-24 lg:my-24 m-5'>
            <h4 className=' font-bold text-2xl mb-8'>Reviews</h4>
            <div>
                {
                    reviews.map((review, index) => <div className='flex gap-4 my-10' key={index}>
                        <div class="avatar">
                            <div class="w-16 h-16 rounded-full">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <span className=' flex gap-2 items-center mb-3'>
                                <h5 className=' font-bold text-[#140340] text-xl'>{review.name}</h5>
                                <p className=' text-xs'>{review.time}</p>
                            </span>
                            <h5 className=' font-semibold text-[#140340]'>{review.title}</h5>
                            <p className='lg:w-1/2 my-3'>{review.des}</p>
                            <span className=' flex gap-4 text-sm items-center'>
                                <p className=' text-[#6440FB]'>Was this review helpful?</p>
                                <button className='bg-[#6440FB] text-white rounded py-1 px-2'>Yes</button>

                                <button className='bg-[#E3EDFD]  rounded py-1 px-2 text-[#6440FB]'>No</button>
                            </span>
                        </div>
                        <hr />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;