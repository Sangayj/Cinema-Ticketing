const cloudinary = require("../cloud");

exports.uploadTrailer = async (req, res) => {
  const { file } = req;
  if (!file) return alert(res, "video file is missing");

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: "video",
    }
  );
  res.status(201).json({ url, public_id });
};
