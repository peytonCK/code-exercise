//set 数据结构
const s=new Set();
[2,3,4,5,2,3].forEach((x=>s.add(x)));

for(let i of s){
	console.log(i);
}

let set=new Set([1,2,3,4,5,1,2]);
console.log([...set]);

console.log(NaN===NaN);
set.add(NaN);
set.add(NaN);
console.log(set);
console.log(set.constructor);
console.log(set.has(NaN));
//console.log(set.keys()+"\n"+set.values()+"\n"+set.entries());//iterator
for(let item of set.keys()){
	console.log(item);
}

for(let item of set.values()){
	console.log(item);
}

for(let item of set.entries()){
	console.log(item);
}

let a=new Set([1,2,3]);
let b=new Set([4,3,2]);

let union=new Set([...a,...b]);

let intersect=new Set([...a].filter(x=>b.has(x)));

let difference=new Set([...a].filter(x=>!b.has(x)));

console.log([...union]);
console.log([...intersect]);
console.log([...difference]);


