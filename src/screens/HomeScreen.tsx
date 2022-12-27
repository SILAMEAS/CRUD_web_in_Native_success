import React from 'react';
import {Avatar, Box,Text} from 'native-base';

const HomeScreen = () => {
  return (
    <Box>
     
      <Avatar
        bg="pink.600"
        alignSelf="center"
        size="xl"
        source={{
          uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
        }}
      ></Avatar>
       <Text>Hello</Text>
    </Box>
  );
};

export default HomeScreen;
