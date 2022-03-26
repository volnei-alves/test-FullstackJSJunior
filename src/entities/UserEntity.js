module.exports = class UserEntity {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    insertUser() {
        return {
            id: this.id,
            email: this.email,
            password: this.password,
        };
    }
    getUser() {
        return {
            id: this.id,
            email: this.email,
        };
    }
};
