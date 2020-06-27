$(document).ready(function() 

{

  function date()
{

$("#currentDay").text(moment())


};

date();


function colorChanger() { 
  
  
  var nowHour = moment().hours();

  $(".time-block").each((index,element) => {


  var plannerHour = parseInt($(element).attr("id").replace("time-",""));
   

    if(plannerHour < nowHour){
      $(element).removeClass("past")
      //$(this).addClass("present");
    }

    else if(plannerHour === nowHour) {
      $(element).removeClass("past")
      $(element).addClass("present")

    }

    else {
      $(element).removeClass("past")
      $(element).removeClass("present")
      $(element).addClass("future");

    };


  });




};




colorChanger()



$(".saveBtn").on("click", function(){

  var task = $(this).siblings(".description").val();
  //var when = $(element).parent().attr("id");
  //var when = moment() couldnt make it work with .getitem

  //var when= { 
    //id: ,
    //moment: moment() 
  //}

  var when = $(this).parent().attr("id")
  
  localStorage.setItem(when,task)

});




$("time-9 .description").val(localStorage.getItem("time-9"))

$("#time-10 .description").val(localStorage.getItem("time-10"));
$("#time-11 .description").val(localStorage.getItem("time-11"));
$("#time-12 .description").val(localStorage.getItem("time-12"));
$("#time-13 .description").val(localStorage.getItem("time-13"));
$("#time-14 .description").val(localStorage.getItem("time-14"));
$("#time-15 .description").val(localStorage.getItem("time-15"));
$("#time-16 .description").val(localStorage.getItem("time-16"));
$("#time-17 .description").val(localStorage.getItem("time-17"));





});
