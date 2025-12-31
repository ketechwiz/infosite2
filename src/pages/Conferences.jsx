import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Conferences() {
  const conferences = [
    {
      id: 1,
      event: "ENDO2025, Endocrine Society",
      location: "San Francisco, CA",
      year: 2025,
      roles: ["Oral Presentation", "Poster Presentation", "Cover Story Feature"],
      title: "A Simple Mobile Artificial Intelligence Retina Tracker (SMART) Powered by Efficient Deep Learning Models for Diagnosis and Prognosis of Diabetic Retinopathy",
      highlight: "Profiled in Endocrine News (Sept 2025) Cover Story",
      color: "bg-blue-50 border-blue-100"
    },
    {
      id: 2,
      event: "IEEE International Symposium on Biomedical Imaging (ISBI)",
      location: "Houston, TX",
      year: 2025,
      roles: ["Poster Presentation", "Live Demo", "Grand Challenge Paper"],
      title: "Simple Mobile AI Retina Tracker: Redefining Eyecare and Healthcare",
      highlight: "Also presented OncoAI as a separate poster/demo",
      color: "bg-amber-50 border-amber-100"
    },
    {
      id: 3,
      event: "Symposium on Artificial Intelligence in Learning Health Systems (SAIL)",
      location: "Puerto Rico",
      year: 2025,
      roles: ["Abstract Accepted", "Poster Presentation"],
      title: "Eyes as Windows to Health: Integrating an Efficient, Generalizable AI Model into SMART",
      highlight: "Recipient of highly selective travel grant from Harvard Medical School",
      color: "bg-purple-50 border-purple-100"
    },
    {
      id: 4,
      event: "AI in Health Conference (AIHC)",
      location: "Rice University",
      year: 2025,
      roles: ["Invited Technical Speaker"],
      title: "Development and Application of Novel AI Models in Healthcare",
      highlight: "Delivered three technical talks",
      color: "bg-green-50 border-green-100"
    },
    {
      id: 5,
      event: "American College of Gastroenterology (ACG)",
      location: "International",
      year: 2025,
      roles: ["Presentation"],
      title: "Original Research Presentation",
      highlight: null,
      color: "bg-stone-50 border-stone-100"
    },
    {
      id: 6,
      event: "American Heart Association (AHA)",
      location: "Hypertension 2025",
      year: 2025,
      roles: ["Presentation"],
      title: "Original Research Presentation",
      highlight: null,
      color: "bg-red-50 border-red-100"
    }
  ];

  const publications = [
    {
      title: "Metastases of the Humerus - A Retrospective Review",
      journal: "Journal of Clinical and Biomedical Sciences",
      status: "Accepted, 2024",
      role: "Co-author"
    },
    {
      title: "Neuroendocrine Carcinoma of the Gallbladder",
      journal: "M.D. Anderson Cancer Center (Case Study)",
      status: "Published, 2024",
      role: "Co-author"
    },
    {
      title: "AP Research Project",
      journal: "Rice University Eureka Catalyst Research Journal",
      status: "Published, 2025",
      role: "Author"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200 px-4 py-1 text-sm">
          Global Impact
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Conferences & Publications</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Presenting original research at premier international scientific venues, from San Francisco to Puerto Rico.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Timeline Column */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-4">
            <Mic className="w-6 h-6 text-amber-600" /> Conference Presentations
          </h2>

          {conferences.map((conf, index) => (
            <motion.div
              key={conf.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-amber-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                <CardHeader className="pb-3 border-b border-stone-50 bg-stone-50/50 rounded-t-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900">{conf.event}</h3>
                      <div className="flex items-center gap-4 text-stone-500 text-sm mt-2 font-medium">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-amber-500" /> {conf.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-500" /> {conf.year}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {conf.roles.map((role, i) => (
                      <Badge key={i} variant="secondary" className="bg-amber-50 text-amber-800 hover:bg-amber-100 border-none px-3 py-1">
                        {role}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-stone-700 text-lg italic leading-relaxed mb-4">
                    "{conf.title}"
                  </p>
                  {conf.highlight && (
                    <div className="mt-4 flex items-center gap-2 text-amber-800 bg-amber-50/50 p-3 rounded-lg border border-amber-100 text-sm font-medium">
                      <Award className="w-4 h-4 flex-shrink-0 text-amber-600" />
                      {conf.highlight}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Column (Publications & Media) */}
        <div className="space-y-12">
          {/* Publications */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-4">
              <FileText className="w-6 h-6 text-amber-600" /> Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="bg-white border-stone-200 hover:border-amber-300 transition-colors">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-stone-900 mb-2 text-sm">{pub.title}</h4>
                    <p className="text-sm text-stone-500 italic mb-2">{pub.journal}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400">{pub.role}</span>
                      <span className="font-medium text-amber-600">{pub.status}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Media Impact</h3>
            <p className="text-stone-300 text-sm mb-6">
              Research featured in 20+ news outlets including USNews, Endocrine.org, and Consultant360.
            </p>
            <ul className="space-y-3">
               <li className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                 <span className="text-sm font-medium">Endocrine News Cover Story</span>
               </li>
               <li className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                 <span className="w-2 h-2 bg-blue-400 rounded-full" />
                 <span className="text-sm font-medium">US News Feature</span>
               </li>
               <li className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                 <span className="w-2 h-2 bg-purple-400 rounded-full" />
                 <span className="text-sm font-medium">Rice University Eureka Journal</span>
               </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold mb-3 text-amber-300">AIHC Video Presentations</h4>
              <div className="space-y-2">
                <a 
                  href="https://youtu.be/k5Jebw-6KNA?si=cBeEuJgxWQL8FsRk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-stone-300 hover:text-amber-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  COLAID Presentation
                </a>
                <a 
                  href="https://youtu.be/2VlbRA3BazQ?si=hBlIxcvrEV87wgMr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-stone-300 hover:text-amber-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  SMART Presentation
                </a>
              </div>
            </div>
          </div>

          {/* School News Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-stone-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              School News Features
            </h3>
            <p className="text-stone-600 text-sm mb-4">
              Featured in CVHS News for research excellence and innovation.
            </p>
            <div className="space-y-3">
              <a 
                href="https://cvhsnews.org/19770/features/a-vision-for-innovation-ramya-elangovan-and-rhea-morani-journey-to-research/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors border border-stone-100 hover:border-amber-200 group"
              >
                <p className="text-sm font-medium text-stone-800 group-hover:text-amber-800 leading-snug">
                  A vision for innovation: Ramya Elangovan and Rhea Morani journey to research
                </p>
                <span className="text-xs text-stone-400 mt-1 inline-block">CVHS News →</span>
              </a>
              <a 
                href="https://cvhsnews.org/21367/news/eight-cvhs-students-present-their-research-at-the-2024-2025-rice-eureka-mentorship-program/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors border border-stone-100 hover:border-amber-200 group"
              >
                <p className="text-sm font-medium text-stone-800 group-hover:text-amber-800 leading-snug">
                  Eight CVHS students present their research at the 2024-2025 Rice Eureka Mentorship Program
                </p>
                <span className="text-xs text-stone-400 mt-1 inline-block">CVHS News →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
