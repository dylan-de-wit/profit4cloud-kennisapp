import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      {/*<IonHeader>*/}
      {/*  <IonToolbar>*/}
      {/*    <IonTitle>Profile</IonTitle>*/}
      {/*  </IonToolbar>*/}
      {/*</IonHeader>*/}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Profile')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={t('Profile')} />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
