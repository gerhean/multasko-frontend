// import Axios from 'axios';

let multaskoHomeData = {
	data: [
		{
			date: 'January 6',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
				[
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						timestamp: '9:37pm',
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				]
			],
		},
		{
			date: 'January 6',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
			],
		},
	],
};

let multaskoCategoriesData = {
	data: [
		{
			category: 'Sports',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 0,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 1,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
				[
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						timestamp: '9:37pm',
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				]
			],
		},
		{
			category: 'music',
			memos: [
				[
					{
						text: 'Have a predefined category called "purely transferring", Have a predefined category called "purely transferring", Have a predefined category called "purely transferring",Have a predefined category called "purely transferring" ',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
					{
						text: 'Have a predefined category called "purely transferring"',
						priority_level: 2,
						date_posted: ["2021-01-08","07:21:46"],
					},
				],
			],
		},
	],
};

export function initHomeData() {
	// call backend
}

export function initCategoriesData() {
	// call backend
}

const service = {
	multaskoHomeData: multaskoHomeData,
	multaskoCategoriesData: multaskoCategoriesData,
}

export default service;
