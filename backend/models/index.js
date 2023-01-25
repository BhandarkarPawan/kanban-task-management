const { createConnection } = require("mongoose");
const BoardSchema = require("./board");

require("dotenv").config();

console.log(process.env.CNX_STR);
conn = createConnection(process.env.CNX_STR);

const Board = conn.model("Board", BoardSchema);

module.exports = {
    Board,
};
