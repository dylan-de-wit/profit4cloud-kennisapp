import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Colleagues.css';
import { useTranslation } from 'react-i18next';

const Colleagues: React.FC = () => {
  const { t } = useTranslation();

  t('Colleagues')
  return (
    <IonPage>
      {/*<IonHeader>*/}
      {/*  <IonToolbar>*/}
      {/*    <IonTitle>Colleagues</IonTitle>*/}
      {/*  </IonToolbar>*/}
      {/*</IonHeader>*/}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('Colleagues')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={t('Colleagues')} />
      </IonContent>
    </IonPage>
  );
};

export default Colleagues;
