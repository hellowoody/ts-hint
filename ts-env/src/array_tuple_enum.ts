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