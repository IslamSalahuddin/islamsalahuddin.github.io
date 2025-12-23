# Context File for Portfolio Website Development

## Project Overview
You are tasked with expanding an existing portfolio website deployed on GitHub Pages. The website showcases a multifaceted professional profile combining MSc AI studies, data analytics, facilitation, creative writing, technical writing, and journalism experience.

## Critical Instructions - READ FIRST

### 1. Examine Existing Structure
**BEFORE writing any code**, you MUST:
- Read and analyze the existing `index.html` to understand the homepage structure and navigation
- Read `about.html` to understand the current about page format
- Read `msc-ai/msc-ai.html` to understand how subject pages are structured
- Read at least 2-3 unit pages (e.g., `msc-ai/ml/units/ml-unit1.html`) to understand the detail page format
- Thoroughly examine `styles.css` to understand:
  - Color schemes and typography
  - Layout patterns (grid, flexbox usage)
  - Component styling (cards, buttons, navigation)
  - Responsive breakpoints
  - Animation and transition patterns
- Review `main.js` to understand:
  - Any interactive features
  - Navigation behavior
  - Dynamic content loading
  - Event handlers

### 2. Design Consistency Requirements
- **STRICT RULE**: All new pages must match the visual design, layout patterns, and interaction patterns of existing pages
- Use ONLY existing CSS classes from `styles.css` wherever possible
- If new CSS is needed:
  - Follow the exact naming conventions used in the existing stylesheet
  - Match the color palette, spacing, and typography already established
  - Add comments explaining why new styles were necessary
  - Do NOT override or conflict with existing styles
- If new JavaScript is needed:
  - Follow the coding patterns in `main.js`
  - Use the same event handling approaches
  - Maintain consistency with existing interactive features
  - Add comments for any new functionality

### 3. File Structure for New Pages
All new pages should be created at the same directory level as `msc-ai.html` (root level):
```
├── data-guy.html
├── analytics-facilitator.html
├── creative-writer.html
├── technical-writer.html
├── xjournalist.html
└── about-me.html (replaces or updates existing about.html)
```

### 4. Navigation Bar Updates
**CRITICAL**: Update the navigation bar across ALL existing pages to include:
- A "Contact" button that opens email: `islamsalahuddin8@gmail.com`
- A "LinkedIn" button that links to: `https://www.linkedin.com/in/islamsalahuddin/`
- Ensure these additions match the existing navigation styling and behavior

### 5. Image Integration
You are encouraged to:
- Search the web for relevant professional images that match each page's theme
- Use placeholder images if needed, clearly marked for future replacement
- Store images in the `/images/` directory, creating subdirectories as needed (e.g., `/images/data-guy/`, `/images/writing/`)
- Ensure images match the aspect ratios and sizing used in existing pages
- Note: The toy character images already exist in `/images/toy-characters/` and may be referenced

## Page Requirements

### Page 1: data-guy.html
**Purpose**: Showcase data analytics and business intelligence career

**Content to include**:
- **Current Role**: Business Intelligence Engineer at PwC ETIC (hybrid, Cairo-based) since August 2025
  - Focus: Lead advisory for mergers and acquisitions
- **Previous Role**: 4 years at The KPI Institute (remote)
  - Roles: Data Analyst, Data Consultant, Data Analytics Facilitator
- **Core Strengths**: 
  - Data visualization
  - Information design
  - Storytelling (rooted in journalism background)
- **Technical Skills**: Advanced Excel, Tableau, Power BI, Python, PySpark, Databricks, Alteryx, Adobe Illustrator

**Design considerations**:
- Consider a timeline or career progression visualization
- Showcase technical skills with icons or visual elements
- Link to relevant toy character image: `data-guy.png`

### Page 2: analytics-facilitator.html
**Purpose**: Highlight facilitation and teaching work in data analytics

