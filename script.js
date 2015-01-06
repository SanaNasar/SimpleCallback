//Step 1: 

//Create a fuction add :

function add(first, second) { // function add takes in two arguments
  console.log(first+second);
}

add(2,3);
//Result will return 5 in the console


//Step 2: 

//Add a callback argument

function add(first, second, callback) {
  console.log(first+second);
  callback();
}

add(2,3, function(){
  console.log('Bam!');
});
//Result will return 5 and Bam!

