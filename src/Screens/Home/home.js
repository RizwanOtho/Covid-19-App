import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Card from './../../Components/Cards/cards';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      totalCases: 0,
      recover: 0,
      death: 0  
    };
  }


  componentDidMount(){
    fetch('https://covid19.mathdro.id/api')
    .then((response) => response.json())
    .then((json) => {
      // return json.confirmed;
      console.log(json.confirmed.value)
      this.setState({
        totalCases:json.confirmed.value,
        recover:json.recovered.value,
        death:json.deaths.value
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    // console.log(this.props.navigation, '=====>');
    return (
      
      <ScrollView style={{flex:1}}>
        <View style={styles.main}>
        <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp5A84Fyh3QdeS5fjccVYexN6OAG_AMjO2Og&usqp=CAU',
            }}
          />
        <View style={styles.Container}>
        
          <Card data={this.state} />

        
        </View> 
        
        </View>
      </ScrollView>
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
  }

});

export default Home;
