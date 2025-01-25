import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Nithin",
  lastName: "Reddy Manupati", 
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Engineer",
  avatar: "/images/avatar.jpg",
  location: "USA",
  locationDisplay: "Atlanta, GA",
  languages: ["English","Hindi", "Telugu"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data engineering, AI/ML, and share thoughts on the intersection of
      big data and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github", 
    link: "https://github.com/mhhnr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhhnr",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hardharanithin@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Data Engineer
      <br />
      <span style={{ fontSize: '0.75em' }}>AI & Big Data Specialist</span>
    </>
  ),
  subline: (
    <>
      I'm Nithin, a data engineer specializing in AI & Big Data at <InlineCode>Elsource Inc</InlineCode>, where I build
      <br /> scalable data solutions. After hours, I work on ML/AI projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.locationDisplay}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        3+ years of experience in fintech and healthcare industries as a Data Engineer, proficient with Big Data (Cloudera, HortonWorks, Databricks).
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Elsource Inc, Atlanta, GA",
        timeframe: "Jan 2024 - Present",
        role: "Data Engineer",
        achievements: [
          <>
            Designed scalable data pipelines using Apache Kafka and AWS Kinesis for real-time processing of medical data, 
            handling 100,000+ daily patient records while maintaining sub-second latency.
          </>,
          <>
            Architected and implemented a healthcare data processing system integrating clinical, genomic, and EMR data sources.
          </>,
          <>
            Designed and deployed a RAG system using Lang Chain and vector databases (Milvus, pgvector) for intelligent 
            medical document processing, improving clinical decision support accuracy by 40%.
          </>,
          <>
            Implemented fine-tuning pipelines for medical LLMs using PEFT and LoRA techniques, achieving 85% accuracy 
            on specialized healthcare tasks while reducing training time by 60%.
          </>,
          <>
            Developed an autonomous AI agent system using LangChain and CrewAI for automated medical research and 
            patient monitoring, reducing manual documentation time by 70%.
          </>,
          <>
            Created comprehensive data schemas and vector search capabilities for efficient processing of clinical, genomic, 
            and EMR data using PostgreSQL and specialized vector indexes.
          </>,
          <>
            Built robust ETL workflows using Airflow and AWS Glue for processing structured and unstructured medical data 
            ensuring HIPAA compliance.
          </>,
          <>
            Deployed the entire infrastructure on AWS using SageMaker, Bedrock, and Lambda, achieving 99.99% system availability.
          </>,
        ],
        images: [],
      },
      {
        company: "Previous Experience",
        timeframe: "2018 - 2024",
        role: "Data Engineer",
        achievements: [
          <>
            Implemented ML solutions using Spark Streaming, Kafka, Flume, Apache Airflow and
            developed real-time streaming solutions.
          </>,
          <>
            Hands-on experience in data migration between RDBMS, NoSQL, and Hadoop (Sqoop, Flume).
          </>,
          <>
            Built real-time data streaming solutions using Spark Streaming, Kafka, Flume, Apache Airflow.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "HULT, Boston",
        description: <>(Sept 2022 – Aug 2023)</>,
        details: <>Master of International Business, Specialisation in Business Analytics.</>,
      },
      {
        name: "Birla Institute of Technology and Science, Pilani, India",
        description: <>(May 2017 – May 2021)</>,
        details: <>Bachelor of Pharmacy</>,
      },
    ],
  },
  internship: {
    display: true,
    title: "Internship",
    experiences: [
      {
        name: "Microsoft - Enterprise Security Policy Management Platform",
        role: "Full Stack Engineer",
        timeframe: "Jan 2023 - Apr 2023",
        achievements: [
          "Architected and deployed a cloud-native security policy platform achieving sub-second latency for 90%+ policy transactions",
          "Built real-time policy streaming using Apache Spark Streaming and Kafka with GraphQL (Hasura backend, Houdini test coverage)",
          "Implemented multi-tenant authentication using OpenID Connect with RBAC and organization-based security",
          "Developed responsive UI and landing page with SvelteKit, TailwindCSS, and component libraries achieving 98% test coverage",
          "Containerized application using Docker and orchestrated with Turborepo for efficient monorepo management"
        ]
      }
    ]
  },
  aiProjects: {
    display: true,
    title: "AI Projects",
    projects: [
      {
        name: "AI Resume Parser",
        description: "a high-throughput resume parsing system processing 1000s of documents in minutes."
      },
      {
        name: "Valmiki",
        description: "Developed an agentic AI library management system using Lang Chain and vector databases."
      },
      {
        name: "GAP E-commerce + Target Shopping AI Assistant",
        description: "Built a voice-assisted AI agent MVP/POC for personalized and quick shopping experiences."
      }
    ]
  },
  publications: {
    display: true,
    title: "Publication",
    items: [
      {
        name: "Brain Computer Interface Drone",
        link: "Link",
        description: "Controlled a drone by thinking using Brain Computer Interface technology. 30+ cited my research paper, 500+ chapter downloads."
      }
    ]
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Big Data Technologies / Distribution",
        description: <>HortonWorks, Cloudera, Hadoop, Apache Spark, HDFS, MapReduce, Sqoop, Hive, Oozie, Zookeeper, Kafka, Flume, Databricks, Apache Airflow, Azure Data Factory</>,
      },
      {
        title: "AI Orchestration & Agents",
        description: <>AWS SageMaker, Bedrock, LangChain, LangGraph, LangFlow, CrewAI</>,
      },
      {
        title: "ML & NLP",
        description: <>BioBERT, Transformers (including domain-specific), LoRA, PEFT, Spark MLlib, GraphX, Decision Trees, Linear/Logistic Regression, Statistical Modeling</>,
      },
      {
        title: "Programming, Scripting, Python Packages",
        description: <>Scala, Python, SQL, T-SQL, Pandas, NumPy, SciPy, Matplotlib, Scikit-learn</>,
      },
      {
        title: "SQL Databases",
        description: <>MySQL, Oracle, MS-SQL Server, Teradata</>,
      },
      {
        title: "NoSQL Database",
        description: <>HBase, Cassandra, DynamoDB, MongoDB</>,
      },
      {
        title: "Graph",
        description: <>Nhost, Hasura GraphQL, Neo4j, Amazon Neptune, ArangoDB, TigerGraph, JanusGraph, Memgraph, Dgraph, and NebulaGraph</>,
      },
      {
        title: "ETL/Data Warehousing",
        description: <>Informatica, SSIS, Snowflake</>,
      },
      {
        title: "Cloud Computing",
        description: <>AWS (S3, RDS, Athena, Glue, Kinesis, Redshift, Lambda, ECS, EMR)</>,
      },
      {
        title: "Visualization Tools",
        description: <>Power BI, Tableau, Quicksight, Kibana</>,
      },
      {
        title: "DevOps & CI/CD",
        description: <>Turborepo, monorepo, Jenkins, Kubernetes, Rancher, GitHub Enterprise</>,
      },
      {
        title: "Certification",
        description: <>AWS Certified Data Engineer, GCP Certified Associate Cloud Engineer</>,
      }
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Writing about data engineering and AI...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Data Engineering and AI projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
