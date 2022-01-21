export class Image {

    id?: number;
    imagePath: string;
    image64: string;
    def: boolean;

    constructor(

        imagePath: string,
        image64: string,
        def: boolean,
        id?: number,
    ){
        this.imagePath = imagePath;
        this.image64 = image64;
        this.def = def;
        this.id = id;
    }
}
