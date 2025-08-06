export default function ResumePage() {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Resume</h1>
        <p className="mb-4">
          Below is a brief overview of my qualifications. You can also download my full resume.
        </p>
        <a
          href="/Kalema_Rogers_Resume.pdf"
          target="_blank"
          className="text-blue-600 dark:text-blue-400 underline"
          download
        >
          Download Resume PDF ↗
        </a>
  
        <div className="mt-8 space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Education</h2>
            <p>BSc in Information Systems and Technology – Makerere University (2022–2025)</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <p>React, Next.js, Django, Node.js, PostgreSQL, MongoDB, UI/UX Design</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Work & Projects</h2>
            <p>See more on <a href="/projects" className="underline">Projects</a> page</p>
          </div>
        </div>
      </main>
    );
  }
  