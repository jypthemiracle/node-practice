import express = require("express");
import path = require("path");
const router = express.Router();

router.get('/', function (request: express.Request, response: express.Response) {
    response.sendFile(path.join(__dirname, "..", "..", "public", "main.html"));
});

module.exports = router;