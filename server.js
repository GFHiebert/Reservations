const express = require("express");
const path = require("path");


let app = express();
let PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('style'));

let reservations = [
  {
    name: "cba",
    phonenumbder: 8888888888,
    email: "something@gmail.com",
    uniqueId: "",
  },
  {
    name: "abc",
    phonenumbder: 8888888888,
    email: "something@gmail.com",
    uniqueId: "",
  },
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});
app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/reservations", function (req, res) {

  return res.json(reservations);
});

app.post("/api/reservations", function (req, res) {

  let newReservation = req.body;

  reservations.push(newReservation);

  res.json(reservations);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

