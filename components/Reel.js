import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useDispatch } from 'react-redux';
import { likeReel, addComment, shareReel } from '../slices/reelsSlice';
import { AntDesign, Feather } from '@expo/vector-icons';
const { height } = Dimensions.get('window');

const Reel = ({ reel, isInView }) => {
  const video = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (video.current) {
      isInView ? video.current.playAsync() : video.current.pauseAsync();
    }
  }, [isInView]);

  return (
    <View style={{ height, position: 'relative' }}>
      <Video
        ref={video}
        source={{ uri: reel.videoUrl }}
        style={{ height: '100%', width: '100%' }}
        resizeMode="cover"
        isLooping
        shouldPlay={false}
      />
      {/* Top Content */}
      <View style={{ position: 'absolute', top: 40, left: 20, right: 10 }}>
        <TouchableOpacity >
          {/* Reels Title */ }
          <Text style={{ color: '#fff', fontSize: 26, fontWeight: 'bold' }}>
            Reels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16, position: 'absolute', top: -30, right: 30 }}>
            <AntDesign name="camera" size={35} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 80, left: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{reel.profileName}</Text>
        <Text style={{ color: 'white' }}>{reel.caption}</Text>
      </View>
      <View style={{ position: 'absolute', bottom: 100, right: 10, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => dispatch(likeReel(reel.id))}>
          <AntDesign name="hearto" size={15} color="#fff" />
          <Text style={{ color: 'white', textAlign: 'center' }}>{reel.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(addComment({ id: reel.id }))}>
          <Feather name="message-circle" size={15} color="#fff" />
          <Text style={{ color: 'white', textAlign: 'center' }}>{reel.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(shareReel(reel.id))}>
          <Feather name="share-2" size={15} color="#fff" />
          <Text style={{ color: 'white', textAlign: 'center' }}>{reel.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reel;
