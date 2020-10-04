import React, {Component} from "react";
import resumeData from './data/resume';

import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Volunteer from './Volunteer';

class Resume extends Component {
	render () {
		return (
			<div>
				<Header entry={resumeData.info} />
				<div className="inner-content">
					<Skills />
					<Experience />
					<Education />
					<Volunteer />
				</div>
			</div>
		);
	}
}

export default Resume;

