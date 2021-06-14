/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(the_time){
  debugger
  let this_time = the_time.split(':')
  let another_time = this_time[0].concat(this_time[1])
  let the_result = parseInt(another_time, 10)


  if(the_result < 12){
    
        return "Good Morning";
  }
  else if((the_result >= 12) && (the_result<=17)){
    return "Good Afternoon";
  }

  else if((the_result > 17 ) && ( the_result <=24)){
    return "Good Evening";
  }

else{
  return "TEST";
}
}
/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById("greeting").innerHTML = msg;
}