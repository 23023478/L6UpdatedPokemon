import React from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar, Image, Button} from 'react-native';
import {datasource} from "./Data.js";
// styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        margin: 10,
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        justifyContent: 'space-between', // Space between text and image
    },
    textStyle: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
        flex: 1, // Make text take available space to the left
        textAlign: 'left',
    },
    image: {
        width: 530,  // Larger width
        height: 300, // Larger height
        resizeMode: 'contain',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
});


//Main app
const Home = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={() =>
                              {
                                  navigation.navigate('Edit', {index:index, type:section.title, name:item.name, image:item.image});
                              }
            }
            >
                <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                {/*<Image source={{ uri: item.image }} style={styles.image} />*/}
                <Image source={{uri: item.image}} style={styles.image} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar/>
            <Button title='Add Pokemon'
                    onPress={() => {
                        navigation.navigate('Add')
                    }}
                    style={styles.addButton}
            />

            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title,bgcolor}})=>(
                             <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
                                 {title}
                             </Text>

                         )}/>
            <StatusBar hidden={true} />
        </View>
    );
};

export default Home



