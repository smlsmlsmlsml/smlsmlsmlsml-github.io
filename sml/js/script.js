 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });



var music = document.querySelector(".music");
var gif = document.querySelector(".gif");
var off = document.querySelector(".off");
var audio = document.querySelector("audio");
var floot = 1;

music.onclick = function(){
    if(floot == 1){
        gif.style.display = "none";
        off.style.animation = "none";
        audio.pause();
        floot=0;
        
    }
    else{
        off.style.animation = "chat 1s linear infinite";
        gif.style.display = "block";
        audio.play();
        floot = 1;
    }
}


