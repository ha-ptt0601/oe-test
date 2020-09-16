import React from "react"
import {Layout, Menu,Button,Select, Checkbox, Row, Col,Card,Typography, Space} from "antd"
const { Text, Link } = Typography;
class StoreItem extends React.Component {
    render() {
        const {item} = this.props
        return (
            <>
              <div className="storeItem">
                    <div className="site-card-border-less-wrapper">
                        <Card>
                            <div className="card-space-layout">
                                <Space direction="vertical">
                                    <Text>MT-0{item&&item[0].id}</Text>
                                    <Text>{item&&item[0].name}</Text>
                                </Space>
                            </div>
                            <div className="border-card"></div>
                            <h4>
                                Toppings:
                            </h4>
                            <p> 
                                {item&&item[0].toppings}
                            </p>
                            <div className="price-trending">
                                <div className="trending">
                                        Trending
                                </div>
                                <div className="price">
                                    $ {item&&item[0].price}
                                </div>
                            </div>

                        </Card>
                        
                    </div>
                </div> 
            </>
        );
    }
}
export default StoreItem
