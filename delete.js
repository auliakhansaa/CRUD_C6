const{tokoku}=require("./models");

tokoku.destroy({
    where:{
        id:1,
    },
}).then(()=>{
    console.log("Data terhapus");
})