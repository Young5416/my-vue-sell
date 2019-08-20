/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-17 11:41:14
 * @LastEditTime: 2019-08-20 16:50:58
 * @LastEditors: Please set LastEditors
 */
import {
    get
} from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/ratings')

export {
    getSeller,
    getGoods,
    getRatings
}
