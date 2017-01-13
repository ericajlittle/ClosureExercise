var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

function loadedDieMaker(list, index) {

  var index = 0;

  return function loadedDie() // we make a function and return it here
  {
    //console.log('Casting a loaded die')
    //this prints out a number every time it's called
    return list[index++];
  }
};

var loadedDie = loadedDieMaker(list);



console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6



