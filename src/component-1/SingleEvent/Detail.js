import React from 'react';
import { GrFormCheckmark } from 'react-icons/gr';

const Detail = () => {
    const data = [
        { name: "Become a UX designer." },
        { name: "You will be able to add UX designer to your CV." },
        { name: "Become a UI designer." },
        { name: "Build & test a full website design." },
        { name: "Create your first UX brief & persona." },
        { name: "How to use premade UI kits." },
        { name: "Create quick wireframes." },
        { name: "Downloadable exercise files." },
        { name: "Build a UX project from beginning to end." },
        { name: "Learn to design websites & mobile phone apps." },
        { name: "All the techniques used by UX professionals." },
        { name: "You will be able to talk correctly with other UX design." },
    ]
    const speakers = [
        {
            name: "Jerome Bell",
            img: "https://creativelayers.net/themes/educrat-html/img/speakers/1.png",
            title: "Marketing Coordinator"
        },
        {
            name: "Bessie Cooper",
            img: "https://creativelayers.net/themes/educrat-html/img/speakers/2.png",
            title: "President of Sales"
        },
        {
            name: "Kristin Watson",
            img: "https://creativelayers.net/themes/educrat-html/img/speakers/3.png",
            title: "Nursing Assistant"
        },
        {
            name: "Ronald Richards",
            img: "https://creativelayers.net/themes/educrat-html/img/speakers/4.png",
            title: "Dog Trainer"
        },
    ]
    return (
        <div className='lg:mx-24 lg:my-24 m-5 text-[#140340]'>
            <h4 className=' font-bold text-2xl mb-8'>What you'll learn</h4>
            <div className=' lg:flex lg:gap-14'>
                <div>
                    {
                        data.slice(0, 6).map((d, index) => <div className=' flex items-center gap-1 mb-4' key={index}>
                            <GrFormCheckmark />
                            {d.name}
                        </div>)
                    }
                </div>
                <div>
                    {
                        data.slice(6, 12).map((d, index) => <div className=' flex items-center gap-1 mb-4' key={index}>
                            <GrFormCheckmark />
                            {d.name}
                        </div>)
                    }
                </div>

            </div>

            <h4 className=' font-bold text-2xl mb-4 mt-10'>Event Content</h4>
            <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</li>
            <li className=' my-4'>No previous design experience is needed.</li>
            <li>No previous Adobe XD skills are needed.</li>

            <h4 className=' font-bold text-2xl mb-6 mt-20'>Our Speakers</h4>
            <div className=' lg:flex gap-16'>
                {
                    speakers.map((speaker, index) => <div key={index} className=' text-center'>
                        <div class="avatar">
                            <div class="w-40 rounded-full">
                                <img src={speaker.img} />
                            </div>
                        </div>
                        <div>
                        <h5 className=' text-lg font-bold'>{speaker.name}</h5>
                        <p>{speaker.title}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Detail;