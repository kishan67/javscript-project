// setInterval(() => {
//   d = new Date();
//   htime = d.getHours();
//   mtime = d.getMinutes();
//   stime = d.getSeconds();
//   hrotation = 30*htime + mtime/2;
//   mrotation = 6*mtime;
//   srotation = 6*stime;


//   hour.style.transform =  `rotate(${hrotation}deg)`;
//   minute.style.transform =  `rotate(${mrotation}deg)`;
//   second.style.transform =  `rotate(${srotation}deg)`;
// }, 1000);


// Define a function to update the clock hands every second
function updateClock() {
    // Get the current time
    var now = new Date();
  
    // Calculate the rotation angles for each hand
    var hoursRotation = 30 * (now.getHours() % 12) + (now.getMinutes() / 2);
    var minutesRotation = 6 * now.getMinutes();
    var secondsRotation = 6 * now.getSeconds();
  
    // Rotate the clock hands using CSS transform
    document.getElementById('hour').style.transform = 'rotate(' + hoursRotation + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + minutesRotation + 'deg)';
    document.getElementById('second').style.transform = 'rotate(' + secondsRotation + 'deg)';
  }
  
  // Call the updateClock function every second using setInterval
  setInterval(updateClock, 1000);
  

