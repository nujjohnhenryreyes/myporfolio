import React from 'react';
import Images from '../constants/Images'; 

const Background = () => {
  return (
    <div style={styles.backScreen}>
        <div style={styles.imageContainer}>
            <img src={Images.CodeTag} style={styles.img} />
        </div>
        <div style={styles.transparency} />
    </div>
  );
}

const styles = {
  backScreen: { 
    height: "100%", 
    width: "100%", 
    position: "absolute", 
    zIndex: "1" 
  },
  imageContainer: { 
    height: "100%", 
    width: "100%", 
    position: "absolute", 
    zIndex: "1", 
    overflow: "hidden"
  },
  img: {
    width: "100%", 
    height: "100%"
  },
  transparency: { 
    background: "linear-gradient(to bottom, #0099cc 22%, #33cccc 94%)", 
    height: "100%", 
    position: "relative", 
    zIndex: "2", 
    opacity: "0.5"
  }
}

export default Background;
