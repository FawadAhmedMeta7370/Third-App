import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import Title from '../assets/components/Title';
import Fonts from '../constant/Font';
import PrimaryButton from '../assets/components/PrimaryButton';
import {useState} from 'react';
import {images} from '../assets/images';
// import {images} from '../assets/images';
// import {array} from 'yup';

const Tasks = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('Select Priority');

  const [modalVisible, setModalVisible] = useState(false);
  function showModalHandler() {
    setModalVisible(true);
    setPriority('Select Priority');
  }

  const [tasksData, setTasksData] = useState([]);

  function taskDataHandler() {
    if (title && desc && priority) {
      const newdata = {
        id: Math.random().toString(),
        titledata: title,
        descdata: desc,
        prioritydata: priority,
      };
      setTasksData(previousdata => {
        const updatedata = [...previousdata, newdata];
        return updatedata;
      });
      setTitle('');
      setDesc('');
      setPriority('Select Priority');
    } else {
      console.warn(
        'Error, Please enter Titile and Descriptiton and select Priority!',
      );
    }
  }

  const getPriorityColor = priority => {
    switch (priority) {
      case 'Low':
        return 'red';
      case 'Medium':
        return 'green';
      case 'High':
        return 'blue';
      default:
        return 'transparent'; // or any default color you want
    }
  };

  function handlePriority(priority) {
    setPriority(priority);
    setModalVisible(false);
  }

  return (
    <View>
      <View style={styles.taskinputcontainer}>
        <Title>Tasks</Title>
        <View style={styles.fields}>
          <View>
            <Text style={styles.text}>Title</Text>
            <TextInput
              style={styles.TextInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter Title"></TextInput>
          </View>

          <View>
            <Text style={styles.text}>Description</Text>
            <TextInput
              style={styles.TextInput}
              value={desc}
              onChangeText={setDesc}
              placeholder="Enter Description"></TextInput>
          </View>

          <View>
            <Text style={styles.text}>Priority</Text>

            <Pressable style={styles.pressable} onPress={showModalHandler}>
              {/* <View style={styles.row}> */}
              <Text style={styles.priority}>{priority}</Text>
              {/* </View> */}
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Priority</Text>

                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      setModalVisible(false);
                      handlePriority('Low');
                    }}>
                    <Text
                      style={[
                        styles.optionText,
                        {
                          borderColor: 'red',
                          paddingHorizontal: 23,
                          color: 'red',
                        },
                      ]}>
                      Low
                    </Text>
                  </Pressable>

                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      setModalVisible(false);
                      handlePriority('Medium');
                    }}>
                    <Text
                      style={[
                        styles.optionText,
                        {
                          borderColor: 'green',
                          paddingHorizontal: 5,
                          color: 'green',
                        },
                      ]}>
                      Medium
                    </Text>
                  </Pressable>

                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      setModalVisible(false);
                      handlePriority('High');
                    }}>
                    <Text
                      style={[
                        styles.optionText,
                        {
                          borderColor: 'blue',
                          paddingHorizontal: 20,
                          color: 'blue',
                        },
                      ]}>
                      High
                    </Text>
                  </Pressable>

                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Image style={styles.image} source={images.cross}></Image>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <PrimaryButton onPress={taskDataHandler}>Save Task</PrimaryButton>
        </View>
      </View>

      <View>
        <FlatList
          style={{height: 250}}
          data={tasksData}
          renderItem={({item}) => (
            <View
              style={[
                styles.taskstyle,
                {backgroundColor: getPriorityColor(item.prioritydata)}
              ]}>
              <Text style={styles.displayTask}>Title: {item.titledata}</Text>
              <Text style={styles.displayTask}>
                Description: {item.descdata}
              </Text>
              <Text style={styles.displayTask}>
                Priority: {item.prioritydata}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 20}} // Add padding for scroll space
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskinputcontainer: {
    borderWidth: 3,
    borderRadius: 25,
    margin: 10,
    backgroundColor: '#BDBDBD',
  },
  fields: {
    marginVertical: '5%',
  },
  text: {
    fontFamily: Fonts.regularfont,
    // fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    marginVertical: 5,
    fontSize: 18,
  },
  TextInput: {
    fontFamily: Fonts.regularfont,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 15,
  },
  priority:{
    // fontFamily: Fonts.regularfont,
    fontWeight: 'bold',
    // color: 'black',
    marginTop: 7,
    marginLeft: 1,
    fontSize: 15,
  },
  pressable: {
    fontFamily: Fonts.regularfont,
    color: 'black',
    margin: 10,
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    paddingTop: 3,
    // backgroundColor: 'red'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 25,
    // fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: Fonts.boldfont,
    color: '#2E2E2E',
    textDecorationLine: 'underline',
  },
  optionText: {
    // color: 'blue',
    borderWidth: 2,
    // borderColor: 'blue',
    fontSize: 20,
    margin: 5,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 24,
    height: 24,
    margin: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  taskstyle: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'black',
    marginHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 5,
  },
  displayTask: {
    fontFamily: Fonts.regularfont,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    marginTop: 3,
  },
});

export default Tasks;
