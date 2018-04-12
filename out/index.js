"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiServices_1 = require("./GithubApiServices");
var _ = __importStar(require("lodash"));
var svc = new GithubApiServices_1.GithubApiServices();
if (process.argv.length < 3) {
    console.log("Please enter username as an argument");
}
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        svc.getRepo(username_1, function (repos) {
            //sorted forks in descending order
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            //filter top 5 records
            var filteredRepos = _.take(sortedRepos, 5);
            user.repo = filteredRepos;
            console.log(user);
        });
    });
}
