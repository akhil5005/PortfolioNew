"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Code,
  Trophy,
  User,
  Briefcase,
  MessageSquare,
  Star,
  Target,
  BookOpen,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "C", level: 80 },
      { name: "R", level: 75 },
      { name: "MATLAB", level: 70 },
    ],
    dataScience: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Matplotlib", level: 75 },
      { name: "Seaborn", level: 75 },
    ],
    webDev: [
      { name: "HTML/CSS", level: 85 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 60 },
    ],
    tools: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"],
  }

  const projects = [
    {
      title: "Stock Price Prediction Model",
      description:
        "Machine learning model using LSTM networks to predict stock prices with 85% accuracy. Implemented data preprocessing, feature engineering, and model evaluation.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/akhil5005",
      demo: null,
    },
    {
      title: "Competitive Programming Solutions",
      description:
        "Collection of optimized solutions for 300+ problems from CodeChef, LeetCode, and Codeforces. Includes detailed explanations and complexity analysis.",
      technologies: ["C++", "Python", "Algorithms", "Data Structures"],
      github: "https://github.com/akhil5005",
      demo: null,
    },
    {
      title: "EDA on E-commerce Dataset",
      description:
        "Comprehensive exploratory data analysis on customer behavior patterns. Generated actionable insights using statistical analysis and data visualization.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
      github: "https://github.com/akhil5005",
      demo: null,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio website built with modern web technologies. Features clean design, smooth animations, and optimized performance.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/akhil5005",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative container mx-auto px-4 py-20 lg:py-32">
    <div className="flex flex-col lg:flex-row items-center gap-12">
    
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-blue-200">Akhil Mittal</span>
        </h1>
        <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
          Third-year Computer Engineering student passionate about AI, ML, and competitive programming.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="https://github.com/akhil5005" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Link href="#contact">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>

      {/* Image Section with Thapar Logo */}
      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
          <Image
            src="C:\Users\VICTUS\Pictures\images.png" // 👈 your actual image file name placed in /public
            alt="Thapar Institute Logo"
            width={320}
            height={320}
            className="relative z-10 rounded-full border-4 border-white/20 object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <User className="inline-block mr-3 h-8 w-8 text-blue-600" />
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p>
                    I'm a passionate Third-year Computer Engineering student with a deep fascination for
                    <span className="font-semibold text-blue-600"> Artificial Intelligence</span> and
                    <span className="font-semibold text-blue-600"> Machine Learning</span>. My journey in technology
                    began with curiosity about how computers can learn and make decisions, leading me to explore various
                    aspects of data science and algorithm development.
                  </p>
                  <p>
                    My expertise spans across <span className="font-semibold">Exploratory Data Analysis (EDA)</span>,
                    where I enjoy uncovering hidden patterns in data and transforming raw information into actionable
                    insights. I'm also deeply involved in <span className="font-semibold">competitive programming</span>
                    , which has sharpened my problem-solving skills and algorithmic thinking.
                  </p>
                  <p>
                    When I'm not coding, you'll find me participating in hackathons, contributing to open-source
                    projects, or exploring the latest developments in AI research. I believe in continuous learning and
                    am always excited to take on new challenges that push the boundaries of what's possible with
                    technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <Code className="inline-block mr-3 h-8 w-8 text-blue-600" />
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.programming.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Data Science */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">Data Science</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.dataScience.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">Web Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.webDev.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600 text-center">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="px-4 py-2 text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section id="competitive-programming" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <Trophy className="inline-block mr-3 h-8 w-8 text-blue-600" />
              Competitive Programming
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">CodeChef</CardTitle>
                <CardDescription>2★ Rated Programmer</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-gray-800">150+</div>
                <p className="text-gray-600">Problems Solved</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://www.codechef.com/users/akhil5005" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-600">LeetCode</CardTitle>
                <CardDescription>Active Problem Solver</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-gray-800">150+</div>
                <p className="text-gray-600">Problems Solved</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://leetcode.com/u/akhil5005/" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Striver's Sheet</CardTitle>
                <CardDescription>DSA Mastery Journey</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-gray-800">~50%</div>
                <p className="text-gray-600">Completed</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://takeuforward.org/profile/akhil*5005" target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Progress
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <Briefcase className="inline-block mr-3 h-8 w-8 text-blue-600" />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <MessageSquare className="inline-block mr-3 h-8 w-8 text-blue-600" />
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+91 90956 90954</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">amittal2_be23@thapar.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Github className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <Link
                        href="https://github.com/akhil5005"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        github.com/akhil5005
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-600">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/akhil5005" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="#" target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://leetcode.com/u/akhil5005/" target="_blank">
                        <Code className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://www.codechef.com/users/akhil5005" target="_blank">
                        <Trophy className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-600">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            Built with ❤️ by <span className="text-blue-400 font-semibold">Akhil Mittal</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">© 2024 Akhil Mittal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
