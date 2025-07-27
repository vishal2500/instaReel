import React, { useRef, useState } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Reel from '../components/Reel';

const { height } = Dimensions.get('window');

const ReelsScreen = () => {
  const reels = useSelector((state) => state.reels.reels);
  const [visibleReelId, setVisibleReelId] = useState(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleReelId(viewableItems[0].item.id);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={reels}
        renderItem={({ item }) => (
          <Reel reel={item} isInView={item.id === visibleReelId} />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default ReelsScreen;
