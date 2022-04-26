import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const dbUrl = process.env.dbUrl
 const  dbFunction = async () => {
        try {
           const resp = await mongoose.connect(dbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology:true
           })
            return resp
        } catch (error) {
            console.log(error)
        }
}
    
export default dbFunction