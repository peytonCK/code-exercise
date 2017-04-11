//把一个纯文本转成html
var text = ''; //待输入

//1、处理特殊符号 &=>&amp >=>&gt; <=>&lt;
text = text.replace(/&/g, '&amp;');
text = text.replace(/>/g, '&lt;');
text = text.replace(/</g, '&gt;');

//2、段落处理、空白字符处理
text = text.replace(/^\s*$/mg, '<p/>');

//3、将email地址转换成超链接形式
text = text.replace(/\b\w[-.\w]*\@\w+(\.\w+)+\b/g, function(match) {
	return "<a mailto='" + match + "'>" + match + "</a>";
})