//!MAP  ---> key(anahtar) value(değer)
///MAP'ler bir dizi türüdür

//Map'imizi tanımlıyoruz/oluşturuyoruz
const map1 = new Map();
let value;

//*Map'imize değerler atıyoruz (set) keyleri ile beraber. Map'e atadığımız değerlerin türlerinin bir önemi yoktur
map1.set(33,"Mersin");
map1.set(31,"Hatay");
map1.set(70,"Karaman");
map1.set(34,"İstanbul");
//*Map'imizdeki değeri alıyoruz(get)
console.log(map1.get(33));

//Map'imizin Size'sini öğrenmek istersek 
value=map1.size;
console.log(value)

//?Bir değerin Map'imizde olup olmadığını öğrenmek için (has)
console.log(map1.has(81))

//* For Of methodu ile map üzerinde dönerbiliriz
for(let[key,value] of map1){
    console.log(key,value)
}




