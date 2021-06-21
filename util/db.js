import mongoose from 'mongoose'

export const connectDb = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`Connected: ${conn.connection.host}`)

    } catch(e) {
        console.log(e)
    }

}