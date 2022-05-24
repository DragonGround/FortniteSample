![Fortnite UI in Unity](/resources/res.jpg?raw=true "Fortnite UI in Unity")

This sample code is meant for [OneJS](https://onejs.com) users. It is based on a newer version that's still being prepared for the Asset Store. Request access to the private repo in our Discord if you'd like to try things early. 

Video Demo: https://vimeo.com/713229997

## Step-by-step Setup

* Extract this repo to /Addons/ForniteSample (under your project's persistenDataPath)
* Under root (your project's persistenDataPath), make a `index.tsx` file like below:

```ts
import { render, h } from "preact"
import FortniteSample from "FortniteSample"
import { update } from "tweenjs/tween"

render(<FortniteSample />, document.body)

function animate(time) {
    requestAnimationFrame(animate)
    update(time)
}
requestAnimationFrame(animate)
```

* Import the included `CharacterManager.cs` file into Unity and drag the MonoBehaviour onto a scene.
* Then include `CharacterManager` into the Objects list under ScriptEngine's INTEROP; name the map to `charman`
* Make sure Live Reload's entry script is set to `index.js`.
* Hit Play and you should be all set

_Everytime you checkout a new OneJS version (from the private repo or Asset Store), make sure you also update your ScriptLib folder. You can do so by deleting the old one, a new one will be automatically created upon running ScriptEngine. This step will be automated in the future._