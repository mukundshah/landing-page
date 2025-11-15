<script setup lang="ts">
import PostPreview from '@/components/blog/PostPreview.vue'
import Card from '@/components/Card.vue'
import Label from '@/components/Label.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import Section from '@/components/Section.vue'
import SkillList from '@/components/SkillList.vue'

const skills = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Pandas', 'Numpy', 'Scikit', 'Streamlit', 'Django'],
  },
  {
    title: 'Databases',
    skills: ['MySQL'],
  },
]

const projects = [
  {
    title: 'MCQ Checker',
    description: 'Automatically evaluates MCQ answer sheets from scanned images using computer vision and language models.',
    tags: ['Flask', 'Open Cv', 'Pandas', 'Numpy'],
    link: 'https://github.com/Wricha/mcq_checker',
  },
  {
    title: 'RAG Chatbot',
    description: 'Memory-based RAG chatbot that provides context-aware answers from a custom knowledge base.',
    tags: ['LangChain', 'Pinecone', 'Gemma Model', 'Hugging Face Embedding'],
    link: 'https://github.com/Wricha/RAG-Chatbot',
  },
  {
    title: 'Invoice analysis Board',
    description: 'Extracts invoice data from documents and provides insights into spending patterns.',
    tags: ['FastAPI', 'Llamma Model', 'React', 'MongoDB'],
    link: 'https://github.com/Wricha/Document_analysis',
  },
  {
    title: 'Medimate',
    description: 'Mobile app for prescription recognition, medication scheduling, and reminders with pill dispenser integration.',
    tags: ['Django', 'React Native', 'Redis', 'Celery'],
    link: 'https://github.com/Wricha/pill_dispenser',
  },
  {
    title: 'Email Generator',
    description: 'Generates personalized emails based on user-provided topics with customizable types and length controls.',
    tags: ['Streamlit', 'Llamma model', 'Clarifai'],
    link: 'https://github.com/Wricha/Email_generator',
  },
  {
    title: 'Salary Analysis',
    description: 'Data analysis examining factors influencing data scientist salaries across regions and experience levels.',
    tags: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn'],
    link: 'https://github.com/Wricha/Salary-analysis',
  },
  {
    title: 'Kitablaya (Book E-commerce)',
    description: 'E-commerce platform for book sales with full CRUD operations and user-friendly interface.',
    tags: ['Java EE'],
    link: 'https://drive.google.com/drive/folders/1L14UsH_zo8qydqbOuVWnK6UL-zGY6DVK',
  },
  {
    title: 'News Recommendation System',
    description: 'Recommends news articles based on user preferences.',
    tags: ['Pandas', 'Scikit Learn', 'NLTK', 'Matplotlib', 'Seaborn'],
    link: 'https://colab.research.google.com/drive/191np9XgyrcjgEsY4dyp202EJj8dR9ZPz?usp=sharing',
  },
  {
    title: 'Handwritten text Recognition',
    description: 'Recognizes handwritten text using CNN, RNN, and CTC loss with TensorFlow.',
    tags: ['Tensorflow', 'CNN', 'RNN', 'Matplotlib', 'Numpy'],
    link: 'https://github.com/Wricha/handwrittenTextRecognition',
  },
  {
    title: 'House Price Prediction',
    description: 'Predicts house prices based on various features.',
    tags: ['Pandas', 'Scikit Learn', 'Numpy', 'Matplotlib', 'Seaborn'],
    link: 'https://colab.research.google.com/drive/1JHceuIKovzird52aKw19M4LocZgZgaVn?usp=sharing',
  },
  {
    title: 'Carbon Footprint Calculator',
    description: 'Calculates individual carbon footprints through questionnaires and provides personalized recommendations.',
    tags: ['LangChain', 'Streamlit', 'Clarifai'],
    link: 'https://github.com/AayeshaNakarmi/Squiward-AI-Crusade',
  },
]

const MAX_POSTS = 6

const { data: allPosts } = await useAsyncData(
  'posts:latest-6',
  async () => {
    let query = queryCollection('content')
      .select('path', 'title', 'date', 'externalLink', 'draft')
      .where('path', 'LIKE', '/blogs/%')

    if (!import.meta.dev) {
      query = query.where('draft', '<>', true)
    }

    return await query.order('date', 'DESC').limit(MAX_POSTS).all()
  },
)

