<template>
    <div class="box">
    	<ul>
    		<li><img src="../../../assets/imgs/swiper/1000199.jpg"/></li>
    		<li><img src="../../../assets/imgs/275370.jpg"/></li>
    		<li><img src="../../../assets/imgs/276317.jpg"/></li>
    		<li><img src="../../../assets/imgs/283359.jpg"/></li>
    	</ul>
    	<ol>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    	</ol>
    </div>
</template>

<script>
	var box = document.querySelector('.box');
  var p = document.querySelectorAll('p');
  var ol = document.querySelector('ol');
  var lis = ol.querySelectorAll('li');
  var ul = document.querySelector('ul');

  //默认显示第一张图片点亮第一个小圆圈；
  lis[0].className = 'click';

  for(var i=0; i<lis.length; i++){
    lis[i].setAttribute('index',i);
  }

  //自动播放
  var t=0;
  var time = setInterval(function() {
        t++;
        if(t==4){
          ul.style.left = 0;
          t=0;
        }
        tranfrom();
        circle();
    }, 2500);

  //手指拖动轮播图
  var stratX;
  var moveX;
  box.addEventListener('touchstart',function(e){
    stratX = e.targetTouches[0].pageX;
  //				console.log(stratX+','+stratY);
    clearInterval(time);
  })
  box.addEventListener('touchmove',function(e) {
    moveX = e.targetTouches[0].pageX - stratX;
  //				console.log(moveX);
    var x = -t*963 + moveX;
    ul.style.transition = 'none';
    ul.style.transform = 'translateX(' + x + 'px)';
  })
  box.addEventListener('touchend',function(e) {
    //当手指滑动距离大于125时，弹到下一张或上一张图片
    if(Math.abs(moveX) >= 125){
      //上一张
      if(moveX >= 0){
        t--;
      }
      //下一张
      else{
        t++;
      }
      console.log('t='+t);
      if(t==4){
          t=0;
      }
      if(t==-1){
          t=3;
      }
      tranfrom();
    }

    //当手指滑动距离小于125时，弹回原来的图片
    else{
      tranfrom();
    }

    //手指松开后继续自动播放
    time = setInterval(function() {
        t++;
        if(t==4){
          ul.style.left = 0;
          t=0;
        }
        tranfrom();
        circle();
    }, 2500);
  })

  //当点击小圆圈时小圆圈变白，其余的圆圈不变；
  for(var i=0; i<lis.length; i++){
    lis[i].addEventListener('click',function() {
      //排他思想：
      for(var j=0; j<lis.length; j++){
        lis[j].className = '';
      }
      this.className = 'click';

      //当点击小圆圈时，显示出对应的图片；
      var index = this.getAttribute('index');
  //						console.log(index);
  //						ul.style.left = -ul.clientWidth*index + 'px';
      t=index;
      tranfrom();
    })
  }

  //点亮当前显示的图片对应的小圆圈；
  function circle() {
    for(var j=0; j<lis.length; j++){
        lis[j].className = '';
      }
    lis[t].className = 'click';
  }

  //封装移动函数
  function tranfrom() {
    var x = -t*963;
    ul.style.transition = 'all .3s';
    ul.style.transform = 'translateX(' + x + 'px)';
  }
</script>

<style scoped>
  .box {
  	width: 963px; height: 350px;
  	margin: 10px auto;
  	position: relative;
  	overflow: hidden;
  }
  ul {
  	display: flex;
  	position: absolute;
  	width: 963px; height: 350px;
  	margin: 0; padding: 0;
  	list-style: none;
  }
  ul li img {
  	display: block;
  	width: 963px; height: 350px;
  }
  ol {
  	position: absolute;
  	width: 161px; height: 54px;
  	list-style-type: circle;
  	font-size: 60px;
  	left: 388px; bottom: -48px;
  	border-radius: 10%;
  	background: rgba(0, 0, 0, .1);
  	text-align: center; line-height: 54px;
  	/*text-align: center; line-height: 25px;*/
  }
  ol li {
  	float: left;
  	margin-left: 31px;
  	margin-right: 9px;
  }
  .click {
  	list-style-type: disc;
  	color: white;
  }
</style>
