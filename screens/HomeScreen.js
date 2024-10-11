import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Title from '../assets/components/Title';
import {images} from '../assets/images';
import Fonts from '../constant/Font';

const HomeScreen = ({route, navigation}) => {
  const {name, email} = route.params.data;

  function navig_ation() {
    navigation.navigate('Tasks');
  }

  return (
    <View>
      <View style={styles.container}>
        <Title>HomeScreen</Title>
        <View>
          <View style={styles.imagecontainer}>
            <Image style={styles.image} source={images.profileimage}></Image>
          </View>
          <View style={styles.fields}>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Email: {email}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text onPress={navig_ation} style={styles.button}>
            Tasks
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    padding: 16,
    borderWidth: 3,
    borderRadius: 25,
    margin: 25,
  },
  imagecontainer: {
    marginVertical: '10%',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'grey',
  },
  fields: {
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: Fonts.regularfont,
    color: 'black',
    textDecorationLine: 'underline',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',
    marginTop: '10%',
    color: 'black',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    width: '25%',
    height: '30%',
    textDecorationLine: 'underline',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'grey'
    // marginBottom: 5
  },
});

export default HomeScreen;
