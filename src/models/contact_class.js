export class Contact {
    name = '';
    email = '';
    mobile = 0;
    isConected = false;

    constructor(name, email, mobile, isConected) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.isConected = isConected;
    }
}