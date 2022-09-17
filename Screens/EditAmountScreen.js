import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { editMemberAmount } from '../Redux/Slices/membersSlice';

function EditAmountScreen({ navigation, route }) {

    const dispatch = useDispatch();
    let params = route.params;

    let [value, setValue] = useState(0)

    let handleOnPress = () => {
        dispatch(editMemberAmount({
            id: params.id,
            newAmount: value
        }))
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={50}
        >
                <View style={styles.memberSummary}>
                    <Text style={styles.memberName}>{ params.name }</Text>
                </View>
                <TextInput
                    style={styles.numericInput}
                    value={value}
                    keyboardType='numeric'
                    placeholder='$0'
                    autoFocus={true}
                    caretHidden={true}
                    onChangeText={(newValue) => setValue(parseInt(newValue))}
                />
                <View style={styles.submitButtonContainer}>
                    <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Home')}>
                        <Text style={[styles.buttonText, { color: 'black'}]}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { opacity: value > 0 ? 1 : 0.5, backgroundColor: '#7978B8',}]} onPress={value > 0 ? handleOnPress : null}>
                        <Text style={[styles.buttonText, { color: 'white'}]}>Add</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
}

export default EditAmountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40
    },
    memberSummary: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    memberName: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    currentAmount: {
        fontSize: 35
    },
    numericInput: {
        fontSize: 60,
        justifyContent: 'center',
        marginVertical: 80
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