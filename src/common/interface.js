/*
	


*/
import actions from './../actions';

export default (cmd,param,conf)=>{
	return actions(cmd,param,conf).select(resp=>{
		if(resp){
			if(resp.code === '0000'){
				return resp.data
			}else{
				console.log(resp.msg)
			}
		}
	})
}