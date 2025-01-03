import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface FoodItemModalProps {
  isVisible: boolean;
  onClose: () => void;
  point: string;
}

const ConformationModal = ({isVisible, onClose, point}: FoodItemModalProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide" // Change to "fade" or "none" if preferred
      onRequestClose={onClose}>
      <View style={styles.container}>
        {/* Overlay to close the modal */}
        <Pressable style={styles.overlay} onPress={onClose} />

        {/* Modal Content */}
        <View style={styles.modal}>
          <LinearGradient
            colors={['#D3F698', '#fcf3cf', '#fef9e7']}
            start={{x: 1, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.modalHeader}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                top: 7,
              }}>
              <View style={{left: 40}}>
                <Text style={styles.modalHeaderText}>
                  Spending Confirmation
                </Text>
              </View>
              <View style={{left: 25}}>
                <TouchableOpacity
                  onPress={onClose}
                  style={{
                    backgroundColor: '#4BBD5E',
                    height: 20,
                    width: 20,
                    borderRadius: 50,
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    style={{textAlign: 'center'}}
                    name="close"
                    size={15}
                    color="#EFEFAA"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          <Text style={styles.modalText}>
            {point !== ''
              ? `You are spending ${point} coins to play once`
              : 'You are spending 0 coin to play once'}
          </Text>

          {/* Modal Buttons */}
          <View style={styles.modalButtonsProperties}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clickToBetButton}>
              <Text style={styles.clickToBetText}>CLICK TO BET</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConformationModal;
