export const getOauthGoogleLink = ()=>{
    return `https://accounts.google.com/o/oauth2/v2/auth?scope=${process.env.GOOGLE_OAUTH_SCOPE}&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${process.env.REDIRECT_URI}&client_id=${process.env.GOOGLE_CLIENT_ID}`
}