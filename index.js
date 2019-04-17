const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
      throw new Error('No Push API Support!')
    }
    console.log(`Browser supports Pushmanager and Service worker`)
  }

  // Async so we can use await 
  const  main = async () => {
    check()
    const swRegistration = await registerServiceWorker();
  }


  //To run service worker we need to first register service worker 

  //Registering Service Worker
  const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('service.js'); //notice the file name
    return swRegistration;
}


//Executing our main function in the end 

main()
