// Class
/**
 * 私有属性private：只能在当前类当中访问，外部无法访问，子类也无法通过继承的方式进行访问
 * 公有属性public：当前类、外部、子类都可以访问
 * 保护属性protected：只能在当前类及其子类中访问
 * 
 * 如果不写修饰符，则默认为public
 */

class Bus {
  private list:any = [];

  subscribe(callback:any){
    this.list.push(callback);
  }

  dispatch(){
    this.list.forEach((callback: any) => {
      callback && callback();
    });
  }
}
let myBus = new Bus();
console.log(myBus);



// 利用接口来约束class
interface classInterface{
  name: string,
  age?: number,
  getName: () => string
}

// A 和 B来实现classInterface接口
class A implements classInterface {
  name = "AAA";
  age = 20;
  a1(){}
  a2(){}
  getName(){
    return "AAA"
  }
}
class B implements classInterface {
  name = "BBB";
  b1(){}
  b2(){}
  getName(){
    return "BBB"
  }
}
// 方法接收的参数，需要符合classInterface接口
// 这样可以避免使用getName方法时报错
function init(obj:classInterface){
  obj.getName();
}
let objA = new A();
let objB = new B();
init(objA);
init(objB);

export default Bus;