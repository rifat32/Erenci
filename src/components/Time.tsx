import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaClock} from "react-icons/fa"
import { dayjs } from 'lib/dayjs'

const now = () => dayjs().utcOffset(60)

const events = {
  christmas: [25, 12],
  newYear: [1, 1],
}

const format = 'hhA'
const beforeTime = dayjs('12AM', format).tz()
const afterTime = dayjs('8AM', format).tz()

const Time = () => {
  const [date, setDate] = useState(now())

  const currentEvent = Object.entries(events)
    .filter((entry) => entry[1][0] === date.date() && entry[1][1] === date.month() + 1)
    .flat()[0] as string

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p>
      {/* <FontAwesomeIcon
        className="mr-2"
        icon={date.isBetween(beforeTime, afterTime) ? ['far', 'snooze'] : ['far', 'clock']}
      /> */}
      {
date.isBetween(beforeTime, afterTime) ? (<FaClock style={{"display":"inline"}} className="mr-2"/>): (<FaClock style={{"display":"inline"}} className="mr-2"/>)}
      
      {date.format('Do MMMM YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span className="font-bold">
          —{' '}
          {
            {
              christmas: 'Merry Christmas!',
              newYear: 'Happy New Year!',
            }[currentEvent]
          }
        </span>
      )}
    </p>
  )
}

export default Time
