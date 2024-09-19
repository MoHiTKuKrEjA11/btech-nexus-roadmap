import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Dev = () => {
  const [activeBox, setActiveBox] = useState(null); // State to track the clicked box

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index); // Toggle the clicked box
  };

  // Array of steps for DevOps
  const steps = [
    {
      id: 1,
      title: 'Step 1: Learn the Basics of DevOps',
      imgSrc: "https://github.com/shadcn.png",
      description: `Understand the core principles of DevOps, including collaboration, automation, and continuous improvement. Learn about the DevOps lifecycle and how it integrates development and operations.`,
      resources: [
        'DevOps Lifecycle',
        'Collaboration and Communication',
        'Automation and Continuous Improvement',
      ],
    },
    {
      id: 2,
      title: 'Step 2: Learn Version Control Systems',
      imgSrc: "https://github.com/shadcn.png",
      description: `Master version control systems for tracking changes in code and collaborating with others.`,
      resources: [
        'Git',
        'GitHub or GitLab',
        'Basic Git Commands (init, clone, commit, push, pull, branch)',
      ],
    },
    {
      id: 3,
      title: 'Step 3: Understand Continuous Integration and Continuous Deployment (CI/CD)',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn about CI/CD pipelines and how they automate the process of integrating code changes and deploying applications.`,
      resources: [
        'Jenkins',
        'Travis CI',
        'CircleCI',
        'GitLab CI/CD',
      ],
    },
    {
      id: 4,
      title: 'Step 4: Learn Containerization and Orchestration',
      imgSrc: "https://github.com/shadcn.png",
      description: `Gain expertise in container technologies and orchestration tools.`,
      resources: [
        'Docker',
        'Kubernetes',
      ],
    },
    {
      id: 5,
      title: 'Step 5: Explore Infrastructure as Code (IaC)',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn how to manage and provision infrastructure using code.`,
      resources: [
        'Terraform',
        'Ansible',
        'Puppet',
        'Chef',
      ],
    },
    {
      id: 6,
      title: 'Step 6: Master Cloud Platforms',
      imgSrc: "https://github.com/shadcn.png",
      description: `Familiarize yourself with cloud service providers and their offerings.`,
      resources: [
        'AWS (Amazon Web Services)',
        'Azure',
        'Google Cloud Platform (GCP)',
      ],
    },
    {
      id: 7,
      title: 'Step 7: Learn Monitoring and Logging Tools',
      imgSrc: "https://github.com/shadcn.png",
      description: `Understand the importance of monitoring and logging for maintaining system health and performance.`,
      resources: [
        'Prometheus',
        'Grafana',
        'ELK Stack (Elasticsearch, Logstash, Kibana)',
        'Splunk',
      ],
    },
    {
      id: 8,
      title: 'Step 8: Gain Knowledge in Security Practices',
      imgSrc: "https://github.com/shadcn.png",
      description: `Learn about securing applications and infrastructure.`,
      resources: [
        'DevSecOps practices',
        'Security scanning tools',
        'Best practices for securing CI/CD pipelines',
      ],
    },
    {
      id: 9,
      title: 'Step 9: Learn Configuration Management Tools',
      imgSrc: "https://github.com/shadcn.png",
      description: `Understand configuration management and automation tools.`,
      resources: [
        'Ansible',
        'Puppet',
        'Chef',
      ],
    },
    {
      id: 10,
      title: 'Step 10: Work on Real-World Projects',
      imgSrc: "https://github.com/shadcn.png",
      description: `Apply your knowledge by working on real-world DevOps projects.`,
      resources: [
        'Set up a CI/CD pipeline for a small application using Jenkins or GitLab CI.',
        'Create a containerized application using Docker and manage it with Kubernetes.',
        'Develop infrastructure as code (IaC) scripts using Terraform or Ansible to deploy cloud resources.',
        'Implement monitoring and logging solutions for a production-like environment using Prometheus and Grafana.',
        'Collaborate with cross-functional teams to handle deployment, monitoring, and incident response.',
      ],
    },
  ];

  return (
    <div className="p-6 space-y-4">
      <div className="mb-4 text-lg">
        A DevOps engineer is a professional who integrates software development (Dev) and IT operations (Ops) to enhance the efficiency and effectiveness of both disciplines. The primary focus is to streamline and automate the processes involved in software delivery and infrastructure management.
      </div>

      <div className="mb-4 text-xl font-semibold">
        Steps to Become a DevOps Engineer:
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 gap-8 cursor-pointer sm:grid-cols-2 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => handleBoxClick(step.id)}
            className={`p-4 border border-gray-300 rounded-md bg-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-violet-100`}
          >
            <h2 className="text-lg font-bold">{step.title}</h2>

            {/* Avatar for image */}
            <Avatar className={`items-center justify-center m-auto w-[100px] h-[100px] transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-0 opacity-0' : 'max-h-screen opacity-100'}`}>
              <AvatarImage src={step.imgSrc} alt={`Step ${step.id}`} />
              <AvatarFallback>DE</AvatarFallback>
            </Avatar>

            {/* Additional content revealed when box is clicked */}
            <div className={`transition-all duration-300 ease-in-out ${activeBox === step.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              {activeBox === step.id && (
                <div>
                  <p>{step.description}</p>
                  {step.resources.length > 0 && (
                    <ul className="mt-2 ml-5 list-disc">
                      {step.resources.map((resource, index) => (
                        <li key={index} className="text-gray-600">
                          {resource}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 text-lg">
        With the knowledge and expertise you have gained, you are now ready to take on real-world DevOps challenges. Happy Learning and All the Best for Your Bright Future! 🚀
      </div>
    </div>
  );
};

export default Dev;
