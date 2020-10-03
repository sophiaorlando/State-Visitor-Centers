const orm = require("../config/orm.js");

//uses the outline of the orm file tfor the UsaStates table in mysql
//orm.all populates dropdown link with all of the states

//orm.findbyState uses the bystate function to return information about the selected state

var usaStates = {
    all: function (cb) {
        orm.all("UsaStates", function (res) {
            cb(res);
        });
    },
    bystate: function(state,cb){
        orm.findByState(state,cb)
    }
}

module.exports = usaStates;