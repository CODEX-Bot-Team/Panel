function Err() {
    document.getElementById("message").innerHTML = "<a style=\"color: white; font-size: 25px\" href=\"https://codex-bot.ga\">Home</a>"
    document.getElementById("image").setAttribute("src", "../../Static/Images/ohno.png")
    document.getElementById("title").innerText = "An error occured"
}

window.onload=()=>{

    const urlSearchParams = new URLSearchParams(window.location.search);
    const Query = Object.fromEntries(urlSearchParams.entries());
    const DiscordURL = BASEDISCORD + APIURL + OAUTH2 + "authorize?client_id=" + CLIENT_ID + "&" + "redirect_uri=https%3A%2F%2Fpanel.codex-bot.ga%2Fauth%2Fcallback" + "&" + "response_type=token" + "&" + "scope="+ "email" + "%20" + "guilds" + "%20" + "guilds.join"+ "%20" + "identify"
  
    const Hash = GetHash()
  
    if (Hash) {
        console.log(Hash)
        if (Hash.access_token) {
            console.log(Hash.access_token)
            SetCookie("discord_access", Hash.access_token)
            SetCookie("discord_type", Hash.token_type)
            SetCookie("discord_expire", Hash.expires_in)
            SetCookie("discord_scope", Hash.scope)

            const Data = GetData(
                "GET",
                BASEDISCORD + APIURL + APIVERSION + USER,
                {
                    Authentication: Hash.token_type + " " + Hash.access_token,
                    'Content-Type': 'application/json'
                }
            )

            console.log(Data)
        } else {
            Err()
        }

    } else {
        // https://discord.com/api/oauth2/authorize?client_id=769547693876969492&redirect_uri=https%3A%2F%2Fcodex-bot.ga&response_type=code&scope=email%20guilds%20guilds.join%20identify
        Err()
    }

};