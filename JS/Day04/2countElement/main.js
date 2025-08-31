function showResult(){
var tagName = document.getElementsByName("Tag-name")[0].value;
// console.log(tagName);
var returnTags=document.querySelectorAll(tagName);
// console.log(returnTags);
console.log(returnTags.length);
// ==========================================================
var className = document.getElementById("class-name").value;
// debugger;
var selector = "." + className;
var returnClasses=document.querySelectorAll(selector);
console.log(returnClasses.length);

var getId= document.getElementById("id").value;
var idResult ;
if(document.getElementById(getId))   idResult=true 
    else idResult=false;
// ========================================

var name = document.getElementsByName("names")[0].value;
// console.log(tagName);

var returnName=document.getElementsByName(name);
// console.log(returnTags);
// var nameResult=nameResult.innerHtml
// console.log(name.length);
var result = document.querySelector("h1");
result .innerHTML = `${returnTags.length} <br> ${returnClasses.length} <br> ${idResult} <br> ${name,length}`;


}


