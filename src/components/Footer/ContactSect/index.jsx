import React from 'react'

function ContactSect() {
    return (
        <>
            <section id='contactSect'>
                <div className="emailSect">
                    <h5>NEWSLETTER</h5>
                    <p>Dunker has all of the best products
                        from all of the top brands.</p>
                    <div className="textBox">
                        <input type="text" placeholder='YOUR EMAIL' />
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="contactBoxes">
                    <div className="contactBox">
                        <h5>NEW YORK</h5>
                        <p>7(381)157-09-479</p>
                        <p>45 GRAND BENTRAL TERIMAN
                            NEW YORK, NY</p>
                        <span>MON-SAT: 09:00-19:00</span>
                    </div>
                    <div className="contactBox">
                        <h5>LOS ANGELES</h5>
                        <p>7(382)157-09-474</p>
                        <p>90A TOLBUHINA LOREM ORIGINAL
                            LOS ANGELES, CA 200153</p>
                        <span>MON-SAT: 09:00-19:00</span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactSect