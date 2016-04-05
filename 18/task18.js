/*
* numberArray,数字，存储用户输入的数字
*/
var numberArray = [];

/**
 * 渲染数字队列
 */
 function renderNumberList(){
 	var numberHtml = "";
 	var length = numberArray.length;
 	for(var i=0;i<length;i++){
 		numberHtml += "<li class='del-number' data-index='"+i+"'>"+numberArray[i]+"</li>";
 	} 
 	var numberListElement = document.getElementById("number-list");
 	numberListElement.innerHTML = numberHtml;

 	//绑定删除事件
 	var list = document.getElementsByClassName("del-number");
 	
 	for (var j = 0; j < length; j++) {
 		list[j].onclick = delNumberByIndex(j);
 		
 	};
 }

 /**
  * 验证数字
  */
 function isNum(number){
 	
 	var rNum=/^\d+$/;
 	if (rNum.test(number)) {
 		return true;
 	}
 	else{
 		alert("请输入一个数字");
 		return false;
 	}
 }

 /**
  * 左侧入
  */
 function leftIn(){
 	var numberInputElement = document.getElementById("number-input");
 	var numberValue = numberInputElement.value;

 	if (!isNum(numberValue)) {
 		return ;
 	};

 	numberArray.unshift(numberValue);
 	numberInputElement.value = "";

 	renderNumberList();
 }
 /**
  * 右侧入
  */
 function rightIn(){
 	var numberInputElement = document.getElementById("number-input");
 	var numberValue = numberInputElement.value;

 	if (!isNum(numberValue)) {
 		return ;
 	};

 	numberArray.push(numberValue);
 	numberInputElement.value = "";

 	renderNumberList();
 }
 /**
  * 左侧出
  */
 function leftOut(){
 	alert(numberArray.shift());
 	renderNumberList();
 }
 /**
  * 右侧出
  */
 function rightOut(){
 	alert(numberArray.pop());
 	renderNumberList();
 }

 /**
  * 删除指定元素
  */
 function delNumberByIndex(index){
 	
 	return function(){
 		alert(numberArray.splice(index,1));
 		renderNumberList();
 	}	
 }

 function init(){
 	renderNumberList();
 	document.getElementById("left-in").onclick = leftIn;
 	document.getElementById("right-in").onclick = rightIn;
 	document.getElementById("left-out").onclick = leftOut;
 	document.getElementById("right-out").onclick = rightOut;
	
 }

 init();