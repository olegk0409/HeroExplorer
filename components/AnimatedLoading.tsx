import { useRef } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import LottieView from 'lottie-react-native';

function AnimatedLoading() {
  const animation = useRef<LottieView>(null);
  const {width: screenWidth} = useWindowDimensions();

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: screenWidth,
          height: screenWidth,
        }}
        source={require('@/assets/animations/welcome.json')}
      />
      <View style={{width: screenWidth, height: screenWidth, position: 'absolute', top: 0, left: 0, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('@/assets/images/icon.png')} style={{width: 50, height: 50, borderRadius: 100}} />
      </View>
    </View>
  );
}

export default AnimatedLoading;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
