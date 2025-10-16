import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRoute, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { Route } from 'react-router-dom';
import React from 'react';

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import { Redirect } from 'react-router';
import { triangle } from 'ionicons/icons';

const Settings: React.FC = () => {

  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/app/settings/tab1" component={Tab1} />
          <Route exact path="/app/settings/tab2" component={Tab2} />
          <Route exact path="/app/settings">
            <Redirect to="/app/settings/tab1" />
          </Route>
        </IonRouterOutlet>

        {/* Bottom tab bar */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/app/settings/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/app/settings/tab2">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default Settings;