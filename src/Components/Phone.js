import React, { useState } from 'react'
import './Phone.css';
export default function Phone() {
    const [num ,setnum] = useState();
    const submit = (e) =>{
        e.preventDefault();
        if(num.length !==10){
            alert('Number lenght should we 10')
        }

    }
    return (
        <div className='container'>
            <p>Inactive</p>
            <form className='form' onSubmit={(e) => submit(e)}>
                <p>Phone Number</p>
                    <select name="cars" id="cars"  disabled='true'>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                    </select>
                    <input type={'text'} disabled='true' placeholder={'Number'} value={9876543210}/>
            </form>
            <p>Active</p>
            <form className='form' onSubmit={(e) => submit(e)}>
                <p>Phone Number</p>
                    <select name="cars" id="cars"  disabled='true'>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                    </select>
                    <input type={'text'} placeholder={'Number'} value={9876543210} />
            </form>
            <p>Active with DropDown</p>
            <form className='form' onSubmit={(e) => submit(e)}>
                <p>Phone Number</p>
                    <select name="cars" id="cars">
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                        <option value="+91">+91 IN</option>
                    </select>
                    <input required type={'text'} placeholder={'Number'} onChange={(e) =>{
                        setnum(e.target.value)
                    }} />
            </form>
        </div>
    )
}
