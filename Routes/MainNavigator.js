import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Screens */
import HomeScreen from "../Screens/HomeScreen";
import EditAmountScreen from "../Screens/EditAmountScreen";
import NewMemberScreen from "../Screens/NewMemberScreen";

/* Components */
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    header: () => <Header/>
                }}
            />
            <Stack.Screen
                name='NewMember'
                component={NewMemberScreen}
                options={{
                    headerShown: false,
                    presentation: 'formSheet'
                }}
            />
            <Stack.Screen
                name='EditAmount'
                component={EditAmountScreen}
                options={{
                    headerShown: false,
                    presentation: 'formSheet'
                }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;