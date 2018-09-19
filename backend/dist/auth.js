"use strict";
exports.__esModule = true;
var user_1 = require("./user");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var DbUser = user_1.users[user.email];
        res.json({ name: "users.name", email: "users.email" });
    }
    else {
        res.status(403).json({ message: 'Dados Invalido' });
    }
    function isValid(user) {
        if (!user_1.User) {
            return false;
        }
        var DbUser = user_1.users[user.email];
        return DbUser !== undefined && DbUser.matches(user);
    }
};
