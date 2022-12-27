import {Avatar, Button, Icon, Input, Pressable, Stack, Text} from 'native-base';
import React from 'react';
export interface Props{
  navigation:any,
}
export default function LoginScreen({navigation}:Props) {
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Avatar
        bg="pink.600"
        alignSelf="center"
        size="xl"
        source={{
          uri: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80',
        }}
      ></Avatar>
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        InputLeftElement={ <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Text>B</Text>} size={5} mr="2" color="muted.400" />
          </Pressable>}
        placeholder="Name"
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Text>B</Text>} size={5} mr="2" color="muted.400" />
          </Pressable>
        }
        placeholder="Password"
      />
      <Button 
      onPress={()=>{
        navigation.navigate("HomeScreen")
      }}
       w={{
          base: '75%',
          md: '25%',
        }}>Login</Button>
    </Stack>
  );
}
