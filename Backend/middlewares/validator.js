exports.validateMovie = [
  check("movieName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Movie name is missing"),
  check("director").trim().not().isEmpty().withMessage("director is missing"),
  check("actor").trim().not().isEmpty().withMessage("actor is missing"),
  check("actress").trim().not().isEmpty().withMessage("actress is missing"),
  check("releaseDate").isDate().withMessage("release date is missing"),
  check("description")
    .trim()
    .not()
    .isEmpty()
    .withMessage("description is missing"),
  check("tags")
    .isArray({ min: 1 })
    .withMessage("tags must be an array of strings")
    .custom((tags) => {
      for (let tag of tags) {
        if (typeof tag != "string")
          throw Error("tags must be an array of strings");
      }
      return true;
    }),

  check("trailer")
    .isObject()
    .withMessage("trailer Info must be an object with url and public_id")
    .custom(({ url, public_id }) => {
      try {
        const result = new URL(url);
        if (!result.protocol.includes("http"))
          throw Error("Trailer url is invalid!");

        const arr = url.split("/");
        const publicId = arr[arr.length - 1].split(".")[0];
        if (public_id !== publicId) throw Error("Trailer public_Id is invalid");
      } catch (error) {
        throw Error("Trailer url is invalid!");
      }
    }),

  check("poster").custom((_, { req }) => {
    if (!req.file) throw Error("poster file is missing");
    return true;
  }),
];
