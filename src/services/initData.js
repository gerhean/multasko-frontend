import axios from 'axios';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const MEMO_URL = "https://multasko-backend.herokuapp.com/api/memo";
// const CATEGORY_URL = "https://multasko-backend.herokuapp.com/api/category";
// let lastMemoTime = 1610087437;

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

function hmsToSeconds(hms) {
	const a = hms.split(':'); // split it at the colons
	// minutes are worth 60 seconds. Hours are worth 60 minutes.
	return (+a[0]) * 3600 + (+a[1]) * 60 + (+a[2]); 
}

function dateToString(dateStr) {
	const a = dateStr.split('-'); // split it at the colons
	if(a[2][0] == "0") {
		a[2] = a[2][1];
	}
	// minutes are worth 60 seconds. Hours are worth 60 minutes.
	return monthNames[+a[1] - 1] + " " + a[2]; 
}

export async function initHomeData() {
	const response = await axios ({
		url: MEMO_URL,
		method: "GET"
	});

	const memos = response.data.memos;
	let curDate = memos[0].date_posted[0];
	let curTime = hmsToSeconds(memos[0].date_posted[1]);
	const homeData = [];
	let dayGroup = [];
	let timeBoxGroup = [];
	for(const memo of memos) {
		const seconds = hmsToSeconds(memo.date_posted[1]);
		if (memo.date_posted[0] != curDate) {
			dayGroup.push(timeBoxGroup);
			homeData.push({
				date: dateToString(curDate),
				memos: dayGroup,
			})
			dayGroup = [];
			timeBoxGroup = [];
		} else if (curTime - seconds > 300) {
			dayGroup.push(timeBoxGroup);
			timeBoxGroup = [];
		}
		curTime = seconds;
		timeBoxGroup.push({
			text: memo.text,
			priority_level: memo.priority_level,
			date_posted: memo.date_posted
		});
	}

	dayGroup.push(timeBoxGroup);
	homeData.push({
		date: dateToString(curDate),
		memos: dayGroup,
	});

	multaskoHomeData.data = homeData;
}

export function initCategoriesData() {

}

const service = {
	multaskoHomeData: multaskoHomeData,
	multaskoCategoriesData: multaskoCategoriesData,
}

export default service;
