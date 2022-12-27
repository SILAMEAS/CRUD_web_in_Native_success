import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Pressable,
  Modal,
  FormControl,
  Input,
  HStack,
} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../components/SilaComponents/Card';

// import Card from '../../components/SilaComponents/Card';
import {setDATA, setOne} from '../Redux/counter/CounterSlice';
function AddUser({name, email, setname, setemail}: any) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const AddUser = async () => {
    const dataa = {
      name,
      email,
    };
    const res = await fetch('http://localhost:3001/user/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(dataa),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      setModalVisible(false);
      window.location.reload();
    }
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>New User</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input value={name} onChangeText={val => setname(val)} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input value={email} onChangeText={val => setemail(val)} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={AddUser}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Add user
        </Button>
      </HStack>
    </>
  );
}

const Update = ({
  modalVisible,
  setModalVisible,
  email,
  name,
  setname,
  setemail,
  id,
}: any) => {
  // modal one of user

  const Update = async (id: any) => {
    console.log(name);
    const dataa = {
      name,
      email,
    };
    const res = await fetch('http://localhost:3001/user/update/' + id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(dataa),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      setModalVisible(false);
      window.location.reload();
    }
  };
  return (
    <>
      {/* Profile Detail */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Profile Details {id}</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input value={name} onChangeText={val => setname(val)} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input value={email} onChangeText={val => setemail(val)} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  Update(id);
                }}
              >
                Update
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
const SilaScreen = () => {
  const {GetOne}: any = useSelector((state: any) => state.counter);
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  console.log('____________');
  console.log(GetOne);

  // const DF = {
  //   name,
  //   setname,
  //   email,
  //   setemail,
  // };
  // declare varaible
  const datas: any = useSelector((state: any) => state.counter.DATA);

  const displact = useDispatch();
  // mode light or dark
  const {toggleColorMode} = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  // get all users
  const GetData = async () => {
    const res = await fetch('http://localhost:3001/user');
    const data = await res.json();
    displact(setDATA(data));
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  // get one data
  const GetId = (i: any) => {
    displact(setOne(i));
    setname(i.name);
    setemail(i.email);
    setModalVisible(!modalVisible);
  };
  // run first when open in component
  useEffect(() => {
    GetData();
  }, []);
  return (
    <Box bg={bg} _text={text}>
      <AddUser
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
      />
      {datas.map((i: any) => {
        return (
          <Pressable
            onPress={() => {
              GetId(i);
            }}
            key={i.id}
          >
            <Card name={i.name} email={i.email} id={i.id} />
          </Pressable>
        );
      })}
      <Update
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
        setname={setname}
        email={email}
        setemail={setemail}
        id={GetOne.id}
      />
      <Button onPress={toggleColorMode} mt="10" mx="auto" width="1/4">
        Change mode
      </Button>
    </Box>
  );
};

export default SilaScreen;
