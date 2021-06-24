function HttpRequest(Method, Url, Headers, Body) {
    const RequestData = fetch(
        Url,
        
        {
            mode: 'cors',
            method: Method,
            headers: Headers,
            body: Body,
        }
    )

    return RequestData
}