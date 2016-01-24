'use strict';

import React, {
  AppRegistry,
  Component,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FeedPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Search for houses to buy!</Text>
        <Text style={styles.description}>Search by place-name, postcode, or search near your location.</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  description: {
    color: '#656565',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    padding: 30,
    marginTop: 65
  }
});

module.exports = FeedPage;