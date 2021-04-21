//class 안에서 get,set

class A {
    //멤버변수
    _name = 'no name';

    get name(){
        return this._name;
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark';
console.log(a)