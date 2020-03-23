export class Publication{
    constructor(
        public Id: string,
        public text: string,
        public file: string,
        public createdAt: string,
        public user: string
    ){}
}