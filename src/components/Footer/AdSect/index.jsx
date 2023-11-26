import React from 'react'

function AdSect() {
    return (
        <>
            <section id='adSect'>
                <div className="ads">
                    <img src="src/assets/images/dunkerlogoblack.png" alt="" />
                    <div className="aboutAd">
                        <i className="fa-solid fa-box"></i>
                        <h5>FREE SHIPPING & RETURN POLICY</h5>
                    </div>
                    <div className="aboutAd">
                        <i className="fa-solid fa-headphones"></i>
                        <h5>90-DAY WARRANTY</h5>
                    </div>
                    <div className="aboutAd">
                        <i className="fa-regular fa-credit-card"></i>
                        <h5>NEW PRODUCT OFFERINGS & DEALS</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdSect