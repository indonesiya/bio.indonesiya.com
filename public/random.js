var pages = [ 

"https://bayarpedia.blogspot.com",
"https://bebaasbayarr.blogspot.com",
"https://beritanasional6.blogspot.com",
"https://beritanesiya.blogspot.com",
"https://bikinmasakan.blogspot.com",
"https://carijandaonline.blogspot.com",
"https://hasdukmerahputih.blogspot.com",
"https://indonesiwa.blogspot.com",
"https://jandacantikkaya.blogspot.com",
"https://jandamudaseksi.blogspot.com",
"https://jutaanjanda.blogspot.com",
"https://keepopedia.blogspot.com",
"https://kuotagram.blogspot.com",
"https://pejuangpramuka.blogspot.com",
"https://piniterest.blogspot.com",
"https://pinogram.blogspot.com",
"https://pintergram.blogspot.com",
"https://safetemplates.blogspot.com",
"https://sejutakita.blogspot.com",
"https://sejutakuota.blogspot.com",
"https://sejutashare.blogspot.com",
"https://setahunbaru.blogspot.com",
"https://sijandakembang.blogspot.com",
"https://spewehascouter.blogspot.com",
"https://surgajanda.blogspot.com",
"https://viralindongsay.blogspot.com",

]; 
function randomPage() { 
return pages[Math.round(Math.random() * (pages.length - 1))]; 
} 
location.href= randomPage(); 