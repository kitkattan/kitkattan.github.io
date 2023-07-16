import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import RedBackground from '../images/backgrounds/main-red.svg';
import Image from 'next/image';

const Home = () => {
    return(
        <div className ='bg-white'>
            <Header background = "#94B4C6" text="#FFC977" />
            <div className='h-[60vh]'>
                <h1 className='text-black text-5xl p-20'> hello my name is kitkat :D </h1>
            </div>
            <div style={{
                        position: 'relative',
                    }}>
                <Image 
                    src={RedBackground}
                    quality = {100}
                    
                    alt='red background'
                    
                />
                <div className = 'top-1/2' style = {{position: 'absolute',}}>
                    <div className="float-left w-1/2">
                        <p> hey</p>
                    </div>
                    <div className = 'float-right w-1/2'>
                        <p> hewwo </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;