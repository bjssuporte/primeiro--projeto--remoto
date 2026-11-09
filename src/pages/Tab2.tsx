import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />

        <IonList>
          <IonItem>
            <IonInput label="Default input"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Input with placeholder" placeholder="Enter company name"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Input with value" value="121 S Pinckney St #300"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Readonly input" value="Madison" readonly={true}></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Disabled input" value="53703" disabled={true}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
