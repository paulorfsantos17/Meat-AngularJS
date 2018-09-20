"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var jwt = require("jsonwebtoken");
exports.handleAuthentication = function (req, res) {
    var user = req.body;
    if (isValid(user)) {
        var DbUser = user_1.users[user.email];
        var token = jwt.sign({ sub: DbUser.email, iss: "meat-api" }, "meat-api-password");
        res.json({ name: "user.name", email: "user.email", acessToken: token });
    }
    else {
        res.status(403).json({ message: 'Dados Invalido' });
    }
    function isValid(user) {
        if (!user) {
            return false;
        }
        var DbUser = user_1.users[user.email];
        return DbUser !== undefined && DbUser.matches(user);
    }
};
