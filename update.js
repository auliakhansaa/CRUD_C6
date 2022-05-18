const{tokoku}=require("./models");



tokoku.update(
    {
        title:"Shampoo dettol 120 ml"
    },
    {
        where:{
            id:1,
        },
    }
    )
    .then(()=>{
        console.log("article terupdate");
        process.exit();
    })
    .catch((err)=>{
        console.log("Gagal nih");
    });
