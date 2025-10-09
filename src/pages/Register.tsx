import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter, IonCol, IonRow, IonGrid } from '@ionic/react';
import React from 'react';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';
import { Route } from 'react-router';

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event:any) => {
    console.log('doRegistration')
    router.goBack(); /*Hier API call to create account*/
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'} >
          <IonTitle>Create Account</IonTitle>
          <IonButton slot='start'>
            <IonBackButton defaultHref='/'></IonBackButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>

        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='example@domain.com'></IonInput>
                    <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password'></IonInput>
                    <IonButton color={'secondary'} type='submit' expand='block' className='ion-margin-top'>
                      Create my account
                      <IonIcon icon={checkmarkDoneCircleOutline}></IonIcon>
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      
      </IonContent>   

      <IonFooter>
        <IonToolbar></IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;