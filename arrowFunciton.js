//?ARROW FUNCTİONS KULLANIMI

//ESKİ FONKSİYON KULLANIMI
function yazdir(){
    console.log("Merhaba")
}
yazdir();

//YENİ FONKSİYON KULLANIMI (ARROW FUNCTİON)
const yazdir2 =()=>{
    console.log("MERHABA ARROW FUNSTİON")
}
yazdir2();

//?PARAMETRE KULLANIMI
const yazdir3 =(name,lastname)=>{
    console.log("Merhaba",name,lastname)
}
yazdir3("Ayşegül","Özden");

//*eğer yazdığımız function kodu tek satırdan oluşuyorsa kıvırcık parantezleri kaldırabiliriz

const yazdir4=(age,city)=> console.log("Benim yaşım",age,"ve yaşadığım şehir",city)
yazdir4(22,"Mersin");

//* eğer funcitonumuz tek bir paramtereden oluşuyorsa parantezleride kaldırabiliriz

const yazdir5=meslek => console.log("Benim mesleğim",meslek)
yazdir5("JS-React Developer")

