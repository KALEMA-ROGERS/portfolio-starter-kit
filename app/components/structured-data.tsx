export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kalema Rogers",
    "jobTitle": "AI/ML Developer & Full Stack Engineer",
    "description": "AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment. Creating intelligent solutions for real-world problems.",
    "url": "https://kalemarogers.com",
    "image": "https://kalemarogers.com/DSC_3472.JPG",
    "sameAs": [
      "https://www.linkedin.com/in/kalema-rogers-a1b9302ba",
      "https://github.com/KALEMA-ROGERS",
      "https://lablab.ai/u/@Kalema_Rogers256"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "addressCountry": "Uganda"
    },
    "email": "rogerskalema0@gmail.com",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Chatbot Development",
      "RAG Systems",
      "AI Agents",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Django",
      "OpenAI",
      "LangChain",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "AWS",
      "Azure"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Makerere University",
      "description": "BSc in Information Systems and Technology"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance AI/ML Developer"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI/ML Developer",
      "description": "Developing AI-powered software and systems including chatbots, RAG pipelines, custom AI agents, and production ML deployments"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
