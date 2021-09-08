import React from 'react'
import './contact.scss'
function Contact() {
    return (
        <div className="contact">
        <div className="contact__firstblock">
            <div className="contact__title">CONTACT</div>
            <div className="contact__firstblock__information">
            <div className="contact__icon_phone">
                    <img className="contact__icon_phone__icon" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/phone-icon-18-256.png" alt="" srcset="" />
                <div className="contact__icon_phone__phone">+216 28 862 118</div>
            </div>
            <div className="contact__icon_address">
                <img className="contact__icon_address__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaa7mwXmKnD_lzvuwrUcRCkKf4ux_HxPhMw&usqp=CAU" alt="" srcset="" />
                <div className="contact__icon_address__address">08, rue de cuivre, Z.I Sidi Douad, La Marsa, Tunis, Tunisie</div>
            </div>
            <div className="contact__icon_mail">
                <img className="contact__icon_mail__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaa7mwXmKnD_lzvuwrUcRCkKf4ux_HxPhMw&usqp=CAU" alt="" srcset="" />

                <div className="contact__icon_mail__mail">contact@fyp.tn</div>
            </div>
            </div>
        </div>
        <iframe className="contact__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204221.3005652999!2d10.07465201438129!3d36.89135728253989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5ed9c8adfe1%3A0x74a630a8c8f30b51!2sfyp.tn!5e0!3m2!1sfr!2stn!4v1629899921847!5m2!1sfr!2stn" width="1140" height="410" frameborder="0"  style={{'border':'0'}}  allowfullscreen=""></iframe>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204221.3005652999!2d10.07465201438129!3d36.89135728253989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b5ed9c8adfe1%3A0x74a630a8c8f30b51!2sfyp.tn!5e0!3m2!1sfr!2stn!4v1629899921847!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
    </div>
    )
}

export default Contact
