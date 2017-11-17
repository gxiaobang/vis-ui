/**
 * 文件下载
 */

import { http } from '@/assets/js';

const download = (url, data = null, mine = 'xxx') => {
	return http({
		method: 'POST',
		reponseType: 'bold'
		url,
		data
	});
};

export { download };