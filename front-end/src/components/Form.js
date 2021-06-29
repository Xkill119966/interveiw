import React, { useState } from 'react'


export default function Form({}) {
    const initilValue = {
        name: '',
        age: '',
        gender: ''

    }
    const [data, setData] = useState(initilValue)
    const submitForm = (e) => {
        e.preventDefault()
        setData(initilValue)
    }

    return (
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

            <input type="radio" value="M" name="gender" checked={data.gender === 'M'} onChange={e => setData({ ...data, gender: e.target.value })} /> Male
            <input type="radio" value="F" name="gender" checked={data.gender === 'F'} onChange={e => setData({ ...data, gender: e.target.value })} /> Female
            <br />
            <button className="btn btn-default" type="submit">
                Submit
        </button>
        </form>
    )
}