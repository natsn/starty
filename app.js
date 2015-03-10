// Dependencies
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
mongoose.connect('mongodb://localhost/starty');

// Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'iU*YH8fi7egh87gUIygef3^78dg3Ni',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// API
app.use('/api', require('./routes/api'));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

io.on('connection', function(socket){
    
    console.log('a user connected');
    
    socket.on('disconnect', function(){
        console.log('user disconnected')
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
