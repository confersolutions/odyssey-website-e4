"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/odyssey/navbar"
import { Footer } from "@/components/odyssey/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function BlogPage() {
  return (
    <main className="bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#2563EB] blur-[120px] opacity-25"
          animate={{ y: [0, -14, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl text-white">Blog</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">
              Insights, tutorials, and thought leadership from the Odyssey AI team and industry experts.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
                <Link href="/contact">Subscribe to Updates</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Featured Post
        </motion.h2>

        <div className="mt-8">
          <FeaturedPostCard {...featuredPost} />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Recent Posts
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">
          Latest insights on AI implementation, best practices, and industry trends.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.h2
          className="text-3xl font-bold md:text-4xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          Categories
        </motion.h2>
        <p className="mt-2 max-w-3xl text-slate-300">Explore content by topic and expertise area.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="rounded-2xl border-white/10 bg-gradient-to-r from-[#2563EB]/10 to-[#7C3AED]/10 p-8 backdrop-blur text-center">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Get the latest insights on AI, machine learning, and enterprise technology delivered to your inbox.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild className="bg-[#2563EB] hover:bg-[#1d4fd7]">
              <Link href="/contact">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              <Link href="/whitepapers">Read Whitepapers</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </main>
  )
}

const featuredPost = {
  title: "The Future of Autonomous AI Agents in Enterprise",
  excerpt:
    "Exploring how autonomous agents are transforming business operations, from customer service to complex decision-making processes. Learn about the key architectural patterns and implementation strategies.",
  author: "Dr. Sarah Chen",
  role: "Head of AI Research",
  date: "March 15, 2024",
  readTime: "12 min read",
  category: "AI Strategy",
  image: "/placeholder.svg?height=400&width=800",
  slug: "future-autonomous-ai-agents-enterprise",
}

const recentPosts = [
  {
    title: "Implementing MLOps at Scale: Lessons Learned",
    excerpt: "Key insights from deploying machine learning operations across multiple teams and environments.",
    author: "Michael Rodriguez",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Technical",
    image: "/placeholder.svg?height=200&width=400",
    slug: "implementing-mlops-at-scale",
  },
  {
    title: "AI Ethics in Practice: Building Responsible Systems",
    excerpt: "Practical approaches to implementing ethical AI principles in real-world applications.",
    author: "Dr. Emily Watson",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Ethics",
    image: "/placeholder.svg?height=200&width=400",
    slug: "ai-ethics-in-practice",
  },
  {
    title: "Measuring ROI of AI Initiatives",
    excerpt: "Framework for quantifying the business impact of artificial intelligence investments.",
    author: "James Park",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Business",
    image: "/placeholder.svg?height=200&width=400",
    slug: "measuring-roi-ai-initiatives",
  },
  {
    title: "Data Privacy in the Age of AI",
    excerpt: "Balancing innovation with privacy protection in modern AI systems.",
    author: "Lisa Thompson",
    date: "February 22, 2024",
    readTime: "9 min read",
    category: "Privacy",
    image: "/placeholder.svg?height=200&width=400",
    slug: "data-privacy-age-of-ai",
  },
  {
    title: "Scaling AI Across the Enterprise",
    excerpt: "Strategies for successful AI adoption beyond pilot projects.",
    author: "David Kim",
    date: "February 15, 2024",
    readTime: "11 min read",
    category: "Strategy",
    image: "/placeholder.svg?height=200&width=400",
    slug: "scaling-ai-across-enterprise",
  },
  {
    title: "The Evolution of Natural Language Processing",
    excerpt: "From rule-based systems to large language models: a technical journey.",
    author: "Dr. Alex Johnson",
    date: "February 8, 2024",
    readTime: "14 min read",
    category: "Technical",
    image: "/placeholder.svg?height=200&width=400",
    slug: "evolution-natural-language-processing",
  },
]

const categories = [
  {
    name: "AI Strategy",
    count: 24,
    description: "Strategic insights and implementation guidance",
    color: "#2563EB",
  },
  {
    name: "Technical Deep Dives",
    count: 18,
    description: "In-depth technical tutorials and architecture guides",
    color: "#10B981",
  },
  {
    name: "Industry Insights",
    count: 32,
    description: "Sector-specific AI applications and case studies",
    color: "#7C3AED",
  },
  {
    name: "Ethics & Governance",
    count: 12,
    description: "Responsible AI practices and compliance frameworks",
    color: "#F59E0B",
  },
]

function FeaturedPostCard({
  title,
  excerpt,
  author,
  role,
  date,
  readTime,
  category,
  image,
  slug,
}: {
  title: string
  excerpt: string
  author: string
  role: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute top-4 left-4 rounded-lg border border-white/10 bg-[#0F172A]/60 px-3 py-1 text-xs backdrop-blur">
              <span className="text-white/80">{category}</span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-slate-300 mb-6">{excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center text-[#2563EB] hover:underline font-medium"
            >
              Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function BlogPostCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug,
}: {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
    >
      <Card className="group h-full overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur transition">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute top-4 left-4 rounded-lg border border-white/10 bg-[#0F172A]/60 px-3 py-1 text-xs backdrop-blur">
            <span className="text-white/80">{category}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-sm text-[#2563EB] hover:underline group-hover:text-[#1d4fd7]"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

function CategoryCard({
  name,
  count,
  description,
  color,
}: { name: string; count: number; description: string; color: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <Card className="h-full rounded-2xl border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <Tag className="h-5 w-5" style={{ color }} />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
        <p className="text-sm text-slate-300 mb-3">{description}</p>
        <div className="text-sm font-medium" style={{ color }}>
          {count} articles
        </div>
      </Card>
    </motion.div>
  )
}
