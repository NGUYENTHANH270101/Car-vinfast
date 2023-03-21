import React from "react";
const Cars = () => {
    return (
        <>
            <div className="main__container">
                <video autoPlay loop muted id='video'>
                    <source src="https://storage.googleapis.com/vinfast-data-01/VinFast-VF8-VF9-electric-SUV-cars.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )

}

export default Cars