import mongoose from 'mongoose'
const Schema = mongoose.Schema

const emailSchema = new Schema({
    email: { type: String, required: true }
})

const Email = mongoose.model('Email', emailSchema)

export { Email }