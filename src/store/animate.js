//左右滚动
function animate1(obj, target, callback) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		var x;
		if(target - obj.offsetLeft > 0)
			x =Math.ceil((target - obj.offsetLeft) / 10); 
		else 
			x =Math.floor((target - obj.offsetLeft) / 10); 
		if(obj.offsetLeft == target){
			clearInterval(obj.time);
//			if(callback){
//				callback();
//			}
			callback && callback();
		}
		obj.style.left = obj.offsetLeft + x + 'px';
	}, 15);
}

//上下滚动
function animate2(obj, target, callback) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		var x;
		if(target - window.pageYOffset > 0)
			x =Math.ceil((target - window.pageYOffset) / 10); 
		else 
			x =Math.floor((target - window.pageYOffset) / 10); 
		if(window.pageYOffset == target){
			clearInterval(obj.time);
			// if(callback){
			// 	callback();
			// }
			callback && callback();
		}
//		obj.style.left = window.pageYOffset + x + 'px';
		window.scroll(0, window.pageYOffset + x);
	}, 10);
}
