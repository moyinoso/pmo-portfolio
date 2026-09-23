// // ─────────────────────────────────────────────────────────────
// //  PROJECTS — question-led case files.
// //  Each project renders as a card on the homepage and a full
// //  case study at /work/[slug]. To add a project: drop images
// //  in /public/images/projects, add an entry below, done.
// //  Tools listed below are verified against the actual project
// //  files (notebooks, .pbix, .sql, .xlsx).
// // ─────────────────────────────────────────────────────────────

// export type ProjectImage = {
//   src: string;
//   caption: string;
//   w: number;
//   h: number;
// };

// export type Project = {
//   slug: string;
//   index: string;
//   title: string;
//   question: string;
//   context: string;
//   tools: string[];
//   investigation: string[];
//   learnings: string[];
//   cover: string;
//   images: ProjectImage[];
//   video?: { src: string; caption: string };
//   href: string | null;
// };

// export const projects: Project[] = [
//   {
//     slug: "pmos-apparel",
//     index: "01",
//     title: "PMO's Apparel Financial Performance Dashboard",
//     question: "Is the business actually making money and where, exactly, is the money coming from?",
//     context:
//       "A small apparel venture with its records scattered across sheets. The first job was turning records into one honest picture of performance.",
//     tools: ["Excel"],
//     investigation: [
//       "Consolidated revenue, expenses and profit into a single performance dashboard the records showed over \u20a62.19B in revenue against about \u20a61.10B in expenses, a 49.89% profit margin.",
//       "Broke the numbers down by product. One line the Zen T-Shirt led revenue with \u20a61.35B, a 61.79% share. A business that looks diverse at a glance turned out to have a clear engine.",
//       "Compared 2024 against 2025: profit rose 13.6% even though revenue fell 13% driven by a 14.2% reduction in expenses. Growth in profit without growth in sales is a different question entirely: is the business getting leaner, or just smaller?",
//       "Widened the lens with a companion report on the transaction data: revenue performance by month and quarter, regional performance across Benin City, Ibadan, Lagos and Port Harcourt, and customer cuts 1,099 active buyers across 3,000 transactions, spending split almost evenly across genders.",
//     ],
//     learnings: [
//       "Profit can rise while revenue falls the headline number never tells the whole story.",
//       "Product-level views change the conversation: over 60% of revenue rode on a single line.",
//       "Regional and customer cuts turn \u201chow are we doing?\u201d into \u201cwhat do we do next?\u201d",
//     ],
//     cover: "/images/projects/apparel-1.jpg",
//     images: [
//       { src: "/images/projects/apparel-1.jpg", caption: "Financial performance dashboard revenue, expenses and profit.", w: 1463, h: 564 },
//       { src: "/images/projects/apparel-2.jpg", caption: "Executive overview 2024 vs 2025 revenue performance.", w: 1800, h: 704 },
//       { src: "/images/projects/apparel-3.jpg", caption: "Product & customer insight what sells, and to whom.", w: 1800, h: 715 },
//       { src: "/images/projects/apparel-4.jpg", caption: "Regional performance Benin City, Ibadan, Lagos, Port Harcourt.", w: 1800, h: 776 }
//     ],
//     href: null,
//   },
//   {
//     slug: "zepto-retail",
//     index: "02",
//     title: "Zepto Retail Analytics",
//     question: "What does a quick-commerce catalogue of 3,729 products reveal about pricing, discounts and stock risk?",
//     context:
//       "Zepto's catalogue, read like a case: how products are priced, how heavily they're discounted, and how thinly stocked the shelves really are. Started in MySQL with cleaning and exploration, then built in Power BI.",
//     tools: ["SQL (MySQL)", "Power BI"],
//     investigation: [
//       "Did the unglamorous work first: cleaned and explored the raw catalogue data in MySQL before any visualisation fixing quality issues and mapping the structure (3,729 products, 14,947 units of inventory).",
//       "Turned to pricing: MRP against selling price, and the discount distribution category by category. The average discount of 7.62% looks modest until you see how unevenly it is applied.",
//       "Then the interesting part stock risk. 453 products were out of stock entirely, and 1,658 more were on low stock, with an average available quantity of just 4.01 per SKU. The low-stock list with the highest MRPs reads like a customer-complaint generator: cooking essentials, diapers, breakfast cereal.",
//     ],
//     learnings: [
//       "Stock risk concentrates in high-MRP essentials the items whose absence is hardest to explain.",
//       "An average discount is a summary, not a strategy; the distribution underneath is the story.",
//       "Analysis quality is decided in the cleaning step the dashboard only presents what the SQL already surfaced.",
//     ],
//     cover: "/images/projects/zepto-1.jpg",
//     images: [
//       { src: "/images/projects/zepto-1.jpg", caption: "Executive overview catalogue, pricing and stock health.", w: 1181, h: 667 },
//       { src: "/images/projects/zepto-2.jpg", caption: "Pricing & discounts MRP vs selling price across categories.", w: 1184, h: 661 },
//       { src: "/images/projects/zepto-3.jpg", caption: "Inventory & stock risk low-stock products with the highest MRP.", w: 1184, h: 664 }
//     ],
//     href: null,
//   },
//   {
//     slug: "customer-churn",
//     index: "03",
//     title: "Customer Churn Analysis",
//     question: "Can you see churn coming — and how early?",
//     context:
//       "A subscription customer base, split into those who left and those who stayed. The question was whether the difference was visible before the goodbye. Analysed end-to-end in a Jupyter notebook.",
//     tools: ["Python", "Pandas", "Plotly"],
//     investigation: [
//       "Compared churned and retained customers across contract type, subscription plan, satisfaction score, customer lifetime value and churn score every cut aimed at the same question: what did the ones who left have in common?",
//       "Contract structure told the sharpest story: monthly contracts churn far above annual ones (annual contracts sit near 8.3%). Flexibility, it turns out, cuts both ways.",
//       "The plan lens pointed the same way: the basic plan carried the highest churn rate the customers with the least invested in it were the most likely to have left.",
//       "Behaviour lined up with the scores: churned customers showed measurably lower satisfaction, lower lifetime value, and higher churn scores the warning signs were sitting in the data all along.",
//     ],
//     learnings: [
//       "Churn rarely comes out of nowhere the warning signs sit in the data, if anyone reads them.",
//       "The cheapest retention lever is probably not a discount it is contract and plan design. Worth testing, not assuming.",
//       "A churn score only matters if someone acts on it before the customer is gone.",
//     ],
//     cover: "/images/projects/churn-1.jpg",
//     images: [
//       { src: "/images/projects/churn-1.jpg", caption: "Contract type monthly contracts churn far above annual ones.", w: 1400, h: 1000 },
//       { src: "/images/projects/churn-2.jpg", caption: "Subscription plan the basic plan carries the highest churn rate.", w: 1400, h: 1000 },
//       { src: "/images/projects/churn-3.jpg", caption: "Churn score customers who left carried higher churn scores.", w: 1400, h: 1000 },
//       { src: "/images/projects/churn-4.jpg", caption: "Satisfaction churned customers show measurably lower CSAT.", w: 1400, h: 1000 },
//       { src: "/images/projects/churn-5.jpg", caption: "Customer lifetime value churned customers are worth less over time.", w: 1400, h: 1000 },
//       { src: "/images/projects/churn-6.jpg", caption: "Monthly churn trend the pattern over time.", w: 1400, h: 1000 }
//     ],
//     href: null,
//   },
//   {
//     slug: "health-risk",
//     index: "04",
//     title: "Health Risk Analysis",
//     question: "How do lifestyle choices compound into health risk as people age?",
//     context:
//       "A lifestyle and health dataset covering smoking, cholesterol and hypertension. Sensitive data handled less like a dashboard exercise, more like a responsibility.",
//     tools: ["Power BI"],
//     investigation: [
//       "Explored the risk profile of a patient population with an average age in the mid-fifties, segmenting health risk by age group and gender.",
//       "Traced the lifestyle threads: smoking status by gender, then smoking duration and daily intake alongside the recorded outcomes the heavier exposures visibly cluster in the higher-risk segments.",
//       "Layered cholesterol and hypertension risk across age groups to see where the conditions cluster and compound.",
//     ],
//     learnings: [
//       "Risk rarely has a single cause smoking, cholesterol and hypertension travel together.",
//       "Averages hide the vulnerable tail; segmenting by age band changed what the data seemed to say.",
//       "Health data demands humility patterns point to better questions, never to diagnoses.",
//     ],
//     cover: "/images/projects/health-1.jpg",
//     images: [
//       { src: "/images/projects/health-1.jpg", caption: "Lifestyle & health risk dashboard smoking, cholesterol, hypertension.", w: 1216, h: 658 },
//       { src: "/images/projects/health-2.jpg", caption: "Risk across age groups duration and daily intake.", w: 1229, h: 666 }
//     ],
//     video: {
//       src: "/video/health-walkthrough.mp4",
//       caption: "Full walkthrough of the Lifestyle & Health Risk dashboard.",
//     },
//     href: null,
//   },
//   {
//     slug: "hr-workforce",
//     index: "05",
//     title: "HR Workforce Analytics",
//     question: "Where does attrition actually come from and what does it cost?",
//     context:
//       "Two HR datasets, two lenses: a Power BI dashboard over a 1,470-employee attrition study, and an Excel-based workforce analysis of 311 employees spanning compensation and tenure.",
//     tools: ["Power BI", "Excel"],
//     investigation: [
//       "Started with the big picture: 1,470 employees, 237 attritions, a 16.12% attrition rate, average age 37. Then asked the only question that matters where is it concentrated?",
//       "Cut attrition by department, age band, education field, job satisfaction score and gender. The loss was not evenly spread; specific roles and satisfaction bands carried most of it.",
//       "Switched to the second dataset for the money lens: 311 employees, 207 active, a 33.4% attrition rate, median salary of $62,810 and a $21.47M payroll. Compensation views by department (Software Engineering median: $95,660), salary bands and tenure distribution completed the picture.",
//     ],
//     learnings: [
//       "Attrition concentrates a company rarely loses everyone; it loses specific rooms.",
//       "16.12% in one dataset and 33.4% in another taught me to ask \u201ccompared to what?\u201d before reacting to any single rate.",
//       "Retention looks like both a compensation story and a management story the data can at least show where to ask.",
//     ],
//     cover: "/images/projects/hr-1.jpg",
//     images: [
//       { src: "/images/projects/hr-1.jpg", caption: "HR analysis dashboard 1,470 employees, 237 attritions (16.12%).", w: 1192, h: 658 },
//       { src: "/images/projects/hr-2.jpg", caption: "Workforce overview 311 employees, 33.4% attrition, payroll exposure.", w: 1439, h: 615 },
//       { src: "/images/projects/hr-3.jpg", caption: "Attrition by department, age band and education field.", w: 1450, h: 637 },
//       { src: "/images/projects/hr-4.jpg", caption: "Compensation median salary by department and salary bands.", w: 1432, h: 631 },
//       { src: "/images/projects/hr-5.jpg", caption: "Performance & engagement lenses.", w: 1435, h: 605 },
//       { src: "/images/projects/hr-6.jpg", caption: "Insights pulling the attrition story together.", w: 1266, h: 597 }
//     ],
//     video: {
//       src: "/video/hr-walkthrough.mp4",
//       caption: "Full walkthrough of the Power BI HR analysis dashboard.",
//     },
//     href: null,
//   },
//   {
//     slug: "fifa-20",
//     index: "06",
//     title: "FIFA 20 Player Analysis",
//     question: "What do the numbers say about how FIFA values its players and where do they disagree with intuition?",
//     context:
//       "The game I already spent too much time on, turned into a dataset. Because the best way to understand a system is to take it apart.",
//     tools: ["Python", "Pandas", "Matplotlib"],
//     investigation: [
//       "Plotted overall rating against market value: a strong relationship with wide variance reputation is priced in, and the outliers are the argument.",
//       "Mapped the age curves: how the player pool distributes by age, and how overall rating moves by age group the prime-years arc, visible in the data.",
//       "Looked at the club and nationality lenses: FC Bayern M\u00fcnchen, Real Madrid and Juventus top average player rating; England, Germany and Spain supply the most players.",
//       "Finished with the most interesting cut the potential gap. The largest differences between current rating and hidden potential surface names like B. Mumba, B. McPherson and G. Bazunu: the buy-low list.",
//     ],
//     learnings: [
//       "A scatter plot of rating versus value is really an argument about what \u201coverrated\u201d means.",
//       "Potential gaps are more interesting than ratings they point forward, not backward.",
//       "The same dataset rewards two reading speeds: the highlight reel and the spreadsheet.",
//     ],
//     cover: "/images/projects/fifa-1.jpg",
//     images: [
//       { src: "/images/projects/fifa-1.jpg", caption: "Overall rating vs market value the scatter that starts every argument.", w: 1800, h: 990 },
//       { src: "/images/projects/fifa-2.jpg", caption: "Age distribution of players in the dataset.", w: 1800, h: 990 },
//       { src: "/images/projects/fifa-3.jpg", caption: "Overall rating by age group the prime-years curve.", w: 1800, h: 990 },
//       { src: "/images/projects/fifa-4.jpg", caption: "Top 10 players by potential gap the buy-low list.", w: 1800, h: 1072 },
//       { src: "/images/projects/fifa-5.jpg", caption: "Top 10 clubs by average player rating.", w: 1800, h: 1073 },
//       { src: "/images/projects/fifa-6.jpg", caption: "Top 10 nationalities by number of players.", w: 1800, h: 1072 }
//     ],
//     href: null,
//   },
// ];



