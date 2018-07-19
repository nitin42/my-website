import React from 'react';

const projects = [
	{
		name: 'Redocx',
		source: 'https://github.com/nitin42/redocx',
		description: '	- A custom renderer to render React components to word documents',
	},
	{
		name: 'React Performance Devtool',
		source: 'https://github.com/nitin42/react-perf-devtool',
		description: ' - A chrome extension devtool to inspect the performance of a React application',
	},
	{
		name: 'React Image Processing',
		source: 'https://github.com/nitin42/react-imgpro',
		description:
			'	- An image processing component for React which uses worker thread for processing and manipulating an image with different filters.',
	},
	{
		name: 'Animated Timeline',
		source: 'https://github.com/nitin42/Animated-Timeline',
		description: '	- Set of APIs and tools to create timeline and playback based animations',
	},
	{
		name: 'Terminal in React',
		source: 'https://github.com/nitin42/terminal-in-react',
		description: '	- A React component that renders a terminal on a web page with different options and plugins',
	},
];

export default () => (
	<React.Fragment>
		<h1
			style={{
				marginTop: '1.5em',
				borderLeft: '8px solid black',
				paddingLeft: '10px',
			}}
		>
			Some of my projects
		</h1>
		<ul id="projects">
			{projects.map(project => (
				<li>
					<a href={project.source} target="_blank">
						{project.name}
					</a>
					{project.description}
				</li>
			))}
		</ul>
	</React.Fragment>
);
