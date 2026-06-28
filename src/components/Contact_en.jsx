import whatsapp from '../assets/whatsapp.png';

function Contact_en() {

    return (
        <div className="contact-block">
            <p>Call/Text now to schedule a free estimate!</p>
            <a className="contact-link" href="https://wa.me/8014207587">
                <img className="contact-whatsapp-icon" src={whatsapp} alt="WhatsApp icon" />
                <span className="contact-phone">(801) 420-7587</span>
            </a>
        </div>
    );

}

export default Contact_en;