  //***********************start  ourskills************************************ 

  let ourskills = document.querySelector(".ourskills");
  let ourskillsSpans = document.querySelectorAll(".ourskills .the-progress span");


  window.onscroll = function() {
      if (window.scrollY >= ourskills.offsetTop - 250) {
          ourskillsSpans.forEach((span) => {
              span.style.width = span.dataset.width;
          });
      }
  }

  //************************end ourskills***********************************


  //************************start event***********************************



  //the end of the year
  let countdownEvent = new Date("Dec 31, 2022 23:59:59").getTime();
  let counterEvent = setInterval(() => {
      //get date now
      let dateNow = new Date().getTime();
      // find the date differance between Now And countdownEvent Date
      let dateDif = countdownEvent - dateNow;
      //get times units
      let Days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
      let Houres = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let Minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
      let Seconds = Math.floor((dateDif % (1000 * 60)) / (1000));

      document.querySelector(".events .time .unit .days").innerHTML = Days < 10 ? `0${ Days}` : Days;
      document.querySelector(".events .time .unit .hours").innerHTML = Houres < 10 ? `0${ Houres}` : Houres;
      document.querySelector(".events .time .unit .min").innerHTML = Minutes < 10 ? `0${ Minutes}` : Minutes;
      document.querySelector(".events .time .unit .sec").innerHTML = Seconds < 10 ? `0${ Seconds}` : Seconds;


      if (dateDif < 0) {
          clearInterval();
          document.querySelector(".events .time .unit .days").innerHTML = "0";
          document.querySelector(".events .time .unit .hours").innerHTML = "0";
          document.querySelector(".events .time .unit .min").innerHTML = "0";
          document.querySelector(".events .time .unit .sec").innerHTML = "0";

      }

  }, 1000);


  //************************end event***********************************