**Content to include**:
- **Training Experience at The KPI Institute**:
  - Delivered Certified Data Analysis Professional (C-DA)
  - Delivered Certified Data Visualization Professional (C-DV)
  - Custom data-related courses
  - Trained ~200 business professionals
  - Client organizations: Saudi Electricity Company (SEC), Ministry of Education (Saudi Arabia), Saudi Food and Drug Authority (SFDA), and others
- **YouTube Channel**: KafChi (Arabic data analysis content)
  - Link: https://www.youtube.com/@KafChi_AR
- **Webinar Example**: https://youtu.be/HFHdZgT2e2U?si=GSYF-wDRPWx5Nzfj
- **Call to Action**: Open to deliver webinars on data analysis/visualization
  - Contact: islamsalahuddin8@gmail.com
  - LinkedIn: https://www.linkedin.com/in/islamsalahuddin/

**Design considerations**:
- Embed or link to YouTube content
- Display client logos or names prominently
- Link to relevant toy character image: `facilitator.png`
- Include clear CTA for webinar inquiries

### Page 3: creative-writer.html
**Purpose**: Showcase creative writing work (Arabic language)

**Content to include**:
- **Published Books**:
  1. "زيارة متأخرة لجنينة الحيوانات" (Late Visit to the Zoo) - December 2023
     - Goodreads: https://www.goodreads.com/book/show/205044943
  2. "وردة حمراء في يد الموت" (Red Rose in Death Hands) - 2022 (two plays)
     - Goodreads: https://www.goodreads.com/book/show/69414436
- **YouTube Show**: "في الحضارة" (On Civilization) - Research & scriptwriting
  - Videos:
    - https://www.youtube.com/watch?v=HuLR4IRhDRM
    - https://www.youtube.com/watch?v=QcpXXlS0Bbg
    - https://www.youtube.com/watch?v=8nS0j_GRt6Q
    - https://www.youtube.com/watch?v=fwKWqxZUPWI
- **Social Media**:
  - Instagram: https://www.instagram.com/redroseindistanthands/
  - Blog: https://redroseindeathhands.wordpress.com/
- **Collaboration**: Open to requests via islamsalahuddin8@gmail.com

**Design considerations**:
- Display book covers (fetch from Goodreads or web)
- Embed or link to YouTube videos
- Consider a gallery or portfolio layout for written work
- Link to relevant toy character image: `creative-writer.png`

### Page 4: technical-writer.html
**Purpose**: Highlight technical and business writing portfolio

**Content to include**:
- **DataCamp Tutorials**:
  - "The Difference Between WHERE and HAVING in SQL"
  - "A Detailed Guide to Tableau Architecture: Desktop and Server"
  - "The Top 35 Statistics Interview Questions and Answers 2026"
  - (Search for actual URLs on datacamp.com)
- **The KPI Institute Articles** (Performance Magazine):
  - "Data-Ink Ratio: Minimalism in Data Visualization"
    - Link: https://www.performancemagazine.org/data-ink-ratio-minimalism-data-visualization/
  - (Search for other articles if available)

**Design considerations**:
- Use article cards or list format showing publication, title, and link
- Consider categorizing by publication (DataCamp vs Performance Magazine)
- Link to relevant toy character image: `technical-writer.png`
- Include snippets or excerpts if appropriate

### Page 5: xjournalist.html
**Purpose**: Document journalism background with focus on data-driven and interactive journalism

**Content to include**:
- **Shafaff News Network**: 1.5 years as reporter, editor, translator
  - LinkedIn: https://www.linkedin.com/company/shafaff-network
  - Note: Website closed, domain halted
