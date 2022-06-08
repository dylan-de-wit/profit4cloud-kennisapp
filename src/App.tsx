import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { happyOutline, peopleOutline, searchOutline} from 'ionicons/icons';
import Colleagues from './pages/Colleagues';
import Search from './pages/Search';
import Profile from './pages/Profile';
import { useTranslation } from 'react-i18next';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* I18N */
import './i18n';

setupIonicReact();

const App: React.FC = () => {
	const { t } = useTranslation();

	return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>

          <IonRouterOutlet>
            <Route exact path="/colleagues">
              <Colleagues />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Redirect to="/colleagues" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="colleagues" href="/colleagues">
              <IonIcon icon={peopleOutline} />
              <IonLabel>{t('Colleagues')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchOutline} />
              <IonLabel>{t('Search')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={happyOutline} />
              <IonLabel>{t('Profile')}</IonLabel>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
