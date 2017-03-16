let yargs=require('yargs');
const argv=yargs
    .options({
        a:{
            demand:true,
            alias:"address",
            describe:"Address to fetch weather for",
            
        }
}).help()
.alias(`help`,`h`)
.argv;


module.exports={argv};