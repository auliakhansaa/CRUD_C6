const{tokoku}=require("./models");

tokoku.create({
    title:"sabun dettol 120 ml",
    body:" Sabun ini mengandung antiseptik yang sangat baik di musim covid ini",
    approved: true,
}).then((tokoku)=>{
    console.log(tokoku);
});