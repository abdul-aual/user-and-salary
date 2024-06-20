import React, { useState } from 'react';
import calculation from './calculation.css';
const Calculation = (props) => {
    const [num, setNum]=useState('');
    const{id,name,image,phone,email,salary} = props.allDetails;
    const showMobile=()=>{
        setNum(phone);
    }
    return (
        <div>
             <div>
            <div className='image-and-details-container'>
                    <div className='hello'>
                        <div className='image-div'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className='hello2'>
                        <div className='details-div'>
                            <h2>{name}</h2>
                            <p>Phone: {num}</p>
                            <p>Email: {email}</p>
                            <h4>Salary: ${salary}</h4>
                            <button onClick={showMobile} >Show Phone Number</button>
                            <button onClick={()=>props.handleAddCart(props.allDetails)} >Add User</button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Calculation;