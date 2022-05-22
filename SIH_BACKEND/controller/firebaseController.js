const userModel = require("../model/userModel");
const admin = require("firebase-admin");

exports.verifyUserToken = async (req, res) => {
  let idToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2lodXR0cmFraGFuZHRvdXJpc20iLCJhdWQiOiJzaWh1dHRyYWtoYW5kdG91cmlzbSIsImF1dGhfdGltZSI6MTY1MjUzNDIzOSwidXNlcl9pZCI6IkVpbUF5d1FKM1Zob2tZMFZKUzhiZGUyazU3NDMiLCJzdWIiOiJFaW1BeXdRSjNWaG9rWTBWSlM4YmRlMms1NzQzIiwiaWF0IjoxNjUyNTM0MjM5LCJleHAiOjE2NTI1Mzc4MzksImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hgBau5wGPbuycTFR50E75vWUNdUyr57G0vOgklzkNmDUT6ZhHL9EkHUdgSW4TJnStYVNfHtZsuybeisUGtd_F_gTPBDQYvlYhaZe_vlnNwqMP-o_rGrdOPbzA2gq6vOqhmOzkMX4bmsBUIG5JNyD0f_m8eJqV8h7uE4HLo6xYjiGNjlidjw1kB4TqEfAJtIhOL1hxhVjjgAvoxUWzA11TnawqfcIvsCP3PdVSxs2KX2oTJhzfJ76gShBIUBDHphaWd2JXIGOcb0sakcFs5_6rVhE0O5m-P6cNNTVhQ8En6ZqewljTTuky2u_LJhgZheuUGyNbQA-19ARS7_hVPg6QA";

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedIdToken) => {
      console.log("ID Token correctly decoded", decodedIdToken);
      admin
        .auth()
        .getUser(decodedIdToken.uid)
        .then((userRecord) => {
          res.send(userRecord);
        })
        .catch((error) => {
          console.error("Error while getting Firebase User record:", error);
          res.send({ code: 403, error: "Unauthorized" });
        });
    })
    .catch((error) => {
      console.error("Error while verifying Firebase ID token:", error);
      res.send({ code: 403, error: "Unauthorized" });
    });
};

exports.checkValidation = async (req,res) => {
    res.send("got it");
}

exports.get_allUserDataFirebase = async (req, res) => {
  admin
    .auth()
    .listUsers(1000) // lists up to 1000 users
    .then((listUsersResult) => {
      return res.json({
        data: listUsersResult,
        code:200,
      });
    })
    .catch(function (error) {
      console.log("Oh no! Firebase listUsers Error:", error);
    });
};


exports.get_allUserDataMongoDB = async (req, res) => {
    userModel.find({},(function(err, result) {
      if (err) {
        res.sendStatus(500);
        res.end();
        return;
      } else {
        return res.json({
          data: result,
          code:200,
        });
      }
    }))
};

exports.userSignup = async (req, res) => {

  let {tokenObject,name,email} = req.body;

  const user = new userModel({
    name : name,
    email : email,
    token : tokenObject,
  });



  await user.save((err, result) => {
    if (err) {
      return res.json({
        code: 400,
        error: err,
      });
    } else {
      return res.json({
        code: 200,
        message: "Create Sucessfully",
      });
    }
  });

};
