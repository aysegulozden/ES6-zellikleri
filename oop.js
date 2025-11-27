//!OOP GİRİŞ

//Sınıf tanımı yapıyoruz
/* Bir sınıfın içinde
1-Özellikleri
2-Yapıcı methodu
3-Function
olur*/
class Insan{
    //*Yapıcı method
    constructor(name,firstname,age,salary){
    //*"this" kullanımı tanımlama için yapılır. tıpkı "const" kullandığımız gibi.
    //*isim , soyisim ,yas , maas adında değişkenler tanımladık ve yapıcı methodtan gelen değerleri atadık
      this.isim= name;
      this.soyisim=firstname,
      this.yas=age,
      this.maas=salary
    }

    bilgileriGoster(){
        console.log(`
             İsim:${this.isim}
             Soyisim:${this.soyisim} 
             Yas: ${this.yas} 
             Maas:${this.salary}`)
    }
}

//*Insan sınıfından bir tane nesne oluşturduk 
//*Nesne oluşturmak için "new" anahtar kelimesini kullanmamız lazım
const insan1= new Insan("Ayşegül","Özden",22,60000);
const insan2= new Insan("Nisanur","Özden",17,65000);
insan1.bilgileriGoster();
insan2.bilgileriGoster();