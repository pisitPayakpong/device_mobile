import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Button
} from "native-base";

export default class ControlPanel extends Component {
  render() {
    const { onOpenDrawer, onCloseDrawer } = this.props;

    console.log("props : ", this.props);
    return (
      <Container>
        <Header />
        <Button
          transparent
          onPress={() => {
            console.log("Users");
            onOpenDrawer();
          }}
        >
          <Text>Users</Text>
        </Button>
        <Content>
          <List>
            <ListItem itemDivider>
              <Button
                onPress={() => {
                  console.log("Profile");
                  alert("You tapped the button!");
                  onOpenDrawer();
                }}
              >
                <Text>Profile</Text>
              </Button>
            </ListItem>
            <ListItem itemDivider>
              <Button
                onPress={() => {
                  console.log("Users");
                  onOpenDrawer();
                }}
              >
                <Text>Users</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
