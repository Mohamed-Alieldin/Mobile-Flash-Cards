import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}



const NOTIFICATION_KEY = 'UdaciFlashCards:notifications'


export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync)
}


function createNotification(){
  return{
    title:"Take A Quiz!",
    body:"You did not practice today",
    ios:{
      sound: true
    },
    android:{
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }        
  }
}

export async function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data)=>{
    if(data === null || data ===undefined){
      Permissions.askAsync(Permissions.Notifications)
      .then(({status})=>{
        if (status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()
          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() +1 )
          tomorrow.setHours(17)
          tomorrow.setMinutes(0)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {time: tomorrow, repeat:'day'}
            )

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

        }
      })
    }
  })
}








