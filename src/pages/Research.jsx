import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Smartphone, Network, Users, Globe, ArrowRight, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const createPageUrl = (pageName) => {
  return pageName === 'Home' ? '/' : `/${pageName}`;
};

export default function Research() {
  return (
    <div className="bg-[#FDFCF8] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Innovation & <span className="text-amber-400">Research</span>
          </motion.h1>
          <p className="text-stone-300 text-xl max-w-2xl leading-relaxed">
            Bridging the gap between advanced artificial intelligence and accessible healthcare through novel mobile applications and deep learning architectures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-20">
        
        {/* OncoAI Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 group"
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-stone-50 p-10 flex flex-col justify-center border-r border-amber-100">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold mb-8 shadow-sm border border-stone-100 text-stone-800">
                O
              </div>
              <h2 className="text-3xl font-bold mb-4 text-stone-900">OncoAI</h2>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Universally accessible, computationally efficient AI for cancer diagnosis.
              </p>
              <a href="https://oncoai.org" target="_blank" rel="noreferrer">
                <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white shadow-md">
                  Visit Project Website <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="lg:col-span-3 p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b border-amber-100 pb-4">Project Overview</h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Engineered a computationally efficient deep learning model for the accurate detection of multiple cancers across diverse imaging modalities. This project addresses the critical need for accessible diagnostic tools in low-resource settings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-amber-50/50 p-5 rounded-xl">
                  <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Microscope className="text-amber-600 w-5 h-5" /> Key Innovation
                  </h4>
                  <p className="text-stone-600 text-sm">
                    Multi-platform AI application capable of processing medical imaging with high accuracy on standard mobile devices without requiring expensive GPU clusters.
                  </p>
                </div>
                <div className="bg-amber-50/50 p-5 rounded-xl">
                  <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Globe className="text-amber-600 w-5 h-5" /> Impact
                  </h4>
                  <p className="text-stone-600 text-sm">
                    Featured at ISBI 2025. Aims to democratize cancer screening by making it accessible to clinics in underserved regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SMART Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 group"
        >
          <div className="grid lg:grid-cols-5">
             <div className="lg:col-span-3 p-10 lg:p-12 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b border-amber-100 pb-4">Project Overview</h3>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Designed and built a mobile tool powered by a generalizable AI model to revolutionize the diagnosis and prognosis of ocular and systemic diseases using retinal imaging (Oculomics).
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-amber-50/50 p-5 rounded-xl">
                  <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Smartphone className="text-amber-600 w-5 h-5" /> Mobile-First Design
                  </h4>
                  <p className="text-stone-600 text-sm">
                    SMART (Simple Mobile AI Retina Tracker) brings sophisticated retinal analysis to smartphones, enabling point-of-care diagnostics.
                  </p>
                </div>
                <div className="bg-amber-50/50 p-5 rounded-xl">
                  <h4 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Award className="text-amber-600 w-5 h-5" /> Recognition
                  </h4>
                  <p className="text-stone-600 text-sm">
                    Harvard Medical School Travel Grant recipient. Profiled in Endocrine News cover story.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-amber-500 p-10 flex flex-col justify-center order-1 lg:order-2 text-white">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold mb-8 shadow-md text-amber-600">
                S
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">SMART / OculAI</h2>
              <p className="text-amber-100 mb-8 text-lg leading-relaxed">
                Simple Mobile AI Retina Tracker.
              </p>
              <a href="https://oculai.org" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-amber-600">
                  Visit Project Website <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Other Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8">
           <Card className="bg-white border border-amber-100 shadow-md hover:shadow-lg transition-all rounded-xl">
             <CardHeader className="pb-2">
               <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-3">
                 <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <Network className="w-6 h-6" />
                 </div>
                 AIMEDTalk
               </h3>
             </CardHeader>
             <CardContent>
               <p className="text-stone-600 mb-6 leading-relaxed">
                 Founder & Executive Director of the international symposium connecting medical professionals and researchers globally to champion innovation at the intersection of AI and medicine.
               </p>
               <div className="flex gap-2">
                 <Badge variant="secondary" className="bg-stone-100 text-stone-600">International</Badge>
                 <Badge variant="secondary" className="bg-stone-100 text-stone-600">Symposium</Badge>
               </div>
             </CardContent>
           </Card>

           <Card className="bg-white border border-amber-100 shadow-md hover:shadow-lg transition-all rounded-xl">
             <CardHeader className="pb-2">
               <h3 className="text-2xl font-bold text-stone-900 flex items-center gap-3">
                 <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                    <Users className="w-6 h-6" />
                 </div>
                 STAR Education
               </h3>
             </CardHeader>
             <CardContent>
               <p className="text-stone-600 mb-6 leading-relaxed">
                 Co-Founder & CEO. A global non-profit providing free, expert-led courses in STEM and test prep. Donated 162 computers to bridge the digital divide.
               </p>
               <div className="flex gap-2">
                 <Badge variant="secondary" className="bg-stone-100 text-stone-600">Non-Profit</Badge>
                 <Badge variant="secondary" className="bg-stone-100 text-stone-600">Education</Badge>
               </div>
             </CardContent>
           </Card>
        </div>

      </div>
    </div>
  );
}