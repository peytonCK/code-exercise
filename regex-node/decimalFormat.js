//格式化数字为，从右向左，每三位加一个逗号

let decimal='this is a decimal 9882332134';
console.log(decimal);

//let formatReg=/(\d)(?=(\d\d\d)+(\b))/g;
let formatReg=/(\d)((\d\d\d)+\b)/g;//不能行，因为它已经把位置打到匹配到最后

let decimalFormatted=decimal.replace(formatReg,function(match,firCon,secCon){
	console.log(match);
	return firCon+","+secCon;
});

console.log(decimalFormatted);