- **Independent Publications**:
  - **Mada Masr**: https://www.madamasr.com/2019/07/26/feature/%D8%AB%D9%82%D8%A7%D9%81%D8%A9/%D9%85%D8%A7%D8%B0%D8%A7-%D9%8A%D8%B4%D8%A7%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%88%D9%86%D8%9F-%D8%B1%D8%AD%D9%84%D8%A9-%D8%A7%D9%84%D8%A8%D8%AD%D8%AB-%D8%B9%D9%86-%D8%A3%D9%83%D8%AB/
  - **Manshoor**: https://manshoor.com/society/egypt-squash-dominance-history/
- **Specialty**: Data-driven and interactive journalism

**Design considerations**:
- Timeline showing journalism career progression
- Article previews with images/thumbnails
- Link to relevant toy character image: `journalist.png`
- Emphasize the data-driven journalism angle

### Page 6: about-me.html
**Purpose**: Comprehensive summary page linking all aspects of the portfolio

**Content to include**:
- **Overview**: Synthesize all roles and experiences:
  - MSc AI Student
  - Business Intelligence Engineer
  - Data Analytics Facilitator
  - Creative Writer (Arabic)
  - Technical Writer
  - Former Journalist
- **Links to Other Portfolio Sections**:
  - MSc AI (existing: `msc-ai.html`)
  - Data Guy (`data-guy.html`)
  - Analytics Facilitator (`analytics-facilitator.html`)
  - Creative Writer (`creative-writer.html`)
  - Technical Writer (`technical-writer.html`)
  - Journalist (`xjournalist.html`)
- **Contact & Social Links**:
  - Email: islamsalahuddin8@gmail.com
  - LinkedIn: https://www.linkedin.com/in/islamsalahuddin/
  - GitHub: https://github.com/IslamSalahuddin
  - Behance: https://www.behance.net/islamsalahuddin1
  - YouTube: https://www.youtube.com/@KafChi_AR

**Design considerations**:
- Hero section with professional photo (search for appropriate placeholder)
- Grid or card layout linking to each portfolio section
- Prominent social media icons and contact buttons
- Consider using all toy character images as visual navigation
- This should feel like a "hub" connecting all other pages

## Technical Specifications

### HTML Requirements
- HTML5 semantic markup
- Proper meta tags for SEO
- Consistent navigation structure across all pages
- Accessible (ARIA labels where appropriate)
- Mobile-responsive structure

### CSS Requirements
- Use existing styles from `styles.css` as primary reference
- Any new styles must follow existing naming conventions
- Maintain existing color scheme, typography, spacing
- Ensure responsive design matches existing breakpoints
- Document any new CSS additions with comments

### JavaScript Requirements
- Use existing patterns from `main.js`
- Maintain consistent interaction patterns
- Add progressive enhancement, not dependencies
- Document any new functionality

### Asset Management
- Store images in organized subdirectories within `/images/`
- Use web-optimized image formats (WebP with fallbacks, or optimized PNG/JPG)
- Implement lazy loading for images if it aligns with existing patterns

## Development Workflow

1. **Analysis Phase**: Read all existing files thoroughly
2. **Planning Phase**: Map out how new pages will integrate with existing structure
3. **Development Phase**: Build pages one at a time, testing consistency
4. **Integration Phase**: Update navigation across ALL pages
5. **Review Phase**: Ensure visual and functional consistency

## Quality Checklist

Before considering the work complete, verify:
- [ ] All new pages match existing design language
- [ ] Navigation is consistent across ALL pages (including new contact/LinkedIn buttons)
- [ ] All links work correctly
- [ ] Mobile responsiveness matches existing pages
- [ ] CSS additions don't conflict with existing styles
- [ ] JavaScript additions follow existing patterns
- [ ] Images are properly optimized and stored
- [ ] All content from requirements is included
- [ ] Toy character images are appropriately linked
- [ ] Contact information is accurate and functional

## Notes
- The website is in English, but some content references (books, articles) are in Arabic - handle this appropriately with proper language tags
- Professional tone should be maintained while showing personality
- Emphasis on multidisciplinary nature of the portfolio
- The toy character naming scheme suggests a playful yet professional brand identity