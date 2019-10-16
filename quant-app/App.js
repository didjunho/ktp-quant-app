import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeView}>
        <Text style={styles.headingText}>Quant</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
	homeView: {
		backgroundColor: '#262626',
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',

	},
	headingText: {
		color: '#FFF',
		fontSize: 50,
		
	}



});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
});

export default createAppContainer(TabNavigator);
