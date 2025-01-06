import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LineChart} from 'react-native-chart-kit';
import foodItems from '../../utils/foodItems';

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

const numberValues = Array.from({length: 30}, (_, i) => i + 1);

const foodItemsYaxis = foodItems.map(item => item.image);

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
            end={{x: 1, y: 0}}
            style={styles.modalHeader}>
            <View
              style={{
                flexDirection: 'row',
                top: 7,
              }}>
              <View style={{left: 10}}>
                <Text style={styles.modalHeaderText}>Trend Details</Text>
              </View>
              <View style={{left: 90}}>
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

          <LineChart
            data={{
              labels: numberValues.map(String),
              datasets: [
                {
                  data: foodItemsYaxis,
                },
              ],
            }}
            width={300} // from react-native
            height={250}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />

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