useSeoMeta({
  title: 'Richa Singh',
})
</script>

<template>
  <div class="flex w-full flex-col gap-y-10">
    <section class="flex flex-col items-center gap-y-7">
      <img
        alt="profile photo"
        class="h-28 w-auto rounded-full bg-[#FFBE98] p-2"
        loading="eager"
        src="/images/me.webp"
      />

      <div class="flex flex-col items-center gap-y-4">
        <h1 class="text-3xl font-bold">
          Richa Singh
        </h1>

        <div class="flex flex-wrap justify-center gap-x-7 gap-y-3">
          <Label title="AI Engineer">
            <template #icon>
              <Icon class="text-xl" name="hugeicons:work" />
            </template>
          </Label>
          <Label title="Kathmandu, NP">
            <template #icon>
              <Icon class="text-xl" name="hugeicons:location-01" />
            </template>
          </Label>

          <Label
            as="a"
            href="mailto:wricharicha@gmail.com"
            target="_blank"
            title="Email"
          >
            <template #icon>
              <Icon class="text-xl" name="hugeicons:mail-01" />
            </template>
          </Label>

          <Label
            as="a"
            href="https://www.linkedin.com/in/wricha/"
            target="_blank"
            title="LinkedIn"
          >
            <template #icon>
              <Icon class="text-xl" name="hugeicons:linkedin-01" />
            </template>
          </Label>
        </div>
      </div>
    </section>

    <Section title="About">
      <p class="text-muted-foreground">
        AI Engineer at ChimpVine Global, building intelligent systems and AI applications. Currently pursuing a BSc (Hons) in Computing with AI, with experience in RAG chatbots, computer vision, and machine learning.
      </p>
    </Section>

    <Section
      v-if="allPosts && allPosts.length > 0"
      title="Posts"
    >
      <ul class="flex flex-col gap-y-2">
        <li
          v-for="p in allPosts"
          :key="p.path"
          class="flex flex-col gap-x-2 sm:flex-row"
        >
          <PostPreview :post="p" />
        </li>
      </ul>
    </Section>

    <Section title="Experience">
      <Card
        date="Jan 2025 - Present"
        heading="AI Engineer"
        subheading="ChimpVine Global"
      />
      <Card
        date="Jul 2024 - Feb 2025"
        heading="SWE Fellow"
        subheading="Headstarter"
      />
    </Section>

    <Section title="Education">
      <Card
        date="2022 - Present"
        heading="BSc (Hons) Computing with AI"
        subheading="Islington College, London Metropolitan University"
      />
    </Section>

    <Section title="Projects">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          class="w-full"
          :heading="project.title"
          :subheading="project.description"
          :to="project.link"
        >
          <div class="flex flex-wrap gap-2 px-5 pb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {{ tag }}
            </span>
          </div>
        </ProjectCard>
      </div>
    </Section>

    <Section title="Certifications">
      <Card
        as="a"
        class="transition-all hover:border-foreground/25 hover:shadow-sm"
        heading="AWS Academy Cloud Foundations"
        href="https://www.credly.com/badges/0715bb17-008c-420d-b6a7-84af015be890/linked_in?t=s1ux30"
        rel="noopener noreferrer"
        subheading="Comprehensive training in AWS fundamentals covering core services, security, architecture, and cloud computing concepts."
        target="_blank"
      />
      <Card
        as="a"
        class="transition-all hover:border-foreground/25 hover:shadow-sm"
        heading="Llama 2 Hackathon with Clarifai"
        href="https://lablab.ai/u/@wricharicha/clm8xtf60028fag143a869ocd"
        rel="noopener noreferrer"
        subheading="Participated in hackathon building AI applications using Meta's Llama 2 model with Clarifai's platform."
        target="_blank"
      />
    </Section>

    <Section title="Skills">
      <SkillList
        v-for="skill in skills"
        :key="skill.title"
        :skills="skill.skills"
        :title="skill.title"
      />
    </Section>
  </div>
</template>
