//Install express server
const express = require('express');
const path = require('path');
var enforce = require('express-sslify');

const app = express();

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku).
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Serve only the static files from the night-owl-nico directory
app.use(express.static(__dirname + '/dist/night-owl-nico'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/night-owl-nico/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
