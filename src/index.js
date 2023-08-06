// Weatehr js by thapa
// const http = require("http");
// const fs = require("fs");
// var requests = require("requests");
// const homeFile = fs.readFileSync("home.html","utf-8");
// const replaceVal = (tempVal, orgVal) => {
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
//     temperature = temperature.replace("{%location%}", orgVal.name);  
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);
//     temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
//     return temperature;   
// }
// const server = http.createServer((req,res) => {
// if (req.url == "/") {
//     requests (
//         "https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6"
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//     // const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join(""));
//     // console.log(realTimeData); 
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed dur to errors", err);
//     res.end(); 
//     });   
// }});
// server.listen(9800, "127.0.0.1", () => {
//     console.log("Listening to the port number 9800");
// });


// Home.html given in ejs and set the path
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// app.get("/",(req,res)=> {
//     res.render("home");
//     });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6800, "127.0.0.1", () => 
// { console.log("Listening to the port number 6800");
//  });

// API call after home.html set already
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// app.get("/",(req,res)=> {
//     res.render("home");
//     });    
// app.get("/about", (req, res) => {
//     request (
//         `https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6`
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//     // const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join(""));
//     // console.log(realTimeData); 
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed dur to errors", err);
//     res.end(); 
//     });   
// });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6800, "127.0.0.1", () => 
// { console.log("Listening to the port number 6800");
//  });

// Connected Temperature of index.js with home.html after api and ejs
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");
// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');
// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// const replaceVal = (tempVal, orgVal) => {
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
//     temperature = temperature.replace("{%location%}", orgVal.name);  
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);
//     temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
//     return temperature;   
// }
// app.get("/",(req,res)=> {
// res.render("home");
// });
// app.get("/about", (req, res) => {
//     request (
//         `https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6`
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//    // const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join(""));
//    // console.log(realTimeData); 
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed dur to errors", err);
//     res.end(); 
//     });   
// });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6800, "127.0.0.1", () => 
// { console.log("Listening to the port number 6800");
//  });


// // Page of ejs(home.html) connected with page of api(about) after temp set,ejs and api
// const fs = require("fs");
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");

// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');

// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// const homeFile = fs.readFileSync(`./public/template/views/home.ejs`, "utf-8");
 
//  //const html = file_sys.readFileSync("./static/test.html");
//  //        res.writeHead(200, {'Content-type' : 'text/html'});
// // res.write(html)

// const replaceVal = (tempVal, orgVal) => {
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
//     temperature = temperature.replace("{%location%}", orgVal.name);  
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);
//     temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
//     return temperature;   
// }
// app.get("/",(req,res)=> {
//     request ( 
//         `https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6`
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//     // res.render('home',{ Weatherdata : arrData[0] })
//     const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join());
//     console.log(realTimeData); 
//     res.write(realTimeData);
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed dur to errors", err);
    
//     });   
// });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6800, "127.0.0.1", () => 
// { console.log("Listening to the port number 6800");
//  });


// Page of ejs(home.html) connected with page of api(about) after temp set,ejs and api
// const fs = require("fs");
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");

// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');

// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// const homeFile = fs.readFileSync(`./public/template/views/home.ejs`, "utf-8");

// const replaceVal = (tempVal, orgVal) => {
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
//     temperature = temperature.replace("{%location%}", orgVal.name);  
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);
//     temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
//     return temperature;   
// }
// app.get("/",(req,res)=> {
//     request ( 
//         `https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6`
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//     // const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join());
//     const realTimeData = arrData.map((val) => {
//         const replaced = replaceVal(homeFile, val);
//         if (Array.isArray(replaced)) {
//           return replaced.join();
//         } else {
//           // handle the error case where replaceVal doesn't return an array
//         }
//       });
//     console.log(realTimeData); 
//     res.write(realTimeData);
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed due to errors", err);
    
//     });   
// });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6801, "127.0.0.1", () => 
// { console.log("Listening to the port number 6801");
//  });

// const fs = require("fs");
// const request = require("requests");
// const path = require('path');
// const express = require("express");
// const app = express();
// const ejs = require("ejs");

// const staticpath = (path.join(__dirname,'../public'));
// const templatepath = path.join(__dirname,'../public/template/views');

// app.set('view engine','ejs');
// app.set('views', templatepath);
// app.use(express.static(staticpath));
// const homeFile = fs.readFileSync(`./public/template/views/home.ejs`, "utf-8");

// const replaceVal = (tempVal, orgVal) => {
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
//     temperature = temperature.replace("{%location%}", orgVal.name);  
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);
//     temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
//     return temperature;   
// }
// app.get("/",(req,res)=> {
//     request ( 
//         `https://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=85056aff43325746087771b1c984bcc6`
//     )
//     .on("data", (chunk) => {
//     const objdata = JSON.parse(chunk);
//     const arrData = [objdata]
//     console.log(arrData[0]);
//     const realTimeData = arrData.map((val) => replaceVal(homeFile, val).join());
//     console.log(realTimeData); 
//     res.write(realTimeData);
//     })
//     .on("end", (err) => {
//     if (err) 
//     return console.log("Connection closed due to errors", err);
    
//     });   
// });
// app.get("*", (req, res) => {
//     res.send("Page not found");
// });
// app.listen(6801, "127.0.0.1", () => 
// { console.log("Listening to the port number 6801");
//  });


const fs = require("fs");
const request = require("request");
const path = require('path');
const express = require("express");
const app = express();
const ejs = require("ejs");

const staticpath = (path.join(__dirname,'../public'));
const templatepath = path.join(__dirname,'../public/template/views');

app.set('view engine','ejs');
app.set('views', templatepath);
app.use(express.static(staticpath));
const homeFile = fs.readFileSync(`./public/template/views/home.ejs`, "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);  
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);  
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);  
    temperature = temperature.replace("{%location%}", orgVal.name);  
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;   
}

app.get("/",(req,res)=> {
    request ( 
        `https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=85056aff43325746087771b1c984bcc6`
    )
    .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(arrData[0]);
        const realTimeData = arrData.map((val) => replaceVal(homeFile, val));
        const joinedData = realTimeData.join();
        console.log(joinedData); 
        res.write(joinedData);
    })
    .on("end", (err) => {
        if (err) 
            return console.log("Connection closed due to errors", err);
    });   
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(6801, "127.0.0.1", () => { 
    console.log("Listening to the port number 6801");
});

