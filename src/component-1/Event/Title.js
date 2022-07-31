import React from 'react';

const Title = ({t,className}) => {
    return (
        <div className={` py-2 rounded text-white z-10 ${className}? ${className} }`}>
            <h4 className=' text-4xl mb-1'>{t.info}</h4>
            <p>{t.title}</p>
        </div>
    );
};

export default Title;