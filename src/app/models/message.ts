export class Message{
    constructor(
        public Id: string,
        public text: string,
        public viewed: string,
        public createdAt: string,
        public emitter: string,
        public receiver: string
    ){}
}