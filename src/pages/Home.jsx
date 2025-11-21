import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Brain, Activity, Users, Star, Award, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const createPageUrl = (pageName) => {
  return pageName === 'Home' ? '/' : `/${pageName}`;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-amber-500 text-amber-500" />
                National Merit Semifinalist & Class Valedictorian
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
                Revolutionizing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                  Healthcare with AI
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-stone-600 max-w-lg leading-relaxed">
                Hi, I'm Ramya Elangovan. A researcher, innovator, and leader dedicated to solving healthcare equity through artificial intelligence.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Research')}>
                  <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white rounded-full px-8 h-12 text-base">
                    View Research
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button variant="outline" size="lg" className="border-stone-300 text-stone-700 hover:bg-amber-50 rounded-full px-8 h-12 text-base">
                    Contact Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image / Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-stone-200">
                {/* Placeholder for user photo */}
                <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400">
                  <div className="text-center p-6">
                     <Users className="w-20 h-20 mx-auto mb-4 opacity-20" />
                     <p>Upload Photo Here</p>
                     <p className="text-xs mt-2">(Use find_replace to add &lt;img&gt;)</p>
                  </div>
                </div>
                
                {/* Floating Stats Cards */}

                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute bottom-20 -left-12 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-xl border border-amber-100 max-w-[240px]"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-full border border-amber-100">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-serif italic text-stone-800 leading-snug">
                        "Bridging the gap between technology and compassionate care."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prominent Stats Section (The "Ticker") */}
      <section className="py-12 bg-amber-500/5 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Class Rank", value: "1", suffix: "/194", icon: Trophy },
              { label: "AP Exams", value: "12", suffix: " (All 5s)", icon: Brain },
              { label: "Conferences", value: "6+", suffix: " Intl.", icon: Users },
              { label: "GPA", value: "4.93", suffix: "/4.0", icon: Activity },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-4 text-amber-600">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1">
                  {stat.value}<span className="text-lg text-stone-500 font-medium">{stat.suffix}</span>
                </div>
                <div className="text-sm text-stone-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-24 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Pioneering Research</h2>
              <p className="text-stone-600 max-w-2xl">
                Developing novel AI applications for medical diagnostics and healthcare equity.
              </p>
            </div>
            <Link to={createPageUrl('Research')} className="hidden md:flex items-center text-amber-700 hover:text-amber-800 font-medium">
              View All Research <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* OncoAI Card */}
            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <Card className="h-full bg-white border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-800 to-stone-600"></div>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-stone-50 border border-stone-100 rounded-xl flex items-center justify-center text-2xl font-bold text-stone-800 shadow-sm">
                      O
                    </div>
                    <a href="https://oncoai.org" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">OncoAI</h3>
                  <p className="text-stone-500 text-sm font-medium mb-4 uppercase tracking-wide">Universal Cancer Diagnosis</p>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                    Engineered a computationally efficient deep learning model for the accurate detection of multiple cancers across diverse imaging modalities. Featured at ISBI 2025.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="border-stone-200 text-stone-600 bg-stone-50">Deep Learning</Badge>
                    <Badge variant="outline" className="border-stone-200 text-stone-600 bg-stone-50">Oncology</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* SMART Card */}
            <motion.div whileHover={{ y: -5 }} className="group h-full">
              <Card className="h-full bg-white border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-2xl font-bold text-amber-600 shadow-sm">
                      S
                    </div>
                    <a href="https://oculai.org" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">SMART / OculAI</h3>
                  <p className="text-stone-500 text-sm font-medium mb-4 uppercase tracking-wide">Retina Tracker & Diagnostics</p>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                    Designed and built a mobile tool powered by a generalizable AI model to revolutionize the diagnosis of ocular and systemic diseases via retinal imaging.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="border-amber-100 text-amber-700 bg-amber-50">Oculomics</Badge>
                    <Badge variant="outline" className="border-amber-100 text-amber-700 bg-amber-50">Harvard Grant</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to={createPageUrl('Research')}>
              <Button variant="ghost" className="text-amber-700">
                View All Research <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Leadership Highlight */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Leadership & Impact</h2>
               <p className="text-lg text-stone-600 mb-8">
                 From founding international non-profits to advising the Mayor's office, I am committed to service and leadership that drives tangible change in the community.
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   "Founder & Executive Director of AIMEDTalk",
                   "City of Houston Youth Ambassador & Committee Chair",
                   "Co-Founder of STAR Education (160+ computers donated)",
                   "Founder of Sigma Xi AI Committee at Rice University"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start">
                     <div className="mt-1.5 mr-3 min-w-[20px]">
                       <div className="w-2 h-2 rounded-full bg-amber-500" />
                     </div>
                     <span className="text-stone-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
               <Link to={createPageUrl('Leadership')}>
                 <Button className="bg-stone-200 text-stone-900 hover:bg-amber-200 border border-stone-300 hover:border-amber-300">
                   Explore Leadership Roles
                 </Button>
               </Link>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 font-bold text-4xl mb-2">16+</div>
                    <div className="text-stone-600 text-sm">Countries Reached</div>
                  </div>
                  <div className="bg-amber-500 p-6 rounded-2xl shadow-lg text-white">
                    <div className="font-bold text-4xl mb-2">162</div>
                    <div className="text-amber-100 text-sm">Computers Donated</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-stone-800 p-6 rounded-2xl shadow-lg text-white">
                    <div className="font-bold text-4xl mb-2">200+</div>
                    <div className="text-stone-400 text-sm">Hours Tutoring</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                    <div className="text-amber-600 font-bold text-4xl mb-2">$5k</div>
                    <div className="text-stone-600 text-sm">CITGO Scholar</div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}