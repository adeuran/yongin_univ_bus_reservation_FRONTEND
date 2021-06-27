import DTO from './DTO';

export default class StationDTO extends DTO {
    //constructor
    constructor(id, name, explain, position, image) {
        super();
        this._id = id;
        this._name = name;
        this._explain = explain;
        this._position = position;
        this._image = image;
    }

    //getter setter
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get explain() {
        return this._explain;
    }
    set explain(explain) {
        this._explain = explain;
    }

    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }

    get image() {
        return this._image;
    }
    set image(image) {
        this._image = image;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            explain: this.explain,
            position: this.position,
            image: this.image,
        }
    }
};