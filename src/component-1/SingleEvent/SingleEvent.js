import React from 'react';
import About from './About';
import Banner from './Banner';
import Detail from './Detail';
import Reviews from './Reviews';
import Write from './Write';

const SingleEvent = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Detail></Detail>
            <Reviews></Reviews>
            <Write></Write>
        </div>
    );
};

export default SingleEvent;