import React from 'react';
import { NavLink } from '../util/NavLink';
import Logo from '../util/Logo';
import Phone from '../util/Phone';
import { routes } from '../../service/routes';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<Phone />
					<Logo />
				</div>
				<div className="right">
					<nav>
						{routes.map((link, index) => (
							<NavLink key={index} href={`/${link.href}`} className="nav_link_item">
								{link.title}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
