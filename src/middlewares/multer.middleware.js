import multer from "multer";

const storage = multer.diskStorage({
  destination: function(_, _file, cb) {
    cb(null, "./public/temp")
  },
  filename: function(_, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

export const upload = multer({
  storage,
})
