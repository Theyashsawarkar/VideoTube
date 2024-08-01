import 'dotenv/config'
import connectToDB from './src/db/dbConnect.js'
import app from './src/app.js'


connectToDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on: ${process.env.PORT}`);
    })
  })
  .catch((error) => console.log("MONGODB connection failed!!!: ", error))



