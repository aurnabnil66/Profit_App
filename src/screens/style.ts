import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundNoText: {
    fontSize: moderateScale(14),
    color: '#4BBD5E',
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
    top: scale(22),
  },
  headerLeft: {
    flexDirection: 'row',
    gap: 6,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  headerRightIconBackground: {
    height: scale(23),
    width: scale(23),
    borderRadius: 15,
    backgroundColor: '#4BBD5E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsButtonContainer: {
    alignItems: 'center',
  },
  pointsButtonBaseLayer: {
    position: 'absolute',
    width: scale(70),
    height: scale(37),
    backgroundColor: '#8BC22E', // Bottom layer color (adjust to match the shadow effect)
    borderRadius: 25,
    top: 5, // Push the base layer down to simulate depth
  },
  pointsButtonUnderLayer: {
    position: 'absolute',
    width: scale(75),
    height: scale(40),
    backgroundColor: '#808b96', // Bottom layer color (adjust to match the shadow effect)
    borderRadius: 25,
    top: 5, // Push the base layer down to simulate depth
  },
  mainPointsButton: {
    width: scale(70),
    height: scale(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 5, // Shadow for Android
  },
  pointsButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  imageSize: {
    height: scale(62),
    width: scale(62),
  },
  imageContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textUnderImage: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    bottom: scale(8),
  },
  uppderMiddleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    bottom: scale(4),
  },
  upperMiddleViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(38),
    padding: scale(8),
    top: scale(10),
    justifyContent: 'center',
    zIndex: 1,
  },
  upperMiddleButtonTextPosition: {
    top: scale(12),
  },
});

export default styles;
