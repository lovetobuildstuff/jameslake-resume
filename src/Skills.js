import React, { Component } from 'react'
import resumeData from './data/resume';

import SkillsListing from './SkillsListing';

class Skills extends Component {
	render () {
		var skillsData = resumeData.industrySkills;
		return (
			<div id="industrySkills" className="section">
				<h2>Industry Skills</h2>
				<SkillsListing key={skillsData.contents[0].key} entry={skillsData.contents[0]} />
				<SkillsListing key={skillsData.contents[1].key} entry={skillsData.contents[1]} />
				<div className="double-group">
					<SkillsListing key={skillsData.contents[2].key} entry={skillsData.contents[2]} />
					<SkillsListing key={skillsData.contents[3].key} entry={skillsData.contents[3]} />
				</div>
			</div>
		);
	}
};

export default Skills;
