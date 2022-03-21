import React from 'react';
import './css/about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Amr from '../assets/Amr.jpg';
const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="about__container container ">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Amr} alt="me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>
								Experience<small> 1 years learning</small>
							</h5>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>
								Clients<small> 10 Worldwide</small>
							</h5>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>
								Projects<small> 1 project</small>
							</h5>
						</article>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem qui ipsam nesciunt inventore
						impedit laborio
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
