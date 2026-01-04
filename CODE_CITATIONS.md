# Code Citations & Attributions

This portfolio website incorporates various third-party resources, libraries, and design inspirations. All code, libraries, and assets are properly attributed below.

## 📚 External Libraries & Frameworks

### Bootstrap 4.6.0
- **License**: MIT License
- **Source**: https://getbootstrap.com/
- **Usage**: Responsive grid system, UI components, carousel functionality
- **Attribution**: Copyright (c) 2011-2025 The Bootstrap Authors

### jQuery 3.6.0
- **License**: MIT License
- **Source**: https://jquery.com/
- **Usage**: DOM manipulation, event handling, AJAX operations
- **Attribution**: Copyright jQuery Foundation and other contributors

### Google Fonts
- **Fonts Used**: Poppins, Open Sans
- **License**: Open Font License
- **Source**: https://fonts.google.com/
- **Usage**: Typography throughout the website

### Owl Carousel 2
- **License**: MIT License
- **Source**: https://owlcarousel2.github.io/OwlCarousel2/
- **Usage**: Module item carousel in MSc AI section
- **Attribution**: Copyright (c) 2013-2018 David Deutsch

## 🎨 Design Inspirations & Resources

### Color Palette
- **Primary Coral (#b97552)**: Custom selection for warm, professional branding
- **Background Warmth (#FBF7F2)**: Chosen for inviting, readable content areas
- **Text Charcoal (#2C3136)**: High contrast for accessibility

### Design Patterns
- **Card-based Layout**: Inspired by modern web design best practices
- **Carousel Interactions**: Based on common portfolio showcase patterns
- **Status Indicators**: Custom implementation of project state visualization

### Iconography
- **SVG Icons**: Custom-created and modified from open-source icon libraries
- **Social Media Icons**: Standard platform icons used for navigation
- **Navigation Icons**: Custom SVG implementations for carousel controls

## 🖼️ Images & Media

### Custom Character Illustrations
- **Artist**: Commissioned/created specifically for this portfolio
- **Usage**: Persona representations (Journalist, Data Guy, etc.)
- **Rights**: Exclusive usage rights for Islam Salahuddin's portfolio

### Project Screenshots
- **Source**: Original project work and implementations
- **Usage**: Portfolio project showcases
- **Rights**: Islam Salahuddin's project work

### External Platform Screenshots
- **LinkedIn**: Embedded professional updates (iframe implementation)
- **GitHub**: Repository screenshots and code examples
- **Behance**: Design project showcases
- **Tableau**: Dashboard screenshots (public views)

## 💻 Code Snippets & Implementations

### Carousel Functionality
- **Inspiration**: Various open-source carousel implementations
- **Customization**: Heavily modified for specific portfolio needs
- **Original Concepts**: Based on common 3D carousel patterns

#### Specific Code References
The carousel implementation incorporates techniques from several open-source projects:

**License: unknown**  
https://github.com/amin-tofa18/tofawebsite.github.io/tree/9baed2c15916a656c439cfcdacbacba0f7f26bdd/js/main.js
```javascript
items = document.querySelectorAll(".slider .item");
let active = 3;
function loadShow() {
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.
```

**License: unknown**  
https://github.com/GreeshmanthGolla/App-site/tree/a9ebdd93a1a87d58cc3b04d53b4af148d1d0010c/cover/app.js
```javascript
(var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }
```

**License: unknown**  
https://github.com/HoanghoDev/slidertab2/tree/651436c505327a80203dcb12c386797155f0ef60/app.js
```javascript
+) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i]
```

**License: MIT**  
https://github.com/Hawk7ye/code-multiverse/tree/68d8b1d1794b90d6fbd7371937c81ef4f0dc4e76/css/owl-carousel/owl-carousel.js
```javascript
(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "
```

**License: unknown**  
https://github.com/theonapoly/panda-project/tree/eb955bed95a51c6ca5c73d0a1f2d9eda99f89e47/index.js
```javascript
${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].
```

### Responsive Design Patterns
- **Source**: Mobile-first responsive design principles
- **Implementation**: Custom breakpoints and media queries
- **Best Practices**: Following WCAG accessibility guidelines

### Interactive Elements
- **Hover Effects**: Custom CSS transitions and animations
- **Status Pills**: Original implementation for project state tracking
- **Skill Chips**: Interactive skill visualization components

## 📖 Documentation & References

### Web Development Best Practices
- **MDN Web Docs**: https://developer.mozilla.org/
- **W3C Standards**: https://www.w3.org/standards/
- **Google Web Fundamentals**: https://developers.google.com/web/

### Accessibility Guidelines
- **WCAG 2.1**: Web Content Accessibility Guidelines
- **ARIA Practices**: Accessible Rich Internet Applications
- **Semantic HTML**: Proper use of HTML5 semantic elements

### Performance Optimization
- **Google PageSpeed Insights**: Performance guidelines
- **Web.dev**: Modern web performance best practices
- **Image Optimization**: WebP and responsive image techniques

## 🔗 External Services & APIs

### GitHub Pages
- **Service**: Static site hosting
- **Provider**: GitHub, Inc.
- **Usage**: Portfolio website deployment and CDN

### LinkedIn Embed API
- **Service**: Professional content embedding
- **Provider**: LinkedIn Corporation
- **Usage**: Recent professional updates section

### Google Fonts API
- **Service**: Web font delivery
- **Provider**: Google LLC
- **Usage**: Typography rendering across devices

## 📄 License Information

### Open Source Components
All open-source libraries used are compatible with the MIT License:

- **Bootstrap**: MIT License
- **jQuery**: MIT License
- **Owl Carousel**: MIT License

### Custom Code
- **Author**: Islam Salahuddin
- **License**: MIT License
- **Copyright**: © 2025 Islam Salahuddin

### Third-Party Content
- **Images**: Original work or properly licensed stock photos
- **Icons**: Custom created or from open-source icon libraries
- **Fonts**: Open Font License compliant fonts

## 🙏 Acknowledgments

### Inspiration & Learning
- **Online Communities**: Stack Overflow, GitHub Discussions
- **CodePen Community**: https://codepen.io/ - Amazing developers and creative code snippets that inspired many interactive elements
- **Tutorial Resources**: Various web development tutorials
- **Design Inspiration**: Dribbble, Behance, Awwwards

### Tools & Platforms
- **Development**: Visual Studio Code, GitHub Desktop
- **Design**: Figma, Adobe Creative Suite
- **Testing**: Browser DevTools, Responsive Design Tools

### Peer Review
- **Beta Testers**: Friends and colleagues who provided feedback
- **Accessibility Review**: Volunteers who tested for screen reader compatibility
- **Performance Review**: Community members who suggested optimizations

---

## 📝 Attribution Statement

This portfolio website is built upon the collective work of many open-source developers, designers, and community members. While the core concept, content, and most implementations are original work by Islam Salahuddin, we gratefully acknowledge the contributions of the broader web development community that makes such projects possible.

For specific questions about any code, design, or resource used in this portfolio, please contact: islamsalahuddin8@gmail.com