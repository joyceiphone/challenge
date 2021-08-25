import React from 'react';

import {getAllUsers} from '../../api';

import {Table, Container, Row, Col} from 'react-bootstrap';

export class AllUsers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userLists : []
        }
    }
    componentDidMount(){
        getAllUsers().then((data)=>this.setState({userList: data}));
    }
    render(){
        return(
        <Container>
        <Row style = {{marginTop: '20px'}}>
        <Col>
        <h1>All Users</h1>
        <h4>Users and their age</h4>
        <Table style = {{marginTop: '30px'}}>
            <thead>
                <tr><th>Username</th><th>Age</th></tr>
            </thead>
            <tbody>
                {
                    this.state.userList?.map((user)=>(
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.age}</td>
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
export default AllUsers;