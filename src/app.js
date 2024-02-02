const http = require('http');
const getUsers = require('./modules/users');


const hostname = '127.0.0.1';


const port = 3002;
const server = http.createServer((req, res) => {
    const ipAddress = "http://127.0.0.1";
    const url = new URL(req.url, ipAddress);
    console.log(url);
    console.log(url.searchParams);
    const searchParams = url.searchParams;
    
    
    // for(const key of searchParams.keys()){
    //     if(key !=='?hello' && key !=='?users'){
    //         res.statusCode = 500;
    //         res.setHeader('Content-Type', 'text/plain');
    //         res.end('Page not found');
    //         return;
    //     }
    // }
        

    
    
console.log(searchParams.get('hello'));
console.log(req.url);
console.log(req.url === '/?hello');
console.log(searchParams.has('hello'));
    if (searchParams.has('hello')){
        const userName = searchParams.get('hello');
        if (!userName){
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Enter a name`);
        } else {
            res.statusCode = 200;
            res.statusMessage = "ok";
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Hello, ${userName}`);
          }
    }
    

// switch(urlContent){
//     case '/?hello': {
//         if(userName){
//             res.statusCode = 200;
//             res.statusMessage = "ok";
//             res.setHeader('Content-Type', 'text/plain');
//             res.write(`Hello, ${userName}`);
//             res.end();
//         return;
//         }
            
//         }
//     case '/?users': {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.write(getUsers());
//             res.end();
//     }

// }


    // if(req.url === '/?users'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.write(getUsers());
    //     res.end();
    // }

        // if(userName){
        //     res.statusCode = 200;
        //     res.statusMessage = "ok";
        //     res.setHeader('Content-Type', 'text/plain');
        //     res.write(`Hello, ${userName}`);
        //     res.end();          
        // }
        // else{
        //     res.statusCode = 400;
        //     res.setHeader('Content-Type', 'text/plain');
        //     res.write(`Enter a name`);
        //     res.end();          
        // }
    
    

    // if(req.url === '/?users'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.write(getUsers());
    //     res.end();
    // }
    
    
    
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/plain')
    // res.write(`Hello, world!`)
    // res.end()
});

server.listen(port, hostname, () => {
    console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)
    
});