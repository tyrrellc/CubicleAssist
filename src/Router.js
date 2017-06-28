import React from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import GroupMain from './components/GroupMain';
import GroupCreate from './components/GroupCreate';
import GroupEdit from './components/GroupEdit';
import GroupPage from './components/GroupPage';
import FeedbackInput from './components/FeedbackInput';

const TabIcon = ({title}) => {
  return (
    <Text style={{ color: '#ffcb05' }}>{title}</Text>
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key ="login" component={LoginForm} title="Welcome to Cubicle" initial hideNavBar='true'/>
      </Scene>

      <Scene key="main">
        <Scene key="groupMain" component={GroupMain} title="Groups"
          sceneStyle={{ paddingTop: 50}}
          navigationBarStyle={{ height: 50, borderBottomColor: 0, backgroundColor: '#597ABC'}}
          titleStyle={{ fontSize: 20, color: '#00274C' }}
        />

        <Scene key="groupCreate" component={GroupCreate} title="Create Group"
          sceneStyle={{ paddingTop: 65}}
          navigationBarStyle={{ height: 50, borderBottomColor: 0, backgroundColor: '#597ABC'}}
          titleStyle={{ fontSize: 20, color: '#00274C' }}
        />
      </Scene>
    <Scene key="groupInstance" tabs tabBarStyle={{ backgroundColor: '#597ABC', height: 30 }}>
      <Scene key="groupPage" component={GroupPage} title="Current Group"
        onRight={() => Actions.groupEdit()} rightTitle="Edit"
        sceneStyle={{ paddingTop: 65}} icon={TabIcon}
        navigationBarStyle={{ height: 50, borderBottomColor: 0, backgroundColor: '#597ABC'}}
        titleStyle={{ fontSize: 20, color: '#00274C' }}
        rightButtonTextStyle={{ color: '#00274c' }}
      />
      <Scene key="feedbackInput" component={FeedbackInput} title="Provide Feedback"
        sceneStyle={{ paddingTop: 65}} icon={TabIcon}
        navigationBarStyle={{ height: 50, borderBottomColor: 0, backgroundColor: '#597ABC'}}
        titleStyle={{ fontSize: 20, color: '#00274C' }}
      />
      <Scene key="groupEdit" component={GroupEdit} title="Edit Group"
        sceneStyle={{ paddingTop: 65}}
        navigationBarStyle={{ height: 50, borderBottomColor: 0, backgroundColor: '#597ABC'}}
        titleStyle={{ fontSize: 20, color: '#00274C' }}
      />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
