import React from 'react'

const AboutComponent = () => {
    return (
        <div className='about'>
            <img
                className='z-0'
                src="https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/modern-house-exterior-1025x1536.jpg"
                alt=""
            />
            <div className='text-xl'>
                <h1 className='mt-5 md:mt-0'>
                    Something About Our Company
                </h1>
                <p className='text-justify mt-5'>
                    This splendid 170 sq m apartment that we offer for rent in the heart of Milan, in Corso Buenos Aires, is located on the third floor of a building with caretaker and lift, a stone’s throw from the Lima and Porta Venezia metro stops, in one of the most famous Milanese shopping streets.
                </p>
                <div className='grid grid-cols-3 gap-1 text-center my-14'>
                    <div>
                        <h2 className='text-6xl'>15+</h2>
                        <p>Years of Expirience</p>
                    </div>
                    <div>
                        <h2 className='text-6xl'>23</h2>
                        <p>Qualificated Realtors</p>
                    </div>
                    <div>
                        <h2 className='text-6xl'>849</h2>
                        <p>Best Propertys</p>
                    </div>
                </div>
                <img
                    src="https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/contemporary-design-living-houses-modern-luxury-apartments-buildings--1024x682.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default AboutComponent