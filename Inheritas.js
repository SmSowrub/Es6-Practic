class parent{
    constructor(){
        this.FatherName='Hany tom';
    }
}

class Child extends parent{
    constructor(name){
        super();
        this.Name=name;
    }
    BackIt(){
        return this.Name + " " + this.FatherName; 
    }
}

const addIt=new Child('jarry anti');
console.log(addIt.BackIt());