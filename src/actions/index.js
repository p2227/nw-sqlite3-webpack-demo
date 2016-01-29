import Rx from 'rx';
import * as userAction from './userAction';

let config = {
	login(param){
		return userAction.login(param);
	},
    logout(param){
    	return userAction.logout(param);
    }
}

export default (cmd,param,conf) => {
    return config[cmd](param);
}
