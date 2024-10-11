import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {images} from '../assets/images';
import Fonts from '../constant/Font';
import BootSplash from "react-native-bootsplash";


let SignupValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Invaluid Email!')
    .required('Please enter your email address'),
  pass: Yup.string()
    .min(8, 'Password is very short')
    .required('Please enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must contain 8 characters, one uppercase, one lowercase, one number, and one special case character',
    ),
});

function SignupScreen() {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  const navigation = useNavigation();

  function navig_ation(data) {
    navigation.navigate('Home', {data});
  }

  const [toggle, setToggle] = useState(true);

  function handlepass() {
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <Formik
      initialValues={{
        name: 'Fawad',
        email: 'Fawad124@gmail.com',
        pass: 'Hello123$',
      }}
      validationSchema={SignupValidation}
      onSubmit={navig_ation}>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (
        <View style={styles.container}>
          <ImageBackground
            source={images.backgroundimage}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}>
            <ScrollView>
              <View>
                <Image style={styles.image} source={images.signupimage} />
              </View>
              <View style={styles.attributes}>
                <View style={styles.text}>
                  <Text style={styles.text}>Name:</Text>
                  <Text style={styles.text}>Email:</Text>
                  <Text style={styles.text}>Pass:</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.textinput}
                    placeholder="Enter your name"
                    placeholderTextColor="white"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                  />
                  {touched.name && errors.name && (
                    <Text style={styles.error}>{errors.name}</Text>
                  )}

                  <TextInput
                    style={styles.textinput}
                    placeholder="Enter your email"
                    placeholderTextColor="white"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}

                  <View style={styles.pass}>
                    <TextInput
                      // style={styles.textinput}
                      placeholder="Enter your password"
                      placeholderTextColor="white"
                      value={values.pass}
                      onChangeText={handleChange('pass')}
                      onBlur={() => setFieldTouched('pass')}
                      secureTextEntry={toggle}
                    />
                    <Pressable onPress={handlepass}>
                      <Image
                        source={toggle ? images.showpass : images.hidepass}
                        style={styles.passimage}></Image>
                    </Pressable>
                  </View>
                  {touched.pass && errors.pass && (
                    <Text style={styles.error}>{errors.pass}</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[
                  styles.button,
                  {backgroundColor: isValid ? 'black' : 'grey'},
                ]}>
                <Text style={styles.text}>Signup</Text>
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
  container: {
    flex: 1,
    backgroundColor: '#585858',
  },
  image: {
    width: 200,
    height: 200,
    opacity: 0.8,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: '10%',
    // justifyContent: 'space-around'
  },
  text: {
    fontSize: 20,
    justifyContent: 'space-around',
    color: 'white',
    fontFamily: Fonts.boldfont,
    padding: 5,
  },
  textinput: {
    textAlign: 'left',
    borderWidth: 3,
    borderRadius: 15,
    fontSize: 15,
    borderColor: 'black',
    color: 'white',
    width: 200,
    margin: 10,
  },
  error: {
    color: 'red',
  },
  attributes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontFamily: Fonts.boldfont,
  },
  placement: {
    flexDirection: 'row',
    margin: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: '10%',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '15%',
    alignSelf: 'center',
    marginBottom: 5,
  },
  passimage: {
    width: 30,
    height: 25,
    marginTop: 8,
  },
  pass: {
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 15,
    width: '91%',
    marginLeft: 10,
    marginTop: 9,
  },
});

export default SignupScreen;
 