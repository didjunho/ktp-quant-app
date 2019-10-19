import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeView}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Quant</Text>
          <Text style={styles.note}>Welcome Back</Text>
        </View>
        <Text style={styles.subheading}>Today's Most Valuable</Text>
        <View style={styles.flatlistcontainer}>
          <FlatList
            data={[
              { key: 'AAPL' },
              { key: 'SPY' },
              { key: 'MSFT' },
              { key: 'F' },
              { key: 'AMZN' },
              { key: 'VYM' },
              { key: 'BYND' },
              { key: 'V' }
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>

        <Text style={styles.subheading}>Our Model</Text>
        <View style={styles.flatlistcontainer}></View>
        <View style={styles.fixToText}>
          <View style={styles.buyButton}>
            <Button
              title="BUY"
              onPress={() => Alert.alert("Left button pressed")}
              color="white"
            />
          </View>
          <View style={styles.sellButton}>
            <Button
              title='SELL'
              onPress={() => Alert.alert("Right button pressed")}
              color='white'
            />
          </View>
        </View>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Ticker",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Ticker Info"
          onPress={() => navigate("Ticker")}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

class TickerScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeView}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Company Name</Text>
          <Text style={styles.headingText}>$Value</Text>
          <Text style={styles.note}>Company Ticker</Text>
        </View>


      <Text style={styles.subheadingleft}>Our Model</Text>
      <Text style={styles.subheadingright}>Performance</Text>

        <View style={styles.flatlistcontainer}>
          <FlatList
            data={[
              ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>


      
        <View style={styles.fixToText}>


        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: "#262626",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'left',
    width: '100%'

  },
  headingText: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold"

  },
  note: {
    color: "#FFF",
    fontSize: 18
  },
  heading: {
    alignItems: "flex-start",
    width: "90%",
    bottom: "5%"
  },

  flatlistcontainer: {
    backgroundColor: "#555",
    height: "25%",
    width: "90%",
    borderRadius: 5,
    borderColor: "#A8A8A8",
    borderWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 66
  },
  subheading: {
    color: "#FFF",
    fontSize: 20,
    paddingTop: "5%",
    paddingBottom: "1%"
  },
  subheadingleft: {
    color: "#FFF",
    fontSize: 20,
    paddingTop: "5%",
    right: '30%',

    //paddingBottom: "1%"
  },
  subheadingright: {
    color: "#FFF",
    fontSize: 20,
    paddingTop: "5%",
    left: '30%',

    //paddingBottom: "1%"
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: '5%'
  },
  buyButton: {
    backgroundColor: "#509E2E",
    width: '40%',
    top: '5%',
    right: '5%',
    borderRadius: 5
  },
  sellButton: {
    backgroundColor: "#FF595F",
    width: '40%',
    top: '5%',
    left: '5%',
    borderRadius: 5
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
});

const App = createStackNavigator( {
  //Home: { screen: HomeScreen },
  //Search: { screen: SearchScreen },
  //Profile: { screen: ProfileScreen },
  Ticker: { screen: TickerScreen },
  Tabs: {
    screen: TabNavigator
  }
},
  {
    initialRouteName: "Tabs"
  }
);

const Ticker = createStackNavigator( {
  //Home: { screen: HomeScreen },
  //Search: { screen: SearchScreen },
  //Profile: { screen: ProfileScreen },
  Ticker: { screen: TickerScreen }
}
);
export default createAppContainer(App);
