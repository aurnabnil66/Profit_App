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

const numberValues = Array.from({length: 10}, (_, i) => i + 1);

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
            {/* Modal Header */}
            <View
              style={{
                flexDirection: 'row',
                top: 7,
              }}>
              <View style={{left: 10}}>
                <Text style={styles.modalHeaderText}>Trend Details</Text>
              </View>
              <View style={{left: 110}}>
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

          {/* Secondary Header */}
          <View style={{flexDirection: 'row', gap: 5, bottom: 10}}>
            <View
              style={{
                height: 30,
                width: 50,
                borderRadius: 8,
                backgroundColor: '#4BBD5E',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 12, fontWeight: '700'}}>
                Record
              </Text>
            </View>
            <View style={styles.secondaryHeaderContainer}>
              {foodItems.map((item, index) => (
                <View
                  key={index}
                  style={styles.secondaryHeaderContainerProperties}>
                  {item.image && (
                    <Image
                      source={item.image}
                      style={styles.secondaryHeaderContainerImages}
                    />
                  )}
                </View>
              ))}
            </View>
          </View>

          <LineChart
            data={{
              labels: numberValues.map(String),
              datasets: [
                {
                  data: foodItemsYaxis,
                },
              ],
            }}
            width={335} // from react-native
            height={280}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#D3F698',
              backgroundGradientFrom: '#EFEFAA',
              backgroundGradientTo: '#fcf3cf ',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => `rgba(75, 189, 94, 1)`,
              labelColor: () => `rgba(75, 189, 94, 1)`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '10',
                strokeWidth: '2',
                stroke: '#bb8fce',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ChartModal;
