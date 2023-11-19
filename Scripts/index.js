var myIndex = 0;
carousel();
    
function carousel() {
  var i;
  var x = document.getElementsByClassName("nsSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function scrollToTop() {
  window.scrollTo(0, 0);
}



function readMore(){
  $("#aboutPt2").show();
  $("#readMoreBtn").hide();
  $("#readLessBtn").show();
}

function readLess(){
  $("#aboutPt2").hide();
  $("#readMoreBtn").show();
  $("#readLessBtn").hide();
}


function nsScroll(n){
  console.log(n)
  if(n==0){
    window.scrollTo(0, 0);
    readLess();
  }
  else if(n==1){    
    window.scrollTo(0, 400);
    readMore();
  }
}

function nsOpen(n){
  if(n==1)
    window.open('https://www.facebook.com/northernsuites/','_blank')
  else if(n==2)
    window.open('https://www.instagram.com/northern_suites_1/','_blank')
  else if(n==3)
    window.open('https://www.google.com/search?q=Northern+Suites+%40+AECS+Layout&rlz=1C1ONGR_enIN1015IN1015&oq=Northern+Suites+%40+AECS+Layout&aqs=chrome..69i57j69i60.915j0j9&sourceid=chrome&ie=UTF-8','_blank')
  else if(n==4)
    window.open("https://goo.gl/maps/xGFyhd8ZQHfRYp7t7","_blank");
  else if(n==5)
    window.open("https://api.whatsapp.com/send?phone=919742612341","_blank");

}



function openDirections(){
  window.open("https://goo.gl/maps/xGFyhd8ZQHfRYp7t7","_blank");
}

function openEnquiry(){
  window.open("https://api.whatsapp.com/send?phone=919742612341","_blank");
}