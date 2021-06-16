import { useEffect, useState } from "react"

export const countdown = (timestamp) => {

    const now = Date.now()
    const nowRemaining = timestamp - now

    const getMonths = (remaining) => Math.floor(remaining / (1000 * 60 * 60 * 24 * 30) % 12)
    const getDays = (remaining) => Math.floor(remaining / (1000 * 60 * 60 * 24) % 30)
    const getHours = (remaining) => Math.floor((remaining / (1000 * 60 * 60 * 24)) % 24)
    const getMins = (remaining) => Math.floor((remaining / (1000 * 60)) % 60)
    const getSecs = (remaining) => Math.floor((remaining / 1000) % 60)

    const [months, setMonths] = useState(getMonths(nowRemaining))
    const [days, setDays] = useState(getDays(nowRemaining))
    const [hours, setHours] = useState(getHours(nowRemaining))
    const [mins, setMins] = useState(getMins(nowRemaining))
    const [secs, setSecs] = useState(getSecs(nowRemaining))

    useEffect(() => {
        setTimeout(() => {
            const now = Date.now()
            const remaining = timestamp - now
            setMonths(getMonths(remaining))
            setDays(getDays(remaining))
            setHours(getHours(remaining))
            setMins(getMins(remaining))
            setSecs(getSecs(remaining))
        }, 1000)
    }, [months, days, hours, mins, secs])

    if(nowRemaining < 0) {
        return {
            months: 0,
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0
        }
    }

    return {
        months,
        days,
        hours,
        mins,
        secs,
    }

}