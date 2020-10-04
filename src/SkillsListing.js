import React from 'react';

const SkillsListing = (props) => (
<div id={props.entry.key} className="group">
	<h3>{props.entry.groupTitle}</h3>
	<ul>
		{
			props.entry.skills.map((skill) => (
				<li>{skill}</li>
			))
		}
	</ul>
</div>

);

export default SkillsListing;
