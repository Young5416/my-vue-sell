/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:43:42
 * @LastEditTime: 2019-08-20 17:40:24
 * @LastEditors: Please set LastEditors
 */
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
    let url = window.location.search
    let obj = {}
    let reg = /[?&][^?&]+=[^?&]+/g
    let arr = url.match(reg)
    // ['?id=12345', '&a=b']
    debugger
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=')
            let key = decodeURIComponent(tempArr[0])
            let val = decodeURIComponent(tempArr[1])
            obj[key] = val
        })
    }
    return obj
};
