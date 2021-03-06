import React, { useState } from 'react'
import './Form.css'
export default function Form({ addData }) {
    const initilValue = {
        name: '',
        age: '',
        gender: ''

    }
    const [data, setData] = useState(initilValue)
    const submitForm = (e) => {
        e.preventDefault()
        setData(initilValue)
        addData(data)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                />
                <br />
                <label htmlFor="name">Age</label>
                <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={e => setData({ ...data, age: e.target.value })}
                />
                <br />

                <label htmlFor="gender">Gender</label>
                <input type="radio" value="M" name="gender" checked={data.gender === 'M'} onChange={e => setData({ ...data, gender: e.target.value })} /> Male
                <input type="radio" value="F" name="gender" checked={data.gender === 'F'} onChange={e => setData({ ...data, gender: e.target.value })} /> Female
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}