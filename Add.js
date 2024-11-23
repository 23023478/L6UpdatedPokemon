import React, {useState} from 'react'
import {datasource} from "./Data.js";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Pokemon Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Image Link:</Text>
                {/*<TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setImage(text)}/>*/}
                <TextInput style={{borderWidth: 1}} onChangeText= {(image)=> setImage(image)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"Fire", value:"Fire"},
                        {label:"Water", value:"Water"},
                        {label:"Physic", value:"Physic"}
                    ]}
                />
            </View>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {name:name,image:image};
                        let indexnum = 1;
                        if(type==="Fire"){
                            indexnum = 0;
                        }
                        if(type==="Water"){
                            indexnum = 1;
                        }
                        if(type==="Physic"){
                            indexnum = 2;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate('Home')
                    }
            }
            />
        </View>
    );
};
export default Add;
