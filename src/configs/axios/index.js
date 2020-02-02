import Axios from "axios";

const RootPath = "http://localhost/server_dc-shop/api/";
const POST = (path,data) => {
    const promise = new Promise((res, rej) => {
        Axios.post(RootPath+path,data).then(res => {
            res(res.data)
        }).catch(err => {
            rej(err)
        })
    })
    return promise
}

const PostLogin = (data) => POST('LoginController',data)

const API = {
    PostLogin
}

export default API