import {WebRequest} from "/Static/Scripts/WebRequest.js"

async function OnLoad() {
    var InstanceArray = await (await WebRequest("GET", LOCALAPI[window.location.host].HOST + LOCALAPI[window.location.host].INSTANCES)).Raw.json()
    var InstancePreset = document.getElementsByClassName("instance-holder")[0]
    console.log(InstanceArray)



    InstanceArray.forEach(Instance => {
        console.log(Instance)

        var InstanceElement = InstancePreset.cloneNode(true)

        InstanceElement.getElementsByClassName("instance-title")[0].innerText = Instance.Name


        InstanceElement.setAttribute("href", "/instances/instance/?instance_id=" + Instance.Id)

        document.getElementById("instances").appendChild(document.createElement("br"))
        document.getElementById("instances").appendChild(InstanceElement)
    });

    InstancePreset.remove()

}

window.addEventListener("load", OnLoad)