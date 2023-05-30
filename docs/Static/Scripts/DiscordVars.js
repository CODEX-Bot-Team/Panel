BASEDISCORD = "https://discord.com/"
APIURL = "api/"
APIVERSION = "v8/"
OAUTH2 = "oauth2/"

DISCORDCONNECTIONS = BASEDISCORD + APIURL + APIVERSION + "/users/@me/connections"

USER = "users/@me"

CLIENT_ID = "769547693876969492"

AUTHURL = BASEDISCORD + APIURL + OAUTH2 + "authorize?prompt=none&client_id=" + CLIENT_ID + "&" + "redirect_uri=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + "/auth/callback/") + "&" + "response_type=code" + "&" + "scope="+ encodeURIComponent("email guilds guilds.join identify")

LOCALAPI = {
    localhost : {
        HOST : "http://localhost:5343",
        OPENSESSION: "/API/StartSession",
        INSTANCES: "/API/Instances"
    }
}