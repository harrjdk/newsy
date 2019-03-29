import React, { Component } from "react";
import { Container, Body, Header, Text, Title, List, ListItem, Spinner, Left, Thumbnail, Footer, Content, Right } from "native-base";
import { showNews } from '../reducers/newsReducer';
import { connect } from 'react-redux';

export class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: "rgb(40,40,180)"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            newsLoaded: false
        }
    }

    componentDidMount() {
        this.props.showNews("Apple", "3/28/2019", "popularity");
    }

    render() {
        return (
        <Container>
            <Content>
                <Header>
                    <Body>
                        <Title>Newsy</Title>
                    </Body>
                </Header>
                <this.NewsTicker />
                <Footer>
                    <Body>
                        <Title>Powered By News API</Title>
                    </Body>
                </Footer>
            </Content>
        </Container>
        )
    }

    NewsTicker = () => {
        if(!this.props.loading && !this.props.error) {
            const { newsInfo } = this.props;
            return (
                <List
                    dataArray={newsInfo}
                    renderRow={data =>
                        <ListItem
                            style={{backgroundColor:"rgb(230,230,230)"}}
                            onPress={()=>this.props.navigation.navigate("InAppBrowser", {url: data.url})}>
                            <Left>
                                <Thumbnail small circular source={{uri: data.urlToImage}} />
                            </Left>
                            <Body>
                                <Text style={{color:"rgb(40,40,180)", fontSize:14}}>{data.title}</Text>
                            </Body>
                    </ListItem> }
                />
            );
        } else if (this.props.error) {
            return (
                <Text>An error occurred: {JSON.stringify(this.props.error)}</Text>
            );
        } else {
            return (
                <>
                    <Text>Please Wait...</Text>
                    <Spinner color="blue" />
                </>
            );
        }
    }
}
const mapStateToProps = state => {
    let storedNews = state.news.articles;
    return {
        newsInfo: storedNews,
        loading: state.loading,
        error: state.error || false
    };
  };
  
  const mapDispatchToProps = {
    showNews
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);