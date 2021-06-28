BASEDISCORD = "https://discord.com/"
APIURL = "api/"
APIVERSION = "v8/"
OAUTH2 = "oauth2/"

USER = "users/@me"

CLIENT_ID = "769547693876969492"

AUTHURL = BASEDISCORD + APIURL + OAUTH2 + "authorize?client_id=" + CLIENT_ID + "&" + "redirect_uri=" + encodeURIComponent("http://" + document.location.host + "/Auth/Callback") + "&" + "response_type=token" + "&" + "scope="+ encodeURIComponent("email guilds guilds.join identify")
