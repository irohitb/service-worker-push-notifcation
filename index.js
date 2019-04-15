const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
      throw new Error('No Push API Support!')
    }
    console.log(`Browser supports Pushmanager and Service worker`)
  }
  const main = () => {
    check()
  }
  main()