import * as React from 'react'
export const useClock = () => {
  const daysArray = React.useMemo(
    () => [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ],
    []
  )
  const [currentTime, setcurrentTime] = React.useState<string>('')
  const [currentDay, setcurrentDay] = React.useState<string>('')
  const [hour, sethour] = React.useState<string>('')
  const [minute, setminute] = React.useState<string>('')
  const [seconds, setseconds] = React.useState<string>('')
  const [term, setTerm] = React.useState<string>('am')
  const getCurrentTime = React.useCallback(() => {
    let Hour = new Date().getHours()
    let minutes = new Date().getMinutes().toString()
    let Seconds = new Date().getSeconds().toString()
    let am_pm = 'pm'

    if (parseInt(minutes) < 10) minutes = '0' + minutes
    if (parseInt(Seconds) < 10) Seconds = '0' + Seconds
    if (Hour > 12) Hour = Hour - 12
    if (Hour === 0) Hour = 12
    if (new Date().getHours() < 12) am_pm = 'am'

    setcurrentTime(Hour + ':' + minutes + ':' + Seconds + ' ' + am_pm)
    sethour(Hour.toString())
    setminute(minutes)
    setseconds(Seconds)
    setTerm(am_pm)

    daysArray.map((item, key) => {
      if (key === new Date().getDay()) {
        setcurrentDay(item.toUpperCase())
      }
    })
  }, [daysArray])

  React.useEffect(() => {
    const timer = setInterval(() => getCurrentTime(), 1000)
    return () => clearTimeout(timer)
  }, [getCurrentTime])

  return {
    currentTime,
    currentDay,
    hour,
    minute,
    seconds,
    term,
  }
}
