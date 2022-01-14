export class Image {

    id: number;
    imagePath: string;
    image64: string;
    def: boolean;

    constructor(

        id: number = 0,
        imagePath: string = '',
        image64: string = '',
        def: boolean
    ){
        this.id = id;
        this.imagePath = imagePath;
        this.image64 = image64;
        this.def = def;
    }
}
