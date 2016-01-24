/**
 * Das Auto App
 * https://github.com/jmccraw/das-auto
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FeedPage from './FeedPage.js';

class DasAuto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });
    this.render();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return this.renderNav();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies…
        </Text>
      </View>
    );
  }

  renderNav() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'Das Auto',
          component: FeedPage
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('DasAuto', () => DasAuto);
