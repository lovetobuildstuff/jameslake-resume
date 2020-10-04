import React, { Component } from 'react'
import resumeData from './data/resume';

import logoAIA from "./images/logo-AIA.svg";
import logoCU from "./images/logo-CU.svg";

import EducationListing from './EducationListing';

class Education extends Component {
	render () {
		var eduData = resumeData.education;
		return (
			<div id="education" className="section">
				<h2>Education</h2>
				<EducationListing key={eduData.contents[0].key} logo={logoAIA} entry={eduData.contents[0]} />
				<EducationListing key={eduData.contents[1].key} logo={logoCU} entry={eduData.contents[1]} />
			</div>
		);
	}
};

export default Education;
