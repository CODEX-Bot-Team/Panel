async function IsInGuild(Id) {
    var RequestData = await fetch(
        "https://Fetch-Proxy.scriptitwithcod.repl.co/request/",
        {
            method: "POST",

            body: JSON.stringify(
                {
                    Method: "GET",
                    Headers: [
                        ["Content-Type", "application/json"]
                    ],
                    Url: "https://api.codex-bot.ga/isinguild/" + Id
                }
            )
        }
    );

    var ParsedRequest = await RequestData.json()
    var Data = JSON.parse(ParsedRequest.Body)

    return Data
}





window.onload = async function() {
    
    //var Template = document.getElementsByClassName("guild-holder")[0]

    const RequestData = await fetch(
        "https://Fetch-Proxy.scriptitwithcod.repl.co/request/",
        {
            method: "POST",

            body: JSON.stringify(
                {
                    Method: "GET",
                    Headers: [
                        ["Authorization", localStorage.discord_type + " " + localStorage.discord_access],
                        ["Content-Type", "application/json"]
                    ],
                    Url: BASEDISCORD + APIURL + APIVERSION + USER + "/guilds"
                }
            )
        }
    );

    var ParsedRequest = await RequestData.json()
    var Data = JSON.parse(ParsedRequest.Body)

    for (const Guild of Data) {
        if (Guild.owner == true) {
            var IsIn = await IsInGuild(Guild.id)

            if (IsIn.Is == true) {
                var Element = document.getElementsByClassName("guild-holder")[0]
                var ElementClone = Element.cloneNode(true)

                ElementClone.getElementsByClassName("guild-title")[0].innerText = Guild.name

                if (Guild.icon != null) {
                    ElementClone.getElementsByClassName("guild-icon")[0].setAttribute("src", "https://cdn.discordapp.com/icons/" + Guild.id + "/" + Guild.icon + ".png") 
                }


                document.getElementById("guilds").appendChild(document.createElement("br"))
                document.getElementById("guilds").appendChild(ElementClone)
            } else {
                var Element = document.getElementsByClassName("guild-holder")[0]
                var ElementClone = Element.cloneNode(true)

                ElementClone.getElementsByClassName("guild-title")[0].innerText = Guild.name

                if (Guild.icon != null) {
                    ElementClone.getElementsByClassName("guild-icon")[0].setAttribute("src", "https://cdn.discordapp.com/icons/" + Guild.id + "/" + Guild.icon + ".png") 
                }

                ElementClone.setAttribute("href", "https://discord.com/api/oauth2/authorize?client_id=769547693876969492&permissions=8&disable_guild_select=true&scope=bot&guild_id=" + Guild.id)
                ElementClone.setAttribute("target", "_blank")

                document.getElementById("invites").appendChild(document.createElement("br"))
                document.getElementById("invites").appendChild(ElementClone)
            }
        }
    }

    var GuildTemplate = document.getElementsByClassName("guild-holder")[0]
    GuildTemplate.remove()

    document.getElementsByClassName("guilds")[0].children[0].remove()

    var InviteTemplate = document.getElementById("invites").firstChild
    InviteTemplate.remove()

    document.getElementById("invites").children[0].remove()
}