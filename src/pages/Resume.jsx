import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Trophy, ChevronRight, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Resume() {
  const apScores = [
    "Research (5)", "Calculus AB (5)", "Computer Science A (5)", "Physics 1 (5)", 
    "Statistics (5)", "Biology (5)", "Chemistry (5)", "English Lang (5)", 
    "US History (5)", "Precalculus (5)", "World History (5)", "Human Geography (5)"
  ];

  const education = {
    school: "Carnegie Vanguard High School",
    location: "Houston, TX",
    period: "Aug 2022 - Jun 2026",
    stats: [
      { label: "WGPA", value: "4.93/4.0" },
      { label: "Rank", value: "1/194 (Valedictorian)" },
      { label: "ACT", value: "36/36" },
      { label: "PSAT", value: "1520/1520" }
    ]
  };

  const awards = [
    { title: "National Merit Semifinalist", year: "2025" },
    { title: "AP Capstone Diploma", year: "2025" },
    { title: "CITGO Scholar ($5000)", year: "2025" },
    { title: "Presidential Gold Service Award", year: "2024" },
    { title: "1st Place, Texas State Science Beta Club", year: "2024, 2025" },
    { title: "USA Biology Olympiad Semifinalist", year: "2025" },
    { title: "Scholastic Art & Writing Silver Key", year: "2025" }
  ];

  const technicalSkills = [
    "Python (PyTorch)", "R", "Java", "JavaScript", "HTML/CSS", 
    "Deep Learning", "Machine Learning", "Data Science", 
    "Mobile App Dev (iOS/Android)", "Healthcare AI"
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto print:bg-white print:py-0">
      
      <div className="flex justify-between items-center mb-12 print:hidden">
        <h1 className="text-4xl font-bold text-stone-900">Resume & Awards</h1>
        <Button variant="outline" className="gap-2 border-stone-300 hover:bg-stone-100" onClick={() => window.print()}>
          <Download className="w-4 h-4" /> Print / PDF
        </Button>
      </div>

      {/* Resume Container - Paper-like effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl border border-stone-200 p-8 md:p-16 rounded-xl"
      >
        {/* Header */}
        <header className="border-b-2 border-stone-900 pb-8 mb-8 text-center md:text-left md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 uppercase tracking-tight mb-2">Ramya Elangovan</h2>
            <p className="text-lg text-stone-600 font-medium">Researcher • Developer • Leader</p>
          </div>
          <div className="mt-4 md:mt-0 text-stone-500 text-sm text-right space-y-1">
            <p>ramyacvhs@gmail.com</p>
            <p>linkedin.com/in/airamya</p>
            <p>Houston, TX</p>
          </div>
        </header>

        <div className="space-y-12">
          
          {/* Education Section */}
          <section>
            <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-stone-200 pb-2">
              <GraduationCap className="w-5 h-5 text-amber-600" /> Education
            </h3>
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-bold text-stone-900">{education.school}</h4>
                <span className="text-stone-500 italic">{education.period}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 bg-amber-50 p-4 rounded-lg border border-amber-100">
                {education.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xs text-stone-500 uppercase font-bold">{stat.label}</div>
                    <div className="text-lg font-bold text-stone-900">{stat.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="font-bold text-stone-700 text-sm mb-2">Advanced Placement (AP) Scores - All 5/5:</div>
                <div className="flex flex-wrap gap-2">
                  {apScores.map((score, i) => (
                    <Badge key={i} variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200">
                      {score}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen className="w-5 h-5 text-amber-600" /> Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, i) => (
                <div key={i} className="px-3 py-1.5 bg-white border border-stone-300 rounded text-stone-700 font-medium text-sm shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section>
            <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Trophy className="w-5 h-5 text-amber-600" /> Selected Honors & Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {awards.map((award, i) => (
                <div key={i} className="flex items-start group">
                  <ChevronRight className="w-4 h-4 text-amber-500 mt-1 mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div className="flex-grow border-b border-stone-100 pb-2 border-dashed">
                    <span className="font-medium text-stone-800">{award.title}</span>
                    <span className="float-right text-stone-400 text-sm ml-2">{award.year}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 mt-4 italic text-right">
              *Recipient of 9 institutional awards for academic excellence across STEM and humanities.
            </p>
          </section>

          {/* Certifications & Courses */}
          <section>
             <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Award className="w-5 h-5 text-amber-600" /> Certifications & Advanced Courses
            </h3>
            <div className="space-y-2 text-sm text-stone-700">
              <div className="flex justify-between">
                 <span><strong>Basic Life Support (BLS) & CPR</strong>, American Heart Association</span>
                 <span className="text-stone-500">2023</span>
              </div>
              <div className="flex justify-between">
                 <span><strong>AI in Healthcare Capstone</strong>, Stanford University (Coursera)</span>
                 <span className="text-stone-500">2025</span>
              </div>
              <div className="flex justify-between">
                 <span><strong>Deep Learning Specialization</strong>, DeepLearning.AI</span>
                 <span className="text-stone-500">2024</span>
              </div>
            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
}