import {dbWrap,paramKey} from './sqlite3';
import Rx from 'rx/dist/rx.lite';


export let getUsersData = dbWrap((db,param)=>{
	let dbget = Rx.Observable.fromCallback(db.get,db,function(a,b){ return b; });
	let {name} = param;
	return dbget('select id,name,password,reg_date,log_date from tb_users where name=$name',paramKey({name}));
})

export let updateUserData = dbWrap((db,param)=>{
	let dbget = Rx.Observable.fromCallback(db.get,db,function(a,b){ return b; });
	let sql,sendParam;
	if(param.id){
		sendParam = _.pick(param,'password','log_date','id');
		sql = 'update tb_users set password=$password,log_date=$log_date where id=$id';
	}else{
		sendParam = _.pick(param,'name','password');
		sendParam.reg_date = sendParam.log_date = ''+(+new Date);
		sql = 'insert into tb_users(name,password,reg_date,log_date) value ($name,$password,$reg_date,$log_date)'
	}
	return dbget(sql,paramKey(sendParam));
})
