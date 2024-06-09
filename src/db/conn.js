import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017/Hydroponics_Users")
    .then(() => {
        console.log(`Connection is Successful`)
    }).catch((error) => {
        console.log(`No connection`)
    })
