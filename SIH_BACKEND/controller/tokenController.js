const tokenModel = require("../model/tokenModel");
const admin = require("firebase-admin");

exports.tokenSave = async (req, res) => {
    let { token } = req.body;

    tokenModel.find({ token: token }, async function (err, result) {
        if (err) {
            res.sendStatus(500);
            res.end();
            return;
        } else {
            if (result.length === 0) {


                const tok = new tokenModel({
                    token: token,
                });

                await tok.save((err, result) => {
                    if (err) {
                        return res.json({
                            code: 500,
                            message: "Database Error",
                            error: err,
                        });
                    } else {
                        return res.json({
                            code: 200,
                            message: "Token Added Successfully",
                            data: result,
                        });
                    }
                });
            } else {
                return res.json({
                    message: "token already exist",
                    code: 200,
                });
            }
        }
    });
};




exports.sendNotification = async (req,res) => {
    let {title,description,image} = req.body;
    tokenModel.find({}, async function (err, result) {
        if (err) {
            return res.json({
                code: 500,
                message: "Database Error",
                error: err,
            });
        }
        let tokensArray = result.map((item,index)=>{
            return item.token
        });
        await admin.messaging().sendMulticast({
            // tokens: result, // ['token_1', 'token_2', ...]
            tokens: tokensArray, // ['token_1', 'token_2', ...]
            notification: {
              title: title,
              body: description,
              imageUrl: image,
            },
        });
        return res.json({
            message: "Notification Send",
            code: 200,
        });
    })
}