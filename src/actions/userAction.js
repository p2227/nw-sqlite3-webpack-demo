import * as userService from './../services/userService';

export function login(param){
	return userService.login(param);
}
export function logout(param){}

export function addUser(param){}
export function delUser(param){}
export function changePwd(param){}
export function checkUsers(param){}
