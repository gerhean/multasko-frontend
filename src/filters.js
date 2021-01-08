// import Axios from 'axios';
import moment from 'moment';

// export default function transformToCategoriesView(data) {
// }

const filters = { 
	formatTime(time) {
		console.log('jre');
		return moment(time, 'HH mm ss').format('LT');
	},
	formatDate(date) {
		return moment(date).format('');
	}
}

//formatDate = (date) => moment(time, 'HH mm ss').format('LT');

// const filters = {
// 	formatTime: formatTime,
// 	formatDate: formatDate,
// }

export default filters;
