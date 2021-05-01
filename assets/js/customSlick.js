$(document).ready(function(){
  // $('.demo').slick();
  $('.main-page-carousel').slick({
    draggable: false,
    speed: 500,
    infinite: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fas fa-caret-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-caret-right"></i></div>',
    zIndex: 10000,
    adaptiveHeight: true
});

$('.main-page-inner-carousel').slick({
  dots:true,
  arrows:false,
  initialSlide: 0,
  // autoplay: true,
  // autoplaySpeed: 1000,
});
});



const mainPageCarousel = document.querySelector(".main-page-carousel");
mainPageCarousel.innerHTML="";

const keys = Object.keys(mainSlide);

for (const slide of keys){

  var mainPageSlide = document.createElement("div");
      mainPageSlide.classList.add("main-page-slides");
      mainPageCarousel.appendChild(mainPageSlide);

  var indexDiv = document.createElement("div");
      indexDiv.classList.add("index-div");
      mainPageSlide.appendChild(indexDiv);

  var detailSide = document.createElement("div");
      detailSide.classList.add("detail-side");
      indexDiv.appendChild(detailSide);

  var adSide = document.createElement("div");
      adSide.classList.add("ad-side");
      indexDiv.appendChild(adSide);

  var adImg = document.createElement('img');
      adImg.src = eval(`mainSlide.${slide}.banner.image`);
      adSide.appendChild(adImg);

  var innerCarousels = document.createElement("div");
      innerCarousels.classList.add("inner-carousels");
      detailSide.appendChild(innerCarousels);

  var leftCarousel = document.createElement("div");
      leftCarousel.classList.add("left-carousel");
      leftCarousel.classList.add("slider");
      leftCarousel.classList.add("main-page-inner-carousel");
      innerCarousels.appendChild(leftCarousel);

  var leftMediaType =eval(`mainSlide.${slide}.leftSlideMediaType`);
  var leftMediaLink =eval(`mainSlide.${slide}.leftSlideMediaLink`);

  for (let j = 0; j < leftMediaType.length; j++) {
    var innerImgVid = document.createElement("div");
        innerImgVid .classList.add("imgVid");
        leftCarousel.appendChild(innerImgVid);
    if (leftMediaType[j]=="image"){
      var cImg = document.createElement('img');
          cImg.classList.add("img");
          cImg.src = leftMediaLink[j];
          innerImgVid.appendChild(cImg);
      var pp = document.createElement("div");
          pp.classList.add("fullScreenBtn");
          pp.classList.add("fullScreenBtnImg");
          innerImgVid.appendChild(pp);

    }else if(leftMediaType[j]=="video"){
      var cVid = document.createElement('video');
          cVid.classList.add("video");
          cVid.src = leftMediaLink[j];
          innerImgVid.appendChild(cVid);
      var pp = document.createElement("div");
          pp.classList.add("playpause");
          innerImgVid.appendChild(pp);
      var pp = document.createElement("div");
          pp.classList.add("fullScreenBtn");
          pp.classList.add("fullScreenBtnVid");
          innerImgVid.appendChild(pp);
    }
  }

  var rightCarousel = document.createElement("div");
      rightCarousel.classList.add("right-carousel");
      rightCarousel.classList.add("slider");
      rightCarousel.classList.add("main-page-inner-carousel");
      innerCarousels.appendChild(rightCarousel);

  var rightMediaType =eval(`mainSlide.${slide}.rightSlideMediaType`);
  var rightMediaLink =eval(`mainSlide.${slide}.rightSlideMediaLink`);

  for (let j = 0; j < rightMediaType.length; j++) {
    var innerImgVid = document.createElement("div");
        innerImgVid .classList.add("imgVid");
        rightCarousel.appendChild(innerImgVid);
    if (rightMediaType[j]=="image"){
      var cImg = document.createElement('img');
          cImg.classList.add("img");
          cImg.src = rightMediaLink[j];
          innerImgVid.appendChild(cImg);
      var pp = document.createElement("div");
          pp.classList.add("fullScreenBtn");
          pp.classList.add("fullScreenBtnImg");
          innerImgVid.appendChild(pp);

    }else if(rightMediaType[j]=="video"){
      var cVid = document.createElement('video');
          cVid.classList.add("video");
          cVid.src = rightMediaLink[j];
          innerImgVid.appendChild(cVid);
      var pp = document.createElement("div");
          pp.classList.add("playpause");
          innerImgVid.appendChild(pp);
      var pp = document.createElement("div");
          pp.classList.add("fullScreenBtn");
          pp.classList.add("fullScreenBtnVid");
          innerImgVid.appendChild(pp);
    }
  }


  var titles = document.createElement("div");
      titles.classList.add("titles");
      detailSide.appendChild(titles);

  var titlesList =eval(`mainSlide.${slide}.titles`);

  for (let j = 0; j < titlesList.length; j++) {
    var titlesH1 = document.createElement("h1");
        titlesH1.innerText=titlesList[j];
        titles.appendChild(titlesH1);
  }

  if (eval(`mainSlide.${slide}.downloads`)){

    var downloadsTitles =eval(`mainSlide.${slide}.downloads.title`);
    var downloadsImages =eval(`mainSlide.${slide}.downloads.image`);
    var downloadsLinkss =eval(`mainSlide.${slide}.downloads.link`);

    var mainTitle           = "Downloads";

    createABottomLinkSection(downloadsTitles,downloadsImages,downloadsLinkss,mainTitle)
  }

  if (eval(`mainSlide.${slide}.links`)){

    var linksTitles =eval(`mainSlide.${slide}.links.title`);
    var linksImages =eval(`mainSlide.${slide}.links.image`);
    var linksLinkss =eval(`mainSlide.${slide}.links.link`);

    var mainTitle           = "Links";

    createABottomLinkSection(linksTitles,linksImages,linksLinkss,mainTitle)
  }







  if (eval(`mainSlide.${slide}.specialOffer`)){

    var specialOffersTitles =eval(`mainSlide.${slide}.specialOffer.title`);
    var specialOffersImages =eval(`mainSlide.${slide}.specialOffer.image`);
    var specialOffersLinkss =eval(`mainSlide.${slide}.specialOffer.link`);
    var mainTitle           = "Special Offers";

    createABottomLinkSection(specialOffersTitles,specialOffersImages,specialOffersLinkss,mainTitle)
  }
}




