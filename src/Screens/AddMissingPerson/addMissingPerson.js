import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Container, Header, Content, Textarea, Form} from 'native-base';
import DatePicker from '../../Components/DatePicker/datePicker';
// import { Textarea } from 'native-base';
class AddPerson extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Missing Person</Text>
        {/* <ScrollView>
          <View style={styles.AddPerson}></View>

          <View style={styles.addPersonForm}>
            <Text style={styles.addPersonTitle}>ADD A MISSING PERSON</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              placeholderTextColor="#452d9a"
            />
            <DatePicker />

            <TextInput
              style={styles.input}
              placeholder="Enter Age"
              placeholderTextColor="#452d9a"
            />
            <TextInput
              style={styles.input}
              placeholder="Height"
              placeholderTextColor="#452d9a"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Eyes Color"
              placeholderTextColor="#452d9a"
            />
            <TextInput
              style={styles.input}
              placeholder="Contact No"
              placeholderTextColor="#452d9a"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Location Last Seen"
              placeholderTextColor="#452d9a"
            />

            <DatePicker />
            <Textarea
              rowSpan={3}
              bordered
              placeholder="Textarea"
              style={styles.textArea}
              placeholderTextColor="#452d9a"
            />
            <TouchableOpacity style={{width: '80%', alignSelf: 'center'}}>
              <Text style={styles.addBtn}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AddPerson: {
    backgroundColor: '#FA4659',
    padding: 150,
    fontSize: 20,
    borderBottomRightRadius: 100,
  },
  container: {
    // paddingBottom: 50,
    flex: 1,
  },
  addPersonTitle: {
    color: '#FA4659',
    fontSize: 30,
    textAlign: 'center',
  },
  addPersonForm: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    marginTop: -200,
    padding: '5%',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    color: '#FA4659',
    borderRadius: 5,
    borderColor: '#FA4659',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 20,
  },
  textArea: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    color: '#FA4659',
    borderRadius: 5,
    borderColor: '#FA4659',
    borderWidth: 1,
    marginTop: 20,
  },
  addBtn: {
    color: 'white',
    backgroundColor: '#FA4659',
    width: '100%',
    padding: '5%',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    elevation: 10,
    marginTop: 20,
  },
});

export default AddPerson;
