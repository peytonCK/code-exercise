//map 数据结构
let map=new Map();

map.set(1,'aaa');
map.set(1,'bbb');

console.log(map.get(1));

let map0=new Map()
	.set(1,'a')
	.set(2,'b')
	.set(3,'c');

let map1=new Map([...map0].filter(([k,v])=>k<3));
console.log(map1);
console.log([...map1]);

let map2=new Map([...map0].map((k,v)=>[k*2,'_'+v]));
console.log(map2);
