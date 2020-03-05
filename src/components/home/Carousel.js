import React from 'react';
import { Dimensions, FlatList } from 'react-native';

import { dummyPopularFood } from '../../dummies';
import { CarouselItem } from './CarouselItem';
import { pr3 } from '../../assets/styles';
import { ms } from '../../helpers';

const { width } = Dimensions.get('window');

const Carousel = () => {
  const offset = ms(width) - ms(140) - ms(4);

  return (
    <>
      <FlatList
        data={dummyPopularFood}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        contentContainerStyle={pr3}
        snapToInterval={offset}
        snapToAlignment="center"
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          return <CarouselItem data={item} index={index} />;
        }}
      />
    </>
  );
};

export { Carousel };
