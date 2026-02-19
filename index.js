function test() {
    let name = "something";
    let age = 10;

    if (age >= 18) {
        console.log("Eligible to vote");
    }

    if (name.length() > 10) {
        console.log("Name cannot contain more than 10 chars");
    }
    console.log("Name: " + name);   
}