var obj=new Proxy({},{
	get:function(target,key,receiver){
		console.log(`getting ${key}!`);
		return Reflect.get(target,key,receiver);
	},
	set:function(target,key,value,receiver){
		console.log(`setting ${key}!`);
		return Reflect.set(target,key,value,receiver);
	}
});

console.log(obj.constructor);
obj.count=1;
++obj.count;

let obj1={};
Reflect.defineProperty(obj1,'prop1',{value:'testReflectProp2'});
console.log(obj1.prop1);

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';