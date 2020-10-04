import React from 'react';

const ExperienceListing = (props) => (
	<div className="work-entry group">
		<div className="work-info">
			<div className="logo"><img src={props.logo} alt="exp-logo" /></div>
			<p className="company">{props.entry.employer}</p>
			<p className="position">{props.entry.title}</p>
			<p className="dates">{props.entry.from} - {props.entry.until}</p>
			<div className="summary">
				{props.entry.summary}<br/>
				<ul>
					{
						props.entry.summarylist.map((listing) => (
							<li>{listing}</li>
						))
					}
				</ul>
			</div>
		</div>
	</div>

);

export default ExperienceListing;
