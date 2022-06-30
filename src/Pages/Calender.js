import React, { useState } from 'react';
import Todo from '../assets/list-green-stationery.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const Calender = () => {

    const [date, setDate] = useState(new Date)

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img className='w-96 flex-1 rounded-md' src={Todo} alt="" />
                <div className='flex-1'>
                <DayPicker 
                
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                <p className='font-bold'>Your Selected Date: {format(date, 'PP')}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Calender;