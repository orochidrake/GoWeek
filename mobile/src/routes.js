import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/Login';
import TimeLine from './pages/TimeLine';
import New from './pages/New';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStackNavigator({
        TimeLine,
        New,
        })
    })
);

export default Routes;