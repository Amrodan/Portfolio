import React, { useRef } from 'react';
import './css/contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const forme = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_shv7aah', 'template_6tvdy9c', forme.current, 'Bunai2OvrC9k4X6Te');
		e.target.reset();
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact ME</h2>
			<div className="container_contact__contaienr">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>amrdandashli@gmail.com</h5>
						<a href="mailto:amrdandashli@gmail.com" rel="noreferrer" target="_blank">
							Send a Message
						</a>
					</article>

					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>egatortutorials</h5>
						<a href="https://m.me/dandashi1" rel="noreferrer" target="_blank">
							Send a Message
						</a>
					</article>

					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>0096170886143</h5>
						<a href="https://api.whatsapp.com/send?phone=0096170886143" rel="noreferrer" target="_blank">
							Send a Message
						</a>
					</article>
				</div>
				<form ref={forme} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your full Name" required />
					<input type="email" name="email" placeholder="Your email" required />
					<textarea name="message" placeholder="Your message" rows="7" required />
					<button type="submit" className="btn btn-rimary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
