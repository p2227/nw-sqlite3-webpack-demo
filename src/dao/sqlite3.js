var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var wppath = require('file?name=lite3scd.bin!./../db/lite3scd.bin');
var dbName = __APP_PATH__ + '//' + wppath; //todo:此处路径是针对window的，能否区分不同操作系统？

exports.dbWrap = function(fn){
	return function(param){
		var db = new sqlite3.Database(dbName);
		var retVal = fn(db,param);
		db.close();
		return retVal;
	}
}

exports.paramKey = function(param = {}){
	let retVal = {};
	Object.keys(param).map(key=>{
		retVal[`$${key}`] = param[key];
	})
	return retVal;
}