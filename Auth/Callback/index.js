import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { request } from "https://cdn.skypack.dev/@octokit/request";


function Err() {
    document.getElementById("message").innerHTML = "<a style=\"color: white; font-size: 25px\" href=\"https://codex-bot.ga\">Home</a>"
    document.getElementById("image").setAttribute("src", "../../Static/Images/ohno.png")
    document.getElementById("title").innerText = "An error occured"
}

async function callback() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const Query = Object.fromEntries(urlSearchParams.entries());
    const DiscordURL = BASEDISCORD + APIURL + OAUTH2 + "authorize?client_id=" + CLIENT_ID + "&" + "redirect_uri=https%3A%2F%2Fpanel.codex-bot.ga%2Fauth%2Fcallback" + "&" + "response_type=token" + "&" + "scope="+ "email" + "%20" + "guilds" + "%20" + "guilds.join"+ "%20" + "identify"
  
    const Hash = GetHash()
  
    if (Hash) {
        if (Hash.access_token) {

            SetCookie("discord_access", Hash.access_token)
            SetCookie("discord_type", Hash.token_type)
            SetCookie("discord_expire", Hash.expires_in)
            SetCookie("discord_scope", Hash.scope)

            localStorage.discord_access = Hash.access_token
            localStorage.discord_type = Hash.token_type
            localStorage.discord_expire = Hash.expires_in
            localStorage.discord_scope = Hash.scope

            const AuthString = Hash.token_type + " " + Hash.access_token

            const RequestData = await request(
                {
                    method: "GET",
                    baseUrl: BASEDISCORD,
                    url: APIURL + APIVERSION + USER, 
                    headers: {
                        'Authorization': AuthString,
                        'Content-Type': 'application/json'
                    },
                }
            );

            console.log(RequestData)
            const UserData = RequestData.data

            console.log(UserData)

            const AvatarLink = "https://cdn.discordapp.com/avatars/" + UserData.id + "/" + UserData.avatar + ".png"

            document.getElementById("image").setAttribute("src", AvatarLink)
            document.getElementById("title").innerText = "Welcome  " + UserData.username + "#" + UserData.discriminator

            SetCookie("discord_name", encodeURIComponent(UserData.username))
            SetCookie("discord_avatar", encodeURIComponent(AvatarLink))

            localStorage.discord_name = UserData.username
            localStorage.discord_id = UserData.id
            localStorage.discord_avatar = AvatarLink

            setTimeout(
                function () {
                    window.location = "/"
                },
                1500
            )

        } else {
            Err()
        }

    } else {
        // https://discord.com/api/oauth2/authorize?client_id=769547693876969492&redirect_uri=https%3A%2F%2Fcodex-bot.ga&response_type=code&scope=email%20guilds%20guilds.join%20identify
        Err()
    }

};

window.onload = callback