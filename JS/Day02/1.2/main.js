function isPalindrome(userString) {
    var i = 0;
    var j = userString.length - 1;
    while (i < j) {

        if (userString[i] != userString[j]) {
            return false;
        };
        i++;
        j--;
    }
    console.log("true")
    return true;
}

var userString = prompt("Enter string...");
var isSenstive = confirm("do you want case sensitivity?...");
userString = isSenstive ? userString : userString.toLowerCase();
var result = isPalindrome(userString);
document.writeln(`<h1>${userString} ${result ? "is" : "isn't"} palindrome</h1>`)




