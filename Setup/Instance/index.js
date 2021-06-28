import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { request } from "https://cdn.skypack.dev/@octokit/request";

window.onload = async function() {
    console.log("loaded")

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

        if (Data.status != 404) {
            document.getElementById("check").setAttribute("href", null)
            document.getElementById("check").setAttribute("class", "next round disabled")
            document.getElementById("check").innerText = "Found!"

            document.getElementById("next-button").setAttribute("class", "next round enabled")

        } else {
            document.getElementById("check").innerHTML = "Check"
        }
    }
}