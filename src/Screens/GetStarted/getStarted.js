import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {color} from 'react-native-reanimated';
import MissingPersonLogo from './../../assets/missingIcon.png';

class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('./../../assets/rizwan1.jpg')}
      />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{width: '80%'}}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.getStarted}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius:100,
    marginBottom:40
  },
  container: {
    backgroundColor: '#FA4659',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
 
  getStarted: {
    color: '#FA4659',
    backgroundColor: 'white',
    width: '100%',
    padding: '6%',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    elevation: 10,
    fontWeight: 'bold',
  },
 
});

export default GetStarted;
