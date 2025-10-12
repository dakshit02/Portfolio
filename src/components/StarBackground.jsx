import React from 'react'
import { useState, useEffect } from 'react';

const StarBackground = () => {


    const [stars, setstars] = useState([]);//id ,size, x,y ,opacity ,animationDuration 
    const [Meteors, setMeteors] = useState([]);//id ,size, x,y ,delay ,animationDuration 

    useEffect(() => {

        generateStars();
        generateMeteor();

    }, [])


    const generateStars = () => {

        const NumberofStars = Math.floor(window.innerWidth * window.innerHeight / 10000)

        const newStars = []

        for (let i = 0; i < NumberofStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2

            })
        }

        setstars(newStars);

    };
    const generateMeteor = () => {

        const NumberofMeteors = 4

        const newMeteors = []

        for (let i = 0; i < NumberofMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3

            })
        }

        setMeteors(newMeteors);

    };
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {
                stars.map((value, index) => {
                    return (
                        <div key={index} className='star animate-pulse-subtle'
                            style={
                                {
                                    width: value.size + "px",
                                    height: value.size + "px",
                                    left: value.x + "%",
                                    top: value.y + "%",
                                    opacity: value.opacity,
                                    animationDuration: value.animationDuration + "s",
                                }
                            } />
                    );
                })
            }
            {
                Meteors.map((meteor, index) => {
                    return (
                        <div key={meteor.id} className='meteor animate-meteor'
                            style={
                                {
                                    width: meteor.size * 50 + "px",
                                    height: meteor.size + "px",
                                    left: meteor.x + "%",
                                    top: meteor.y + "%",
                                    animationDelay: meteor.delay,
                                    animationDuration: meteor.animationDuration + "s",
                                }
                            } />
                    );
                })
            }

        </div>
    )
}

export default StarBackground
