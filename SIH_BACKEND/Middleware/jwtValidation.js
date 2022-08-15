const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const admin = require("firebase-admin");

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("Bearer ")[1];
    if (token == null) {
      res.sendStatus(401);
      res.end();
      return;
    }

    admin
    .auth()
    .verifyIdToken(token.toString())
    .then((decodedIdToken) => {
        req.tokenObject = decodedIdToken?.uid;
        next();
    })
    .catch((error) => {
      res.sendStatus(403);
      res.end();
      return;
    });
  } catch (err) {
      console.log(err);
  }
}
module.exports = authenticateToken;
