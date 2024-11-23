import React, {useState} from 'react';
import {Alert, StyleSheet, Button, Text, View, TextInput} from 'react-native';
import {datasource} from './Data.js';

const styles = StyleSheet.create({
    bottonsbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10,
    },
});

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name);
    const [image, setImage] = useState(route.params.image);

    return (
        <View>
            <Text>Pokemon Name:</Text>
            <TextInput
                value={name}
                style={{borderWidth: 1, maxLength: 20}}
                onChangeText={ (text) => setName(text)}>
            </TextInput>

            <Text>Image:</Text>
            <TextInput
                value={image}
                style={{borderWidth: 1, maxLength: 500}}
                onChangeText={ (image)=> setImage(image)}>
            </TextInput>

            <View style={styles.bottonsbox}>
                <View style={{flex: 1, marginRight: 20}}>
                    <Button title='Save'
                            onPress={ () => {
                                let indexnum = 1;
                                if (route.params.type === 'Fire') {
                                    indexnum = 0;
                                }
                                if (route.params.type === 'Water') {
                                    indexnum = 1;
                                }
                                if (route.params.type === 'Physic') {
                                    indexnum = 2;
                                }

                                datasource[indexnum].data[route.params.index].name = name;
                                datasource[indexnum].data[route.params.index].image = image;
                                navigation.navigate("Home");
                            }}/>
                </View>

                <View style={{flex: 1}}>
                    <Button title='Delete'
                            onPress={() => {
                                let indexnum = 1;
                                if (route.params.type === 'Fire') {
                                    indexnum = 0;
                                }
                                if (route.params.type === 'Water') {
                                    indexnum = 1;
                                }
                                if (route.params.type === 'Physic') {
                                    indexnum = 2;
                                }

                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}]);
                            }}/>
                </View>
            </View>
        </View>
    );
};

export default Edit;




