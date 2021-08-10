let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './src/js/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, './src/images/logo.png' ) ) );
app.use(express.static(__dirname + '/src'));

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/src/index.html' );
} );

io.of( '/stream' ).on( 'connection', stream );

server.listen( 3000 );
