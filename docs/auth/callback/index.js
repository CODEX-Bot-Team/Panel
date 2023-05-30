import {WebRequest} from "../../Static/Scripts/WebRequest.js"


async function callback() {

    console.log(Query)

    var ApiLinks = LOCALAPI[location.host]

    var Data = await (await WebRequest(
        "GET",
        ApiLinks.HOST + ApiLinks.OPENSESSION + "?code=" + Query.code + "&url=" + location.origin + location.pathname,
        [],
        null,
        false
    )).Raw.json()

    console.log(Data)
    
    localStorage.DiscordAccess = JSON.stringify(Data.DiscordAccess)
    localStorage.DiscordUser = JSON.stringify(Data.DiscordUser)
    localStorage.SessionId = Data.SessionId
    localStorage.UserId = Data.UserId
    localStorage.SessionExpire = Data.SessionExpire
    localStorage.New = Data.New

    if (Data.New == true) {
        document.getElementById("message").innerText = "Looks like it's your first time here :D"
    }

    document.getElementById("title").innerText = "Welcome " + JSON.parse(localStorage.DiscordUser).username
    document.getElementById("image").setAttribute("src", "https://cdn.discordapp.com/avatars/" + Data.UserId + "/" + Data.DiscordUser.avatar + ".png") 

    await Sleep(1500)
    location.pathname = "/"

};

window.addEventListener("load", callback)