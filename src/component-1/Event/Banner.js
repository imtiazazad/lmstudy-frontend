import React, { useEffect, useRef, useState } from 'react';
import '../Contact/style.css'

const Banner = () => {
    const [timerdays, setdays] = useState("00")
    const [timerhour, setHours] = useState("00")
    const [timermin, setMin] = useState("00")
    const [timersec, setSec] = useState("00")
    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date("August 31, 2022 00:00:00").getTime()
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
                backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/07/event-banner.jpg)"
            }} className="bg-cover  bg-no-repeat lg:h-[500px] h-[60vh] lg:z-0 grid grid-cols-1 lg:grid-cols-2 z-40">

                <div className=' text-white font-bold  tracking-widest leading-10 lg:mx-28 lg:my-40 mx-5 mt-10'>
                    <h6>ENJOY WITH</h6>
                    <h2 className=' text-5xl '>Great Upcoming Events For Our Institute</h2>
                </div>

                <div class="grid grid-cols-4 gap-5 text-center lg:my-52 lg:mx-28 mx-5 my-20">
                    {
                        time.map((t, index) => <div key={index} class=" bg-style font-semibold py-2 rounded text-white z-10">
                            <h4 className=' text-4xl mb-3'>{t.info}</h4>
                            <p>{t.title}</p>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Banner;