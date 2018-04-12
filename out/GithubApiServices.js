"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true //it will return the json object.
    //request lib return body as string by defualt. To convert it into JSON Obj -> "JSON.parse(body)" or simply json:true
};
var GithubApiServices = /** @class */ (function () {
    function GithubApiServices() {
    }
    GithubApiServices.prototype.getUserInfo = function (userName, callback_function) {
        request.get("https://api.github.com/users/" + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            callback_function(user);
        });
    };
    GithubApiServices.prototype.getRepo = function (userName, callback_function) {
        request.get("https://api.github.com/users/" + userName + '/repos', OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback_function(repos);
        });
    };
    return GithubApiServices;
}());
exports.GithubApiServices = GithubApiServices;
