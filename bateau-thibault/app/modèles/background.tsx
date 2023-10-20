import { ImageBackground, StyleSheet } from "react-native";
//import { SetStateAction, useState } from "react";



//  ################ Swipe
/*
let swipePage = "vue0"

const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)
const minSwipeDistance = 50 

const onTouchStart = (e: { targetTouches: { clientX: SetStateAction<null>; }[]; }) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e: { targetTouches: { clientX: SetStateAction<null>; }[]; }) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  // add your conditional logic here
}

//  ################ Swipe
*/
const Background = ({children, swipeIndex}) => {

  //swipePage = swipeIndex;

    return (
        <ImageBackground //onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        source={require("../../assets/images/background3.png")}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    )
}

export default Background;


export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
})