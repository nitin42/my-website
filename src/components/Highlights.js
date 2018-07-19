import React from 'react';
import Link from 'gatsby-link';

const highlights = [
	{
		title: 'An interactive, explorable explanation about spring physics animation',
		date: ' - 31 May, 2018',
		link: '/posts/spring',
	},
	{
		title: 'Elements of Physics - An interactive physics simulation to learn different elements of physics',
		date: ' - 27 June, 2018',
		link: 'https://elements-of-physics.surge.sh',
	},
	{ title: 'Creating microworlds', date: ' - 17 July, 2018', link: '/posts/microworlds' },
];

export default () => (
	<React.Fragment>
		<h1
			style={{
				fontSize: '1.8em',
				borderLeft: '8px solid black',
				paddingLeft: '10px',
			}}
		>
			Highlights
		</h1>
		<ul>
			{highlights.map(highlight => (
				<li>
					<Link to={highlight.link}>
						<span>{highlight.title}</span>
						<span id="date">{highlight.date}</span>
					</Link>
				</li>
			))}
		</ul>
	</React.Fragment>
);
