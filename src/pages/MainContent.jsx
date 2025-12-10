import Hero from '@/pages/Hero'
import Quran from '@/pages/Quran'
import Bride from '@/pages/Bride'
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';
import Gift from '@/pages/Gift';
import Date from '@/pages/Date';
import Events from '@/pages/Events'

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Quran />
            <Bride />
            <Date />
            <Events />
            <Location />
            <Gifts />
            <Wishes />
            <Gift />
        </>
    )
}