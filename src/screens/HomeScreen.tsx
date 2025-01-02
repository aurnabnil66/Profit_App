import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/style';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import foodItems from '../utils/foodItems';
import FoodItemModal from '../components/foodItemModal';

const points = ['1000', '5000', '10000', '50000'];

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedFoodItem, setSelectedFoodItem] = useState<number | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleSelection = (index: number) => {
    setSelectedOption(selectedOption === index ? null : index);
  };

  const showModal = (item: any) => {
    setSelectedFood(item);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedFood(null);
  };

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#EFEFAA', '#fcf3cf', '#d6eaf8']}
          style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            {/* Header Left */}
            <View style={styles.headerLeft}>
              <TouchableOpacity>
                <AntDesign name="leftcircleo" size={25} color="#4BBD5E" />
              </TouchableOpacity>
              <Text style={styles.roundNoText}>Round 354</Text>
            </View>

            {/* Header Right */}
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={[
                  styles.headerRightIconBackground,
                  selectedOption === 0
                    ? {backgroundColor: '#4BBD5E', borderWidth: 0}
                    : {
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#4BBD5E',
                      },
                ]}
                onPress={() => toggleSelection(0)}>
                <Foundation
                  name="clipboard-notes"
                  size={18}
                  color={selectedOption === 0 ? '#EFEFAA' : '#4BBD5E'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.headerRightIconBackground,
                  selectedOption === 1
                    ? {backgroundColor: '#4BBD5E', borderWidth: 0}
                    : {
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#4BBD5E',
                      },
                ]}
                onPress={() => toggleSelection(1)}>
                <Ionicons
                  name="musical-notes-outline"
                  size={18}
                  color={selectedOption === 1 ? '#EFEFAA' : '#4BBD5E'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.headerRightIconBackground,
                  selectedOption === 2
                    ? {backgroundColor: '#4BBD5E', borderWidth: 0}
                    : {
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#4BBD5E',
                      },
                ]}
                onPress={() => toggleSelection(2)}>
                <Fontawesome6
                  name="question"
                  size={18}
                  color={selectedOption === 2 ? '#EFEFAA' : '#4BBD5E'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Upper Middle View */}
          <View style={styles.upperMiddleViewStyle}>
            <TouchableOpacity>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EFEFAA', '#D3F698', '#84E282', '#B6DAFD']}
                style={{height: 100, width: 100, borderRadius: 50}}>
                <View style={styles.imageContainerStyle}>
                  <Image
                    source={require('../assets/salad.png')} // Path to the PNG file
                    style={styles.imageSize}
                    resizeMode="contain" // Adjust how the image fits
                  />
                  <Text style={styles.textUnderImage}>Salad</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.upperMiddleTopViewStyle}>
              <LinearGradient
                colors={['#4BBD5E', '#D3F698', '#84E282']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={styles.upperMiddleTopViewProperties}></LinearGradient>
              <LinearGradient
                colors={['#fad7a0', '#FFAB3F']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.upperMiddleButtonStyle}>
                <View style={styles.upperMiddleButtonTextPosition}>
                  <Text style={styles.uppderMiddleButtonText}>5</Text>
                </View>
              </LinearGradient>
            </View>

            <TouchableOpacity>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EFEFAA', '#D3F698', '#84E282', '#B6DAFD']}
                style={{height: 100, width: 100, borderRadius: 50}}>
                <View style={styles.imageContainerStyle}>
                  <Image
                    source={require('../assets/pizza.png')} // Path to the PNG file
                    style={styles.imageSize}
                    resizeMode="contain" // Adjust how the image fits
                  />
                  <Text style={styles.textUnderImage}>Pizza</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Middle Box View */}
          <View style={styles.middleBoxViewStyle}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#B6DAFD', '#D3F698', '#d6eaf8', '#d2b4de', '#a569bd']}
              style={styles.middleBoxViewProperties}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  color: '#4BBD5E',
                  top: 35,
                }}>
                Today's Profit: 0
              </Text>

              {/* Inner Middle Box with Gradient */}
              <View
                style={{
                  height: 300,
                  width: 370,
                  borderRadius: 50,
                  borderColor: '#4BBD5E',
                  borderWidth: 4,
                  marginTop: 50,
                  overflow: 'hidden',
                }}>
                <LinearGradient
                  colors={['#fad7a0', '#FFAB3F']}
                  start={{x: 1, y: 1}}
                  end={{x: 1, y: 0}}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}>
                  {/* Display Food Items */}
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      paddingVertical: 10,
                    }}>
                    {foodItems.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          height: 70,
                          width: 70,
                          backgroundColor: 'white',
                          borderRadius: 50,
                          borderColor:
                            selectedFoodItem === index ? 'red' : '#4BBD5E',
                          borderWidth: 2,
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 10,
                          marginBottom: 50,
                        }}
                        onPress={() => showModal(item)} // Show modal with the selected item
                        onPressIn={() => setSelectedFoodItem(index)} // Change border color on press
                        onPressOut={() => setSelectedFoodItem(null)} // Revert border color after release
                      >
                        <Image
                          source={item.image}
                          style={{height: 50, width: 50}}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                </LinearGradient>
              </View>

              <View
                style={{
                  height: 35,
                  width: 365,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  borderBottomColor: '#4BBD5E',
                  borderLeftColor: '#4BBD5E',
                  borderRightColor: '#4BBD5E',
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  bottom: 15,
                }}>
                {foodItems.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                    }}>
                    {item.image && (
                      <Image
                        source={item.image}
                        style={{height: 25, width: 25}}
                      />
                    )}
                  </View>
                ))}
              </View>

              {/* Buttons */}
              <View
                style={{flexDirection: 'row', gap: 10, padding: 10, top: 20}}>
                {points.map((point, index) => (
                  <View style={styles.pointsButtonContainer} key={index}>
                    {/* Base layer for the 3D effect */}
                    <View style={styles.pointsButtonUnderLayer} />
                    <View style={styles.pointsButtonBaseLayer} />

                    {/* Main button with gradient */}
                    <TouchableOpacity>
                      <LinearGradient
                        colors={['#52C953', '#4BBD5E']}
                        style={styles.mainPointsButton}>
                        <Text style={styles.pointsButtonText}>{point}</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>

      {/* Modal should be rendered outside the container */}
      <FoodItemModal
        isVisible={isModalVisible}
        hideModal={hideModal}
        selectedFoodItem={selectedFood}
      />
    </>
  );
};

export default HomeScreen;

// EFEFAA

// D3F698

// 84E282

// FFBC42

// B6DAFD

// F4D8FF

// 4BBD5E
