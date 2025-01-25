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
    link: "https://github.com/hardharanithin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hardharanithin",
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
        5+ years of experience in healthcare & fintech industries as a Data Engineer, proficient with Big Data (Cloudera, HortonWorks, Databricks).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Elsource Inc",
        timeframe: "Jan 2024 - Present",
        role: "Data Engineer",
        achievements: [
          <>
            Built and orchestrated AI agent systems using LangChain and CrewAI for data processing
            and analysis via AWS Lambda and ECS.
          </>,
          <>
            Designed a multi-modal vector storage solution with Milvus and PostgreSQL for enabling sub-second
            queries across millions of documents.
          </>,
          <>
            Strong background in OLAP/OLTP database architecture, data modeling (Star/Snowflake), and ETL/ELT frameworks.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
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
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Data Science",
        description: <>Studied Data Engineering and Machine Learning</>,
      },
      {
        name: "Big Data Certifications",
        description: <>Certified in Hadoop, Spark, and Cloud Technologies</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Big Data Technologies / Distribution",
        description: <>HortonWorks, Cloudera, Hadoop, Spark, HDFS, MapReduce, Sqoop, Hive, Oozie, Zookeeper, Kafka, Flume, Databricks, Apache Atlas, AWS Data Factory</>,
      },
      {
        title: "ML & NLP",
        description: <>PyTorch, Transformers, LangChain, OpenAI's GPT-3.5/4, BERT, MLlib, GraphX/SQL, Decision Trees, Linear/Logistic Regression, Statistical Modeling</>,
      },
      {
        title: "Cloud Computing",
        description: <>AWS (S3, RDS, Athena, Glue, Kinesis, Redshift, Lambda, GCS, EMR)</>,
      },
      {
        title: "Databases",
        description: <>MySQL, Oracle, MS-SQL Server, HBase, Cassandra, DynamoDB, MongoDB</>,
      },
    ],
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
