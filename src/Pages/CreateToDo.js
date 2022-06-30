import React, { useState } from 'react';

const CreateToDo = () => {

    const [first, setFirst] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        console.log('form submitted ✅');
    };

    return (
        <div className='py-10'>
            <form className='flex justify-center gap-2' onSubmit={handleSubmit}>
                <input
                    className='input input-bordered w-full max-w-xs'
                    type="text"
                    id="first"
                    name="first"
                    value={first}
                    onChange={event => setFirst(event.target.value)}
                    autoComplete="off"
                />
                <button type="submit" value='Submit' className='btn btn-primary'>Add Task</button>
            </form>
        </div>
    );
};

export default CreateToDo;