import React from 'react'

export default function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a Team Member</h2>
            </div>

            <div>
                <h3>Details:</h3>

                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <br />

                <label>Email:&nbsp;
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <br />

                <label>Role:&nbsp;
                    <select
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Web UI'>Web UI</option>
                        <option value='React 1'>React 1</option>
                        <option value='React 2'>React 2</option>
                    </select>
                    
                </label>
                <br />

                <button>Submit</button>

            </div>
        </form>
    )

}