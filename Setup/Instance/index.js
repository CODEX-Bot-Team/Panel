import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { request } from "https://cdn.skypack.dev/@octokit/request";

window.onload = async function() {
    console.log("loaded")

    if (Query.check == "") {
        const RequestData = await request(
            {
                method: "GET",
                baseUrl: "https://replit.com",
                url: "/data/repls/@" + localStorage.replit_name + "/CODEX-INSTANCE", 
                headers: {
                    'Content-Type': 'text/plain'
                },
            }
        );

        console.log(RequestData)
    }
}