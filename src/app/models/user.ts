export class User{
    constructor(
        public Id: string,
        public name: string,
        public surname: string,
        public nick: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ){}
}