/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-17 14:31:05
 * @LastEditTime: 2019-08-20 16:59:35
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'

const ERR_OK = 0

export function get(url) {
    return function (params) {
        return axios.get(url, {
            params
        }).then((res) => {
            const {
                errno,
                data
            } = res.data
            if (errno === ERR_OK) {
                return data
            }
        }).catch(() => {

        })
    }
}
