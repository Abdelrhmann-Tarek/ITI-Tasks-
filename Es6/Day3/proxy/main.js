let person = {};

let proxy = new Proxy(person, {
  set(target, property, value) {
    if (property === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        throw new Error(" name must be a string of exactly 7 characters");
      }
    }

    if (property === "address") {
      if (typeof value !== "string") {
        throw new Error(" address must be a string");
      }
    }

    if (property === "age") {
      if (typeof value !== "number" || value < 25 || value > 60) {
        throw new Error(" age must be a number between 25 and 60");
      }
    }

    target[property] = value;
    return true;
  }
});


try {
  proxy.name = "AbdElrh";   
  proxy.address = "Cairo";  
  proxy.age = 30;           

  console.log(proxy);       //proxy(object)

  proxy.name = "Ali";       
} catch (err) {
  console.error(err.message);  // name must be a string of exactly 7 characters

}
