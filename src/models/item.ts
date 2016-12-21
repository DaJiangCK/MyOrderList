export class Item {
    $key?: string;
    name: string;
    number: string;
    color: string;
    size: string;
    tbId: string;
    status: boolean = false;
    createDate: number;

    constructor(name: string, number: string, color: string, 
    size: string, tbId: string, createDate: number){
        this.name = name;
        this.number = number;
        this.color = color;
        this.size = size;
        this.tbId = tbId;
        this.createDate = createDate;
    }
}