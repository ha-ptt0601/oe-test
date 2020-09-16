import axios from 'axios'
import {products} from '../data/products.json'
import {stores} from '../data/stores.json'
import {shopProducts} from '../data/storeProducts.json'
import _ from 'underscore'

export const getListStore = ()=>{
    return [...stores]
}

export const getStore = (idStore)=>{
    return stores.filter((e) => e.id == idStore)
}
export const getListProduct =(idStore)=>{
    const listShopProduct = shopProducts.filter((e) => e.shop == idStore)
    const idListProduct = listShopProduct.map(e=>e.product)
    return idListProduct
}
export const getProduct = (idproduct)=>{
    const productItem = products.filter(e=>e.id == idproduct)
    return productItem
}

export const getTopping = ()=>{
    let array = new Array()
    const listTopping = products.map(e=>e.toppings.split(","))
    for(let i =0 ; i< listTopping.length ; i++){
        for(let j = 0; j < listTopping[i].length ; j++ ){
            if(array.indexOf(listTopping[i][j]) === -1){
                array.push(listTopping[i][j])
            }
        }
    }
    return array
}

