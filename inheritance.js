//!INTHERITANCE(MİRAS ALMA)
//!Bir sınıfın özelliklerini başka bir sınıf içinde kullanabiliriz.Kod tekrarının önüne geçiyor
//! "extends" anahtar kelimesi ile miras alırız . 

class Person {
    firstName='Ayşegül';

    write(){
        console.log("Person Firstname:",this.firstName)
    }
}

class student extends Person{
    write(){
        console.log("Student Firstname:", this.firstName)
        super.write() //super ile üst sınıfın metoduna eriştik
    }

}
const person = new Person();
person.write();

const student1 = new student();
student1.write();

