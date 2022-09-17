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
        <FlatList
            data={list}
            extraData={list}
            refreshing={refreshing}
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
    )
}

export default MembersList