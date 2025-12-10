import { motion } from 'framer-motion'
import { BookOpen, Heart } from 'lucide-react'

export default function Quran() {
    return (
        <section id="quran" className="relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 container mx-auto px-4 py-4"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 mt-6"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <div className="text-rose-400">
                            <Heart className="w-4 h-4" fill="currentColor" />
                        </div>
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Ayat */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-md text-center border border-rose-100"
                >
                    <BookOpen className="w-10 h-10 mx-auto text-rose-500 mb-4" />

                    <p className="font-arabic text-2xl md:text-2xl leading-loose text-gray-800 mb-6">
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا
                        إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ
                        لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
                    </p>

                    <p className="text-gray-600 italic max-w-prose mx-auto">
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
                        untukmu dari jenismu sendiri agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                        menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-
                        benar terdapat tanda-tanda bagi kaum yang berpikir.” (QS. Ar-Rum Ayat 21)
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
}
