function foo (a = 10,b:string, c?:boolean, ...rest: number[]):object {
    return {}
}

foo(1,"hello",true,1,2,3)
// 下面的代码因为参数类型不符 会编译报错
// foo(1,"hello",true,1,2,3,"a")