const axios = require ("axios").default;
const qs = require("querystring");

const config = {
    headers: {
        "Contet-type": "application/x-ww-form-urlencoded"
    }
};

const getToken = async()=>{
    let token ="";
    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({
            grant_type: "client_credentials",
            clien_id:"7e773e19a4a246f7b3cd656e09db5331",
            clien_secret:"54f51264c84140b180f46db1459ed2a4"
        }),
        config

    );
    token = promise.data;
    return token.access_token;
}
module.exports = getToken;