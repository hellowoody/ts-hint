# TypeScript 提示

## TypeScript在线环境

 https://www.typescriptlang.org/play

## 搭建TypeScript环境(ts-env文件夹)

 - 初始化node项目环境 

    ```shell
    # 创建 ts-env 文件夹
    mkdir ts-env
    # 进入 ts-env 文件夹  
    cd ts-env
    # 初始化node项目环境
    npm init -y 
    # “局部”安装typescript
    npm i -D typescript
    # 查看是否安装成功
    npx tsc -v
    ```
 - 初始化ts配置文件 

    ```shell
    npx tsc --init
    # 生成ts的配置文件tsconfig.json
    ```

    ```json
        {
            // Visit https://aka.ms/tsconfig to read more about this file
            "compilerOptions": {
                // File Layout
                "rootDir": "./src",
                "outDir": "./dist",

                // Environment Settings
                "module": "esnext",
                "target": "es6",

                // Other Outputs
                "sourceMap": false,
                "declaration": true,
                "declarationMap": false,

            }
        }

    ```

 - 执行编译命令 

    ```shell
    npx tsc
    # 或者
    npx tsc -p .
    ```
 
## 类型推断

 ```ts

    let str = "hello"
    // 类型推荐 产生错误
    // Type 'number' is not assignable to type 'string'
    // str = 100
    // str是字符串类型 后面只能在字符串类型上进行修改
    str = "你好" 
 ```

 ```js
    let str = "hello";
    // 类型推荐 产生错误
    // Type 'number' is not assignable to type 'string'
    // str = 100
    // str是字符串类型 后面只能在字符串类型上进行修改
    str = "你好";
    // export 是为了不同文件生命的同名变量 不相互影响
    export {};

 ```

## 类型注解

 ```ts
    let str: string 
    str = "hello"

    let str2:string = "world"

    console.log(str + str2)
 ```

 ```js
    let str;
    str = "hello";
    let str2 = "world";
    console.log(str + str2);
    export {};
 ```

## 类型声明

 ```ts
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
 ```

 ```js
    // 基础类型
    let v01 = "abc";
    let v02 = 10;
    let v03 = true;
    let v04 = null;
    let v05 = undefined;
    let v06 = { name: "zhangsan" };
    let v07 = [1, 2, 3];
    let v08 = Symbol();
    let v09 = [1, 2, 3];
    // 联合类型
    let v10;
    let v11 = 1; // 还可以 "abc" 或者 true
    export {};
 ```

## 类型断言

 ```ts
    function getLength(str: string | null): number {
        // 使用类型断言：我确定传进来的 str 一定不是 undefined
        return (str as string).length;
        // str 有可能是 undefined
        // return str.length
    }

    console.log(getLength("hello"))

    const num_arr = [1,2,3]
    const res = num_arr.find(v => v > 2) 
    // res 有可能没有找到返回的是undefined 导致res**2 是NaN
    // 'res' is possibly 'undefined'
    // console.log(res**2) 

    const num_arr2 = [1,2,3]
    // 用 as type 实现断言,通俗解释 假设res2的类型是number
    const res2 = num_arr2.find(v => v > 2) as number 
    console.log("res2",res2**2)
 ```

 ```js
    function getLength(str) {
        // 使用类型断言：我确定传进来的 str 一定不是 undefined
        return str.length;
        // str 有可能是 undefined
        // return str.length
    }
    console.log(getLength("hello"));
    const num_arr = [1, 2, 3];
    const res = num_arr.find(v => v > 2);
    // res 有可能没有找到返回的是undefined 导致res**2 是NaN
    // 'res' is possibly 'undefined'
    // console.log(res**2) 
    const num_arr2 = [1, 2, 3];
    // 用 as type 实现断言,通俗解释 假设res2的类型是number
    const res2 = num_arr2.find(v => v > 2);
    console.log("res2", Math.pow(res2, 2));
    export {};
 ```

## 数组和元组使用

 ```ts
    // 数组两种声明方式
    let arr:number[] = [1,2,3]
    let arr2:Array<string> = ["a","b","c"]

    // 元组
    let tup: [number,string,boolean]  = [1,"abc",false]
    tup[0] = 3.14
    // 因为第一个元素的类型是number 所以下面的赋值会编译报错
    // tup[0] = true 

    let tup2: [number,string,boolean?]  = [1,"abc"]

    // 枚举
    enum Gender {
        MALE,
        FEMALE
    }

    console.log("male: ",Gender.MALE)
    console.log("female: ",Gender[1])
 ```

 ```js
    // 数组两种声明方式
    let arr = [1, 2, 3];
    let arr2 = ["a", "b", "c"];
    // 元组
    let tup = [1, "abc", false];
    tup[0] = 3.14;
    // 因为第一个元素的类型是number 所以下面的赋值会编译报错
    // tup[0] = true 
    let tup2 = [1, "abc"];
    // 枚举
    var Gender;
    (function (Gender) {
        Gender[Gender["MALE"] = 0] = "MALE";
        Gender[Gender["FEMALE"] = 1] = "FEMALE";
    })(Gender || (Gender = {}));
    console.log("male: ", Gender.MALE);
    console.log("female: ", Gender[1]);
    export {};
 ```

## 函数和参数类型

 ```ts
    function foo (a = 10,b:string, c?:boolean, ...rest: number[]):object {
        return {}
    }

    foo(1,"hello",true,1,2,3)
    // 下面的代码因为参数类型不符 会编译报错
    // foo(1,"hello",true,1,2,3,"a")
 ```

 ```js
    function foo(a = 10, b, c, ...rest) {
        return {};
    }
    foo(1, "hello", true, 1, 2, 3);
    export {};
    // 下面的代码因为参数类型不符 会编译报错
    // foo(1,"hello",true,1,2,3,"a")
 ```

## 接口interface,type和泛型概念

 ```ts
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
 ```

 ```js
    const p1 = {
        name: "zhangsan",
        gender: 1
    };
    let a = 100;
    let b = "hello";
    // generics 泛型
    function bar1(a, b) {
        return [a, b];
    }
    function bar2(a, b) {
        return [a, b];
    }
    function bar3(a, b) {
        return [a, b];
    }
    console.log(bar3(1, 2));
    console.log(bar3("a", "b"));
    export {};

 ```

