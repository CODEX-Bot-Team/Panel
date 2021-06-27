function loaded() {
    console.log(Query)
    if (Query.id != null) {
        document.getElementById("login").remove()
        document.getElementById("text").innerHTML = "Welcome, " + Query.user + "!" + "<br>You can now head to the next page!"
        document.getElementById("next-button").setAttribute("class", "next round enabled")
        document.getElementById("next-button").setAttribute("href", "/Setup/Instance/")

        SetCookie("replit_name", Query.name)
        SetCookie("replit_id", Query.id)

        localStorage.replit_name = Query.name
        localStorage.replit_id = Query.id

    } else {
        document.getElementById("login").setAttribute("href", "https://Replit-auth.scriptitwithcod.repl.co/?return=" + document.location.href)
    }

    
}

window.onload = loaded