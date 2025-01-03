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
  pointButtonProperties: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
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
    padding: scale(6),
    top: scale(10),
    justifyContent: 'center',
    zIndex: 1,
  },
  upperMiddleButtonTextPosition: {
    top: scale(12),
  },
  upperMiddleButtonStyle: {
    height: scale(45),
    width: scale(90),
    borderRadius: 10,
    marginBottom: scale(18),
    alignItems: 'center',
  },
  upperMiddleTopViewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  upperMiddleTopViewProperties: {
    height: scale(75),
    width: scale(48),
    borderRadius: 50,
    marginBottom: scale(-35),
  },
  middleBoxViewStyle: {
    alignItems: 'center',
    bottom: scale(35),
  },
  middleBoxViewProperties: {
    height: scale(520),
    width: scale(340),
    borderRadius: 50,
    alignItems: 'center',
  },
  middleHorizontalContainer: {
    height: scale(35),
    width: scale(285),
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomColor: '#4BBD5E',
    borderLeftColor: '#4BBD5E',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    flexDirection: 'row',
    gap: scale(2),
    justifyContent: 'space-between',
    bottom: scale(15),
  },
  middleHorizontalContainerProperties: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(5),
  },
  middleHorizontalContainerImages: {
    height: scale(22),
    width: scale(22),
  },
  middleHorizontalSmallContainer: {
    height: scale(35),
    width: scale(50),
    backgroundColor: '#e67e22',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    bottom: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleHorizontalSmallContaineroIcon: {
    marginLeft: scale(-2),
  },
  innerMiddleBoxView: {
    height: scale(295),
    width: scale(335),
    borderRadius: 50,
    borderColor: '#4BBD5E',
    borderWidth: 4,
    marginTop: 50,
    overflow: 'hidden',
  },
  innerMiddleBoxViewProperties: {
    height: '100%',
    width: '100%',
  },
  middleHorizontalThinLineView: {
    height: scale(7),
    width: scale(330),
    backgroundColor: '#c39bd3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#af7ac5',
  },
  foodItemsDisplayProperties: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  foodItemsNameText: {
    textAlign: 'center',
    color: '#27ae60',
    fontSize: 12,
    fontWeight: '700',
  },
  foodItemsRewardText: {
    bottom: 50,
    textAlign: 'center',
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
  },
  foodItemsButtonStyle: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    marginBottom: 50,
  },
  foodItemsImageStyle: {
    height: 50,
    width: 50,
  },
  rechargeButton: {
    height: scale(28),
    width: scale(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#FFAB3F',
  },
  bottomComponentsProperties: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 10,
  },
  rechargeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  bottomBarProperties: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bottomBar: {
    height: scale(28),
    width: scale(140),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FFAB3F',
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
  },
  bottomBartext: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  circleInBottomBar: {
    height: scale(28),
    width: scale(28),
    backgroundColor: '#e67e22',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFAB3F',
    alignItems: 'center',
    justifyContent: 'center',
    right: scale(3),
  },
});

export default styles;
