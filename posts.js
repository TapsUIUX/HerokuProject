
const express = require("express");

const router = express.Router();

const constant = require('./constants.js');

const mongoJs = require('mongojs');

// const db = mongoJs("mongodb://tapskm:tapan123db@ds253713.mlab.com:53713/heroku_szfsmhvf", ['counts'])


const fs = require("fs");


fileWrite();

/***FOR DEFAULT GET REQUEST */
router.get('', (req, res, next) => {
  //let temp = new GenerateJson(`{"repeat":"100","title":"rand(text,100)","post":"rand(text,255)"}`);
  //let result = temp.convertToJson().mapTheValue().value
    let temp = constant.POSTS;

    if (temp == "") {
      res.status(200).json({
        message: "ERROR"
      })
    } else {
      if (temp) {
        //fileWrite();
        res.status(200).json(
        temp
        )
      }
    }
  })

  router.get('/:id', (req, res, next) => {
    let parm=  req.params.id ;
    parm =  (parm.indexOf("=")!=-1)?parm.split('=')[1]:parm;
      let temp = constant.POSTS;

      if (temp == "") {
        res.status(200).json({
          message: "ERROR"
        })
      }else if(parm<0||parm>100){
          res.status(200).json({
            message: "available post ids are from 1 to 100"
          })
      } else if(temp){
          //fileWrite();
          res.status(200).json(
          temp.find(el=>el.id==parm)
          )
      }
    });



    router.post('', (req, res, next) => {
          //fileWrite();
          res.status(200).json({
            message: "Post Successful"
         })
      });

      router.put('/:id', (req, res, next) => {
        res.status(200).json({
          message: "PUT Successful"
        })
    });


    router.patch('/:id', (req, res, next) => {
      //fileWrite();
      res.status(200).json({
        message: "PATCH Successful"
      })
  });


  router.delete('/api/posts/:id', (req, res, next) => {
    //fileWrite();
    res.status(200).json({
      message: "DELETE Successful"
    })
  });


  // function fileRead(){


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

    //let currentCount = fs.readFileSync('./count.txt','utf-8');
    // We will replace the file read with the read from data base
    // let currentCount = 0;
    // db.master.find(function(err,rows){
    //   if(err){
    //     res.send(err)
    //   }else{
    //     currentCount = res.json(rows)
    //   }
    // })
    // console.log(currentCount)
    // return currentCount ;
  //}

  // function fileWrite(){
  //    we will replace the file write with data ase write
  //    let currentCount = fileRead();
  //    let newCount;
  //    if(!isNaN(currentCount)){
  //      newCount = Number(Number(currentCount) + 1) ;
  //      fs.writeFileSync('./count.txt',newCount);
  //    }
  // }

  function fileWrite() {
    return;
  //   db.counts.find(function (err, rows) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       count = rows[0].count;
  //       if(count){
  //         let temp = count+1;
  //         console.log("temp : ",temp)
  //         var tempObj = {"id":1,"count" : temp}
  //         db.counts.update({id:1},tempObj,{},function(err,res){
  //           if(err){
  //             console.log("WRITE ERROR")
  //           }else{
  //             console.log("WRITE SUCCESS")
  //           }
  //         })
  //       }
  //     }
  //   })
  }




  module.exports = router ;
