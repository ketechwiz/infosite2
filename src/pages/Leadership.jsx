import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Code, Brain, Globe, Megaphone, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Leadership() {
  const roles = [
    {
      title: "Founder & Executive Director",
      org: "AIMEDTalk",
      period: "2023 - Present",
      desc: "Founded international symposium to connect medical professionals globally. Championing innovation at the intersection of AI and medicine.",
      icon: Globe,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "Co-Founder & CEO",
      org: "STAR Education",
      period: "2020 - Present",
      desc: "Leading a global non-profit providing free STEM courses. Organized donation of 162 computers to bridge digital divide. Managing volunteer network.",
      icon: Users,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "Youth Ambassador & Committee Chair",
      org: "City of Houston",
      period: "2024 - Present",
      desc: "Appointed by Mayor's Office. Spearheading Mental Health Committee initiatives and social media campaigns for youth wellness.",
      icon: Megaphone,
      color: "bg-stone-100 text-stone-700"
    },
    {
      title: "Founder - AI Committee",
      org: "Sigma Xi (Rice University Chapter)",
      period: "2024 - Present",
      desc: "Established first-ever AI committee to promote AI literacy and research collaboration in the honor society.",
      icon: Brain,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "Founder & President",
      org: "Girls Who Code @ CVHS",
      period: "2023 - Present",
      desc: "Organizing workshops and coding sessions to foster technical skills. Securing guest speakers to inspire students in CS.",
      icon: Code,
      color: "bg-stone-100 text-stone-700"
    },
    {
      title: "Schoolhouse Tutor",
      org: "Khan Academy / CollegeBoard",
      period: "2024 - Present",
      desc: "Provided 200+ hours of free tutoring in SAT Math and English to students in 16 countries.",
      icon: Heart,
      color: "bg-amber-100 text-amber-700"
    }
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Leadership & Service</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Empowering communities through education, technology, and advocacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-amber-100 bg-white hover:shadow-xl transition-all duration-300 rounded-xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${role.color} border border-amber-200/50`}>
                    <role.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-900 mb-1">{role.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-amber-700 font-medium text-sm">{role.org}</span>
                    <span className="text-stone-400 text-xs font-mono">{role.period}</span>
                  </div>
                  
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                    {role.desc}
                  </p>

                  <div className="pt-4 border-t border-stone-50">
                    <Badge variant="secondary" className="bg-stone-50 text-stone-600 border border-stone-100 text-xs">
                      Leadership
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* School Clubs Section */}
        <div className="mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">School Club Leadership</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Building communities of learning and innovation through student organizations.
            </p>
          </motion.div>
        
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">AI Club</h3>
                  <p className="text-xs text-stone-500">President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Leading discussions on cutting-edge AI research. Organizing workshops on ML fundamentals and ethical AI development.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Science Fair Club</h3>
                  <p className="text-xs text-stone-500">President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Mentoring students from hypothesis to presentation. Coordinating participation in regional and state competitions.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Girls Who Code</h3>
                  <p className="text-xs text-stone-500">Founder & President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Organizing coding workshops and sessions. Securing guest speakers to inspire the next generation of women in tech.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">HOSA</h3>
                  <p className="text-xs text-stone-500">President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Preparing members for healthcare careers through competitive events. Organizing community health initiatives and medical simulations.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Girl Up</h3>
                  <p className="text-xs text-stone-500">President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Championing gender equality through advocacy campaigns. Leading fundraising for global girls' education and health programs.
              </p>
            </motion.div>
        
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Biology Olympiad</h3>
                  <p className="text-xs text-stone-500">President</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Training students for USABO through intensive study sessions. Organizing lab workshops and guest lectures from researchers.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Additional Mentorship Section */}
        <div className="mt-20">
          <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-sm transform -rotate-2">
                  <Award className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="font-bold text-2xl text-stone-900 mb-2">Chess Coach</h3>
                  <p className="text-stone-600">Former National Chess Champion mentoring elementary students in competitive strategy.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Mentorship & Coaching</h2>
                <p className="text-stone-700 text-lg leading-relaxed mb-6">
                  Beyond organizational leadership, I am deeply committed to one-on-one mentorship. From coaching chess champions to guiding students through SAT prep, I believe in lifting others as we climb.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 p-4 rounded-xl">
                    <div className="font-bold text-2xl text-amber-700">2018-Present</div>
                    <div className="text-stone-600 text-sm">Paid Youth Chess Coach</div>
                  </div>
                  <div className="bg-white/60 p-4 rounded-xl">
                    <div className="font-bold text-2xl text-amber-700">National</div>
                    <div className="text-stone-600 text-sm">Honors & Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
