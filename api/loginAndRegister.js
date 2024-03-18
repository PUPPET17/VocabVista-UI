export function loginRequest(data){
	return request({
		url: '/login',
		method: 'post',
		data: data
	})
}