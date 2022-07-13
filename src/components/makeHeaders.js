const makeHeaders = ({ token, isLoggedIn }) => { //how do these props get passed to this function?
    let headers = {};
    if (isLoggedIn) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } 
    } else {
        headers = {
            'Content-Type': 'application/json'
        }
    }
    console.log(headers)
    return headers;
}

export default makeHeaders;