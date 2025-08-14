function createUser(type,name){
    var user= {
        type,name 
    };
    if(type == 'admin'){
        user.manageUsers = function(){
            console.log(`${this.name} is managing users`);
            
        }
    }else if (type == 'user'){
        user.viewContent=function(){
            console.log(`${this.name} is viewing content`)
        }

    }

    return user;


}

var test1 =createUser("admin","abdo");
var test2=createUser("user","salma");
test1.manageUsers();
test2.viewContent();
test1.viewContent();//error  
test2.manageUsers();//error 