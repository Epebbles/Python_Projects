import { StyleSheet, View, FlatList, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import IntroSlides from './IntroSlides'
import Paginator from './Paginator'
import SlideItem from './SlideItem'
import NextButton from './NextButton'


const IntroCarousel = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    const scrollTo = () => {
        currentIndex < IntroSlides.length -1?
            slidesRef.current.scrollToIndex({ index: currentIndex + 1}):
            navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 0.9}}>
                <FlatList 
                    data={IntroSlides}
                    renderItem={({item}) => <SlideItem item={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={true}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                        useNativeDriver: false
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <View style={styles.dots}>
                <Paginator data={IntroSlides} scrollX={scrollX}/>
            </View>
            
            <View style={styles.button}>
                <NextButton title={currentIndex === 2? "Let's Get Started!": "Next"} scrollTo={scrollTo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    button : {
        flex: 0.2
    },
    dots : {
        alignItems: 'center',
        marginTop: 10
    }
})

export default IntroCarousel