// ─────────────────────────────────────────────────────────────
//  PROJECTS — question-led case files.
//  Each project renders as a card on the homepage and a full
//  case study at /work/[slug]. To add a project: drop images
//  in /public/images/projects, add an entry below, done.
//  Tools listed below are verified against the actual project
//  files (notebooks, .pbix, .sql, .xlsx).
// ─────────────────────────────────────────────────────────────

export type ProjectImage = {
  src: string;
  caption: string;
  w: number;
  h: number;
};

export type EvidenceGroup = {
  title: string;
  description: string;
  images: ProjectImage[];
  video?: { src: string; caption: string };
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  question: string;
  context: string;
  tools: string[];
  investigation: string[];
  learnings: string[];
  cover: string;
  images: ProjectImage[];
  video?: { src: string; caption: string };
  evidenceGroups?: EvidenceGroup[];
  href: string | null;
};

export const projects: Project[] = [
  {
    slug: "pmos-apparel",
    index: "01",
    title: "Retail Analytics",
    question: "Is the business actually making money and where, exactly, is the money coming from?",
    context:
      "Two retail lenses in one case: PMO's Apparel financial performance and a separate 3,000-transaction retail analysis covering sales, regions, products and customers.",
    tools: ["Excel"],
    investigation: [
      "Consolidated revenue, expenses and profit into a single performance dashboard the records showed over \u20a62.19B in revenue against about \u20a61.10B in expenses, a 49.89% profit margin.",
      "Broke the numbers down by product. One line the Zen T-Shirt led revenue with \u20a61.35B, a 61.79% share. A business that looks diverse at a glance turned out to have a clear engine.",
      "Compared 2024 against 2025: profit rose 13.6% even though revenue fell 13% driven by a 14.2% reduction in expenses. Growth in profit without growth in sales is a different question entirely: is the business getting leaner, or just smaller?",
      "Widened the lens with a separate retail transaction analysis: revenue performance by month and quarter, regional performance across Benin City, Ibadan, Lagos and Port Harcourt, and customer cuts across 1,099 active buyers and 3,000 transactions.",
    ],
    learnings: [
      "Profit can rise while revenue falls the headline number never tells the whole story.",
      "Product-level views change the conversation: over 60% of revenue rode on a single line.",
      "Regional and customer cuts turn \u201chow are we doing?\u201d into \u201cwhat do we do next?\u201d",
    ],
    cover: "/images/projects/apparel-1.jpg",
    images: [
      { src: "/images/projects/apparel-1.jpg", caption: "Financial performance dashboard revenue, expenses and profit.", w: 1463, h: 564 },
      { src: "/images/projects/apparel-2.jpg", caption: "Executive overview 2024 vs 2025 revenue performance.", w: 1800, h: 704 },
      { src: "/images/projects/apparel-3.jpg", caption: "Product & customer insight what sells, and to whom.", w: 1800, h: 715 },
      { src: "/images/projects/apparel-4.jpg", caption: "Regional performance Benin City, Ibadan, Lagos, Port Harcourt.", w: 1800, h: 776 }
    ],
    evidenceGroups: [
      {
        title: "PMO'S APPAREL — FINANCIAL PERFORMANCE",
        description: "The first dashboard focuses on revenue, expenses, profit, margin and product-level performance for the apparel business.",
        images: [
          { src: "/images/projects/apparel-1.jpg", caption: "Financial performance dashboard revenue, expenses and profit.", w: 1463, h: 564 }
        ]
      },
      {
        title: "RETAIL TRANSACTION ANALYTICS",
        description: "A separate retail dataset analysis covering executive performance, regional results, products and customers across 3,000 transactions.",
        images: [
          { src: "/images/projects/apparel-2.jpg", caption: "Executive overview 2024 vs 2025 revenue performance.", w: 1800, h: 704 },
          { src: "/images/projects/apparel-3.jpg", caption: "Product & customer insight what sells, and to whom.", w: 1800, h: 715 },
          { src: "/images/projects/apparel-4.jpg", caption: "Regional performance Benin City, Ibadan, Lagos, Port Harcourt.", w: 1800, h: 776 }
        ]
      }
    ],
    href: null,
  },
  {
    slug: "zepto-retail",
    index: "02",
    title: "Zepto Retail Analytics",
    question: "What does a quick-commerce catalogue of 3,729 products reveal about pricing, discounts and stock risk?",
    context:
      "Zepto's catalogue, read like a case: how products are priced, how heavily they're discounted, and how thinly stocked the shelves really are. Started in MySQL with cleaning and exploration, then built in Power BI.",
    tools: ["SQL (MySQL)", "Power BI"],
    investigation: [
      "Did the unglamorous work first: cleaned and explored the raw catalogue data in MySQL before any visualisation fixing quality issues and mapping the structure (3,729 products, 14,947 units of inventory).",
      "Turned to pricing: MRP against selling price, and the discount distribution category by category. The average discount of 7.62% looks modest until you see how unevenly it is applied.",
      "Then the interesting part stock risk. 453 products were out of stock entirely, and 1,658 more were on low stock, with an average available quantity of just 4.01 per SKU. The low-stock list with the highest MRPs reads like a customer-complaint generator: cooking essentials, diapers, breakfast cereal.",
    ],
    learnings: [
      "Stock risk concentrates in high-MRP essentials the items whose absence is hardest to explain.",
      "An average discount is a summary, not a strategy; the distribution underneath is the story.",
      "Analysis quality is decided in the cleaning step the dashboard only presents what the SQL already surfaced.",
    ],
    cover: "/images/projects/zepto-1.jpg",
    images: [
      { src: "/images/projects/zepto-1.jpg", caption: "Executive overview catalogue, pricing and stock health.", w: 1181, h: 667 },
      { src: "/images/projects/zepto-2.jpg", caption: "Pricing & discounts MRP vs selling price across categories.", w: 1184, h: 661 },
      { src: "/images/projects/zepto-3.jpg", caption: "Inventory & stock risk low-stock products with the highest MRP.", w: 1184, h: 664 }
    ],
    href: null,
  },
  {
    slug: "customer-churn",
    index: "03",
    title: "Customer Churn Analysis",
    question: "Can you see churn coming — and how early?",
    context:
      "A subscription customer base, split into those who left and those who stayed. The question was whether the difference was visible before the goodbye. Analysed end-to-end in a Jupyter notebook.",
    tools: ["Python", "Pandas", "Plotly"],
    investigation: [
      "Compared churned and retained customers across contract type, subscription plan, satisfaction score, customer lifetime value and churn score every cut aimed at the same question: what did the ones who left have in common?",
      "Contract structure told the sharpest story: monthly contracts churn far above annual ones (annual contracts sit near 8.3%). Flexibility, it turns out, cuts both ways.",
      "The plan lens pointed the same way: the basic plan carried the highest churn rate the customers with the least invested in it were the most likely to have left.",
      "Behaviour lined up with the scores: churned customers showed measurably lower satisfaction, lower lifetime value, and higher churn scores the warning signs were sitting in the data all along.",
    ],
    learnings: [
      "Churn rarely comes out of nowhere the warning signs sit in the data, if anyone reads them.",
      "The cheapest retention lever is probably not a discount it is contract and plan design. Worth testing, not assuming.",
      "A churn score only matters if someone acts on it before the customer is gone.",
    ],
    cover: "/images/projects/churn-1.jpg",
    images: [
      { src: "/images/projects/churn-1.jpg", caption: "Contract type monthly contracts churn far above annual ones.", w: 1400, h: 1000 },
      { src: "/images/projects/churn-2.jpg", caption: "Subscription plan the basic plan carries the highest churn rate.", w: 1400, h: 1000 },
      { src: "/images/projects/churn-3.jpg", caption: "Churn score customers who left carried higher churn scores.", w: 1400, h: 1000 },
      { src: "/images/projects/churn-4.jpg", caption: "Satisfaction churned customers show measurably lower CSAT.", w: 1400, h: 1000 },
      { src: "/images/projects/churn-5.jpg", caption: "Customer lifetime value churned customers are worth less over time.", w: 1400, h: 1000 },
      { src: "/images/projects/churn-6.jpg", caption: "Monthly churn trend the pattern over time.", w: 1400, h: 1000 }
    ],
    href: null,
  },
  {
    slug: "health-risk",
    index: "04",
    title: "Health Risk Analysis",
    question: "How do lifestyle choices compound into health risk as people age?",
    context:
      "A lifestyle and health dataset covering smoking, cholesterol and hypertension. Sensitive data handled less like a dashboard exercise, more like a responsibility.",
    tools: ["Power BI"],
    investigation: [
      "Explored the risk profile of a patient population with an average age in the mid-fifties, segmenting health risk by age group and gender.",
      "Traced the lifestyle threads: smoking status by gender, then smoking duration and daily intake alongside the recorded outcomes the heavier exposures visibly cluster in the higher-risk segments.",
      "Layered cholesterol and hypertension risk across age groups to see where the conditions cluster and compound.",
    ],
    learnings: [
      "Risk rarely has a single cause smoking, cholesterol and hypertension travel together.",
      "Averages hide the vulnerable tail; segmenting by age band changed what the data seemed to say.",
      "Health data demands humility patterns point to better questions, never to diagnoses.",
    ],
    cover: "/images/projects/health-1.jpg",
    images: [
      { src: "/images/projects/health-1.jpg", caption: "Lifestyle & health risk dashboard smoking, cholesterol, hypertension.", w: 1216, h: 658 },
      { src: "/images/projects/health-2.jpg", caption: "Risk across age groups duration and daily intake.", w: 1229, h: 666 }
    ],
    video: {
      src: "/video/health-walkthrough.mp4",
      caption: "Full walkthrough of the Lifestyle & Health Risk dashboard.",
    },
    href: null,
  },
  {
    slug: "hr-workforce",
    index: "05",
    title: "HR Workforce Analytics",
    question: "Where does attrition actually come from and what does it cost?",
    context:
      "Two HR datasets, two lenses: a Power BI dashboard over a 1,470-employee attrition study, and an Excel-based workforce analysis of 311 employees spanning compensation and tenure.",
    tools: ["Power BI", "Excel"],
    investigation: [
      "Started with the big picture: 1,470 employees, 237 attritions, a 16.12% attrition rate, average age 37. Then asked the only question that matters where is it concentrated?",
      "Cut attrition by department, age band, education field, job satisfaction score and gender. The loss was not evenly spread; specific roles and satisfaction bands carried most of it.",
      "Switched to the second dataset for the money lens: 311 employees, 207 active, a 33.4% attrition rate, median salary of $62,810 and a $21.47M payroll. Compensation views by department (Software Engineering median: $95,660), salary bands and tenure distribution completed the picture.",
    ],
    learnings: [
      "Attrition concentrates a company rarely loses everyone; it loses specific rooms.",
      "16.12% in one dataset and 33.4% in another taught me to ask \u201ccompared to what?\u201d before reacting to any single rate.",
      "Retention looks like both a compensation story and a management story the data can at least show where to ask.",
    ],
    cover: "/images/projects/hr-1.jpg",
    images: [
      { src: "/images/projects/hr-1.jpg", caption: "Power BI HR analysis dashboard 1,470 employees, 237 attritions (16.12%).", w: 1192, h: 658 },
      { src: "/images/projects/hr-2.jpg", caption: "Excel workforce overview 311 employees, 33.4% attrition, payroll exposure.", w: 1439, h: 615 },
      { src: "/images/projects/hr-3.jpg", caption: "Power BI attrition by department, age band and education field.", w: 1450, h: 637 },
      { src: "/images/projects/hr-4.jpg", caption: "Excel compensation median salary by department and salary bands.", w: 1432, h: 631 },
      { src: "/images/projects/hr-5.jpg", caption: "Excel performance & engagement lenses.", w: 1435, h: 605 },
      { src: "/images/projects/hr-6.jpg", caption: "Excel insights pulling the workforce story together.", w: 1266, h: 597 }
    ],
    evidenceGroups: [
      {
        title: "POWER BI — HR ATTRITION ANALYSIS",
        description: "A Power BI analysis of 1,470 employees focused on attrition, department, age, education, job satisfaction and gender.",
        images: [
          { src: "/images/projects/hr-1.jpg", caption: "Power BI HR analysis dashboard 1,470 employees, 237 attritions (16.12%).", w: 1192, h: 658 },
        ],
        video: {
          src: "/video/hr-walkthrough.mp4",
          caption: "Full walkthrough of the Power BI HR analysis dashboard.",
        }
      },
      {
        title: "EXCEL — HR WORKFORCE ANALYTICS",
        description: "A separate Excel workforce analysis of 311 employees covering headcount, attrition, compensation, tenure, performance and engagement.",
        images: [
          { src: "/images/projects/hr-2.jpg", caption: "Excel workforce overview 311 employees, 33.4% attrition, payroll exposure.", w: 1439, h: 615 },
          { src: "/images/projects/hr-3.jpg", caption: "Power BI attrition by department, tenure, position, exit reason and recruitment source.", w: 1450, h: 637 },
          { src: "/images/projects/hr-4.jpg", caption: "Excel compensation median salary by department and salary bands.", w: 1432, h: 631 },
          { src: "/images/projects/hr-5.jpg", caption: "Excel performance & engagement lenses.", w: 1435, h: 605 },
          { src: "/images/projects/hr-6.jpg", caption: "Excel insights pulling the workforce story together.", w: 1266, h: 597 }
        ]
      }
    ],
    video: {
      src: "/video/hr-walkthrough.mp4",
      caption: "Full walkthrough of the Power BI HR analysis dashboard.",
    },
    href: null,
  },
  {
    slug: "fifa-20",
    index: "06",
    title: "FIFA 20 Player Analysis",
    question: "What do the numbers say about how FIFA values its players and where do they disagree with intuition?",
    context:
      "The game I already spent too much time on, turned into a dataset. Because the best way to understand a system is to take it apart.",
    tools: ["Python", "Pandas", "Matplotlib"],
    investigation: [
      "Plotted overall rating against market value: a strong relationship with wide variance reputation is priced in, and the outliers are the argument.",
      "Mapped the age curves: how the player pool distributes by age, and how overall rating moves by age group the prime-years arc, visible in the data.",
      "Looked at the club and nationality lenses: FC Bayern M\u00fcnchen, Real Madrid and Juventus top average player rating; England, Germany and Spain supply the most players.",
      "Finished with the most interesting cut the potential gap. The largest differences between current rating and hidden potential surface names like B. Mumba, B. McPherson and G. Bazunu: the buy-low list.",
    ],
    learnings: [
      "A scatter plot of rating versus value is really an argument about what \u201coverrated\u201d means.",
      "Potential gaps are more interesting than ratings they point forward, not backward.",
      "The same dataset rewards two reading speeds: the highlight reel and the spreadsheet.",
    ],
    cover: "/images/projects/fifa-1.jpg",
    images: [
      { src: "/images/projects/fifa-1.jpg", caption: "Overall rating vs market value the scatter that starts every argument.", w: 1800, h: 990 },
      { src: "/images/projects/fifa-2.jpg", caption: "Age distribution of players in the dataset.", w: 1800, h: 990 },
      { src: "/images/projects/fifa-3.jpg", caption: "Overall rating by age group the prime-years curve.", w: 1800, h: 990 },
      { src: "/images/projects/fifa-4.jpg", caption: "Top 10 players by potential gap the buy-low list.", w: 1800, h: 1072 },
      { src: "/images/projects/fifa-5.jpg", caption: "Top 10 clubs by average player rating.", w: 1800, h: 1073 },
      { src: "/images/projects/fifa-6.jpg", caption: "Top 10 nationalities by number of players.", w: 1800, h: 1072 }
    ],
    href: null,
  },
];
