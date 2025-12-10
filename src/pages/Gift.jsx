import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Gift() {
  const accounts = [
    { name: 'Luthfi ilyasa', bank: 'Bank ABC', number: '0083982541' },
    { name: 'Nida Paojan', bank: 'Bank XYZ', number: '7740888506' },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index, value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // reset setelah 2 detik
    });
  };

  return (
    <section id="wedding-gift" className="min-h-screen relative overflow-hidden bg-gray-50 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
          >
            Wedding Gift
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-md mx-auto"
          >
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Berikut Anda dapat memberikan kado secara cashless sebagai ungkapan tanda kasih.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <div className="h-[1px] w-12 bg-rose-200" />
            <div className="text-rose-400">
              <Heart className="w-4 h-4" fill="currentColor" />
            </div>
            <div className="h-[1px] w-12 bg-rose-200" />
          </motion.div>
        </motion.div>

        {/* Accounts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md mx-auto grid gap-6"
        >
          {accounts.map((acc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-700">{acc.name}</p>
                <p className="text-gray-500">{acc.bank}</p>
                <p className="text-gray-500">{acc.number}</p>
              </div>
              <button
                onClick={() => handleCopy(index, acc.number)}
                className={`px-4 py-2 rounded ${
                  copiedIndex === index ? 'bg-green-500 text-white' : 'bg-rose-200 text-rose-700'
                } transition-all duration-300`}
              >
                {copiedIndex === index ? 'Berhasil' : 'Copy'}
              </button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
