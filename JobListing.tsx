
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function viewJobs(): void{
    console.log("Hiiiiiiii");
  }

  const myArray = [{
    name: 'Android developer',
    detail: 'senior developer',
    position: '2',
  },
  {
    name: 'Mobile developer',
    detail: 'Fresher',
    position: '3'
  },
  {
    name: 'Php developer',
    detail: 'Team lead ',
    position: '1'
  }
]

const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.detail}</Text>
      <Text>{item.position}</Text>
    </View>
  );
  
  const JobListing = () => {
    return (
      <View style={[styles.center, {top: 50}]}>
         <FlatList
            data={myArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
         />
      </View>
    );
  };

  const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default JobListing;
  