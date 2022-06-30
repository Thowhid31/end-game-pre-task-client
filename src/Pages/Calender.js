import React from 'react';
import Todo from '../assets/list-green-stationery.jpg';

const Calender = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img className='w-96 flex-1 rounded-md' src={Todo} alt="" />
                <div className='flex-1'>
                    
                </div>
            </div>
        </div>
    );
};

export default Calender;