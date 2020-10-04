import React from 'react'
import bunnyPic from "./images/bunny.jpg";

const Header = (props) => (
	<div className="header">
		<div className="me"><h1>{props.entry.name}</h1></div>

		<div className="contact"><a href={'https://www.' + props.entry.website} target="_blank" rel="noopener noreferrer">{props.entry.website}</a></div>

		<div className="pic"><img src={bunnyPic} alt="bunny" /></div>
		<div className="summary">{props.entry.summary}</div>
	</div>
);
/* <a href="mailto:{props.entry.email}">{props.entry.email}</a> */
export default Header;
