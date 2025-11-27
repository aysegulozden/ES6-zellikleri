//!SPREAD OPERATÖRÜ  ...

//ESKİ YÖNTEM
let sayilar =[1,2,3,4];
const toplam=(a,b,c,d)=> console.log(a+b+c+d);

toplam(sayilar[0],sayilar[1],sayilar[2],sayilar[3]);

//YENİ YÖNTEM
let sayilarNew =[5,6,7,8];
const toplamNew=(a,b,c,d)=> console.log(a+b+c+d);
toplamNew(...sayilarNew);


//*birleştirme işlemlerinde de kullanılır
const diller1=["Java","C++","C"];
const diller2=["JS","Python","PHP"];
const tumDiller=[...diller1,...diller2,"Go"];
console.log(tumDiller)


//*diziyi ayırabiliriz
const rakams=[2,2,3,4,5,6,7,8,9];
let [a,b, ...geriKalanRakamlar]=rakams;
console.log(a,b,geriKalanRakamlar)
console.log(geriKalanRakamlar)