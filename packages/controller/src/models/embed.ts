interface Footer {
    text?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface UrlStructured {
    url?: string;
    proxy_url?: string;
    heigt?: number;
    width?: number;
}

interface Provider {
    name?: string;
    url?: string;
}

interface AuthorStructure {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface FieldStructure {
    name: string;
    value: string;
    inline?: boolean;
}

interface Options {
    title: string;
    type: string;
    description: string;
    url: string;
    color: number;
    footer?: Footer;
    image?: UrlStructured;
    thumbnail?: UrlStructured;
    video?: UrlStructured;
    author?: AuthorStructure;
    provider: Provider;
    fields?: FieldStructure[];
}

export class Embed {
    title: string;
    type: string;
    description: string;
    url: string;
    timestamp: string;
    color: number;
    footer?: Footer;
    image?: UrlStructured;
    thumbnail?: UrlStructured;
    video?: UrlStructured;
    author?: AuthorStructure;
    provider: Provider;
    fields?: FieldStructure[];

    constructor(options: Options) {
        this.title = options.title;
        this.type = options.type;
        this.description = options.description;
        this.url = options.url;
        this.timestamp = new Date().toISOString();
        this.color = options.color;
        this.footer = options.footer;
        this.image = options.image;
        this.thumbnail = options.thumbnail;
        this.video = options.video;
        this.author = options.author;
        this.provider = options.provider;
        this.fields = options.fields;
    }
}
