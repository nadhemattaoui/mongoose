const mongoose=require('mongoose')

const Connect =()=>{
try {
    mongoose.connect('mongodb://0.0.0.0:27017/Nadhem')
    console.log('database connected')
}
catch (error){
    console.log('error connection')
}
}
module.exports=Connect