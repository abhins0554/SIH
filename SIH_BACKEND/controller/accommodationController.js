const accommodationModel = require("../model/accommodationModel");

exports.createAccommodation = async (req, res) => {
  let {
    name,
    price,
    tags,
    description,
    acRoom,
    television,
    freeWifi,
    geyser,
    parkingFacility,
    cctv,
    reception,
    security,
    anyTimeCheckIn,
    dailyHouseKeeping,
    fireExtinguisher,
    attachedBathroom,
    publicToilet,
    latitude,
    longitude,
  } = req.body;
  const accommodation = new accommodationModel({
    name: name,
    price: price,
    tags: tags,
    description: description,
    facility: {
      acRoom: acRoom,
      television: television,
      freeWifi: freeWifi,
      geyser: geyser,
      parkingFacility: parkingFacility,
      cctv: cctv,
      reception: reception,
      security: security,
      anyTimeCheckIn: anyTimeCheckIn,
      dailyHouseKeeping: dailyHouseKeeping,
      fireExtinguisher: fireExtinguisher,
      attachedBathroom: attachedBathroom,
      publicToilet: publicToilet,
    },
    location:{
        latitude:latitude,
        longitude:longitude,
    },
    image: "/" + req.files.accommodationImage[0].path,
  });

  await accommodation.save((err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message: "Database Error",
        error: err,
      });
    } else {
      return res.json({
        code: 200,
        message: "Accommodation added Successfully",
        data: result,
      });
    }
  });
};

exports.fetchAllDetails = async (req,res) => {
    accommodationModel.find({deleted:'N'}, async (err, result) => {
        if (err) {
          return res.json({
            code: 500,
            message: "Database Fetch Error",
            error:err
          });
        } else {
          return res.json({
            code: 200,
            message: "All Accommodation Details",
            data:result
          });
        }
      })
}