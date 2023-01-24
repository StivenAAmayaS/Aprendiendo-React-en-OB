export class Contact {
    first_name = '';
    last_name = '';
    email = '';
    isConected = false;

    constructor(first_name, last_name, email, isConected) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.isConected = isConected;
    }
}