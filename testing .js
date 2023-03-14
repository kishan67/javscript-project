


function updateClock(){
    var now =new Date();
  
    var hoursRotation = 30* (now.getHours()%12) + (now.getMinutes() /2);
  
    var secondsRotation =6* now.getMinutes();
    var secondsRotation= 6 * now.getseconds();
  
    document.getElementById('hour').style.transform = 'rotate(' + hoursRotation + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + minutesRotation + 'deg)';
    document.getElementById('second').style.transform = 'rotate(' + secondsRotation + 'deg)';
  }
  setInterval(updateClock,1000);