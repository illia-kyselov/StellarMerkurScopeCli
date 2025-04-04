import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </View>
        </Provider>
    );
}
