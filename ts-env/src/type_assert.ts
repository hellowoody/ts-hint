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



