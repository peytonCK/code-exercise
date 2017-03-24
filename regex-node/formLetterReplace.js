//验证规则：一篇公函里的模板标记替换为具体字符串

//模板如下：
let formLetterTemp="Dear =FIRST=,\n";
	formLetterTemp+="You have been chosen to win a brand new =TRINKET=!Free!\n";
	formLetterTemp+="Could you use another =TRINKET= in the =FAMILY= household?\n";
	formLetterTemp+="Yes =SUCKER=, I bet you could! Just respond by...";

//变量内容如下：
let given="Tom",
	family="Cruise",
	wunderprize="100% genuine faux diamod",
	sucker= given+' '+family,
	trinket='fabulous '+wunderprize;

//替换要求：
// =FIRST=   ->  given
// =FAMILY=  ->  family
// =SUCKER=  ->  sucker
// =TRINKET= ->  trinket

//思路如下 如果要替换四个地方，可能需要四次替换
let reg1=/=FIRST=/g,
	reg2=/=FAMILY=/g,
	reg3=/=SUCKER=/g,
	reg4=/=TRINKET=/g;

let formLetter=formLetterTemp.replace(reg1,given);
formLetter=formLetter.replace(reg2,family);
formLetter=formLetter.replace(reg3,sucker);
formLetter=formLetter.replace(reg4,trinket);
console.log("Example:\n"+formLetter+"\n");

//如果只替换一次，那就最好用回调函数
let reg5=/(=FIRST=|=FAMILY=|=SUCKER=|=TRINKET=)/g;

let replaceReg=function(){
	formLetter=formLetterTemp.replace(reg5,function(match){
	switch(match){
		case '=FIRST=':
			return given;
		case '=FAMILY=':
			return family;
		case '=SUCKER=':
			return sucker;
		case '=TRINKET=':
			return trinket;
	}
	});
	console.log(formLetter);
};

let inputVar="given";

let assignVars=function(data){
	switch(inputVar){
		case 'given':
			given=data;
			inputVar='family';
			break;
		case 'family':
			family=data;
			inputVar='wunderprize';
			break;
		case 'wunderprize':
			wunderprize=data;
			sucker=given+' '+family;
			trinket='fabulous '+wunderprize;
			inputVar='';
			break;
	}
};

process.stdin.setEncoding('utf8');
process.stdout.write('Please input '+inputVar+':');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if(typeof chunk === 'string'){
    chunk = chunk.slice(0,-1);
  }
  if(chunk === ''){
  	console.log('空');
	process.stdout.write('Please input '+inputVar+':');
	return 
  }
  if (chunk !== null) {
  	assignVars(chunk);
    if(!inputVar){
    	process.stdin.emit('end');
    }else{
    	process.stdout.write('Please input '+inputVar+':');
    }
   }
});

process.stdin.on('end', () => {
  replaceReg();
});
