export class BaseChannel {
    id: string;
    type: number;
    name: string;

    constructor(options: { id: string; type: number; name: string }) {
        this.id = options.id;
        this.type = options.type;
        this.name = options.name;
    }
}
