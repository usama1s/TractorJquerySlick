// var i=0;
// function expand(){
//   if(i==0){
//     document.getElementById("menu").style.transform="scale(3)";
//      document.getElementById("plus").style.transform="rotate(45deg)";
//     i=1;
//   }
//   else{   document.getElementById("menu").style.transform="scale(0)";
//    document.getElementById("plus").style.transform="rotate(0deg)";
//     i=0;
//   }
// }
const menuList = {
  menu1 : {
    titles : [
      "first",
      "Menu 2",
      "Menu 3",
      "Menu 4",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu2 : {
    titles : [
      "second",
      "Menu 2",
      "Menu 3",
      "Menu 4",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu3 : {
    titles : [
      "AFS CONNECT™ MAGNUM / TRUE-TANDEM™ ",
      "AFS CONNECT™ STEIGER ECOLO-TIGER 875 DISK RIPPER",
      "AFS CONNECT™ STEIGER SPEED-TILLER™ 475 HIGH-SPEED DISK",
      "VIBRA-TINE™ 265 S-TINE FIELD CULTIVATOR",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu4 : {
    titles : [
      "fourt",
      "Menu 2",
      "Menu 3",
      "Menu 4",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu5 : {
    titles : [
      "fithf",
      "Menu 2",
      "Menu 3",
      "Menu 4",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu6 : {
    titles : [
      "sixth",
      "Menu 2",
      "Menu 3",
      "Menu 4",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu7 : {
    titles : [
      "FARMALL® UTILITY 75A / L610 LOADER",
      "FARMALL® UTILITY 115A / SB541 SMALL SQUARE BALER",
      "FARMALL® UTILITY 115A",
      "POULTRY CONFIGURATION",
      "VESTRUM™ 130 / L103 LOADER",
      "MAXXUM® 150 / RB565 ROUND BALER",
      "MAXXUM® 150 / DC133 DISC MOWER CONDITIONER",
      "PUMA® 240 / LB334XL LARGE SQUARE BALER",
      "AFS CONNECT™ MAGNUM™ /LB436 HD LARGE SQUARE BALER",
      "TV370B",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3",
      "link 4"]
  },
  menu8 : {
    titles : [
      "eight",
      "Menu 2",
      "Menu 3",
    ],
    links : [
      "link 1",
      "link 2",
      "link 3"]
  }
}
const linksDiv = document.querySelector(".links-div");
const menuLinks = document.querySelector(".menu").querySelectorAll("a");

closeAllMenus();

function openMenu(id){
  closeAllMenus();
  document.getElementById(id).parentElement.classList.add("active-menu");
  var titles = Object.values(menuList)[id-1].titles;
  var linkss = Object.values(menuList)[id-1].links;

  var linksInDiv = document.createElement("div");
      linksInDiv.classList.add("links-inner-div");
      linksDiv.appendChild(linksInDiv);

  for (let i=0; i<titles.length;i++){
    var a = document.createElement("a");
        linksInDiv.appendChild(a);
    var divv = document.createElement("div");
        a.href = linkss[i];
        a.appendChild(divv);
    var p = document.createElement("p");
        divv.appendChild(p);
        p.innerText = titles[i];
  }
  linksDiv.classList.add("active");
}


var closeBtns = document.getElementsByClassName('close-btn');

for(let j = 0; j < closeBtns.length; j++){
  closeBtns[j].addEventListener("click", function(){
    closeAllMenus();

  });

}


function closeAllMenus(){
  for(let i=0; i<menuLinks.length;i++){
    menuLinks[i].parentElement.classList.remove("active-menu");
  }
  linksDiv.innerHTML = "";
  linksDiv.classList.remove("active");
}
