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

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Explanation</th>
    <th>Required</th>
    <th>Default Value</th>
  </td>
  <tr>
    <td><code>from</code></td>
    <td><code>number</code></td>
    <td>The initial value of counter.</td>
    <td>✅</td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>ms</code></td>
    <td><code>number</code></td>
    <td>The number of millisecond between.
      <br> 
      <code>1000</code>ms for 1 second.
    </td>
    <td>❌</td>
    <td><code>1000</code></td>
  </tr>
  <tr>
    <td><code>down</code></td>
     <td><code>boolean</code></td>
    <td>Counter value should decrease or increase.</td>
    <td>❌</td>
    <td><code>false</code></td>
  </tr>
</table>

<br>

The `useClock` hooks has the following returns values:


<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Explanation</th>
    <th>Parameters</th>
  </td>
  <tr>
    <td><code>counter</code></td>
    <td><code>number</code></td>
    <td>The initial value of counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>start</code></td>
    <td><code>function</code></td>
    <td>Start the counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>pause</code></td>
    <td><code>function</code></td>
    <td>Pause the counter.</td>
    <td></td>
  </tr>
  <tr>
    <td><code>reset</code></td>
    <td><code>function</code></td>
    <td>Reset the counter. There is an optional parameter to set the <code>from</code> value</td>
    <td><code>from</code>:<code>number</code> = the restart value of the counter.</td>
  </tr>
    <tr>
    <td><code>isRunning</code></td>
    <td><code>boolean</code></td>
    <td>Return <code>true</code> if the counter is running, <code>false</code> if not.</td>
    <td></td>
  </tr>
</table>


---


## License

MIT
