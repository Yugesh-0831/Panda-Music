const express= require('express');
const app = express();

const spotifyWebApi= require('spotify-web-api-node');

app.post('./login', (req,res) => {
    const code=req.body.code
const spotifyApi= new spotifyWebApi({
redirectUri:"http://localhost:3001/",
clientId:'a2b7e40c21d14a678d4af20eaae76095',
//clientSecret:'95381eb2a28247df91e31055fb683b5c'
})


spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken: data.access_token,
        RefreshToken: data.refresh_token,
        expressIn: data.body.expires_in,
    })
}).catch(() =>{
    res.sendStatus(400)
})
})