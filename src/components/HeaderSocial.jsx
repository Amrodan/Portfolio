import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
const HeaderSocial = () => {
	return (
		<div className="header__social">
			<a href="https://linkedin.com" rel="noreferrer" target="_blank">
				<BsLinkedin />
			</a>
			<a href="https://github.com" rel="noreferrer" target="_blank">
				<FaGithub />
			</a>

			<a href="https://twitter.com" rel="noreferrer" target="_blank">
				<BsTwitter />
			</a>
		</div>
	);
};

export default HeaderSocial;
