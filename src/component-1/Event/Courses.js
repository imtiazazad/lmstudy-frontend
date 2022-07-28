import React from 'react';
import Course from './Course';

const Courses = () => {
    const courses = [
        {
            id: 1,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-16-new-768x450.jpg",
            name: "College Redesign In Action",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "27",
            month: "July"
        },
        {
            id: 2,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-07-768x450.jpg",
            name: "NPEA National Conference",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "09",
            month: "Oct"
        },
        {
            id: 3,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-25-new-768x450.jpg",
            name: "Reagan Institute Summit",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "09 ",
            month: "April"
        },
        {
            id: 4,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-05-768x450.jpg",
            name: "The Forum’s Conference",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "09 ",
            month: "March"
        },
        {
            id: 5,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-06-768x450.jpg",
            name: "School Redesign In Action",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "08 ",
            month: "June"
        },
        {
            id: 6,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-02-768x450.jpg",
            name: "Innovations In Education",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "08 ",
            month: "April"
        },
        {
            id: 7,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-04-768x450.jpg",
            name: "Diversity Abroad Conference",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "08",
            month: " March"
        },
        {
            id: 8,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/New-Course-01-768x450.jpg",
            name: "National Youth Conference",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "07 ",
            month: "Feb"
        },
        {
            id: 9,
            img: "https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Course-16-new-768x450.jpg",
            name: "Crisis In High Education",
            description: "Lorem ipsum dolor lipsum er sit amet, consectetur adipiscing",
            date: "07 ",
            month: "Jan"
        },
    ]
    return (
        <div className='lg:mx-40 my-20 mx-5'>
            <div>
                <h2 className=' text-4xl mb-4 font-bold'>Professional Online Events</h2>
                <p className=' mb-10 lg:w-1/2'>EduSphere organizes educational fairs, fests and exhibitions annually for all aspiring students that want to enroll in a premier university or college.</p>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;