function createABottomLinkSection(titles,images,links,mainTitle){

  var bottomLinks = document.createElement("div");
      bottomLinks.classList.add("bottom-links");
      if (mainTitle == "Special Offers"){
        bottomLinks.classList.add("special-offer-links");
      }
      detailSide.appendChild(bottomLinks);

  var titlesH1 = document.createElement("h1");
      titlesH1.innerText = mainTitle;
      bottomLinks.appendChild(titlesH1);

  var bottomUl = document.createElement("ul")
      bottomLinks.appendChild(bottomUl);

  for (let j = 0; j < titles.length; j++) {
    var li = document.createElement("li");
        bottomUl.appendChild(li);
    var a = document.createElement("a");
        li.appendChild(a);
    var divB = document.createElement("div");
        divB.classList.add("img");
        a.appendChild(divB);
    var img = document.createElement("img");
        img.src = images[j];
        divB.appendChild(img);
    var p = document.createElement("p");
        p.innerText = titles[j];
        a.appendChild(p);
  }
}



$('.playpause').click(function () {
  if($(this).parent().children(".video").get(0).paused){
    $(this).parent().children(".video").get(0).play();
    $(this).parent().children(".playpause").addClass("video-playing");
    // $(this).parent().children(".playpause").fadeOut();
    }else{
      $(this).parent().children(".video").get(0).pause();
      $(this).parent().children(".playpause").removeClass("video-playing");
      // $(this).parent().children(".playpause").fadeIn();
    }
});
// $('.playpause').parent().click(function (){
//   $(this)..children(".video").get(0).pause();
//   $(this).parent().children(".playpause").fadeIn();
// });

$('.fullScreenBtnImg').click(function () {
  var imgSrc = $(this).parent().closest('div').children("img").attr('src');

  $('.full-screen-img-div').children(".img").css('background-image', 'url(' + imgSrc + ')');
  $('.full-screen-img-div').addClass("img-active");
});

$('.fullScreenBtnVid').click(function () {
  var vidSrc = $(this).parent().closest('div').children("video").attr('src');

  // $('.full-screen-img-div').children("div").css('background-image', 'url(' + imgSrc + ')');
  $('.full-screen-img-div').addClass("vid-active");
$('.full-screen-img-div').children("video").attr('src', vidSrc);
// alert(vidSrc);
});
$('.close-btn2').click(function () {

        $('.full-screen-img-div').removeClass("img-active");
        $('.full-screen-img-div').children(".img").css('background-image', 'url(" ")');
        $('.full-screen-img-div').removeClass("vid-active");
        $('.full-screen-img-div').children("video").attr('src', "");

});
