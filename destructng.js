//!DESTRUCTİNG KULLANIMI


//ESKİ KULLANIMI

let langs=["Python","JS","C++","Java"];
let lang1,lang2,lang3,lang4;

lang1=langs[0];
lang2=langs[1];
lang3=langs[2];
lang4=langs[3];

console.log(lang1,lang2,lang3,lang4); 

//YENİ KULLANIMI (DESTRUCTİNG)
let langsNew=["Java","C","Ruby"];
let [langNew1,langNew,langNew3]=langsNew;
console.log(langNew1,langNew,langNew3)


const user ={
    firstName:"Nisanur",
    lastName:"Özden",
    salary:5000,
    job:"Student"
}
let {firstName,lastName, salary,job} = user;
console.log(firstName,lastName, salary,job)
/*ama eğer biz başka bir değişken adı kullanmak istiyorsak 
"değişkenin adı : kullanmak istediğimiz değişken adı"
şeklinde yazmalıyız*/
let {firstName:isim,lastName:soyisim, salary:maaş,job:iş} = user;
console.log(isim,soyisim,maaş,iş)