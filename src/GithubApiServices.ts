import * as request from 'request'
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS:any = {
    headers:{
        'User-Agent' : 'request'
    },
    json:true  //it will return the json object.
    //request lib return body as string by defualt. To convert it into JSON Obj -> "JSON.parse(body)" or simply json:true
};

export class GithubApiServices{ 
    getUserInfo(userName:string , callback_function : (user:User) => any){
       
        request.get("https://api.github.com/users/" + userName,OPTIONS,(error:any, response : any , body:any) => {
            let user = new User(body);
            callback_function(user);
        });
    }
    getRepo(userName:string , callback_function : (repos:Repo[]) => any){
        request.get("https://api.github.com/users/" + userName + '/repos',OPTIONS,(error:any, response : any , body:any) => {  
        let repos = body.map((repo:any) => new Repo(repo));
            callback_function(repos);
        });
    }
}