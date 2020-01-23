import React, { Component } from "react";
import { List, ListItem, Left, Right, Text, Icon } from "native-base";
import { map } from "lodash";

export default class DeviceList extends Component {
  renderListItem = device => {
    const { handleShowInfo } = this.props;
    return (
      <ListItem
        onPress={() => {
          handleShowInfo({
            detail: { ...device }
          });
        }}
      >
        <Left>
          <Text>{device?.title}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  };

  render() {
    const { devices } = this.props;
    return (
      <List>
        {map(devices, device => {
          return this.renderListItem(device);
        })}
      </List>
    );
  }
}
