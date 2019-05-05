import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Signin from '~/pages/Signin';
import Main from '~/pages/Main';

const Routes = createAppContainer(createSwitchNavigator({ Signin, Main }));

export default Routes;
