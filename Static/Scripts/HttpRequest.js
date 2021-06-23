function HttpRequest(Method, Url, Headers, Body) {
    const RequestData = fetch(
        Url,
        
        {
            mode: 'no-cors',
            method: Method,
            headers: Headers,
            body: Body,
        }
    )

    return RequestData
}