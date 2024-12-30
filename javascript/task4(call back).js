function authenticateUser(username, password, callback) {
    console.log("Authenticating user...");
    setTimeout(() => {
        if (username === "admin" && password === "1234") {
            callback(null, { username: "admin", role: "COE" });
        } else {
            callback("Authentication failed. Invalid credentials.", null);
        }
    }, 2000);
}

function displayUserDetails(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log("User authenticated successfully!");
        console.log("User Details:", user);
    }
}
authenticateUser("admin", "1234", displayUserDetails);
//authenticateUser("admin", "134", displayUserDetails);