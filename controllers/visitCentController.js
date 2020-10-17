const express = require("express");
const visitorCenter = require("../models/visitorCenter.js");


var router = express.Router();

// router for index handlebars that populated dropdown menu with states

router.get("/", function (req, res){
    visitorCenter.all(function(data){
        var statesObject = {
            states : data
        }
        res.render("index", statesObject)
    })
})

// router for stateInfo handlebars that populates the page with info about the selected state

router.get("/api/:state", function (req, res){
    let selectedState = req.params.state

    visitorCenter.bystate(selectedState, function(data){
        for (let index = 0; index < data.length; index++) {
            const capitalState = data[index].state
            var upperState = capitalState.toUpperCase()
            data[index].state = upperState
        }

        var byStateObject = {
            stateInfo : data
        }
        res.render("stateInfo", byStateObject)
    })
})

module.exports = router;



