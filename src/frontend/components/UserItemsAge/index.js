import { Dropdown } from 'bootstrap';
import React from 'react';

import {Container, Row, Col, DropdownButton, Table} from 'react-bootstrap';
import {getItemLists, getAgeCountWithItems} from '../../api';

class UserItemsAge extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedItem: '',
            ageCounts: [], 
            items: [],
            count: 1,
        }
    }
    componentDidMount(){
        getItemLists().then((data)=>{
            this.setState({items:data})});
    }
    handleSelected=(e)=>{
        this.setState({selectedItem: e.target.innerText});
        getAgeCountWithItems(e.target.innerText).then((data)=>this.setState({ageCounts: data}));
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col>
            <h1>Age Demographic of Users with {this.state.selectedItem}</h1>
            <DropdownButton title = "Item">
                {
                    this.state.items.map((item)=><h4 style = {{marginLeft: '10px'}} onClick = {this.handleSelected}>{item}</h4>)
                }
            </DropdownButton>
            <Table style = {{marginTop: '30px'}}>
            <thead>
                <tr><th>Age</th><th>Count</th></tr>
          </thead>
          <tbody>
                {
                    this.state.ageCounts?.map((userAge)=>(
                        <tr>
                            <td>{userAge.age}</td>
                            <td>{userAge.count}</td>
                        </tr>
                    ))
                }
            </tbody>
            
        </Table>
            </Col>
            <Col/>
            </Row>
            </Container>
        )
    }
}

export default UserItemsAge;