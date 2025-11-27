//!TEMPLATE LITERALS

//ESKİ HALİ 
function write (firstname, lastname){
    console.log("İsim:" + firstname +" "+ "Soyisim:" + lastname)
}
write("Süleyman","Özden")

//Template Literals ile (alt gr + iki kez noktalı virgüle basarak yapabilirsiniz işareti)
/*Bizim boşluk bırakmamız için eski yöntemdeki gibi boşluk için tekrardan tırnak açmamıza 
gerek yoktur. Bizim kodu yazarken "Enter" tuşuna basmamız onun algılaması için yeterlidir*/
const writeNew =(newFirstName,newLastName)=> console.log(`İsim: ${newFirstName} Soyisim: ${newLastName}`);
writeNew("Ünzile","Özden")

//*Kullanıcımızın girdiği userId değerine göre çağırma işlemi yapıyoruz 
const getUserById=(userId)=>{
    console.log(`"http://localhost:8080/users/${userId}"`) 
}
getUserById(5)