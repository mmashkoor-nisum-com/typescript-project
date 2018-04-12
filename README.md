# Github User Report

### Typescipt Configuration:
1) Install nodejs from [here](https://nodejs.org/en/download/).

       Verify: node -v && npm -v
             
2) Install Typescript:

       npm install -g typescript
       
3) Install VSCode from [here](https://code.visualstudio.com/download).

4) Open terminal in VSCode and write a command 

       tsc --init.  (create a tsconfig.json file)
       
    In tsconfig file uncomment these tag.
       
      > "outDir": "./out",  //create a folder for js file.                       
       "rootDir": "./src", //create a root folder.                      
       "noEmitOnError": true, //if there is an error in ts file, js file is not created.
       
5) Initialize node package manager

        npm --init (create a package.json file)
    
    In package.json, inside script tag :
    
    > "start": "tsc && node out/index.js",
    
6) To run the project

       npm start
       
  #### Install lodash and request libraries:
  
  > Javascript lib:
  
      npm install lodash --save
      
      npm install request --save
   
  > Typescript lib: 
      
      npm install @types/lodash --save-dev
      
      npm install @types/request --save-dev
