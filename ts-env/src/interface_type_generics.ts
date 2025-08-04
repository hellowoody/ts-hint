// 接口
interface Person {
    name:string,
    gender:number
}

const p1:Person = {
    name:"zhangsan",
    gender:1
}

// type 类型
type MyType = string | number
let a:MyType = 100
let b:MyType = "hello"


// generics 泛型
function bar1(a:number,b:number):number[]{
    return [a,b]
}

function bar2(a:string,b:string):string[]{
    return [a,b]
}

function bar3<T>(a:T,b:T): T[] {
    return [a,b]
}

console.log(bar3(1,2))
console.log(bar3("a","b"))