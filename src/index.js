import 'dotenv/config'
import connectToDB from './db/dbConnect.js'
import app from './app.js'


connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on: ${process.env.PORT}`);
    })
  })
  .catch((error) => console.log("MONGODB connection failed!!!: ", error))



