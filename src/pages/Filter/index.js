"use strict"
import React from "react"
import Filter from './Filter'
import {
    getStore,
    getListStore,
    getListProduct, 
    getProduct,
    getTopping,
    } from '../../service/server'
import _ from 'lodash'
export default class FilterContainer extends React.Component {
    state={
        products:[],
        stores: null,
        listToppings:[],
        valueOption:"name"
    }
    
    sortByPriceAsc = () => {
        const priceAsc =  this.state.products.sort((a, b) => Number(a[0].price) - Number(b[0].price))
        return priceAsc
      }
      sortByPriceDesc = () => this.sortByPriceAsc().reverse()
        
      
    _handleChange = (e)=>{
        if(e === "ASC"){
            this.setState({
                products:[...this.sortByPriceAsc()],
                valueOption: "ASC"
            })
            console.log("increase",this.state.products)
        }
        if(e === "DES"){
            this.setState({
                products:[...this.sortByPriceDesc()],
                valueOption: "DES"
            })
            console.log("des",this.state.products)
        }
        if(e === "name"){
            this.setState({
                products: this.state.products.sort((a,b)=>{
                    let nameA = a[0].name.toUpperCase(); 
                    let nameB = b[0].name.toUpperCase(); 
                    console.log(nameA)
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // name trùng nhau
                    return 0;
                })
            })
        }

    }
    _onchange = (e) =>{
        let oldProduct = this.state.products
        if(e.length !== 0){
            const newfilterProduct = new Array()
            console.log("checked", e)
           
            console.log(this.state.products)
            for( let i = 0; i < e.length; i++){
                for(let j = 0; j< oldProduct.length; j++){
                    console.log("ha",oldProduct[j])
                    if(oldProduct[j][0].toppings.includes(e[i])){
                        if(newfilterProduct.indexOf(oldProduct[j]) === -1){
                            newfilterProduct.push(oldProduct[j])
                        }
                    }
                }
            }
            this.setState({
                products:newfilterProduct
            })
        }else{
            console.log("uncheck")
            const id= _.get(this.props.match,"params.id")
            const productsId = getListProduct(id)
            const products = productsId.length &&productsId.map(
                (idItem)=> getProduct(idItem)
            )
            this.setState({
                products: products
            })
            console.log(this.state.products)
        }
        
    }
    async componentDidMount(){
        const id= _.get(this.props.match,"params.id")
        const stores = await getStore(id)
        const productsId = await getListProduct(id)
        const listToppings = await getTopping()
        const products = productsId.length &&productsId.map(
            (idItem)=> getProduct(idItem)
        )

       
        this.setState({
            stores,
            products,
            listToppings
        })
        
    }
    async componentDidUpdate(prevProps, prevState){
        const id= _.get(this.props.match,"params.id")
        const idOld = _.get(prevProps,"match.params.id")
        if(id !== idOld){
            const stores = await getStore(id)
            const productsId = await getListProduct(id)
            const listToppings = await getTopping()
            const products = productsId.length &&productsId.map(
                (idItem)=> getProduct(idItem)
            )
           
            this.setState({
                stores,
                products,
                listToppings
            })

        }
        
    }
    _extra = () =>({
        ...this.state,
        handleChange:this._handleChange,
        onChange: this._onchange
    })
    render() {
        return <Filter {...this._extra()}/>
    }
}
