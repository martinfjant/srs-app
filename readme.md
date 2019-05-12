# SRS-APP

## Development environment

First you need to have either yarn or npm installed, as well as node, but that's almost self explanatory theese days.

If you're on MacOS, as I am, you need to have Xcode installed, as well as the command line tools. You usually have the latter if you have git and node on the computer, but the former is a huge blob some people often skip. Get it.

Install explo-cli, because this is an expo managed react native app (long word).
`yarn global add expo-cli`

If you do not have typescript globally, now is a good time to get that too:
`yarn global add typescript`

Clone down the repository with `git clone ...` and then run `yarn`. Later on you will need to configure a .env file, but as of yet you will not need any (the app is set to fetch from localhost:300).

To run expo, use `yarn start`. It will open up a web page (that display the same thing as the terminal window you already had open). Press i in terminal, or click on "open in iPhone Emulator" on the webpage. Now OSX will try to open the app in the Expo app on the phone, giving you live reload of your app with each save.

If you're on windows or linux, google and read the Expo docs or something...

## General

Screens go into screens, if screens need a lot of stuff, make them into components and put them in components.

The library I've chosen for the swipe functionality does not ship with typings, so they are manually added in /types. As are types for react-native-dotenv (though they're nothing,jsut to make the typechecker stay quiet).

There's a script that is called stfu.js in /scripts that runs after every dependncy installation, and that is to make Metro (react native bundler) shut up and stop displaying warnings about circular dependencies. They're common, not that dangerous, and sometimes the best way to solve a problem. This script monkey patches a logger somwwhere, so that the annoring yellow warnings don't pollute the phone preview. However, they will display in the terminal (yay..)

Expo uses forks of most react native libraries that it bundles, and this will result in a lot of warnings about incorrect dependencies. The motto in the Expo community is to take theese with a huge pile of salt. I.e. ignore them.

## Thanks to

Anki, the most used SRS app out there
Tinder, inspiration for my GUI
SuperMemo, the OG, inventor of the algoritm
