var countdownGenerator = function (x) {
  /* your code here */
  var count = x;

  return function takeOff() {
    // console.log(`running takeoff with ${count}`);

    if(count > 0)
    {
      console.log('T-minus ' + count + '...');
    }
    else if (count === 0)
    {
      console.log("Blast Off!");
    }
    else
    {
      console.log('Rockets already gone, bub')
    }
    // if (count === 0) {
    //   console.log("Blast Off!");

    //   // return "T-minus 3..."
    // } else {
    //   // console.log("not zero")
    //   if(count < 0)
    //   {
    //     console.log('Rockets already gone, bub')
    //   }
    //   else
    //   {
    //     console.log('T-minus ' + count + '...');
    //   }
    // }

    count -= 1;
    // x -= 1;
  }
};
//
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!