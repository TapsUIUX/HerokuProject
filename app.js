const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const constant = require('./constants.js');
const postRouter = require('./posts');
const fs = require("fs");
const app = express();

const mongoose = require("mongoose");
const mongoJs = require('mongojs');

// mongoose.connect("mongodb://tapskm:tapan123db@ds253713.mlab.com:53713/heroku_szfsmhvf").then(()=>{
//   console.log("connected")
// })
// .catch(()=>{
//   console.log("connection Failed")
// })

// const db = mongoJs("mongodb://tapskm:tapan123db@ds253713.mlab.com:53713/heroku_szfsmhvf", ['counts'])



app.use((rer, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  next();
});


//give acces to the Image Folder
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "angular")));
app.use("/api/posts", postRouter);



app.get('/api/generate', (req, res, next) => {

    //console.log("req :",req.query.structure);


    //fileWrite();

    const params = req.query.structure;


    let temp = new GenerateJson(params);

    let result = temp.convertToJson().mapTheValue().value

    if (params == "") {
      res.status(200).json({
        message: "ERROR"
      })
    } else {

      if (result) {
        res.status(200).json(
          result
        )
      }
    }
  }

)

var count;

// app.use("/read", (req, res, next) => {

//   //we will read hear it self due to async issues
//   // need to be tested later.
//   db.counts.find(function (err, rows) {
//     if (err) {
//       res.send(err)
//     } else {
//       count = rows[0].count;
//       res.status(200).json({
//       count: rows[0].count
//       });
//     }
//   })




  // console.log(gen.next().value)

  //let count = fileRead().then(response=>console.log("preomise : ",response))

  // let count = fileRead().then((count)=>{
  //   res.status(200).json(
  //     {count : count}
  //   )
  // });
  // if(count){
  //   res.status(200).json(
  //       {count : count}
  //     )
  // }else{
  //   res.status(200).json(
  //     {error : "problem with the count"}
  //   )
  // }

//});



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"))
});

/***************************************************************************************** */

module.exports = app;

let constructorArray = []
let resultArray = []
let length = "";
let name = "name";
let gender = "gender";
let number = "number";
let address = "address";
let phone = "phone";
let ssn = "ssn";
let zip = "zip";
let city = "city";
let state = "state";
let email = "email";
let text = "text";
let image = "image";
var _this; // for scope transfer
var url = "http://www.serverdummies.com";
class GenerateJson {

  constructor(param = {}) {
    this.param = param;
    this.value = '';
    this.addressIndex = 0;
    this.gender = "";
    this.fnameIndex = "";
    this.lnameIndex = "";
    this.count = 0;
  }

  convertToJson() {
    this.param = JSON.parse(this.param);
    length = Number(this.param.repeat) || 10
    this.value = Array(length).fill({});
    return this;
  }

  mapTheValue() {


    this.value = this.value.map(el => {
      let temp = {};
      this.gender = constant.GENDER_ARRAY[Math.floor(Math.random() * 2)];
      this.addressIndex = Math.floor(Math.random() * 1000);
      this.fnameIndex = Math.floor(Math.random() * 255);
      this.lnameIndex = Math.floor(Math.random() * 255);
      this.count = this.count + 1;
      _this = this;
      for (let key in this.param) {
        if (key == "repeat") continue;
        //temp[key]= eval(this.param[key]);//evaluating the Functions//dangerious
        temp['id'] = this.count;
        temp[key] = rand(this.param[key]); //evaluating the Functions
      }
      return temp;
    })

    return this
  }

}

// function* generatorFunc() {
//   yield fileRead();
// }


// var gen = generatorFunc();



// function fileRead(){
//   //let currentCount = fs.readFileSync('./count.txt','utf-8');
//   // We will replace the file read with the read from data base

//   console.log("I AM HERE")
//   let currentCount = 0;

//   db.counts.find(function(err,rows){
//     if(err){
//       console.log(err)
//     }else{
//       currentCount = rows
//       console.log(currentCount)
//       let x = new Promise(function(resolve, reject) {
//         resolve(currentCount);
//         reject("error");
//       });
//       return x ;
//     }
//   })
//   // console.log(currentCount)
//   // return currentCount ;
// }

// function fileWrite() {
//   if(!count){count=0};
//   if(count){
//     let temp = count+1;
//     console.log("temp : ",temp)
//     var tempObj = {"id":1,"count" : temp}
//     db.counts.update({id:1},tempObj,{},function(err,res){
//       if(err){
//         console.log("ERROR")
//       }else{
//         console.log("SUCCESS")
//       }
//     })
//   }

  //  let currentCount = fileRead().trim();
  //  let newCount;
  //  if(!isNaN(currentCount)){
  //    newCount = Number(Number(currentCount) + 1) ;
  //    fs.writeFileSync('./count.txt',newCount);
  //  }
//}

let rand = function (input) {
  let arg = input
  arg = arg.replace(/rand/gi, '').replace(/\(/gi, '').replace(/\)/gi, '').split(",")

  // console.log("arg : ",arg)
  if (!arg[0]) return 'Error';
  let val = arg[0] // get first Param
  let min = (arg[1]) ? arg[1] : 0;
  let max = (arg[1]) ? arg[2] : 1000;

  if (max > 100) max = 1000; //setting maximum limit

  switch (val) {
    case "name":
      return {
        firstName: (_this.gender == "male") ? constant.FIRST_NAME_MALE_ARRAY[_this.fnameIndex] : constant.FIRST_NAME_FEMALE_ARRAY[_this.fnameIndex],
        lastName: constant.LAST_NAME_ARRAY[_this.lnameIndex]
      };
      break;
    case "email":
      return (((_this.gender == "male") ? constant.FIRST_NAME_MALE_ARRAY[_this.fnameIndex] : constant.FIRST_NAME_FEMALE_ARRAY[_this.fnameIndex]) + "_" + constant.LAST_NAME_ARRAY[_this.lnameIndex] + "@sdummy.com").toLowerCase();
      break;
    case "gender":
      return _this.gender;
      break;
    case "image":
      if (min == 'face') {
        return (_this.gender == "male") ? url + "/images/face" + Math.floor((Math.random() * 49) + 1) + ".jpg" : (_this.gender == "female") ? url + "/images/face" + Math.floor((Math.random() * 50) + 50) + ".jpg" : "";
      } else {
        return url + "/images/default.jpg"
      }
      break;
    case "address":
      return constant.US_ADDRESS_ARRAY[_this.addressIndex];
      break;
    case "text":
      min = Number(min);
      min = (min == 0) ? 50 : min;
      min = (min > 1000) ? 1000 : min;
      return constant.TEXT_SAMPLE.slice(0, min).replace(/\n/g, '') + ".";
      break;
    case "number":
      min = Number(min);
      max = Number(max);
      return Math.floor(Math.random() * (max - min)) + min;
      break;
    case "phone":
      return (Math.floor(Math.random() * 888) + 111) + "-" + (Math.floor(Math.random() * 888) + 111) + "-" + (Math.floor(Math.random() * 8888) + 1111);
      break;
    case "ssn":
      return "***" + "-" + "**" + "-" + (Math.floor(Math.random() * 8888) + 1111);
      break;
    case "city":
      return constant.US_ADDRESS_ARRAY[_this.addressIndex].city;
      break;
    case "state":
      return constant.US_ADDRESS_ARRAY[_this.addressIndex].state;
      break;
    case "zip":
      return constant.US_ADDRESS_ARRAY[_this.addressIndex].zip;
      break;

    default:
      return "Error";
  }

}


// let y = new GenerateJson(params)
// console.log("out put : ",   y.convertToJson().mapTheValue().value )
