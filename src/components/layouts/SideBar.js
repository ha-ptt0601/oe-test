import React from "react"
import {Layout, Menu,Button,Select } from "antd"
import {Link} from 'react-router-dom'
import Title from "antd/lib/skeleton/Title"
import stor from '../../data/stores.json'
const {Header, Content, Footer, Sider} = Layout
export default class SideBar extends React.Component {
    render() {
      
        return (
            <>
             
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                      console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                      console.log(collapsed, type);
                    }}
                  >
                    <div className="logo">
                      Milk Tea Store
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                      {stor.stores.map((name,i)=>
                          <Menu.Item key={i}>
                            <Link to={`/category/${name.id}`}>
                              {name.name}
                            </Link>
                          
                        </Menu.Item>
                      )}
                      
                     
                    </Menu>
                </Sider>

            </>
        );
    }
}
