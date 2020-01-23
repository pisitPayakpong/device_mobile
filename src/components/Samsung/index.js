import React, { Component } from "react";
import axios from "axios";
import { Content, Spinner, Title } from "native-base";
import { map, reverse } from "lodash";

import DeviceList from "./list";
import DeviceInfo from "./info";

const token = "281af5bff1944e885ea021bb1dedb1db550bf923ee67685a";

class SamsungList extends Component {
  state = {
    devices: [],
    loading: false,
    step: "list"
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Title>Samsung</Title>
    };
  };

  async componentWillMount() {
    url = "https://fonoapi.freshpixl.com/v1/getdevice";

    this.setState({
      loading: true
    });
    axios
      .request({
        method: "get",
        url: url,
        params: {
          token,
          brand: "samsung",
          device: "galaxy s",
          limit: 1
        }
      })
      .then(res => {
        if (res.request.status === 200) {
          // console.log(res?.data);
          this.setState({
            devices: reverse(res?.data),
            loading: false
          });
        }
        return res;
      })
      .catch(e => {
        console.log("e", e);
      });
  }

  transformData = data => {
    return map(data, datum => {
      return {
        title: `${datum.DeviceName}`,
        content: `${map(datum, (value, key) => {
          return `${key}: ${value}`;
        })}`
      };
    });
  };

  handleShowInfo = data => {
    this.setState({
      step: "device"
    });

    this.props.navigation.navigate("device", { ...data });
  };

  render() {
    const { devices, loading, step } = this.state;

    if (loading) {
      return <Spinner />;
    }

    // console.log("-----render-------");
    // console.log(this.transformData(devices));

    return (
      <Content padder>
        <DeviceList
          devices={this.transformData(devices)}
          handleShowInfo={this.handleShowInfo}
        />
      </Content>
    );
  }
}

export default SamsungList;
