  var result ; 
  document.addEventListener("keydown", function (event) {
                alert(
                "ASCII Code: " + event.keyCode + "\n" +
                "Alt Pressed: " + event.altKey + "\n" +
                "Ctrl Pressed: " + event.ctrlKey + "\n" +
                "Shift Pressed: " + event.shiftKey
            );
        });
        document.addEventListener("contextmenu", function (event) {
            event.preventDefault();     
            
        });