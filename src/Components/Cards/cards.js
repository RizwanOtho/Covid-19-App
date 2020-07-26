import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

class Card extends React.Component {
  render() {
    console.log('props  ====>>', this.props);
    return (
      <View style={styles.Container}>
        <View style={styles.Card}>
        <Text style={styles.text}>Confermed Cases</Text>
        <Text style={styles.text}>{this.props.data.totalCases}</Text>

        </View>
        <View style={styles.Card1}>
        <Text style={styles.text}>recover cases</Text>
        <Text style={styles.text}>{this.props.data.recover}</Text>

        </View>
        <View style={styles.Card2}>
        <Text style={styles.text}>deaths cases</Text>
        <Text style={styles.text}>{this.props.data.death}</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    marginLeft:12.5,
    flex:1,
    // display:"flex",
    // flexDirection:"row",
    // flexWrap: "wrap",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  Card: {
    padding: 5,
    flex:1,
    // borderWidth : 2,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#20232a",
    width: 300,
    height: 100,
    alignItems: 'center',
    // elevation: 2,
    marginLeft:20,
    // paddingBottom:30
    backgroundColor:"green",
    paddingTop:20,

  },
  Card1: {
    padding: 5,
    flex:1,
    // borderWidth : 2,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#20232a",
    width: 300,
    height: 100,
    alignItems: 'center',
    // elevation: 4,
    marginLeft:20,
    // paddingBottom:30
    backgroundColor:"blue",
    paddingTop:20,
    marginTop:12,
  },
  Card2: {
    padding: 5,
    flex:1,
    // borderWidth : 2,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#20232a",
    width: 300,
    height: 100,
    alignItems: 'center',
    // elevation: 4,
    marginLeft:20,
    // paddingBottom:30
    backgroundColor:"#fA4659",
    paddingTop:20,
    marginTop:12,

    
  },
  Btn: {
    backgroundColor: '#FA4659',
    padding: 6,
    borderRadius: 50,
    width: 100,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex:1,
    color:"white",

  },
});

export default Card;



 {/* <Text style={styles.text}>Rizwan</Text>
          <TouchableOpacity activeOpacity={0.5}
            onPress={() =>
              this.props.navigate.navigation.navigate('AllDetail')
            }>
            <Text style={styles.Btn}>See More</Text>
          </TouchableOpacity> */}




          {/* <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/kY_Q7pWao004Q3h0r0OR7xxpk2_H3k3IOcCJg_AKfrwdiyjpto7P8-3cpDVEojc4TSySgFjIbmEWCyYj989_jev1u-7zs124iRQhDMZx00EaAbiDxfK2v73iuRzroak',
            }}
          /> */}