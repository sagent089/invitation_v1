import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useConfig } from '@/hooks/useConfig';

export default function Bride() {
    const config = useConfig();
    return (
        <>
            <section 
                id="bride" 
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4 py-20 max-w-5xl w-full"
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-rose-500 font-medium mb-2"
                        >
                            Bismillahirrahmanirrahim
                        </motion.span>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 max-w-xl mx-auto text-lg"
                        >
                            Dengan memohon Ridho serta Rahmat Allah SWT,  
                            kami bermaksud menyelenggarakan acara pernikahan putra-putri kami
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center gap-4 mt-6"
                        >
                            <div className="h-[1px] w-12 bg-rose-200" />
                            <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
                            <div className="h-[1px] w-12 bg-rose-200" />
                        </motion.div>
                    </motion.div>

                    {/* Couple Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-md mx-auto flex flex-col items-center gap-6 text-center"
                    >
                        {/* Mempelai Pria */}
                        <div className="space-y-4">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="/images/luthfi.JPG"
                                    alt="Mempelai Pria"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-800">{config.groomName}</h3>
                            <p className="text-gray-600 text-sm">
                                Putra dari Bapak <b>H. Yayat Sudrajat</b><br />
                                & <br /> Ibu <b>(Alm.) Hj. Elly Muslihatna</b>
                            </p>
                        </div>

                        {/* Kata "dengan" */}
                        <div className="text-gray-600 font-semibold text-lg">dengan</div>

                        {/* Mempelai Wanita */}
                        <div className="space-y-4">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="/images/nida.JPG"
                                    alt="Mempelai Wanita"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-800">{config.brideName}</h3>
                            <p className="text-gray-600 text-sm">
                                Putri dari Bapak <b>Oman Tarmana</b><br />
                                & <br /> Ibu <b>Suminar</b>
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </section>
        </>
    )
}
