import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

/* Componers */
import PlusButton from "../Components/PlusButton";
import MembersList from "../Components/MembersList";

function HomeScreen() {

    let members = useSelector(state => state.members.value);

    return (
        <View style={styles.screenContainer}>
            
            {
                members.length > 0 ? (
                    <MembersList list={members}/>
                ) : (
                    <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', marginTop: 100}}>Add people to start tracking!</Text>
                )
            }

            <PlusButton/>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "white",
    }
})