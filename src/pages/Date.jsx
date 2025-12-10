import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useConfig } from '@/hooks/useConfig'

export default function SaveTheDate() {
    const config = useConfig() // hook di level atas
    const [timeLeft, setTimeLeft] = useState({})

    // Countdown effect
    useEffect(() => {
        const calculateTimeLeft = () => {
            if (!config.date) return {}
            const difference = +new Date(config.date) - +new Date()
            if (difference > 0) {
                return {
                    hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    menit: Math.floor((difference / 1000 / 60) % 60),
                    detik: Math.floor((difference / 1000) % 60),
                }
            }
            return {}
        }

        setTimeLeft(calculateTimeLeft())
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
        return () => clearInterval(timer)
    }, [config.date])

    // Format tanggal untuk Google Calendar: YYYYMMDDTHHmmSSZ
    const formatDateForGoogleCalendar = (date) => {
        const d = new Date(date)
        const pad = (n) => n.toString().padStart(2, '0')
        return `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`
    }

    const googleCalendarUrl = config.date
        ? `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
              config.title || "Save the Date"
          )}&dates=${formatDateForGoogleCalendar(config.date)}/${formatDateForGoogleCalendar(
              config.date
          )}&details=${encodeURIComponent(config.description || "")}&location=${encodeURIComponent(
              config.location || ""
          )}&sf=true&output=xml`
        : "#"

    return (
        <section className="relative overflow-hidden">
            {/* Countdown */}
            <div className="flex justify-center space-x-4 mt-8">
                {Object.keys(timeLeft).map((interval) => (
                    <motion.div
                        key={interval}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-100"
                    >
                        <span className="text-xl sm:text-2xl font-bold text-rose-600">
                            {timeLeft[interval]}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{interval}</span>
                    </motion.div>
                ))}
            </div>

            {/* Save the Date Button */}
            <div className="flex justify-center mt-6">
                <motion.a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold shadow-lg hover:bg-rose-600 transition-colors"
                >
                    <Calendar className="w-6 h-6 mr-2" />
                    Save the Date
                </motion.a>
            </div>
        </section>
    )
}
