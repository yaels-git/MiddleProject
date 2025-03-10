const mongoose = require('mongoose')
const connectDB = async () => {
try {
    console.log(process.env.DATABASE_URI);
await mongoose.connect(process.env.DATABASE_URI)
} catch (err) {
console.error("*****error connection to DB****\n" + err)
}
}
module.exports = connectDB