import React from 'react';

const EducationListing = (props) => (
<div className="edu-info group">
	<div className="logo"><img src={props.logo} alt="edu-logo" /></div>
	<p className="school">{props.entry.institution}</p>
	<p className="degree">{props.entry.degree}</p>
	<p className="location">{props.entry.location}</p>
	<p className="dates">{props.entry.from} - {props.entry.until}</p>
</div>
);

export default EducationListing;
