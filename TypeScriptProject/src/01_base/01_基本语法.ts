// 普通类型
let temp1:string = "字符串";
let temp2:boolean = true;
let temp3:number = 100;

// 联合类型
let temp4:string | number;
temp4 = "字符串";
temp4 = 100;

// 数组
let temp5: string[] = ["都", "是", "字", "符", "串"];
let temp6: number[] = [1, 2];
let temp7: string[] | number[] = [1, 2, 3]; // 数组当中只能：全部是string、或者全部是number

// 数组联合
let temp8: (string | number)[] = ["可以是字符串", 1, 2, 3]; // 数组当中可以是string或number
let temp9: Array<string | number> = ["可以是字符串", 1, 2, 3]; // 数组当中可以是string或number

// 对象
// 通过接口来定义一个对象
interface ObjInterface{
  name: string,
  age: number,
  location?: string, // 可选属性
  [propName: string]: any, // 剩下的，用不到的属性，可以设置为键为string，值为any类型
}
let temp10: ObjInterface = { 
  name: "张三",
  age: 20,
};
temp10 = {
  name: "李四",
  age: 22,
  test1: 1,
  test2: true,
  test3: []
};

// 函数
// a b 参数为必传参数，c为可选参数
function temp11(a:number, b:number, c?:number): number{
  return c ? (a + b + c) : (a + b);
}
let temp12:number = temp11(1, 2);

// 函数接口，来定义一个函数的结构，函数的实现必须要求满足接口的要求
interface sumInterface{
  (a:number, b:number, c?:number): number
}
const temp13:sumInterface = function(a:number, b:number, c?:number): number{
  return c ? (a + b + c) : (a + b);
}

// 利用接口定义一个对象，对象当中存在属性和方法
interface personInterface{
  name: string,
  age: number,
  getName: (name:string) => string
}
let temp14:personInterface = {
  name: "李四",
  age: 18,
  getName: (name:string) => {
    return name
  }
};

export {
  temp1, temp2, temp3, temp4, temp5,
  temp6, temp7, temp8, temp9, temp10,
  temp11, temp12, temp13, temp14
};