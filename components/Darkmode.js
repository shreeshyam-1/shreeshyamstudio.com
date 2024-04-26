"use client"
import React from 'react'

const Darkmode = ({ children }) => {
    return (
        <div className=' dark:bg-black' >
            {children}
        </div>
    )
}

export default Darkmode