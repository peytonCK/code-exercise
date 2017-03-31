//环视 JavaScript中只支持顺序环视，不支持逆序环视。

let str="by Jeffrey Friedl.";

let cvReg=/(?=Jeffrey)Jeff/;

console.log(cvReg.test(str));

//let cvReg2=/(?!\bJeff)(?=s\b)/g;
let cvReg2=/(?=s\b)(?!\bJeff)/g;
let str2="by Jeffs car by Jeffs bag";

let str3=str2.replace(cvReg2,function(match) {
	return "'";
});
console.log(str3);