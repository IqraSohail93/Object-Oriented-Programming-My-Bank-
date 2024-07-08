// Class
class Bank_account {
    accountBalance;
    constructor(accountBalance) {
        this.accountBalance = accountBalance;
    }
    //Publically Credit
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log(`Credit successfully get into new account and your balance is ${this.accountBalance}`);
        }
        else {
            console.log("Credit unsuccessful");
        }
    }
    //Publically Debit
    Debit(amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log(`Debit successfully shared into new account balance:${this.accountBalance}`);
        }
        else {
            console.log("Debit unsuccessful");
        }
    }
}
//Customer Details
class Customer {
    person;
    age;
    gender;
    mobileNumber;
    bankAccount;
    constructor(person, age, gender, mobileNumber, bankAccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    //Publically user access
    display() {
        console.log("Name: " + this.person.firstname + "" + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Numer:" + this.mobileNumber);
        console.log("Amount in Bank: " + this.bankAccount.accountBalance);
        console.log();
    }
}
const B1 = new Bank_account(40000);
const C1 = new Customer({ firstname: "Iqra", lastname: "Sohail" }, 29, "Female", 92313312327, B1);
C1.display();
C1.bankAccount.Debit(5000);
console.log();
const B2 = new Bank_account(50000);
const C2 = new Customer({ firstname: "Usama", lastname: "Siddiqui" }, 29, "Male", 929876534, B2);
C2.display();
C2.bankAccount.Debit(8000);
console.log();
export {};
