window.onload = async function() {

    var Holder = document.getElementById("update-holder")


    const Request = await fetch(
        "https://Fetch-Proxy.scriptitwithcod.repl.co/request/",
        {
            method: "POST",
            body: JSON.stringify(
                {
                    Method: "GET",
                    Url: "https://api.github.com/repos/CODEX-Bot-Team/Panel/commits",
                    Headers: [
                        ["User-Agent", "CODEX BOT PANEL"]
                    ]
                }
            )
        }
    );

    const RequestData = await Request.json()
    const Data = await JSON.parse(RequestData.Body)
    //console.log(Data)

    var HTMLData = ""

    var arrayLength = Data.length;
    for (var i = 0; i < arrayLength; i++) {
        
        HTMLData = HTMLData + "<div><a target=\"_blank\" class=\"name-holder\" href=\"" + Data[i].committer.html_url + "\">" + Data[i].commit.author.name + "</a><a class=\"info-holder\" style=\"float:right\">" + Data[i].commit.message + "</a></div><br>"
        
    }

    Holder.innerHTML = HTMLData
}