import http from "http"
import chalk from "chalk"
import path from "path"
import fs from "fs"
import dotenv from "dotenv"
dotenv.config()
import os from "os"

//Get the Ip address of the machine
const getLocalIpAddress = () => {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        for (const iface of networkInterfaces[interfaceName]) {
            // Check for an IPv4 address that is not internal (127.0.0.1)
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';  // Default to localhost if no external IP is found
};


//Set up server PORT and HOST
const port = process.env.PORT || 3000;
const HOST = getLocalIpAddress()



//Handle paths of files

const absolutePath = path.resolve()

const setFilePath = (file) =>{

    return path.join(absolutePath, "problems", file)
}

const setContentType = (path) =>{

    if(path.includes(".html")){
        return "text/html"
    }else{
        return "application/javascript"
    }
}




//serve the files
const serverFiles = (req, res) =>{

    let filePath;
    let contentType;

    const fileName = req.url.substring(10) //eliminate the first part of the url

    if(req.url === '/'){

        filePath = setFilePath("index.html")
        contentType = setContentType(filePath)

    }else if(req.url === `/problems/${fileName}`){

        filePath = setFilePath(fileName)
        contentType = setContentType(filePath)


    }else{
        res.writeHead(404, {"content-type": "text/plain"})
        return res.end("This page was not found")
    
    }

    fs.readFile(filePath, "utf-8", (err, data)=>{

        if(err){
            res.writeHead(500, {"content-type": "text/plain"})
            res.end("We are having problems with the server on our end")
        }

        res.writeHead(200, {"content-type": contentType})
        res.end(data)

    })


}


//create the server

const server = http.createServer((req, res) =>{

    serverFiles(req, res)

})

server.listen(port,HOST, ()=>{
    console.log("The server is running on ", chalk.greenBright(`http://${HOST}:${port}`))
    
})