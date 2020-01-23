import React, { Component } from "react";
import { AppLoading } from "expo";
import { Container, Footer, FooterTab, Button, Text } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { map } from "lodash";

import SamsungList from "./src/components/Samsung";
import DeviceInfo from "./src/components/Samsung/info";

const menuConfigs = [
  {
    name: "Samsung",
    value: "samsungs"
  },
  {
    name: "Q&A",
    value: "qa"
  }
];

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      page: "samsungs"
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  handleSetPage = value => {
    this.setState({
      page: value
    });

    this.props.navigation.navigate(value);
  };

  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: someRouteName })
      );
  }

  renderMenu = menuConfigs => {
    return (
      <Grid>
        {map(menuConfigs, menu => {
          return (
            <Col
              style={{
                backgroundColor: "#00a0e9",
                height: 150,
                borderRadius: 10,
                borderColor: "black",
                margin: 5
              }}
              onPress={() => {
                this.handleSetPage(menu?.value);
              }}
            >
              <Text
                style={{
                  color: "white",
                  height: 140,
                  lineHeight: 140,
                  textAlign: "center"
                }}
              >
                {menu?.name}
              </Text>
            </Col>
          );
        })}
      </Grid>
    );
  };

  render() {
    if (!this.state?.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{ paddingTop: 20 }} ref>
        {this.renderMenu(menuConfigs)}

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Copy By Golf</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  home: {
    screen: HomeScreen
  },
  samsungs: {
    screen: SamsungList,
    headerTitle: () => "Samsung"
  },
  device: {
    screen: DeviceInfo
  }
});

export default createAppContainer(AppNavigator);
