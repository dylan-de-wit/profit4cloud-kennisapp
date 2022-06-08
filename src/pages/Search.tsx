import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Search.css';
import { useTranslation } from 'react-i18next';

const Search: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      {/*<IonHeader>*/}
      {/*  <IonToolbar>*/}
      {/*    <IonTitle>Search</IonTitle>*/}
      {/*  </IonToolbar>*/}
      {/*</IonHeader>*/}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Search')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={t('Search')} />
      </IonContent>
    </IonPage>
  );
};

export default Search;
