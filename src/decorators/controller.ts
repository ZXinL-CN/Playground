// ts 装饰器
export function Controller(params: any) {
    console.log(params === Services)
    params.prototype.name = 'hello'
}

@Controller
export class Services {
    constructor() { }

    sayHello() {
        console.log('hello')
    }
}

const s: any = new Services()
console.log(s.name)