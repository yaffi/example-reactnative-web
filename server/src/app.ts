import express from "express";
import bodyParser from 'body-parser';
import socketio from 'socket.io';
import http from 'http';

import router from "./models/v1";

const app: express.Express = express();
const hoge = http.createServer(app);

//cors設定
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

app.use('/api/v1', router);

const io: socketio.Server = socketio(hoge);

io.on("connection", (socket: socketio.Socket) => {
  socket.on('message', (msg: string) => {
    console.log(new Date());
    io.emit("message", new Date());
  })
})

hoge.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});