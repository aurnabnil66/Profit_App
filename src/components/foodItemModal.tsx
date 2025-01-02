// FoodItemModal.js

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from './style';

interface FoodItemModalProps {
  isVisible: boolean;
  hideModal: () => void;
  selectedFoodItem: any;
}

const FoodItemModal = ({
  isVisible,
  hideModal,
  selectedFoodItem,
}: FoodItemModalProps) => {
  const {image, name} = selectedFoodItem || {};

  const modalOpacity = useSharedValue(0);
  const modalTranslateY = useSharedValue(1000);

  useEffect(() => {
    if (isVisible) {
      modalOpacity.value = withTiming(1, {duration: 300});
      modalTranslateY.value = withTiming(0, {duration: 300});
    } else {
      modalOpacity.value = withTiming(0, {duration: 300});
      modalTranslateY.value = withTiming(1000, {duration: 300});
    }
  }, [isVisible]);

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: modalOpacity.value,
  }));

  const animatedModalStyle = useAnimatedStyle(() => ({
    transform: [{translateY: modalTranslateY.value}],
  }));

  return (
    isVisible && (
      <View style={styles.container}>
        <Animated.View style={[styles.overlay, animatedOverlayStyle]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={hideModal} />
        </Animated.View>

        <Animated.View style={[styles.modal, animatedModalStyle]}>
          <Image source={image} style={styles.image} />
          <Text style={styles.modalText}>{name}</Text>
          <Pressable onPress={hideModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
        </Animated.View>
      </View>
    )
  );
};

export default FoodItemModal;
