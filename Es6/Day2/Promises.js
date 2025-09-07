

let usersHtml = document.getElementsByClassName("users")[0];
let postsHtml = document.getElementsByClassName("posts")[0];


async function getAllUsers() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let users = await response.json();
        for(i=0 ; i <users.length ; i++){
            
            usersHtml.innerHTML += `<button onclick="getPosts(${users[i].id})">${users[i].name}</button>`
        }
		
	} catch (error) {
		console.log(error);
	}
}

async function getPosts(userId){
    

try {
    	let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
		let posts = await response.json();
        postsHtml.innerHTML="";
        posts.forEach(element => {
        postsHtml.innerHTML+=`<div class="post"> <h3>${element.title}</h3><p>${element.body}</p></div> `;
            
        });

    
} catch (error) {
    console.log("Erorrrr")
}

}

getAllUsers();