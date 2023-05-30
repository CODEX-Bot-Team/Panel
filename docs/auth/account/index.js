import {WebRequest} from "/Static/Scripts/WebRequest.js"

async function OnLoad() {
    var DiscordUser = JSON.parse(localStorage.DiscordUser)
    var DiscordAccess = JSON.parse(localStorage.DiscordAccess)

    document.getElementById("profile-picture").src = `https://cdn.discordapp.com/avatars/${localStorage.UserId}/${DiscordUser.avatar}.png`
    document.getElementById("profile-username").innerText = `${DiscordUser.TagName}`
    document.getElementById("profile-email").innerText = `${DiscordUser.email}`

    var Connections = JSON.parse((await WebRequest(
        "GET",
        `${DISCORDCONNECTIONS}`,
        [
            [
                "Authorization",
                `${DiscordAccess.TokenType} ${DiscordAccess.AccessToken}`
            ]
        ],
        null,
        true
    )).Body)

    Connections.forEach(Connection => {
        console.log(Connection)
        if (Connection.type == "github") {
            console.log("yes")
        }
    });
    

}

window.addEventListener("load", OnLoad)