//把一个纯文本转成html
var text = "<1>这是个测试\n guopeidong@idcool.com.cn 是我的邮箱\n 我的主站网址是 http://guopeidong.com "; //待输入
console.log(text);

//1、处理特殊符号 &=>&amp >=>&gt; <=>&lt;
text = text.replace(/&/g, '&amp;');
text = text.replace(/>/g, '&lt;');
text = text.replace(/</g, '&gt;');

//2、段落处理、空白字符处理
text = text.replace(/^\s*$/mg, '<p/>');

//3、将email地址转换成超链接形式
text = text.replace(/\b\w[-.\w]*\@\w+(\.\w+)+\b/g, function(match) {
	return "<a mailto='" + match + "'>" + match + "</a>";
});

//4、将HTTP URL转换成链接形式
text = text.replace(/\bhttp(s)?:\/\/[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|edu|info)(\/[-a-z0-9_:\@&?=+,.!/~*'%\$']*)?\b/g, function(match) {
	return "<a href='" + match + "'>" + match + "</a>";
});

console.log(text);