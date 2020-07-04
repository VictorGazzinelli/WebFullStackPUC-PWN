const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.db7381024bd2b8f5",
      clientSecret: "cd0acbb5694c0d857e7c5b8318e5d5625c37604f",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('Auth user...');
      console.log('profile -> ', profile);
      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log('serializeUser');
  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializeUser');
  done(undefined, user);
});
