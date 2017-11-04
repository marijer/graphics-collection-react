import axios from 'axios';
import {API_URL} from '../config';

export function loadGraphicsData() {
	return new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url: API_URL,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		})
		.then(function (response) {
			resolve(response.data);
		})
		.catch(function (error) {
			reject(error);
		});
	});
}