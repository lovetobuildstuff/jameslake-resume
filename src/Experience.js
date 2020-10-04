import React, { Component } from 'react'
import resumeData from './data/resume';

import logoEY from "./images/logo-EY.svg";
import logoKO from "./images/logo-KO.svg";
import logoSPC from "./images/logo-SPC.png";
import logo22 from "./images/logo-22.png";
import logoBBDO from "./images/logo-BBDO.svg";
import logoEW from "./images/logo-EW.png";

import ExperienceListing from './ExperienceListing';

class Experience extends Component {
	render () {
		var expData = resumeData.experience;
		return (

			<div id="workExperience" className="section">
				<h2>{expData.sectionTitle}</h2>

				<ExperienceListing key={expData.contents[0].key} logo={logoEY} entry={expData.contents[0]} />
				<ExperienceListing key={expData.contents[1].key} logo={logoKO} entry={expData.contents[1]} />
				<ExperienceListing key={expData.contents[2].key} logo={logoSPC} entry={expData.contents[2]} />
				<ExperienceListing key={expData.contents[3].key} logo={logo22} entry={expData.contents[3]} />
				<ExperienceListing key={expData.contents[4].key} logo={logoBBDO} entry={expData.contents[4]} />
				<ExperienceListing key={expData.contents[5].key} logo={logoEW} entry={expData.contents[5]} />

			</div>

		);
	}
};

export default Experience;
