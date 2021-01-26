/*
 * @Author: your name
 * @Date: 2021-01-25 16:35:10
 * @LastEditTime: 2021-01-26 14:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-ts\src\ts.ts
 */
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 3, 5]

//元组类型
let compleVar: [number, string] = [1, '33']

//枚举  只能看到key, value默认从0开始
enum DateEnum {
  Monday, Tuesday, Wednesday, Thursday, Friday
}
console.log(DateEnum["Monday"] === 0); // true
let data: DateEnum = DateEnum.Monday
let setValue: () => void = () => {
  list2 = [2, 3]
}
function testFn1(): number {
  return 1
}

let otherSetValue = function otherSetValue(): void {
  compleVar = [3, 'ee']
}

let simpleVar: any
simpleVar = 1
simpleVar = true

interface IProps {
  name: string
  gender: number,
  address: string
}

const staff: IProps = {
  name: "tom",
  gender: 1,
  address: "hangzhou"
}
function register(): IProps {
  return {
    name: "tom",
    gender: 1,
    address: "hangzhou"
  }
}


type obj = {
  name: string
  gender: number,
  address: string
}

const a: obj = {
  name: "tom",
  gender: 1,
  address: "hangzhou"
}
function b(): obj {
  return {
    name: "tom",
    gender: 1,
    address: "hangzhou"
  }
}

interface IGProps {
  setName: <T>(str: T) => void
}
const nameWrapper: IGProps = {
  setName: <T>(str: T) => {
    const userNameArr2: T[] = []
    userNameArr2.push(str)
  }
}
nameWrapper.setName("123")
nameWrapper.setName(1213)