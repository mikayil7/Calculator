import React, {useRef, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';


//import Routes from './src/navigation/Routes';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', alignItems: 'center'}}>
      <View style={{flex: 2, width: '100%'}}>
        <View>
          <Image
            source={require('../assets/icone.png')}
            style={{
              width: '100%',
              height: 350,
              marginTop: 10,
              justifyContent: 'center',
            }}></Image>
            
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculator')}
          style={{
           margin: 10,
           padding:5,
            height: 40,
            alignItems: 'center',
            backgroundColor: '#434343',
            justifyContent: 'center',
            borderRadius: 30,
            borderColor:'blue',
            borderWidth:3
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>
            If you want to calculate something click here
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            margin:5,
            padding:5,
            backgroundColor: '#434343',
            borderRadius: 30,
            justifyContent: 'center',
            //width: '90%',
            alignItems: 'center',
            height: 40,
            borderColor:'blue',
            borderWidth:3
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Active Animation</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <FadeInView
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'powderblue',
          }}>
          <Image
            source={require('../assets/icone2.png')}
            style={{
              width: '100%',
              height: '100%',
              marginTop: 10,
              justifyContent: 'center',
            }}></Image>
        </FadeInView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
