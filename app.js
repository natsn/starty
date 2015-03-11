var app = require('express')(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    io = require('socket.io'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    http = require('http').Server(app),
    io = require('socket.io')(http);

// MongoDB
mongoose.connect('mongodb://localhost/starty0');

// Express
app.use(function(req,res,next){ next(); })
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
// TODO: in production store to redis, not in memory
app.use(require('express-session')({
    secret: 'iU*YH8fi7egh87gUIygef3^78dg3Ni',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
    Routes
*/

app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.json({result: 'OK', logged_in: true, info: 'you are logged in!'});
});

app.get('/logout', function(req, res) {
    req.logout();
    res.json({result:'OK', logged_in: false, info: 'you have been logged out'});
});
app.post('/register', function(req, res) {
    console.log(req.body);
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          return res.json({result: 'Error', info: err.message, code: err.code});
        }
        // TODO send an email to the user for activation confirmation
        res.json({result: 'OK', registered: true, info: 'go check your email!'});
    });
});

/* 
    Socket.io 
*/
io.on('connection', function(socket){
    // TODO Authenticate with passport
    console.log('a user connected');
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: '+ msg);

        io.emit('chat message', msg);
    });
});

// Start server
http.listen(3000, function(){
    console.log('listening on port 3000');
});
