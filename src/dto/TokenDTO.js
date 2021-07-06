import DTO from './DTO';
import UserDTO from '../dto/UserDTO';
export default class TokenDTO extends DTO {

    //constructor
    constructor(id, user = new UserDTO(), token, issued) {
        super();
        this._id = id;
        this._user = user;
        this._token = token;
        this._issued = issued;
    }

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }

    get token() {
        return this._token;
    }
    set token(token) {
        this._token = token;
    }

    get issued() {
        return this._issued;
    }
    set issued(issued) {
        this._issued = issued;
    }

     toJSON() {
         return {
             id: this.id,
             user: this.user,
             token: this.token,
             issued: this.issued,
         };
    }

};