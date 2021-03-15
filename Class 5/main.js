$("#loginBtn").click(function (e) {
    e.preventDefault();



    var email = $("#email").val();
    var password = $("#password").val();


    // firebase authentication 

});





$("#getData").click(async function (e) {
    e.preventDefault();
    var data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
        return res.json()
    })

    $("p").prepend("asdasd");
});