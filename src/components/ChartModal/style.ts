import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modal: {
    backgroundColor: '#fcf3cf',
    padding: 20,
    borderRadius: 10,
    width: scale(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFAB3F',
  },
  modalHeaderText: {
    color: '#4BBD5E',
    fontSize: 14,
    fontWeight: '800',
  },
  modalHeader: {
    height: scale(35),
    width: scale(300),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: scale(20),
    alignItems: 'center',
  },
  cancelButton: {
    height: 35,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#FFAB3F',
    borderWidth: 1,
  },
  modalButtonsProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    marginTop: 30,
  },
  cancelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFAB3F',
  },
  clickToBetButton: {
    height: 35,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#FFAB3F',
  },
  clickToBetText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
