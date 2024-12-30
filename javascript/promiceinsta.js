/*async function LikeCode()
{
    return  new Promise((like)=>
    {
         like("post liked successfully")
    })
}
async function commentCode()
{
    return new Promise((commentPosted)=>
    {
        commentPosted("Comment posted successfully is the post")
    })
}
async function createPost()
{
    var post= new Promise((postCreated)=>
    {
        postCreated("Post created successfully")
    })
    var [post,like,comment]=await Promise.all([post,commentCode(),LikeCode()])//destructuring la only array can be used in right side ,w/o await keyword promise all doest work but promise alone will work;
   //when commentCOde is passed instead of commentcode() it shows op/[AsyncFunction: commentCode]
    console.log(post);
    console.log(like);
    console.log(comment);

}
createPost()
*/

//eg 2

/*
async function LikeCode() {
    return new Promise((resolve) => {
        resolve("Post liked successfully");
    });
}

async function commentCode() {
    return new Promise((resolve) => {
        resolve("Comment posted successfully on the post");
    });
}

async function createPost() {
    var post = new Promise((resolve) => {
        resolve("Post created successfully");
    });

    var [postMsg, likeMsg, commentMsg] = await Promise.all([post, commentCode(), LikeCode()]);
    console.log(postMsg);
    console.log(likeMsg);
    console.log(commentMsg);
}

// New functions
async function shareCode() {
    return new Promise((resolve) => {
        resolve("Post shared successfully");
    });
}

async function unshareCode() {
    return new Promise((resolve) => {
        resolve("Post unshared successfully");
    });
}

async function unpostCode() {
    return new Promise((resolve) => {
        resolve("Post deleted successfully");
    });
}

async function uncommentCode() {
    return new Promise((resolve) => {
        resolve("Comment removed successfully");
    });
}

async function managePost() {
    var post = new Promise((resolve) => {
        resolve("Post created successfully");
    });

    var [postMsg, likeMsg, commentMsg, shareMsg, unshareMsg, unpostMsg, uncommentMsg] = await Promise.all([
        post,
        LikeCode(),
        commentCode(),
        shareCode(),
        unshareCode(),
        unpostCode(),
        uncommentCode()
    ]);

    console.log(postMsg);
    console.log(likeMsg);
    console.log(commentMsg);
    console.log(shareMsg);
    console.log(unshareMsg);
    console.log(unpostMsg);
    console.log(uncommentMsg);
}

managePost();
*/
//eg 3 giving false
async function LikeCode() {
    return new Promise((resolve, reject) => {
        const success = false; // Simulate success or failure
        success ? resolve("Post liked successfully") : reject("Failed to like the post");
    });
}

async function commentCode() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        success ? resolve("Comment posted successfully on the post") : reject("Failed to post comment");
    });
}

async function shareCode() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        success ? resolve("Post shared successfully") : reject("Failed to share the post");
    });
}

async function unshareCode() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        success ? resolve("Post unshared successfully") : reject("Failed to unshare the post");
    });
}

async function unpostCode() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        success ? resolve("Post deleted successfully") : reject("Failed to delete the post");
    });
}

async function uncommentCode() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure
        success ? resolve("Comment removed successfully") : reject("Failed to remove comment");
    });
}

async function managePost() {
    try {
        const results = await Promise.all([
            LikeCode(),
            commentCode(),
            shareCode(),
            unshareCode(),
            unpostCode(),
            uncommentCode(),
        ]);

        console.log("Results:");
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

managePost();