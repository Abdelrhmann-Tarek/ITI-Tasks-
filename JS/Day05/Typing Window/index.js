var myWindow;
function openNewWindow() {
	myWindow = window.open("", "", "width=500,height=200");
	var sentense = "Hello, My namr is abdelrhman tarek shawky and i am 23 years old ";
	var i =0;
    var display = myWindow.document.body;
     var myInterval = setInterval(function(){

        if(i<sentense.length){
            display.innerText += sentense[i];
            i++
        }else{ clearInterval (myInterval);

			myWindow.close();
        }


     },100);


}