async function GetData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json',
            //'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow', // manual, *follow, error
    });
    console.log(response)
    const ToReturn = response.json()
    console.log(ToReturn)
    return ToReturn; // parses JSON response into native JavaScript objects
}