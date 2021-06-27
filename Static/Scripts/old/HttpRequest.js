//This does not work
// and is not used

function HttpRequest(Method, Url, Headers, Body) {
    const GetURL = new URL(Url)

    const Result = Octokit.request(
        {
            method: Method,
            baseUrl: GetURL.origin,
            url: GetURL.pathname + GetURL.search + GetURL.hash, 
            headers: Headers,
            data: Body
        }
    );
    
    /*
    const RequestData = fetch(
        Url,
        
        {
            mode: '',
            method: Method,
            headers: Headers,
            body: Body,
        }
    )
    */


    return Result
}

export {HttpRequest};
export default null;
