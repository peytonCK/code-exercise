//验证规则：一篇公函里的部分文字替换

//var reg1=new RegExp("^[+-]?(([0-9]+)|(0)?)(\\.[0-9]*)?$");
var reg1=new RegExp("^[+-]?(\\d+|0?)(?:\\.\\d*)?\\s*[CF]$","i");
console.log("正则："+reg1);
process.stdin.resume();
process.stdin.on('data',function(data){
	if(data){
		let str=data.toString().trim();
		let flag=reg1.test(str);
		console.log(flag);
		let match=reg1.exec(str);
		console.log(match);
	}
});
