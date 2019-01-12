import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'purple',
    // margin: 20,
  },
  labelContainer: {
    backgroundColor: 'lightskyblue',
  },
  labelBgColor: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 4,
  },
  labelText: {
    flex: 2,
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 20,
    color: 'black',
  },
  labelInput: {
    flex: 3,
    fontSize: 14,
    color: 'black',
  },
  pickerBgColor: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 4,
  },
  pickerLabel: {
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 20,
  },
  pickerInput: {
    marginTop: (Platform.OS === 'ios') ? -50 : 5,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  iconContainer: {
    height: 5,
    width: 12,
  },
  icon: {
    fontSize: 20,
    color: 'black',
  },
});