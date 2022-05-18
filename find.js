const{tokoku}=require("./models");


//cari semua
tokoku.findAll().then((tokoku)=>{
    console.log(tokoku);
});
 
//cari salah satu
tokoku.findOne({
    where:{
        id:1,
    },
}).then((tokoku)=>{
    console.log(tokoku);
});