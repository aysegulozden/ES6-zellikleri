//! STATIC NEDİR : Bir sınıfın içindeki metot static olarak tanımlanırsa bu metoda sınıfın dışından erişemezsiniz
//! sadece sınıfın kendisi üzerinden erişebilirsiniz


//sınıf oluşturduk
class Matematik {

    static topla(a,b){
        console.log(a+b)
    }
    cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    bol(a,b){
        console.log(a/b)
    }
}

//sınıftan nesne oluşturduk
//metod statick olarak tanımlanmadığu için nesne üzerinden erişim sağlatabiliriz 
const mat=new Matematik();
mat.cikar(8,3);

//?static olarak tanımlanan metoda class adıyla erişebiliriz
Matematik.topla(5,10)