// 基础类型
let v01: string = "abc"
let v02: number = 10
let v03: boolean = true
let v04: null = null
let v05: undefined = undefined
let v06: object = {name:"zhangsan"}
let v07: object = [1,2,3]
let v08: Symbol = Symbol()
let v09: Array<number> = [1,2,3]
// 联合类型
let v10:string | undefined 
let v11: 1 | "abc" | true = 1 // 还可以 "abc" 或者 true
