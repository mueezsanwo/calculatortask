// question 4
function firstfunction (a,b) {
  return a+b;
}
console.log(firstfunction(10,11));

// question 5
function printsum (a,b) {
  return a+b;
}
console.log(printsum(12,13));

// question 1
function getevennum(){
  let arr = [];
  for (let i = 1; i < 100; i++) {
      if (i % 2 === 0) {
          arr.push(i);
      }
  }
  console.log(arr); 
}

getevennum()

//question 2
function returnevennum (a,b) {
  for (let i= a; i <= b; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
returnevennum(10,20)

// question 3
/* option B
when you want your code to choose between 
multiple numbers or options */

// question 7 answer the following
array = [1,2,4];
array.push("5");
console.log(array)

array = [1,2,3,8];
array.pop();
console.log(array)

array = [23,77,80,45];
array.shift();
console.log(array)

array = [[20,30,80],[10,50,55]];
array.unshift("10")
console.log(array)

// question 6
function returncoursemate(friends) {
  for(let i=0; i<friends.length; i++) {
    console.log(friends[i])
  }
}
returncoursemate(['ayo','bolu','tega','john','femi','remi','tolu','ann','joe','tj'])



