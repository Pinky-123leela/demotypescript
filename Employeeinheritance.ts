/* class Customer extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number) {
        super(id, name, city);
    }
}
class Supplier extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public companyName: string) {
        super(id, name, city);
    }
}

let data2 = [new Employee("e01", "kajal", "Sales", "Paris"),
        new Customer("c101", "Alice Jones", "London", 500)];
data.push(new Supplier("s101", "Dora Peters", "New York", "Acme"));
data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    } else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    } else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }
}); */