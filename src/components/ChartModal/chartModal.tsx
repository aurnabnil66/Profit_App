import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LineChart} from 'react-native-chart-kit';

interface ChartModalProps {
  isVisible: boolean;
  onClose: () => void;
  // data: object;
}

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const ChartModal = ({isVisible, onClose}: ChartModalProps) => {
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
            end={{x: 1, y: 0}}>
            {/* <View
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
            </View> */}
            <LineChart
              data={data}
              width={screenWidth}
              height={256}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          </LinearGradient>

          {/* Modal Buttons */}
          <View style={styles.modalButtonsProperties}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.clickToBetButton}>
              <Text style={styles.clickToBetText}>CLICK TO BET</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChartModal;
