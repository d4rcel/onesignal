import { useEffect, useState } from "react";
import "./App.css";
import OneSignal from "react-onesignal";

function App() {
  const [permissionState, setPermissionState] = useState("default");
  const [subscriptionId, setSubscriptionId] = useState(null);

  const checkSubscription = async () => {
    const isPushSupported = OneSignal.Notifications.isPushSupported();
    if (isPushSupported) {
      const pushSubscription = OneSignal.User.PushSubscription.id;
      if (pushSubscription) {
        console.log("Subscription ID:", pushSubscription);
        setSubscriptionId(pushSubscription);
      } else {
        console.log("Not subscribed yet");
        setSubscriptionId(null);
      }
    }
  };

  const sendSubscriptionToServer = async (subId, retries = 3) => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/subscriptions', {
        subscriptionId: subId,
      });
      console.log('Subscription sent to server:', response.data);
    } catch (error) {
      console.error('Error sending subscription to server:', error);
      if (retries > 0) {
        console.log(`Retrying... (${retries} attempts left)`);
        setTimeout(() => sendSubscriptionToServer(subId, retries - 1), 1000);
      }
    }
  };


  useEffect(() => {
    console.log("JINTATATA ::: ", import.meta.env.VITE_APP_ID);
    // Ensure this code runs only on the client side
    if (typeof window !== "undefined") {
      OneSignal.init({
        appId: import.meta.env.VITE_APP_ID,
        // You can add other initialization options here
        notifyButton: {
          enable: true,
        },
        // Uncomment the below line to run on localhost. See: https://documentation.onesignal.com/docs/local-testing
        allowLocalhostAsSecureOrigin: true,
      }).then(() => {
        console.log("OneSignal initialized");

        if (OneSignal.User.PushSubscription.id) {
          setSubscriptionId(OneSignal.User.PushSubscription.id);
          console.log("ZICHINE ::: ", OneSignal.User.PushSubscription.id);
        } else {
          setPermissionState(OneSignal.Notifications.permissionNative);

          OneSignal.User.PushSubscription.addEventListener(
            "change",
            checkSubscription
          );
        }
      });
    }

    // Cleanup function
    return () => {
      if (typeof window !== "undefined" && OneSignal.Notifications) {
        OneSignal.User.PushSubscription.removeEventListener("change");
      }
    };
  }, []);

  useEffect(() => {
    sendSubscriptionToServer(subscriptionId)
  }, [permissionState, subscriptionId]);

  const onHandleTag = (tag) => {
    console.log(tag);
  };

  return (
    <>
      <div className="centered-element" style={{ fontSize: "20px" }}>
        <h1>One Signal implementation</h1>
        <div>
          <a
            href="#"
            role="button"
            className="btn--react"
            onClick={() => onHandleTag("react")}
          >
            React
          </a>
          <a
            href="#"
            role="button"
            className="btn--angular"
            onClick={() => onHandleTag("angular")}
          >
            Angular
          </a>
          <a
            href="#"
            role="button"
            className="btn--vue"
            onClick={() => onHandleTag("vue")}
          >
            VueJs
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
