import React from 'react';
import './css/testimonials.css';
import AVTR1 from '../assets/AVTR1.png';
import AVTR2 from '../assets/AVTR2.jpg';
import AVTR3 from '../assets/AVTR3.jpg';
import AVTR4 from '../assets/AVTR4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
	{
		avatar: AVTR1,
		name: 'Tina Snow',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem molestias possimus.'
	},
	{
		avatar: AVTR2,
		name: 'Ernest Dan',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem molestias possimus.'
	},
	{
		avatar: AVTR3,
		name: 'Kwane Despite',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem molestias possimus.'
	},
	{
		avatar: AVTR4,
		name: 'Ernest Dan',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem molestias possimus.'
	}
];
const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Review From clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[ Pagination ]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="Avatar1" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
