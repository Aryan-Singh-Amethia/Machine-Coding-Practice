console.log('Hello World!');

const array = [1,2,3,4,5,6,7];

let answer = array.map(item => item*item);

// console.log('Existing map',answer);


//Polyfill for Map function

Array.prototype.myMap = function(cb){
  let ans  = [];
  for (let item of this){
     ans.push(cb(item));
  }
  return ans;
}

let newAnswer = array.myMap(item => item*item);

// console.log('Custom Map',newAnswer);


// console.log('Existing Filter',array.filter(item => item%2 === 0));

// Polyfill for Filter function

Array.prototype.myFilter = function(cb){
    let ans = [];
    for (let item of this){
        if(cb(item)){
            ans.push(item);
        }
    }
    return ans;
}

// console.log('Custom Filter',array.myFilter(item => item%2 === 0));


// Polyfill for Reduce function

let existingReduce = array.reduce((acc,curr)=>{
   return acc + curr;
},0);

// console.log('Existing Reduce',existingReduce);

Array.prototype.myReduce = function(cb,initialValue){
    let accumulator = initialValue;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator? cb(accumulator,this[i]):this[i];
    }
    return accumulator;
};

let myReduceAnswer = array.myReduce((acc,curr)=>{
    return acc + curr;
},0);

// console.log('MyReduce',myReduceAnswer);

const data1 = {
    name: 'Sachin',
    age: 25,
    city: 'Bangalore'
}

const data2 = {
    name: 'Aryan',
    age: 25,
    city: 'Ranchi',
    print: function(pincode,blockNo){
        console.log('Name:',this.name,'Age:',this.age,'City:',this.city,'PIN:',pincode,'Block:',blockNo);
    }
}

// data2.print.call(data1);

// Polyfill for call function

Function.prototype.myCall = function(context = {},...args){
  if(typeof this !== 'function'){
    throw new Error('Not a function');
  }
  context.fn =  this;
  return context.fn(...args);
}

// data2.print.myCall(data1);

// Polyfill for apply function

// data2.print.apply(data1,['67899','12']);

Function.prototype.myApply = function(context={},args=[]){
    if(typeof this !== 'function'){
        throw new Error('Not a function');
    }
    context.fn = this;
    return context.fn(...args);
}

// data2.print.myApply(data1,['67899','12']);


// Polyfill for bind function

// data2.print.bind(data1,'67899','12')();

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error('Not a function');
    }
    context.fn = this;
    return function(...innerArgs){
        return context.fn(...args,...innerArgs);
    }  
}

// data2.print.myBind(data1,'67899','12')();

console.log('before calling myeg');
const myeg = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('Promise Resolved');
        },2000);
    });
}
console.log('status',myeg())
myeg().then((data) => console.log('aryan',data));
console.log('after calling myeg');



/////////////////////
console.log(1)

setTimeout(() => {
  console.log(2)
}, 10)

setTimeout(() => {
  console.log(3)
}, 0)

new Promise((_, reject) => {
  console.log(4)
  reject(5)
  console.log(6)
})
  .then(() => console.log(7))
  .catch(() => console.log(8))
  .then(() => console.log(9))
  .catch(() => console.log(10))
  .then(() => console.log(11))
  .then(console.log)
  .finally(() => console.log(12))

console.log(13);


//////////////

const obj = {
    prefix: 'BFE',
    list: ['1', '2', '3'],
    log() {
        this.list.forEach(function (item) {
        console.log(this.prefix + item);
      });
    },
  };
  
  obj.log();



