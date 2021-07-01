import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { request } from "https://cdn.skypack.dev/@octokit/request";

async function windowLoad() {
    console.log("loaded")

    document.getElementById("repl-link").setAttribute("href", "https://replit.com/@" + localStorage.replit_name + "/CODEX-INSTANCE")

    if (Query.check == "") {

        document.getElementById("check").innerHTML = '<img id="image" src="/Static/Images/logo.gif" alt="Loading" height="50px" width="50px">'

        const RequestData = await request(
            {
                method: "POST",
                baseUrl: "https://Fetch-Proxy.scriptitwithcod.repl.co",
                url: "/request/", 
                headers: {},

                data: JSON.stringify(
                    {
                        Method: "GET",
                        Url: "https://replit.com/data/repls/@" + localStorage.replit_name + "/CODEX-INSTANCE"
                    }
                )
            }
        );

        var Data = JSON.parse(JSON.parse(RequestData.data).Body)

        console.log(Data)

        document.getElementById("check").innerHTML = "Check"

        var Found = false

        Data.fileNames.forEach(Name => {
            console.log(Name)

            if (Name == "CODEX.INSTANCE") {
                document.getElementById("check").removeAttribute("href")
                document.getElementById("check").setAttribute("class", "next round disabled")
                document.getElementById("check").innerText = "Found!"

                document.getElementById("next-button").setAttribute("class", "next round enabled")
                document.getElementById("next-button").setAttribute("href", "/Setup/Run")
            }
        });

        

        if (Data.status != 404) {
            

        } else {
            
        }
    }
}