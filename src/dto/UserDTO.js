import DTO from './DTO';

export default class UserDTO extends DTO {
    //constructor
    constructor(id, identifier, password, name,
        email, phone, type="normal", point=0, penalty,
        banned, state = 'active') {
        super();
        this._id = id;
        this._identifier = identifier;
        this._password = password;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._type = type;
        this._point = point;
        this._penalty = penalty;
        this._banned = banned;
        this._state = state;
    }

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get identifier() {
        return this._identifier;
    }
    set identifier(identifier) {
        this._identifier = identifier;
    }

    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
        
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }

    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
        
    get point() {
        return this._point;
    }
    set point(point) {
        this._point = point;
    }
        
    get penalty() {
        return this._penalty;
    }
    set penalty(penalty) {
        this._penalty = penalty;
    }
        
    get banned() {
        return this._banned;
    }
    set banned(banned) {
        this._banned = banned;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

     toJSON() {
         return {
             id: this.id,
             identifier: this.identifier,
             password: this.password,
             name: this.name,
             email: this.email,
             phone: this.phone,
             type: this.type,
             point: this.point,
             penalty: this.penalty,
             banned: this.banned,
             state: this.state,
         };
    }

};
