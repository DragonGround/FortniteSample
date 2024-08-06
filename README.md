[![Fortnite UI in Unity](https://i.vimeocdn.com/video/1911437473-ef054093a6a9c072ec52beffa9223b73173dc6f951383b8aa2ad637d71f4e9da-d "Fortnite UI in Unity")](https://vimeo.com/995357601)

Video Guide: https://vimeo.com/995357601

This sample code is meant for [OneJS](https://onejs.com) users. 

### Quick Start

* `npm install fortnite-sample`
* Setup `SampleCharacter` in scene
* Test the `<FortniteSample />` preact comp like below:

```tsx
import { h, render } from "preact"
import { FortniteSample } from "fortnite-sample"

const App = () => {
    return <FortniteSample />
}

render(<App />, document.body)
```