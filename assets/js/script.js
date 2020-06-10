filterSelection("filterDiv")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    Remove(x[i], "show");
    if (x[i].className.indexOf(c) > -1) filter(x[i], "show");
  }
}

// Show filtered elements
function filter(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function Remove(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




function GetSelectedValue(){
  var e = document.getElementById("select");
  var result = e.options[e.selectedIndex].value;
  let name =  document.querySelector("input[name=name]").value;
  let contact =  document.querySelector("input[name=contact]").value;
  let adress =  document.querySelector("input[name=adress]").value;
  let mobile =  document.querySelector("input[name=mobile]").value;

  if(result && name && contact && adress && mobile){
       alert (result)
     }
     else{
      // alert("all fields are required");
      return false;
   }
  document.getElementById("result").innerHTML = result;
}





$(document).ready(function(){
  $(".content").slice(0, 0).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 6).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
    
  });
});





