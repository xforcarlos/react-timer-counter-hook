<p align="center">
  <a href="https://github.com/xforcarlos" aria-label="Follow Dawi on Github" target="_blank">
    <img alt="Github: xforcarlos" src="https://img.shields.io/github/followers/xforcarlos.svg?label=Follow&style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=24292e&logoWidth=20&color=lightgray" target="_blank" />
  </a>
</p>


## [Install](https://www.npmjs.com/package/react-timer-counter-hook)

```bash
npm install react-timer-counter-hook
```

## Import

```jsx
import { useClock, useTimer } from 'react-timer-counter-hook'
```

## Usage

```jsx
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, Button, TextStyle } from 'react-native'
import { useClock, useTimer } from 'react-timer-counter-hook'

const TIME: TextStyle = {
  fontSize: 20,
}

const Example = () => {
   const [fire, setFire] = useState(null)
  const { currentTime, currentDay, hour, minute, seconds, term } = useClock()

  const Oclock = () => (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={[TIME, { color: 'red' }]}>{currentTime}</Text>
      <Text style={TIME}>{currentDay}</Text>
      <Text style={TIME}>{hour}</Text>
      <Text style={TIME}>{minute}</Text>
      <Text style={[TIME, { color: 'red' }]}>{seconds}</Text>
      <Text style={TIME}>{term}</Text>
    </View>
  )

  const { counter, start, pause, reset, isRunning } = useTimer({
    startFrom: 5,
    type: false,
    isStopWatch: true,
    EndcallBack: () => setFire('boom'),
  })

  const Timer = () => (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 18, color: 'red' }}>
        Seconds: {counter}
      </Text>
      <Button
        onPress={() => {
          isRunning ? pause() : start()
        }}
        title={isRunning ? 'Pause' : 'Start'}
      />
      <Button onPress={() => reset()} title={'reset'} />
      {fire && (
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>
          Callback Fired 💥💥💥💥
        </Text>
      )}
    </View>
  )

  return (
    <ScrollView contentContainerStyle={{ marginTop: 100 }}>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Timer</Text>
      <Timer />
      <Oclock />
    </ScrollView>
  )
};
```


<br>

The `useClock` hooks has the following parameters:
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

---


## License

MIT
