const eventModel = require("../model/eventModel");


exports.createEvent = async (req, res) => {

  let {title,description,longitude,latitude} = req.body;
  const event = new eventModel({
    title : title,
    description : description,
    location : {
      longitude:longitude,
      latitude:latitude,
    },
    image:"/"+req.files.eventImage[0].path,
  });

  await event.save((err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message:"Database Error",
        error: err,
      });
    } else {
      return res.json({
        code: 200,
        message: "Event added Successfully",
        data:result
      });
    }
  });

};

exports.eventAllFetch = async (req,res) => {
  eventModel.find({deleted:'N'}, async (err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message: "Database Fetch Error",
        error:err
      });
    } else {
      return res.json({
        code: 200,
        message: "All Event Details",
        data:result
      });
    }
  })
}

exports.eventById = async (req,res) => {
  const{id}=req.query
  eventModel.find({_id:id}, async (err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message: "Database Fetch Error",
        error:err
      });
    } else {
      return res.json({
        code: 200,
        message: "Single Event Details",
        data:result
      });
    }
  })
}

exports.updateEvent = async (req,res) => {
  const{id,title,description,longitude,latitude,image}=req.body;
  const updateDoc = {
    $set:{
      title : title,
      description : description,
      location : {
        longitude:longitude,
        latitude:latitude
      },
      image:image,
      updatedOn:Date.now(),
    }
  }
  eventModel.findOneAndUpdate({_id:id}, updateDoc, { new: true }, async (err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message: "Database Fetch Error",
        error:err
      });
    } else {
      return res.json({
        code: 200,
        message: "Update Event Successful",
        data:result
      });
    }
  })
}

exports.deleteEvent = async (req,res) => {
  const{id}=req.body;

  const updateDoc = {
    $set:{
      deleted:'Y'
    }
  }
  
  eventModel.findOneAndUpdate({_id:id}, updateDoc, { new: true }, async (err, result) => {
    if (err) {
      return res.json({
        code: 500,
        message: "Database Fetch Error",
        error:err
      });
    } else {
      return res.json({
        code: 200,
        message: "Event Deleted",
        data:result
      });
    }
  })
}