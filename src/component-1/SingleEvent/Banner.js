import React, { useEffect, useRef, useState } from 'react';
import Title from '../Event/Title';
import { BsCalendar3 } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';

const Banner = () => {
    const [timerdays, setdays] = useState("00")
    const [timerhour, setHours] = useState("00")
    const [timermin, setMin] = useState("00")
    const [timersec, setSec] = useState("00")
    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date("August 25, 2022 00:00:00").getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const sec = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                //stop out timer
                clearInterval(interval.current)
            }
            else {
                //update timer
                setdays(days)
                setHours(hour)
                setMin(min)
                setSec(sec)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])

    const time = [
        { title: "Days", info: timerdays },
        { title: "Hours", info: timerhour },
        { title: "Minutes", info: timermin },
        { title: "Seconds", info: timersec },
    ]
    return (
        <div>
            <div style={{
                backgroundImage: "url(https://creativelayers.net/themes/educrat-html/img/event-single/bg.png)"
            }} className="bg-cover  bg-no-repeat lg:h-[500px] h-[60vh] lg:z-0 grid grid-cols-1  z-40">

                <div className=' text-white font-bold  tracking-widest leading-10 lg:mx-28 lg:my-40 mx-5 mt-10 lg:w-[600px]'>

                    <div className=' flex items-center gap-3 mb-4'>
                        <BsCalendar3 />
                        25 August, 2022

                        <IoLocationOutline />
                        London, UK
                    </div>
                  
                    <h2 className=' text-5xl '>Build Education Website Using WordPress</h2>

                    <div class="grid grid-cols-4 font-bold mt-5">
                        {
                            time.map((t, index) => <Title key={index} t={t} className={''}></Title>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;