import whatsapp from '../assets/whatsapp.png';

function Contacto_es() {
    return (
        <div className="contact-block">
            <p>¡Llámanos o envíanos un mensaje de texto para agendar una cotización gratis!</p>
            <a className="contact-link" href="https://wa.me/18014207587">
                <img className="contact-whatsapp-icon" src={whatsapp} alt="Ícono de WhatsApp" />
                <span className="contact-phone">(801) 420-7587</span>
            </a>
        </div>
    );
}

export default Contacto_es;