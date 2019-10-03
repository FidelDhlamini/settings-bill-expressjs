const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./settings-bill')
const moment = require('moment');
moment().format()

const app = express();

const settingsBill = SettingsBill();


// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    // console.log(settingsBill.getSettings())
    let color = ""
   
    if (settingsBill.grandTotal() !== 0) {
        if (settingsBill.hasReachedWarningLevel()) {
            color = "warning";
        } else if (settingsBill.hasReachedCriticalLevel()) {
            color = "danger";
           


        }

    }
    res.render("index", {
        settings: settingsBill.getSettings(),
        totals: settingsBill.totals(),
        color
    })
});

app.post('/settings', function (req, res) {
    var x = {
        callCost: req.body.callCost,
        smsCost: req.body.smsCost,
        warningLevel: req.body.warningLevel,
        criticalLevel: req.body.criticalLevel
    }
    settingsBill.setSettings(x);

    res.redirect('/');
});

app.post('/action', function (req, res) {



    settingsBill.recordAction(req.body.actionType)

    res.redirect('/')
})

app.get('/actions', function (req, res) {
    let rcdTime = settingsBill.actions()
    for(var i = 0; i < rcdTime.length;i++){
        let elem = rcdTime[i];
        elem.timeAgo = moment(elem.timestamp).fromNow()
    }
    res.render('actions', {
        actions: rcdTime
    });
});

app.get('/actions/:actionType', function (req, res) {
    const actionType = req.params.actionType;
    let rcdTime = settingsBill.actions(actionType)
    for(var i = 0; i < rcdTime.length;i++){
        let elem = rcdTime[i];
        elem.timeAgo = moment(elem.timestamp).fromNow()
    }
    res.render('actions', {
        actions: rcdTime
    })
});
const PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})