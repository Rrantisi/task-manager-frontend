import React from 'react';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='text-animation' style={{ marginTop: 100 }}> 
            <h2>Welcome to track<span className='text-success'>.</span><span className='text-warning'>.</span><span className='text-danger'>.</span>it</h2>
        </div>
    )
}