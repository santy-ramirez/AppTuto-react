import React from 'react';

function FormTutorial(props) {
    return (
        <div>
            <h1>add tutorial</h1>
            <div className='form-group'>
                <label>title</label>
                <input
                    className='form-control'
                    type="text"
                    name="title" />
                <label>description</label>
                <input
                    className='form-control'
                    type="text"
                    name="description" />
                <button className='btn btn-success' >save</button>
            </div>
        </div>
    );
}

export default FormTutorial;