import * as userDao from './../dao/userDao';
import md5 from 'md5';
import createMessage from 'createMessage';

export function login(param){
	let {name,password} = param;
	var userDataRx = userDao.getUsersData({name});
    return userDataRx.select(data => {
        if (data && data.password === md5(param.password + data.reg_date)) {
        	let newData = _.clone(data);
        	newData.log_date = ''+(+new Date);
        	userDao.updateUserData(newData).subscribe();//更新最新的登录时间，可以不用管执行结果
            return createMessage(_.omit(newData, 'password'));
        } else {
            return createMessage('密码不对');
        }
    })
}

export function getUsersData(param) {
    var userDataRx = userDao.getUsersData(param);
    return userDataRx.select(data => {
        if (data && data.password === md5(param.password + data.reg_date)) {
            return createMessage(_.omit(data, 'password'));
        } else {
            return createMessage('密码不对');
        }
    })
}
