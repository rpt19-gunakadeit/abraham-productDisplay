const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index');
const request = require('supertest');
const path = require('path');
const cors = require('cors')
const fp = '/Users/SbG/hackreactor/rpt19/frontend-capstone/abraham-productDisplay/client/dist/index.html';

app.use(cors())
app.use(express.static('client/dist/'))


app.get('/', (req, res) => {
  res.status(200).send('OK');
});

//endpoint for damien
app.get('/small', (req, res) => {
  db.getSmallImage((err, data) => {
    let imgData = JSON.stringify(data);
    if (err) {
      console.log('err: ', err);
      res.status(500).send('Error')
    } else {
      res.status(200).send(imgData);
    }
  })
});

app.get('/t', (req, res) => {
//render default iamges
let styleId = req.query.id;
console.log('styleId ', styleId);

  db.getMediumImage(styleId, ((err, data) => {
    let imgData = JSON.stringify(data);
    console.log('IMAGE DATA ', imgData);
    if (err) {
      console.log('Error: ', err);
      res.status(500).send('Error');
    } else {
      res.status(200).send(imgData);
    }
  }));
});

//endpoint for default images
app.get('/:styleId', (req, res) => {
  res.sendFile(fp);
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

/*Supertest framework for unit testing*/
// request(app)
// .get('/t/:styleId')
// .expect('Content-Type', 'text/html; charset=utf-8')
// .expect(200)
// .end((err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Thumbnail test: ', data.text)
//   }
// });
// request(app)
// .get('/:styleId')
// .expect('Content-Type', 'text/html; charset=utf-8')
// .expect(200)
// .end((err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Default test: ', data.text)
//   }
// });

/*
SAMPLE DATA FROM SUCCESSFUL API CALL


image data:  [{"id":1,"smallUrl":"https://picsum.photos/id/0/60/60","styleId":0},{"id":2,"smallUrl":"https://picsum.photos/id/1/60/60","styleId":1},{"id":3,"smallUrl":"https://picsum.photos/id/2/60/60","styleId":2},{"id":4,"smallUrl":"https://picsum.photos/id/3/60/60","styleId":3},{"id":5,"smallUrl":"https://picsum.photos/id/4/60/60","styleId":4},{"id":6,"smallUrl":"https://picsum.photos/id/5/60/60","styleId":5},{"id":7,"smallUrl":"https://picsum.photos/id/6/60/60","styleId":6},{"id":8,"smallUrl":"https://picsum.photos/id/7/60/60","styleId":7},{"id":9,"smallUrl":"https://picsum.photos/id/8/60/60","styleId":8},{"id":10,"smallUrl":"https://picsum.photos/id/9/60/60","styleId":9},{"id":11,"smallUrl":"https://picsum.photos/id/10/60/60","styleId":10},{"id":12,"smallUrl":"https://picsum.photos/id/11/60/60","styleId":11},{"id":13,"smallUrl":"https://picsum.photos/id/12/60/60","styleId":12},{"id":14,"smallUrl":"https://picsum.photos/id/13/60/60","styleId":13},{"id":15,"smallUrl":"https://picsum.photos/id/14/60/60","styleId":14},{"id":16,"smallUrl":"https://picsum.photos/id/15/60/60","styleId":15},{"id":17,"smallUrl":"https://picsum.photos/id/16/60/60","styleId":16},{"id":18,"smallUrl":"https://picsum.photos/id/17/60/60","styleId":17},{"id":19,"smallUrl":"https://picsum.photos/id/18/60/60","styleId":18},{"id":20,"smallUrl":"https://picsum.photos/id/19/60/60","styleId":19},{"id":21,"smallUrl":"https://picsum.photos/id/20/60/60","styleId":20},{"id":22,"smallUrl":"https://picsum.photos/id/21/60/60","styleId":21},{"id":23,"smallUrl":"https://picsum.photos/id/22/60/60","styleId":22},{"id":24,"smallUrl":"https://picsum.photos/id/23/60/60","styleId":23},{"id":25,"smallUrl":"https://picsum.photos/id/24/60/60","styleId":24},{"id":26,"smallUrl":"https://picsum.photos/id/25/60/60","styleId":25},{"id":27,"smallUrl":"https://picsum.photos/id/26/60/60","styleId":26},{"id":28,"smallUrl":"https://picsum.photos/id/27/60/60","styleId":27},{"id":29,"smallUrl":"https://picsum.photos/id/28/60/60","styleId":28},{"id":30,"smallUrl":"https://picsum.photos/id/29/60/60","styleId":29},{"id":31,"smallUrl":"https://picsum.photos/id/30/60/60","styleId":30},{"id":32,"smallUrl":"https://picsum.photos/id/31/60/60","styleId":31},{"id":33,"smallUrl":"https://picsum.photos/id/32/60/60","styleId":32},{"id":34,"smallUrl":"https://picsum.photos/id/33/60/60","styleId":33},{"id":35,"smallUrl":"https://picsum.photos/id/34/60/60","styleId":34},{"id":36,"smallUrl":"https://picsum.photos/id/35/60/60","styleId":35}]
*/