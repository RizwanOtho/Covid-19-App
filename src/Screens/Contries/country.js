import React, {Component} from 'react';
import {StyleSheet, View ,Text } from 'react-native';
// import {Item ,} from 'native-base';
import Pickerse from "./../../Components/countries/picker";
import Card from './../../Components/Cards/cards';


export default class Country extends Component {
    constructor() {
        super();
        this.state = {
          totalCases: 10,
          recover: 560,
          death: 650  
        };
      }


      
  render() {
    return (
    <View style={styles.new1}> 
        <Text style={styles.new}>A globel Country Data</Text>
        <Pickerse/>
        {/* <Picker
          selectedValue={selectedValue}
          mode="dropdown"
          style={{
            width: screenWidth - 40,
            borderWidth: 1,
            borderColor: 'red',
            borderWidth: 1,
          }}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({selectedValue: itemValue});
            this.select(itemValue);
          }}
          >
          {this.state.country.map((val, i) => (
          <Picker.Item label={val} value={val} />
           ))} 
        </Picker> */}


        <View style={styles.Container}>
        
        <Card data={this.state} />

      
      </View> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
    main:{
      flex:1,
      // marginBottom:100,
    },
  
    tinyLogo:{
      width:360,
      height:210
    },
  new:{
  fontSize:30,
  justifyContent:"center"
  }
  ,new1:{
      justifyContent:"center",
  }
  });
  
