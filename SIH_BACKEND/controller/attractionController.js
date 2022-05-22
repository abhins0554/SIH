const attractionModel = require("../model/attractionModel");

exports.createAttraction = async (req, res) => {
    let {
        name,
        description,
        longitude,
        latitude,
        email,
        phone,
        video,
        category,
    } = req.body;
    const attraction = new attractionModel({
        name: name,
        description: description,
        location: {
            longitude: longitude,
            latitude: latitude,
        },
        image: "/" + req.files.attractionImage[0].path,
        email: email,
        phone: phone,
        video: video,
        category: category,
    });

    await attraction.save((err, result) => {
        if (err) {
            return res.json({
                code: 500,
                message: "Database Error",
                error: err,
            });
        } else {
            return res.json({
                code: 200,
                message: "Attraction added Successfully",
                data: result,
            });
        }
    });
};

exports.attractionAllFetch = async (req, res) => {
    attractionModel.find({ deleted: "N" }, async (err, result) => {
        if (err) {
            return res.json({
                code: 500,
                message: "Database Fetch Error",
                error: err,
            });
        } else {
            return res.json({
                code: 200,
                message: "All Attraction Details",
                data: result,
            });
        }
    });
};

exports.attractionByCategory = async (req, res) => {
    const { category } = req.query;
    attractionModel.find({ category: category,deleted: "N"  }, async (err, result) => {
        if (err) {
            return res.json({
                code: 500,
                message: "Database Fetch Error",
                error: err,
            });
        } else {
            return res.json({
                code: 200,
                message: "All Attraction Fetch",
                data: result,
            });
        }
    });
};

exports.updateAttraction = async (req, res) => {
    let {
        id,
        name,
        description,
        longitude,
        latitude,
        email,
        phone,
        video,
        category,
    } = req.body;

    const updateDoc = {
        $set: {
            name: name,
            description: description,
            location: {
                longitude: longitude,
                latitude: latitude,
            },
            email: email,
            phone: phone,
            video: video,
            category: category,
            image: image,
            updatedOn: Date.now(),
        },
    };
    attractionModel.findOneAndUpdate(
        { _id: id },
        updateDoc,
        { new: true },
        async (err, result) => {
            if (err) {
                return res.json({
                    code: 500,
                    message: "Database Fetch Error",
                    error: err,
                });
            } else {
                return res.json({
                    code: 200,
                    message: "Update Attraction Successful",
                    data: result,
                });
            }
        }
    );
};

exports.deleteAttraction = async (req, res) => {
    const { id } = req.body;

    const updateDoc = {
        $set: {
            deleted: "Y",
        },
    };

    attractionModel.findOneAndUpdate(
        { _id: id },
        updateDoc,
        { new: true },
        async (err, result) => {
            if (err) {
                return res.json({
                    code: 500,
                    message: "Database Fetch Error",
                    error: err,
                });
            } else {
                return res.json({
                    code: 200,
                    message: "Attraction Deleted",
                    data: result,
                });
            }
        }
    );
};
