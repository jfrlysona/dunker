import React from 'react'
import './footer.css'
import AdSect from './AdSect/index'
import FooterMenu from './FooterMenu/index'
import ContactSect from './ContactSect/index'

function Footer() {
    return (
        <footer>
            <AdSect></AdSect>
            <FooterMenu></FooterMenu>
            <ContactSect></ContactSect>
            <section id='copyright'>
                <p>© 2023 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
            </section>
        </footer>
    )
}

export default Footer
