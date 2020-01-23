import React, { Component } from "react";
import { Content, Card, CardItem, Body, Text, Title } from "native-base";
import { map, split } from "lodash";

export default class DeviceInfo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Title>Device</Title>
    };
  };

  render() {
    const { navigation } = this.props;
    const device = { ...navigation.getParam("detail") };

    const details = split(device?.content, ",");
    return (
      <Content>
        <Card>
          <CardItem header>
            <Text>{device?.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              {map(details, detail => {
                return <Text>{detail}</Text>;
              })}
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
