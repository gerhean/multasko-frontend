// import Axios from 'axios';
import moment from 'moment';

// export default function transformToCategoriesView(data) {
// }

const filters = { 
	formatTime(time) {
		return moment(time, 'HH mm ss').format('LT');
	},
	formatDate(date) {
		return moment(date).format('');
	}
}

export default filters;
