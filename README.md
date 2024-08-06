Branch `onejs-v2` contains the latest version, updated for OneJS V2.

![Fortnite UI in Unity](/resources/res.jpg?raw=true "Fortnite UI in Unity")

This sample code is meant for [OneJS](https://onejs.com) users. Video Demo: https://vimeo.com/713229997

## Step-by-step Setup

* Extract this repo to `{ProjectDir}/OneJS/ForniteSample`
* Open `{ProjectDir}/OneJS` with VSCode and run the `tsc: watch` task (Ctrl + Shift + B)
* In Unity, drag a ScriptEngine prefab onto the scene.
* Create an empty GameObject in scene and name it `charman`. Then, drag the included `CharacterManager.cs` onto it.
* Add `CharacterManager` to the Objects list under ScriptEngine's INTEROP; name it to `charman`. (Read the info box above the Objects list for tips on how to pick specific Objects)
* Set Live Reload's entry script to `FortniteSample/index.js`.
* Hit Play and you should be all set
