module.exports = {
    db: 'mongodb://localhost/users',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'FACEBOOK_CLIENT_ID',
        clientSecret: 'FACEBOOK_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    google: {
        clientID: 'GOOGLE_CLIENT_ID',
        clientSecret: 'GOOGLE_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    },
    twitter: {
        clientID: 'TWITTER_CLIENT_ID',
        clientSecret: 'TWITER_CLIENT_SECRET',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    }
};