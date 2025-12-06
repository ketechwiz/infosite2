import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TedxShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white border-none px-4 py-1.5">
            <Youtube className="w-4 h-4 mr-2" />
            TEDx Speaker
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Eyes as the <span className="text-red-500">Windows to Health</span>
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            My journey from chess champion to AI innovator, inspired by my grandmother's preventable blindness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group-hover:border-amber-500/50 transition-all duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2LHeGrxdkZI"
                title="TEDx Talk: Eyes as the Windows to Health"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Talk Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-2">
                TEDX TALK
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">The Power of AI Oculomics</h3>
            </div>

            <p className="text-stone-300 leading-relaxed text-lg">
              In this talk, I share how my grandmother's preventable blindness inspired me to teach myself AI 
              and develop tools that detect eye disease and predict systemic illnesses like heart disease and 
              Alzheimer's years before symptoms appear. I explore how curiosity, resilience, and accessible 
              technology can transform medicine.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="font-bold text-amber-400 mb-3 text-sm uppercase tracking-wider">What You'll Learn</h4>
              <ul className="space-y-2 text-stone-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>How AI empowers doctors without replacing them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Why retinal imaging is the future of early disease detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Finding your own "why" to drive meaningful innovation</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://www.youtube.com/watch?v=2LHeGrxdkZI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white border-none shadow-xl hover:shadow-2xl transition-all"
              >
                <Youtube className="mr-2 w-5 h-5" />
                Watch on YouTube
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TedxShowcase;
