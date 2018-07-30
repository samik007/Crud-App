export class Car{
    public id: number;
    public name: string;
    public email: string;
    public date: string

    constructor(id: number,
                    name: string,
                    email: string,
                    date: string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.date=date;
    }
}