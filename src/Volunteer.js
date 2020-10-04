import React, { Component } from 'react'
import resumeData from './data/resume';

import logoJH from "./images/logo-JH.jpg";
import logoBTRNC from "./images/logo-BTRNC.png";
import logoARC from "./images/logo-ARC.png";

import VolunteerListing from './VolunteerListing';

class Volunteer extends Component {
	render () {
		var volData = resumeData.volunteer;
		return (
			<div id="volunteer" className="section">
				<h2>Volunteer Work</h2>

				<VolunteerListing key={volData.contents[0].key} logo={logoJH} entry={volData.contents[0]} />
				<VolunteerListing key={volData.contents[1].key} logo={logoBTRNC} entry={volData.contents[1]} />
				<VolunteerListing key={volData.contents[2].key} logo={logoARC} entry={volData.contents[2]} />

			</div>
		);
	}
};

export default Volunteer;


