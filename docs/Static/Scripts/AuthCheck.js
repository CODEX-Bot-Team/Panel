function AuthCheck() {

    Expire = new Date(localStorage.SessionExpire)
    Now = new Date()

    console.log(Expire)
    console.log(Now)
    console.log(Expire < Now)

    if (Expire < Now) {
        location.pathname = "/auth/login"
    }
}

window.addEventListener("load", AuthCheck)