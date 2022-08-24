import * as React from 'react'

interface Props {
  startFrom?: number
  ms?: number
  type?: boolean
  isStopWatch: boolean
  EndcallBack: () => void
}
export const useTimer = ({
  startFrom = 0,
  ms = 1000,
  type = true,
  isStopWatch,
  EndcallBack,
}: Props) => {
  const [counter, setCounter] = React.useState(() => startFrom)
  const [isRunning, setIsRunning] = React.useState(false)
  const intervalId = React.useRef<any>()
  const start: () => void = () => setIsRunning(true)
  const pause: () => void = () => setIsRunning(false)
  const reset: (from?: number) => void = (from?: number) => {
    clearInterval(intervalId.current)
    setCounter(from ? from : startFrom)
  }

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      if (isStopWatch && counter === 0) {
        EndcallBack()
        return
      }
      isRunning && setCounter(!type ? counter - 1 : counter + 1)
    }, ms)
    return () => clearInterval(intervalId.current)
  }, [isRunning, counter, ms, type, isStopWatch])

  return { counter, start, pause, reset, isRunning }
}
