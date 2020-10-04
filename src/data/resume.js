const resumeData = {
	info: {
		key: 'INFO',
		name: 'James Douglas Lake',
		summary: 'Interactive Designer & Developer with over fifteen years experience in Digital Advertising, UI/UX, Graphic Design, Animation, Front-End Development, Audio/Video, and everything in between.',
		website: 'jamesdlake.com',
		email: 'lovetobuildstuff@gmail.com',
		location: 'Atlanta, GA'
	},
	industrySkills: {
		key: 'SKILLS',
		sectionTitle: 'Industry Skills',
		contents: [
			{
				key: 'designSkills',
				groupTitle: 'Design',
				skills: [
					'Tumult Hype', 
					'Sketch', 
					'Adobe Photoshop', 
					'Adobe Illustrator', 
					'Adobe XD', 
					'Adobe Animate / Flash', 
					'Adobe Indesign', 
					'Adobe After Effects', 
					'Adobe Premiere', 
					'Adobe Dimension', 
					'Adobe Audition'
				]
			}, 
			{
				key: 'developmentSkills',
				groupTitle: 'Development',
				skills: [
					'HTML5', 
					'CSS/Sass', 
					'JavaScript', 
					'React & Vue', 
					'GSAP Animation Platform', 
					'Advanced SVG Wizardry', 
					'Babel & TypeScript', 
					'NodeJS', 
					'General Front-End Development', 
					'Modern & Classic SharePoint', 
					'Jest & Mocha testing', 
					'Git & Source Control', 
					'JSON, XML, AJAX, RestAPIs', 
					'jQuery and jQuery Plugins', 
					'Bootstrap'
				]
			},
			{
				key: 'foundationSkills',
				groupTitle: 'Foundation',
				skills: [
					'Interactive Design', 
					'Animation using Multiple Technologies', 
					'Quality Assurance across multiple devices and browsers',
					'Traditional Graphic Design', 
					'Integrating projects with external APIs',
					'Typography', 
					'Print & Communication Design', 
					'Using git for version control', 
					'Video Editing'
				]
			},
			{
				key: 'advertisingSkills',
				groupTitle: 'Advertising',
				skills: [
					'Doubleclick', 
					'Specless', 
					'Sizmek', 
					'Celtra', 
					'Facebook', 
					'Flashtalking', 
					'Instagram'
				]
			}
		]
	},
	experience: {
		key: 'EXPERIENCE',
		sectionTitle: 'Related Work Experience',
		contents: [
			{
				key: 'EY',
				employer: 'EY (Ernst & Young LLC)',
				logo: './logo-EY.svg',
				title: 'Interactive Media Technologist',
				from: 'March 2020',
				until: 'August 2020',
				summary: 'While at EY I worked on a wide variety of projects for internal clients, including:',
				summarylist: [
					'Modern SharePoint planning, development and construction',
					'Rebuilding Classic SharePoint sites in Modern experiences',
					'Custom HTML5 ad banner development',
					'Design & development of customer survey sites',
					'Organizing incoming survey data into readily-useable formats',
					'Creating fully interactive PDF documents',
					'Print production',
					'Reconstructing legacy internal sites with modern technologies into fully-interactive experiences'
				]
			},
			{
				key: 'KO',
				employer: 'The Coca-Cola Company',
				logo: './logo-KO.svg',
				title: 'Developer',
				from: 'May 2019',
				until: 'December 2019',
				summary: 'Primary responsibilities were assisting with the migration from Janrain to the Adobe Experience Platform. This included writing Jest tests with mock data to ensure successful record conversion. Other duties included:',
				summarylist: [
					'Assist migrating user data from Janrain to the Adobe Experience Platform',
					'Review and evaluation of existing codebase',
					'Assist team leads by managing ancillary projects',
					'Handle any backlogged projects whenever possible'
				]
			},
			{
				key: 'SPC',
				employer: 'Specless',
				logo: './logo-SPC.png',
				title: 'Creative Director',
				from: 'July 2016',
				until: 'January 2019',
				summary: 'I was in charge of all aspects of our in-house digital ad production for our clients. Adhering to the strict brand guidelines for each client was top priority regardless of the deliverable. Other duties included producing ad templates and technical documentation for self-service clients, creation and maintenance of our corporate branding materials. Managed all creative assets for clients such as:',
				summarylist: [
					'T-Mobile',
					'EA Sports',
					'KitchenAid',
					'Blizzard Games',
					'Nikon',
					'Disney',
					'The Home Depot',
					'Samsung'
				]
			},
			{
				key: 'TWT',
				employer: '22squared',
				logo: './logo-22.png',
				title: 'Senior Creative Developer',
				from: 'September 2015',
				until: 'July 2016',
				summary: 'I started at 22squared right before Flash rapidly lost browser support in favor of HTML5 for ad production.  Since my team was responsible for producing high-volume digital media for well-established brands like Toyota, Publix and Kohler, I was tasked with helping my team adjust to this change and mitigate potential hiccups in our process.  This included teaching my group how workflows, coding, assets and overall thinking changed between Flash and HTML5, and how to adapt this for high-volume campaigns on multiple platforms like Google, Sizmek, and Celtra.',
				summarylist: []
			},
			{
				key: 'BBDO',
				employer: 'BBDO Atlanta',
				logo: './logo-BBDO.svg',
				title: 'Multimedia Developer',
				from: 'March 2013',
				until: 'September 2015',
				summary: 'Daily tasks centered around digital ad production and development in both HTML5 and Flash for clients such as AT&T, Georgia Lottery, and Bayer. Other projects included:',
				summarylist: [
					'Concepted and created (folded) a series of origami animals that become the animated animals seen today on Voya Financial commercials. <i><u>The bunny prototype is in the picture at the top of the page :-)</u></i>',
					'Construction and deployment of large scale sites for World’s Leading Cruise Lines',
					'Assisting in the rebranding of BBDO Atlanta',
					'Designing custom-tailored mobile Apps clients'
				]
			},
			{
				key: 'EW',
				employer: 'EyeWonder / Sizmek',
				logo: './logo-EW.png',
				title: 'Lead Interactive Developer',
				from: 'October 2005',
				until: 'March 2013',
				summary: 'Roles and responsibilities were varied for each client and campaign. Core responsibilities were concepting, design and development of fully-interactive rich media campaigns for dozens of large-scale clients. This position evolved over the years to include:',
				summarylist: [
					'Testing and adaptation of new technologies like 360° video and the then-emerging mobile ad markets',
					'2-D animation',
					'Video editing',
					'Designing original ads based on client branding and campaign goals',
					'Custom ad format development'
				]
			}
		]
	},
	education: {
		key: 'EDUCATION',
		sectionTitle: 'Education',
		contents: [
			{
				key: 'AIA',
				institution: 'Art Institute of Atlanta',
				area: 'Interactive Design',
				degree: 'Bachelor of Fine Arts in Interactive Media',
				location: 'Atlanta, GA',
				from: '2000',
				until: '2005'
			},
			{
				key: 'CU',
				institution: 'The Cooper Union for the Advancement of Science & Art',
				area: 'Architecture',
				degree: 'Bachelor of Architecture',
				location: 'New York, NY',
				from: '1997',
				until: '1998'
			}
		]
	},
	volunteer: {
		key: 'VOLUNTEER',
		sectionTitle: 'Volunteer Work',
		contents: [
			{
				key: 'JH',
				organization: 'Jerusalem House - LGBT Outreach & Poverty Relief',
				logo: './logo-JH.jpg',
				website: 'http://jerusalemhouse.org/',
				from: '2008',
				until: 'present',
				summary: 'General Volunteer and Donation Coordinator'
			},
			{
				key: 'BTRNC',
				organization: 'Boston Terrier Rescue of North Carolina',
				logo: './logo-BTRNC.png',
				website: 'http://BTRNC.org/',
				from: '2013',
				until: 'present',
				summary: 'Volunteer Graphic Designer and Fundraiser'
			},
			{
				key: 'ARC',
				organization: 'The American Red Cross',
				logo: './logo-ARC.png',
				website: 'http://redcross.org/',
				from: '2004',
				until: 'present',
				summary: 'Volunteer Clerical Work & Event Coordination'
			}
		]
	}
};

export default resumeData;
