import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRoute, IonTitle, IonToolbar, useIonLoading, useIonRouter, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { personCircleOutline } from 'ionicons/icons';
import { logInOutline } from 'ionicons/icons';
import Intro from "../components/intro"
import { Preferences } from '@capacitor/preferences'

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
      const router = useIonRouter();
      //const [introSeen, setIntroSeen] = useState(true);
      const [introSeen, setIntroSeen] = useState<boolean | null>(null); // null = loading
      const [present, dissmiss] = useIonLoading();

      useEffect(() => {
        const checkStorage = async() => {
          const seen = await Preferences.get({key: INTRO_KEY});
          console.log(" ~ file: Login.tsx:17 ~ checkStorage ~ seen:", seen);
          setIntroSeen(seen.value === 'true');
        };
        checkStorage();
      }, []);

      const doLogin = async(event: any) =>{
        event.preventDefault();
        //Show Loading & after Login root to menu under /app. 
        await present('Logging in...');
        setTimeout(async () => {
          dissmiss();
          router.push('/app', 'root')
        }, 2000)
        
      };

      const finishIntro = async() => {
        console.log("Finish");
        await Preferences.set({key: INTRO_KEY, value: 'true'});
        setIntroSeen(true); //Go back to Loginpage
      };

      const seeIntroAgain = async () => {
        await Preferences.remove({ key: INTRO_KEY });
        setIntroSeen(false);
      };

  // Check if Intro was seen before
  if (introSeen === null) {
    return <div style={{ textAlign: 'center', marginTop: '50%' }}>Loading...</div>;
  }

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'primary'} >
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className ="ion-padding">

            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className='ion-text-center ion-padding'>
                    <img src={'./src/images/logo.png'} alt="Logo" width={'50%'} ></img>
                  </div>
                </IonCol>
              </IonRow>
              
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='example@domain.com'></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password'></IonInput>
                        
                        <IonButton color={'secondary'} type='submit' expand='block' className='ion-margin-top'>
                          Login
                          <IonIcon icon={logInOutline}></IonIcon>
                        </IonButton>
                        
                        <IonButton routerLink="/register" color={'medium'} type='button' expand='block' className='ion-margin-top'>
                          Create Account
                          <IonIcon icon={personCircleOutline}></IonIcon>
                        </IonButton>
                        
                        <IonButton onClick={seeIntroAgain} fill='clear' size='small' type='button' expand='block' className='ion-margin-top'>
                          Watch Intro again                  
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
      )}
    </>

  );
};

export default Login;