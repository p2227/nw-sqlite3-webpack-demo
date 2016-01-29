export function createDataMsg(data){
	return {
		code:'0000',
		msg:'',
		data
	}
}

export function createErrMsg(data,errCode){
	return {
		code:'0001' || errCode,
		msg:data,
		data:{}
	}
}

export default function createCommonMsg(data){
	return typeof data === 'string' ? createErrMsg(data) : createDataMsg(data);
}