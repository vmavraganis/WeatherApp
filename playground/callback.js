

var getUser=(id,callback)=>{
    let user={
        id:id,
        name:"Vlasis"
    }
    setTimeout(()=>{
        callback(user);
    },2000)
};


getUser(666-34,(user)=>{
       console.log(user.id);
});



 