import React, {Component} from 'react';
import { Body, Container, Content, Header, List, ListItem, Left, Icon, Text } from 'native-base';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return (
            <Container>
                <Content style={{flex: 1, backgroundColor:'rgb(230,230,230)', top: -1}}>
                    <Header>
                        <Body>
                            <Text style={{color: "rgb(230,230,230)"}}>Menu</Text>
                        </Body>
                    </Header>
                    <List
                        dataArray={this.props.sidebarItems}
                        renderRow={data =>
                        <ListItem
                            onPress={()=>this.props.navigation.navigate(data.route)}>
                            <Left><Icon active name={data.icon} /></Left>
                            <Text style={{color: "rgb(40,40,180)"}}>{data.name}</Text>
                        </ListItem>} />
                </Content>
            </Container>
        )
    }
}