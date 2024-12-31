import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../screens/style';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';

const points = ['1000', '5000', '10000', '50000'];

const HomeScreen = () => {
  return (
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
            <TouchableOpacity style={styles.headerRightIconBackground}>
              <Foundation name="clipboard-notes" size={18} color="#EFEFAA" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerRightIconBackground}>
              <Ionicons
                name="musical-notes-outline"
                size={18}
                color="#EFEFAA"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerRightIconBackground}>
              <Fontawesome6 name="question" size={18} color="#EFEFAA" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons */}
        <View style={{flexDirection: 'row', gap: 10, padding: 10, top: 20}}>
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
