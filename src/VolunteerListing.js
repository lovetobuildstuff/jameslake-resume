import React from 'react';

const VolunteerListing = (props) => (
	<div className="vol-info group">
		<div className="logo"><a href={props.entry.website} target="_blank" rel="noopener noreferrer"><img src={props.logo} alt="vol-logo" /></a></div>
		<p className="org">{props.entry.organization}</p>
		<p className="summary">{props.entry.summary}</p>
		<p className="dates">{props.entry.from} - {props.entry.until}</p>
		<p className="site"><a href={props.entry.website} target="_blank" rel="noopener noreferrer">{props.entry.website}</a></p>
	</div>
);

export default VolunteerListing;
