


export class ImagemModel {
    constructor(
        public id: string,
        public ImagemBase64: string,
        public datePublish: string,
        public livro: string,
        public dataCriacao: Date,
        public dataAtualizacao: Date,
        public excluido: boolean,
    ) { }
}