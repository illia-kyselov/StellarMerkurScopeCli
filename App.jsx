import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <TabNavigator />
                    </NavigationContainer>
                </View>
            </PersistGate>
        </Provider>
    );
}
