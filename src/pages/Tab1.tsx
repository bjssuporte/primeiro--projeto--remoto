import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader className='cabecalho' collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className='titulo'>Titulo do cartão</IonCardTitle>
            <IonCardSubtitle>Subtitulo do cartão</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more, nothing less.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
