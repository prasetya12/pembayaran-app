import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Container, Content } from "native-base";

import AppIntroSlider from "react-native-app-intro-slider";

import { NavigationActions,StackActions } from "react-navigation";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "#C4C4C4",
    fontSize: 14,
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16,
    fontFamily: "Helvetica"
  },
  title: {
    fontSize: 16,
    color: "#30353C",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Helvetica-Bold"
  }
});

const slides = [
  {
    key: "somethun",
    title: "Pembayaran SPP",
    text: "Anda akan melakukan pembayaran SPP senilai Rp. 430.000",
    image: require("../assets/group.png"),
    colors: "#63E2FF"
  },
  {
    key: "somethun1",
    title: "Konfirmasi Pembayaran",
    text: "Anda akan melakukan pembayaran SPP senilai Rp. 430.000",
    image: require("../assets/rectangle.png"),
    colors: "#A3A1FF"
  },
  {
    key: "somethun2",
    title: "Konfirmasi Pembayaran",
    text: "Anda akan melakukan pembayaran SPP senilai Rp. 430.000",
    image: require("../assets/circle.png"),
    colors: "#29ABE2"
  }
];

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  buttonDone = props => (
    <View
      style={{
        backgroundColor: "#208CF4",
        width: "100%",
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text
        style={{ fontSize: 16, color: "white", fontFamily: "Helvetica-Bold" }}
      >
        Mulai
      </Text>
    </View>
  );

  _renderItem = props => (
    <View
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height
        }
      ]}
      colors={props.colors}
    >
      <Image style={{ height: 150, width: 150 }} source={props.image} />

      <View style={{ marginBottom: 20 }}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={{ width: 300 }}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        buttonStyle={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#208CF4",
          borderRadius: 5
        }}
        nextLabel="Selanjutnya"
        doneLabel="Get Started"
        buttonTextStyle={{
          color: "#208CF4",
          fontFamily: "Helvetica-Bold",
          fontSize: 16
        }}
        renderDoneButton={this.buttonDone}
        activeDotStyle={{ backgroundColor: "#208CF4" }}
        onDone={() => {
          this.props.navigation.dispatch(
            StackActions.reset({
              index: 0,
              key: null,
              actions: [
                NavigationActions.navigate({ routeName: "Login" })
              ]
            })
          );
        }}
      />
    );
  }
}
