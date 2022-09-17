import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { cleanAllMembers } from "../Redux/Slices/membersSlice";

/* Components */
import MemberCard from "./MemberCard";

function MembersList({ list }) {

    const dispatch = useDispatch();
    const [refreshing, setRefresh] = useState(false);

    let triggerDispatch = () => {
        setRefresh(true);
        dispatch(cleanAllMembers());
        setRefresh(false);
    }

    return (
        <>
            {/* <View style={styles.cleanListContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Clean list?</Text>
                <View style={styles.buttonsContainer}>
                    <View style={[styles.button]}>
                        <Text>Cancel</Text>
                    </View>
                    <View style={[styles.button]}>
                        <Text>Clean</Text>
                    </View>
                </View>
            </View> */}

            <FlatList
                data={list}
                extraData={list}
                refreshing={refreshing}
                contentContainerStyle={{ paddingBottom: 150 }}
                onRefresh={() => triggerDispatch()}
                renderItem={({ item }) => {
                    return (
                        <MemberCard
                            name={item.name}
                            amount={item.amount}
                            id={item.id}
                        />
                    )
                }}
            />
        </>
    )
}

export default MembersList;

const styles = StyleSheet.create({
    cleanListContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    buttonsContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 100,
        aspectRatio: 10 / 5,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})