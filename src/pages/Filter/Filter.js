import React from "react"
import {Layout, Menu,Button,Select, Checkbox, Row, Col,Card,Typography, Space} from "antd"
import {StoreItem} from '../../components'
const { Text, Link } = Typography;

const {Header, Content, Footer, Sider} = Layout
const { Option } = Select

// function onChange(checkedValues) {
//     console.log('checked = ', checkedValues);
// }
class Filter extends React.Component {
    render() {
        const {
            products,
            stores,
            listToppings,
            handleChange,
            valueOption,
            onChange
            } = this.props
        console.log("product-man",valueOption)
        return (
            <>
             <Layout>
                  
                  <Header 
                   className="site-layout-sub-header-background" 
                   style={{ padding: 0 }}
                  >
                    {stores&&stores[0].name} Menu
                  </Header>
                 
                   <Content>
                       <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <div className="button-filter">
                                <Button>Filter</Button>
                                    
                            </div>
                            
                            <div className="SortByName">
                                <h4>
                                    Sort By
                                </h4>
                                <Select defaultValue={valueOption} style={{ width: 120 }} onChange={handleChange}>
                                    <Option 
                                        value="name"
                                        >Name</Option>
                                    <Option value="ASC">Price increase</Option>
                                    <Option value="DES">Price decrease</Option>
                                </Select>
                            </div>
                            <div className="topping">   
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                    <h4 className="toppings">
                                        Toppings:
                                    </h4>
                                    <Row>
                                    {listToppings&&listToppings.length&&listToppings.map(
                                        (topping)=>(
                                            <Col span={8}>
                                                <Checkbox value={topping}>{topping}</Checkbox>
                                            </Col>
                                        )
                                    )}
                                   
                                    </Row>
                                </Checkbox.Group>
                            </div>
                            {products&&products.length&&products.map(
                                (product)=>(
                                    <StoreItem key={product.id} item ={product}/>
                                )
                            )}
                            

                       </div>
                   </Content>
                
               </Layout>   
            </>
        );
    }
}
export default Filter
