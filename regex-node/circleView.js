//环视 JavaScript中只支持顺序环视，不支持逆序环视。

let str="by Jeffrey Friedl.";

let cvReg=/(?=Jeffrey)Jeff/;

console.log(cvReg.test(str));

let cvReg2=/\b(Jeff)(?=s\b)/ig;
//let cvReg2=/(?=s\b)(?!\bJeff)/g;
let str2="by Jeffs car by jeffs gpds bag";

let str3=str2.replace(cvReg2,function(match,firCon,secCon) {
	return firCon+"'";
});
console.log(str3);