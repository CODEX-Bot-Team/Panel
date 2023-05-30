window.onload = async function() {

    if (!localStorage.Notifications) {
        localStorage.Notifications = JSON.stringify(["<a>Welcome to the CODEX-Panel</a>", "<a>You can see the updates on the right of your screen</a>", "<a>You can now dismiss these notifications</a>"])
    }

    var Data = JSON.parse(localStorage.Notifications)

    var Holder = document.getElementById("update-holder")

    var HTMLData = ""

    var arrayLength = Data.length;
    for (var i = 0; i < arrayLength; i++) {
        
        HTMLData = HTMLData + "<div><a class=\"update-text\">" + Data[i] + "</a> <button onclick=\"DismissNotif(" + i + ")\">X</button></i></div><br>"
        
    }

    Holder.innerHTML = HTMLData
}

function removeItemOnce(Array, Value) {
    var NewArray = []
    var NewIndex = 0

    delete Array[Value]

    var Length = Array.length;
    for (var i = 0; i < Length; i++) {
        if (Array[i] != null) {
            NewArray[NewIndex] = Array[i]
            NewIndex = NewIndex + 1
        }
    }

    return NewArray;
}

async function DismissNotif(Num) {
    var Notifs = JSON.parse(localStorage.Notifications)

    var NewNotifs = removeItemOnce(Notifs, Num)
    console.log("Dismissing " + Num)

    localStorage.Notifications = JSON.stringify(NewNotifs)
    
    window.location.reload()
}