function GetCookies() {
    const CookieTable = document.cookie.split("; ")
    const Cookies = {}


    var ArrayLength = CookieTable.length;
    for (var i = 0; i < ArrayLength; i++) {
        //console.log(CookieTable[i]);
        //Do something
        const Decoded = CookieTable[i].split("=")

        //console.log(Decoded)

        Cookies[Decoded[0]] = Decoded[1] 
    }

    return Cookies
}

function GetCookie(Key) {
    return GetCookies()[Key]
}

function SetCookie(Key, Value) {
    document.cookie = Key + "=" + Value
    return document.cookie
}