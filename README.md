![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

## Meteoric Contacts App -- DEMO for meetup based on [DEMO](https://github.com/meteoric/contacts)

See it in action here: [meteor-contacts.meteor.com](http://meteor-contacts.meteor.com)

First update the packages:
```ssh
$ meteor update
```

To run example:
```ssh
$ meteor run                   #run web instance
$ meteor run ios               #run web instance and ios simulator
$ meteor run ios-device        #run web instance and ios device
$ meteor run android           #run web instance and android emulator
$ meteor run android-device    #run web instance and android device
```

To build app which uses data from web instance add parameter: 
```ssh
$ meteor run ios --mobile-server http://meteor-contacts.meteor.com
```

## License
[MIT License](https://github.com/bosnian/meteoric-contacts-meetup/LICENSE)
