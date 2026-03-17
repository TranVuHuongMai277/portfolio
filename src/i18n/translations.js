const BASE_URL = "/portfolio";

export const translations = {
  en: {
    nav: {
      logo: "Mai's Portfolio",
      links: {
        work: "Work",
        experience: "Experience",
        skills: "Skills",
        certifications: "Certifications",
      },
      contact: "Contact me",
    },
    hero: {
      badge: "Welcome to my portfolio",
      line1: "Building systems for",
      line2: "into Real Projects",
      line3: "that Deliver Results",
      description: "Tran Vu Huong Mai - Full-Stack Developer.",
      cta: "See My Work",
      words: [
        { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Stable", imgPath: BASE_URL + "/images/code.svg" },
        { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Growth", imgPath: BASE_URL + "/images/concepts.svg" },
        { text: "Scale", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Stable", imgPath: BASE_URL + "/images/code.svg" },
        { text: "Reliability", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Growth", imgPath: BASE_URL + "/images/growth.svg" },
      ],
    },
    counter: [
      { value: 50, suffix: "+", label: "Projects" },
      { value: 80, suffix: "+", label: "Users" },
      { value: 100, suffix: "+", label: "Security Patches" },
      { value: 90, suffix: "%", label: "Performance Improvements" },
    ],
    showcase: {
      project1: {
        title: "User Recommendation System",
        desc: "Built a scalable user recommendation system powered by automated data pipelines, transforming raw behavioral data into personalized predictions.",
      },
      project2: {
        title: "The Library Management Platform",
      },
      project3: {
        title: "YC Directory - A Startup Showcase App",
      },
    },
    experience: {
      sectionBadge: "My Career Overview",
      sectionTitle: "Work Experience",
      responsibilities: "Responsibilities",
      cards: [
        {
          title: "Backend Developer",
          date: "December 2025 - Present",
          review:
            "Mai brings sharp logical thinking and the ability to build robust backend systems to Rikkei Soft. In her role as a Backend Developer, she focuses on designing optimized system architectures, developing high-performance APIs, and ensuring absolute stability for complex services, enabling seamless business operations.",
          responsibilities: [
            "System Design & Maintenance: Design, develop, and maintain scalable backend APIs and services to ensure system stability, efficient client request handling, and seamless integration with third-party systems.",
            "Logic Optimization: Build and optimize server-side business logic to ensure data is processed accurately and securely while meeting application requirements and system performance standards.",
            "Cross-functional Collaboration: Partner with frontend, product, and operations teams to define system requirements, enhance service quality, and optimize application performance in production environments.",
          ],
        },
      ],
    },
    techStack: {
      sectionBadge: "What I Bring to the Table",
      sectionTitle: "How I Can Contribute & My Key Skills",
      icons: [
        { name: "Python" },
        { name: "NodeJs" },
        { name: "Java" },
        { name: "Advanced SQL" },
        { name: "ReactJs" },
      ],
    },
    certifications: {
      sectionBadge: "Qualifications",
      sectionTitle: "Certifications",
      obtained: "Obtained",
      items: [
        {
          title: "B2 APTIS Certificate",
          issuer: "British Council",
          date: "2025",
          description: "English Language Proficiency",
        },
        {
          title: "SQL Certificate - HackerRank",
          issuer: "Professional SQL Developer",
          date: "2025",
          description: "Database Management & Query Optimization",
        },
        // {
        //   title: "Power BI Certificate - IBEP",
        //   issuer: "Microsoft Power BI",
        //   date: "2024",
        //   description: "Data Visualization & Business Intelligence",
        // },
      ],
    },
    contact: {
      sectionBadge: "Have questions or ideas? Let's talk!",
      sectionTitle: "Get in Touch - Let's Connect",
      nameLabel: "Your name",
      namePlaceholder: "What's your name?",
      emailLabel: "Your Email",
      emailPlaceholder: "What's your email address?",
      messageLabel: "Your Message",
      messagePlaceholder: "Drop me a message.",
      send: "Send Message",
      sending: "Sending...",
    },
    footer: {
      rights: "",
    },
  },

  vi: {
    nav: {
      logo: "Portfolio Mai",
      links: {
        work: "Dự Án",
        experience: "Kinh Nghiệm",
        skills: "Kỹ Năng",
        certifications: "Chứng Chỉ",
      },
      contact: "Liên hệ",
    },
    hero: {
      badge: "Chào mừng đến với portfolio của tôi",
      line1: "Xây dựng hệ thống",
      line2: "đưa vào Thực Tế",
      line3: "mang lại Kết Quả Thực",
      description: "Trần Vũ Hương Mai - Lập trình viên Full-Stack.",
      cta: "Dự Án Của Tôi",
      words: [
        { text: "Mở Rộng", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Bền Vững", imgPath: BASE_URL + "/images/code.svg" },
        { text: "Ổn Định", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Tin cậy", imgPath: BASE_URL + "/images/concepts.svg" },
        { text: "Mở Rộng", imgPath: BASE_URL + "/images/ideas.svg" },
        { text: "Bền Vững", imgPath: BASE_URL + "/images/code.svg" },
        { text: "Ổn Định", imgPath: BASE_URL + "/images/reliability.png" },
        { text: "Tin cậy", imgPath: BASE_URL + "/images/concepts.svg" },
      ],
    },
    counter: [
      { value: 50, suffix: "+", label: "Dự Án" },
      { value: 20, suffix: "+", label: "Người Dùng" },
      { value: 100, suffix: "%", label: "Bảo Mật" },
      { value: 90, suffix: "%", label: "Hiệu Suất" },
    ],
    showcase: {
      project1: {
        title: "Hệ Thống Gợi Ý Người Dùng",
        desc: "Xây dựng hệ thống gợi ý người dùng có thể mở rộng, được hỗ trợ bởi các pipeline dữ liệu tự động, chuyển đổi dữ liệu hành vi thô thành các dự đoán cá nhân hóa.",
      },
      project2: {
        title: "Nền Tảng Quản Lý Thư Viện",
      },
      project3: {
        title: "YC Directory - Ứng Dụng Giới Thiệu Startup",
      },
    },
    experience: {
      sectionBadge: "Tổng Quan Sự Nghiệp",
      sectionTitle: "Kinh Nghiệm Làm Việc",
      responsibilities: "Trách Nhiệm",
      cards: [
        {
          title: "Lập trình viên Backend",
          date: "Tháng 12 năm 2025 - Hiện tại",
          review:
            "Mai mang đến Rikkei Soft tư duy logic sắc bén và khả năng xây dựng hệ thống Backend vững chắc. Với vai trò là Backend Developer, cô tập trung vào việc thiết kế kiến trúc hệ thống tối ưu, xây dựng các API hiệu suất cao và đảm bảo tính ổn định tuyệt đối cho các dịch vụ phức tạp, giúp doanh nghiệp vận hành mượt mà",
          responsibilities: [
            "Thiết kế, phát triển và duy trì các API và dịch vụ backend có khả năng mở rộng, đảm bảo hệ thống ổn định, xử lý hiệu quả các yêu cầu từ phía client và tích hợp với các hệ thống khác.",
            "Xây dựng và tối ưu hóa logic xử lý nghiệp vụ phía server, đảm bảo dữ liệu được xử lý chính xác, bảo mật và đáp ứng yêu cầu của ứng dụng cũng như hiệu suất hệ thống.",
            "Phối hợp với các nhóm frontend, sản phẩm và vận hành để xác định yêu cầu hệ thống, cải thiện chất lượng dịch vụ và tối ưu hiệu năng ứng dụng trong môi trường thực tế.",
          ],
        },
      ],
    },
    techStack: {
      sectionBadge: "Những Gì Tôi Mang Lại",
      sectionTitle: "Kỹ Năng Chính Của Tôi",
      icons: [
        { name: "Python" },
        { name: "NodeJs" },
        { name: "Java" },
        { name: "SQL Nâng Cao" },
        { name: "ReacJs" },
      ],
    },
    certifications: {
      sectionBadge: "Bằng Cấp & Chứng Chỉ",
      sectionTitle: "Chứng Chỉ",
      obtained: "Ngày cấp",
      items: [
        {
          title: "Chứng Chỉ APTIS B2",
          issuer: "Hội Đồng Anh",
          date: "2025",
          description: "Năng Lực Tiếng Anh",
        },
        {
          title: "Chứng Chỉ SQL - HackerRank",
          issuer: "Lập Trình Viên SQL Chuyên Nghiệp",
          date: "2025",
          description: "Quản Lý Cơ Sở Dữ Liệu & Tối Ưu Truy Vấn",
        },
      ],
    },
    contact: {
      sectionBadge: "Có câu hỏi hay ý tưởng? Hãy nói chuyện!",
      sectionTitle: "Liên Hệ - Hãy Kết Nối",
      nameLabel: "Tên của bạn",
      namePlaceholder: "Bạn tên gì?",
      emailLabel: "Email của bạn",
      emailPlaceholder: "Địa chỉ email của bạn?",
      messageLabel: "Tin nhắn",
      messagePlaceholder: "Để lại tin nhắn cho tôi.",
      send: "Gửi Tin Nhắn",
      sending: "Đang gửi...",
    },
    footer: {
      rights: "",
    },
  },
};
