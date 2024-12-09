let isDrawing = false;

const new1 = document.getElementById("newlol1");
const new2 = document.getElementById("newlol2");
const new3 = document.getElementById("newlol3");
const butnew = document.getElementById("butnews");
var kolnew;
var newnowt1;
var newnowt2;
var newnoww;
kolnew = 3;
newnowt1 = 1;
newnowt2 = 2;
newnoww = 1;

console.log(newnowt1)
window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1025){
        butnew.style.display = 'flex';
        if (document.documentElement.clientWidth < 601){
            tt();
            kolnew = 1;
        }
        else{
            mm();
            kolnew = 2;
        }
    }
    else{
        butnew.style.display = 'none';
        new1.style.display = 'block';
        new2.style.display = 'block';
        new3.style.display = 'block';
        newnowt1 = 1;
        newnowt2 = 2;
        kolnew = 3;
    }
  });

function tt() {
    console.log(newnoww, kolnew);
    if(newnoww == 1){
        new1.style.display = 'block';
        new2.style.display = 'none';
        new3.style.display = 'none';
    }
    else if(newnoww == 2){
        new1.style.display = 'none';
        new2.style.display = 'block';
        new3.style.display = 'none';
    }
    else if(newnowt1 == 3){
        new1.style.display = 'none';
        new2.style.display = 'none';
        new3.style.display = 'block';
    }
}
function mm() {
    newnowt1 = newnoww;
    newnowt2 = newnoww + 1;
    console.log(newnowt1, newnowt2, kolnew);
    if(newnowt1 == 2 && newnowt2 == 3){
        new1.style.display = 'none';
        new2.style.display = 'block';
        new3.style.display = 'block';
    }
    else if(newnowt1 == 1 && newnowt2 == 2){
        new1.style.display = 'block';
        new2.style.display = 'block';
        new3.style.display = 'none';
    }
}

function batrait() {
    if(kolnew == 2) {
        newnowt1 = newnoww;
        newnowt2 = newnoww + 1;
        console.log(newnowt1, newnowt2, kolnew);
        if(newnowt1 < 2 && newnowt2 < 3 && kolnew == 2){
            newnowt1 += 1;
            newnoww = newnowt1;
            newnowt2 += 1;
            console.log(newnowt1, newnowt2);
            if(newnowt1 == 2 && newnowt2 == 3){
                new1.style.display = 'none';
                new2.style.display = 'block';
                new3.style.display = 'block';
            }
        
        }
        else{
            if(newnowt1 < 2 && newnowt2 < 3){
                newnowt1 += 1;
                newnoww = newnowt1;
                newnowt2 += 1;
            }
        }
    }
    if(kolnew == 1) {
        newnoww = newnowt1;
        console.log(newnoww, kolnew);
        if(newnoww < 3){
            newnoww = newnoww + 1;
            newnowt1 = newnoww;
            console.log(newnoww, newnoww);
            if(newnoww == 2){
                new1.style.display = 'none';
                new2.style.display = 'block';
                new3.style.display = 'none';
            } 
            if(newnoww == 3){
                new1.style.display = 'none';
                new2.style.display = 'none';
                new3.style.display = 'block';
            }
        }
    }
}  

function batleft() {
    if(kolnew == 2) {
        newnowt1 = newnoww;
        newnowt2 = newnoww + 1;
        console.log(newnowt1, newnowt2, kolnew);
        if(newnowt1 > 1 && newnowt2 > 2){
            newnowt1 = newnowt1 - 1;
            newnoww = newnowt1;
            newnowt2 = newnowt2 - 1;
            console.log(newnowt1, newnowt2);
            if(newnowt1 == 1 && newnowt2 == 2){
                new1.style.display = 'block';
                new2.style.display = 'block';
                new3.style.display = 'none';
            } 
        }
        else{
            if(newnowt1 > 1 && newnowt2 > 2){
                newnowt1 -= 1;
                newnoww = newnowt1;
                newnowt2 -= 1;
            }
        }
    }
    if(kolnew == 1) {
        newnoww = newnowt1;
        console.log(newnoww, kolnew);
        if(newnoww > 1){
            newnoww = newnoww - 1;
            newnowt1 = newnoww;
            console.log(newnoww, newnoww);
            if(newnoww == 1){
                new1.style.display = 'block';
                new2.style.display = 'none';
                new3.style.display = 'none';
            } 
            if(newnoww == 2){
                new1.style.display = 'none';
                new2.style.display = 'block';
                new3.style.display = 'none';
            }
        }
    }
}
const men = document.getElementById("menu2");
var p = 0;
function menubutt() {
    if (p == 0) {
        men.style.display = 'none';
        p = 1;
    }
    else{
        men.style.display = 'block';
        p = 0;
    }
}






/*-----------*/
var pp = 0;
function changeColor(newColor) {
    if(pp == 0){
        const elem = document.getElementById("ll");
        elem.style.color = newColor;
        isDrawing = !isDrawing;
        pp = 1;
    }
    else{
        const elem = document.getElementById("ll");
        elem.style.color = 'white';
        isDrawing = !isDrawing;
        pp = 0;
    }
}



    
/*-----------*/
/*12 уведомления*/    
/*-----------*/

  let notificationCount = 0, notificationInterval;

  function addNotification() {
      notificationCount++;
      document.getElementById('notificationCounter').textContent = notificationCount;

      showNotification({ content: `Новое уведомление ${notificationCount}` });
  }

  function debounce(func, delay) {
      let timer;
      return function() {
          if (timer)
              clearTimeout(timer);
          timer = setTimeout(() => func.apply(this, arguments), delay);
      };
  }

  function pauseNotifications() {
      clearInterval(notificationInterval);
      setTimeout(() => {
          notificationInterval = setInterval(createNotification, 3000);
      }, 10000);
  }

  notificationInterval = setInterval(createNotification, 3000);

  function showNotification({ content }) {
    const notification = document.createElement('div');

    notification.className = 'notification';
    notification.textContent = content;

    document.getElementById('notificationList').appendChild(notification);
    setTimeout(() => notification.remove(), 90000);
}




