menu_list_array["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Panner Tikka Pizza", "Chessy Pizza", "Delux Veggie Pizza", "Double Chesse Pizza", "Cheese And Corn Pizza", "Tomato Pizza"]
function getmenu()
  var htmldata;
  htmldata="<ol class='menulist'>"
  menu_list_array.sort();
  for(var i=0;i<menu_list_array.length;i++) {
      htmldata=htmldata+ '<li>'+ menu_list_array [i] + '</li>'
  }
  htmldata=htmldata+ "</ol>"
  document.getElementById("display_menu").innerHTML = htmldata;
