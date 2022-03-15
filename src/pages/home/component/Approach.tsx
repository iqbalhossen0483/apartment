import { useState } from "react";

const Approach = () => {
    const [doAnimate, setDoanimate] = useState(false);
    const item = document.querySelector(".approach");
    const observer = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) {
            setDoanimate(true);
        }
        else {
            setDoanimate(false);
        }
    });
    
    if (item) {
        observer.observe(item);
    }
    return (
        <div className={`approach ${doAnimate && "approach-animate"}`}>
            <div className="images">
                <img
                    className="h-full"
                    src="https://i.ibb.co/s1v9hyC/Layer-24-720x400.jpg"
                    alt=""
                />
                <img
                    className="float-img"
                    src="https://i.ibb.co/QCybVVM/shutterstock-128098442-720x400.jpg"
                    alt=""
                />
            </div>
            <div>
                <h1 className="mt-5 md:mt-0">
                    Apartment With Different Approach
                </h1>
                <p className='text-xl text-justify my-5 lg:my-16'>
                    A perfect oasis for business executives and leisure travelers seeking both short- and long-term accommodation, our studio apartment is tastefully furnished and appointed to ensure ultimate comfort.From the rooftop terrace, down to the first floor gym, every detail of eight floors provides amenities filled with convenience, class
                </p>
                <button className='property-btn'>
                    - Propertys
                </button>
            </div>
        </div>
    );
}

export default Approach