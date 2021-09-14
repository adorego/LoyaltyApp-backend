import mongoose from 'mongoose';

const dbURI = 'mongodb://localhost/loyaltyapp';

if(process.env.NODE_ENV === 'production'){
    //dbURI = 'mongodb+srv://adorego:camila2000@cluster0-bnes2.mongodb.net/<dbname>?retryWrites=true&w=majority';
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected ');
});

const gracefulShutdown = function (msg:string, callback:any){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0)
    });
});
// For Heroku app termination
process.on('SIGTERM', function(){
    gracefulShutdown('Heruku app shutdown', function(){
        process.exit(0)
    });
});

