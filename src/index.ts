import {GithubApiServices} from './GithubApiServices'
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

var svc = new GithubApiServices();
if (process.argv.length < 3) {
    console.log("Please enter username as an argument");
}
else {
let username = process.argv[2];
svc.getUserInfo(username , (user:User) => {
    svc.getRepo(username , (repos:Repo[]) => {
        //sorted forks in descending order
        let sortedRepos = _.sortBy(repos, [(repo:Repo) => repo.forkCount * -1]);
        //filter top 5 records
        let filteredRepos = _.take(sortedRepos,5);
        user.repo = filteredRepos;
        console.log (user);
    })
});
}