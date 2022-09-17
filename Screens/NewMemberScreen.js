import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from '../Redux/Slices/membersSlice';
import uuid from 'react-native-uuid';


function NewMemberScreen({ navigation }) {

    const dispatch = useDispatch();

    let [value, setValue] = useState('')

    const handleAddMember = () => {
        dispatch(addMember({
            name: value,
            amount: 0,
            id: uuid.v4()
        }));
        navigation.navigate('Home')
    }
    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={50}
        >
            <Text style={styles.title}>Enter a name</Text>
            
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    autoFocus={true}
                    onChangeText={(newValue) => setValue(newValue)}
                />
                <View style={styles.line}></View>
            </View>

            <View style={styles.submitButtonContainer}>
                <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.buttonText, { color: 'black'}]}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { opacity: value != '' ? 1 : 0.5, backgroundColor: '#7978B8'}]} onPress={handleAddMember}>
                    <Text style={[styles.buttonText, { color: 'white'}]}>Add</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default NewMemberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 40
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold',
    },
    textInputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    textInput: {
        marginBottom: 5,
        fontSize: 30,
    },
    line: {
        width: '80%',
        height: 1,
        backgroundColor: '#7978B8'
    },
    submitButtonContainer: {
        width: '100%',
        aspectRatio: 10 / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})