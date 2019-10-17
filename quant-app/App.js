import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SearchBar } from 'react-native-elements';

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
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View style={styles.homeView}>
        <Text style={styles.headingText}>Search</Text>
        <SearchBar
        inputContainerStyle={{backgroundColor: '#686868'}}
        inputStyle={{color: '#A8A8A8'}}
        containerStyle={{backgroundColor: 'transparent', width: 250, borderTopColor: 'transparent', borderBottomColor: 'transparent'}}
        placeholder={'Pritish Vaidya'}
        pla
        onChangeText={this.updateSearch}
        value={search}
        round={true}
        placeholderTextColor={'#A8A8A8'}
      />
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
