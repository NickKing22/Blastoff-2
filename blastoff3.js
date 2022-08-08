
var begincount = function() {
    var i = 0;
    // store the interval id to clear in future
    var intr = setInterval(function() {
      document.getElementById('number').innerHTML = 10 - i;
      // clear the interval if `i` reached 10
      if (i == 5) document.getElementById('number').innerHTML = 'Only 5 seconds remaining';
      if (++i == 11) clearInterval(intr);
    }, 1000)
  
}


