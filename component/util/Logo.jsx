import Link from 'next/link';
import {company }from '../../data'
const Logo = () => {
	return (
		<div className="logo">
			<Link className="nav_link_item logo" href="/">
				{`${company.siteDetails.logoText}`}
			</Link>
		</div>
	);
};
export default Logo;
