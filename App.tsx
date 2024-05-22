/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Modal from "react-native-modal";


const App = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [appliedJob, setAppliedJob] = useState(0);
  const [selectedItem, setSelectedItem] = useState({
    name: '',
    detail: '',
    position: 0
  });

  const myArray = [{
    name: 'Android developer',
    detail: 'Must have sound knowledge of Odoo framework Have good understanding in CSS, HTML, JavaScript',
    position: '2',
  },
  {
    name: 'Mobile developer',
    detail: 'Experience - 1-3 years of Quality Assurance, Automation, manual testing experience Min 6 months of experience Automation testing is preferred.',
    position: '3'
  },
  {
    name: 'Php developer',
    detail: 'Solution Architecture: Utilize your software architect background to design robust and scalable AI/ML solutions that address challenging business requirements. ',
    position: '1'
  },
  {
    name: 'Java developer',
    detail: 'We are seeking a skilled HR Generalist (2-4 years experience) to join our team and contribute to the success of our organization. ',
    position: '3'
  },
  ]

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setAppliedJob(appliedJob + 1)
  };

  const handleItemPress = (item) => {
    setModalVisible(!isModalVisible);
    setSelectedItem(item)
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.listStyle}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.detail}>JobDetails: {item.detail}</Text>
        <Text style={styles.position}>Position: {item.position}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );


  return (
    <View style={[styles.center]}>
      <View style={styles.header}>
        <View >
          <View style={styles.circle}>
            <Text style={styles.numberstyle}>{appliedJob}</Text>
          </View>
          <Text style={styles.appliedstyle}>applied</Text>
        </View>
      </View>
      <FlatList
        data={myArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.listStyle}
        ItemSeparatorComponent={renderSeparator}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalBackground}>
          <Text style={styles.modaltext}>{selectedItem.name}</Text>
          <Text style={styles.detail}>JobDetails: {selectedItem.detail}</Text>
          <Text style={styles.position}>Position: {selectedItem.position}</Text>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={toggleModal}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    flex: 1
  },
  listStyle: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  detail: {
    fontSize: 14,
    color: '#333',
  },
  position: {
    fontSize: 14,
    color: '#333',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
  applyText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  numberstyle: {
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 11
  },
  appliedstyle: {
    top: -5,
    color: '#fff'
  },

  applyButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  modaltext: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: '#000'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  modalBackground: {
    backgroundColor: '#ffffff',
    padding: 10,
    flex: 0.5,
    top: 20,
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#ADD8E6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  }
});

export default App;
