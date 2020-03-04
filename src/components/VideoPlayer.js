import React, { useState, useCallback } from 'react';
import Video from 'react-native-video';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, Image } from 'react-native';
import debounce from 'lodash.debounce';

import {
  p2,
  colors,
  text_lg,
  font_bold,
  centering,
  shadow_lg,
} from '../assets/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ms } from '../helpers';

const VideoPlayer = ({ video, thumbnail }) => {
  const [showButton, setShowButton] = useState(true);
  const [paused, setPause] = useState(true);
  const [showThumbnail, setThumbnail] = useState(true);
  
  const hideButton = useCallback(
    debounce(() => setShowButton(false), 1500),
    [],
  );

  const controls = () => {
    setShowButton(true);
    setThumbnail(false);
    setPause(!paused);
    hideButton();
  };

  return (
    <>
      <View style={styles.videoContainer}>
        <Video
          paused={paused}
          resizeMode="cover"
          source={video}
          style={styles.backgroundVideo}
        />
        {showThumbnail && <Image style={styles.thumbnail} source={thumbnail} />}
        {/* Button controller */}
        <TouchableOpacity
          style={styles.playButton}
          activeOpacity={0.7}
          onPress={controls}>
          {showButton && (
            <FontAwesome5
              size={ms(80)}
              name={paused ? 'play' : 'pause'}
              color="rgba(255, 255, 255, 0.6)"
              style={shadow_lg}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.videoTitleContainer}>
        <Text style={styles.videoTitle}>Beef Patty Hamburger</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoTitleContainer: {
    ...p2,
    backgroundColor: colors.dark,
  },
  videoTitle: {
    ...text_lg,
    ...font_bold,
    color: colors.white,
  },
  videoContainer: {
    width: '100%',
    height: ms(220),
    backgroundColor: colors.dark,
  },
  playButton: {
    height: ms(220),
    width: '100%',
    ...centering,
  },
  thumbnail: {
    position: 'absolute',
    height: ms(220),
    width: '100%',
    resizeMode: 'cover',
  },
});

export { VideoPlayer };
