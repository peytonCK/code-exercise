//用来消除小数点后过多的位数
//规则如下：一般只保留两位小数，但如果第三位不是0，同样保存
let reg=/(\.\d\d[1-9]?)\d*/;

let decimal1=1.230009,
	decimal2=1.234000009;

let cutDecimal=function(decimal){
	decimal=decimal.toString();
	let reDeci=0;

	//match代表是匹配的字符串，接着的参数代表是第一个捕获组匹配的字符串
	reDeci=decimal.replace(reg,function(match,cuttedDeci){
		return cuttedDeci;
	})
	return reDeci;
}

console.log(cutDecimal(decimal1));
console.log(cutDecimal(decimal2));

let inputDeci=0;
process.stdin.setEncoding('utf8');
process.stdout.write('Please input one decimal:');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if(typeof chunk === 'string'){
    chunk = chunk.slice(0,-1);
  }
  if(chunk === ''){
  	console.log('空');
	process.stdout.write('Please input one decimal:');
	return 
  }
  if (chunk !== null) {
  		inputDeci=chunk;
   		console.log(cutDecimal(inputDeci));
   		process.stdout.write('Please input one decimal:');

   }
});
