import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/style';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComumityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import foodItems from '../utils/foodItems';
import ConformationModal from '../components/conformationModal/conformationModal';
import ChartModal from '../components/ChartModal/chartModal';

const points = [100, 500, 2000, 10000, 50000];

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedFoodItems, setSelectedFoodItems] = useState<number[]>([]);
  const [activeFoodItems, setActiveFoodItems] = useState<number[]>([]);
  const [selectedRewardValue, setSelectedRewardValue] = useState<number>(0);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null); // index
  const [selectedPointValue, setSelectedPointValue] = useState<number>(0);
  const [hoveredFoodItem, setHoveredFoodItem] = useState<number | null>(null); // index
  const [isChartModalVisible, setChartModalVisible] = useState(false);

  // Hover all food items
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const handleHoverAll = async () => {
    setConfirmModalVisible(false);
    // Sequentially hover food items with a faster delay
    for (let index = 0; index < foodItems.length; index++) {
      setHoveredFoodItem(index); // Update hover state
      await sleep(500); // Wait 150ms (adjusted for faster hover)
    }
    // Reset hover after all items are hovered
    setHoveredFoodItem(null);
  };

  // Toggle selection
  const toggleSelection = (index: number) => {
    setSelectedOption(selectedOption === index ? null : index);
  };

  // Function for point buttons
  const pointButtonPressed = (index: number) => {
    setSelectedPoint(index);

    setSelectedPointValue(points[index]);

    setActiveFoodItems([]);

    setSelectedFoodItems([]);

    // Deselect the button after 30 seconds
    setTimeout(() => {
      setConfirmModalVisible(true);
      setActiveFoodItems([]);
      setSelectedPoint(null); // Assuming null means no selection
    }, 30000); // 30 seconds
  };

  // FlatList for point buttons
  const renderPointItems = ({item, index}: {item: number; index: number}) => (
    <View style={styles.pointsButtonContainer}>
      {/* Base layer for the 3D effect */}
      <View style={styles.pointsButtonUnderLayer} />
      <View style={styles.pointsButtonBaseLayer} />

      {/* Main button with gradient */}
      <TouchableOpacity onPress={() => pointButtonPressed(index)}>
        <LinearGradient
          colors={
            selectedPoint === index
              ? ['#f39c12', '#FFAB3F']
              : ['#52C953', '#4BBD5E']
          }
          style={styles.mainPointsButton}>
          <Text style={styles.pointsButtonText}>{item}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

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
                style={styles.imageContainer}>
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
                style={styles.imageContainer}>
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
              <Text style={styles.profitText}>Today's Profit: 0</Text>

              {/* Inner Middle Box with Gradient */}
              <View style={styles.innerMiddleBoxView}>
                <LinearGradient
                  colors={['#fad7a0', '#FFAB3F']}
                  start={{x: 1, y: 1}}
                  end={{x: 1, y: 0}}
                  style={styles.innerMiddleBoxViewProperties}>
                  {/* Display Food Items */}
                  <View style={styles.foodItemsDisplayProperties}>
                    {foodItems.map((item, index) => (
                      <View key={index}>
                        <Text style={styles.foodItemsNameText}>
                          {item.name}
                        </Text>
                        <TouchableOpacity
                          style={[
                            styles.foodItemsButtonStyle,
                            {
                              borderColor:
                                hoveredFoodItem === index ||
                                activeFoodItems.includes(index)
                                  ? 'red'
                                  : '#4BBD5E',
                            },
                          ]}
                          onPress={() => setConfirmModalVisible(false)} // Replace with modal logic
                          onPressIn={() => {
                            if (selectedPoint !== null) {
                              setSelectedFoodItems(prev => [...prev, index]);
                              setActiveFoodItems(prev => [...prev, index]);
                            }
                          }}>
                          <Image
                            source={item.image}
                            style={styles.foodItemsImageStyle}
                          />
                        </TouchableOpacity>
                        <Text style={styles.foodItemsRewardText}>
                          {`win ${item.reward}X`}
                        </Text>
                      </View>
                    ))}
                  </View>
                </LinearGradient>
                {/* Modal should be rendered outside the container */}
                <ConformationModal
                  isVisible={isConfirmModalVisible}
                  onClose={() => setConfirmModalVisible(false)}
                  point={selectedPointValue || 0}
                  //reward={selectedRewardValue || 0}
                  reward={selectedFoodItems.map(i => foodItems[i]?.reward || 0)}
                />
              </View>

              {/* Middle Horizontal Container */}
              <View style={{flexDirection: 'row'}}>
                <View style={styles.middleHorizontalContainer}>
                  {foodItems.map((item, index) => (
                    <View
                      key={index}
                      style={styles.middleHorizontalContainerProperties}>
                      {item.image && (
                        <Image
                          source={item.image}
                          style={styles.middleHorizontalContainerImages}
                        />
                      )}
                    </View>
                  ))}
                </View>
                <View style={styles.middleHorizontalSmallContainer}>
                  <MaterialIcons
                    style={styles.middleHorizontalSmallContaineroIcon}
                    name="trending-up"
                    size={28}
                    color="#fff"
                  />
                </View>
              </View>

              {/* Middle Horizontal Thin Line */}
              <View style={styles.middleHorizontalThinLineView}></View>

              {/* Buttons */}
              <FlatList
                data={points}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderPointItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.pointButtonProperties}
              />

              {/* Bottom Part */}
              <View style={styles.bottomComponentsProperties}>
                <View style={styles.bottomBar}>
                  <View style={styles.bottomBarProperties}>
                    <View style={styles.circleInBottomBar}>
                      <MaterialComumityIcons
                        name="lightning-bolt"
                        size={20}
                        color="#f8c471"
                      />
                    </View>
                    <Text style={styles.bottomBartext}>89</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.rechargeButton}
                  onPress={() => setChartModalVisible(true)}>
                  <Text style={styles.rechargeText}>Recharge</Text>

                  {/* Chart Modal should be rendered outside the container */}
                  <ChartModal
                    isVisible={isChartModalVisible}
                    onClose={() => setChartModalVisible(false)}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default HomeScreen;
