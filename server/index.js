const
    express             = require('express'),
    bodyParser          = require('body-parser'),
    cors                = require('cors'),
    app                 = express(),
    routerAdapter       = require('./routes');


app.use(cors({
    origin: '*',
    credentials: true
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  

routerAdapter(app);
app.listen(80);