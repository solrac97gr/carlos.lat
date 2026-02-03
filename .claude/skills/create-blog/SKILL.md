---
name: create-blog
description: Create a new blog post for carlos.lat in both English and Spanish with proper MDX structure, components, and formatting
---

# Blog Creation Skill for carlos.lat

You are a specialized agent for creating blog posts for the carlos.lat blog. This skill ensures all blog posts follow the project's structure, use the correct components, and maintain consistency across English and Spanish versions.

## Blog Post Requirements

### 1. File Structure

Blog posts must be created in both languages with **identical filenames**:

```
data/
├── en/
│   └── your-blog-slug.mdx
└── es/
    └── your-blog-slug.mdx
```

**Naming Convention:**
- Use kebab-case for filenames
- Keep names descriptive but concise
- Use the same slug for both languages

### 2. Frontmatter Structure

Every blog post must start with YAML frontmatter containing these required fields:

```yaml
---
title: "Your Blog Post Title"
date: "Month Day, Year"
published: "YYYY-MM-DD"
abstract: "A brief 1-2 sentence description of the blog post content"
image: "URL to header image"
tag: "Primary, Tags, Here"
author: "Carlos García"
---
```

**Field Guidelines:**
- `title`: Clear, engaging title (can include emoji if appropriate)
- `date`: Human-readable format like "February 03, 2026"
- `published`: ISO format YYYY-MM-DD
- `abstract`: Compelling summary for preview cards (2-3 lines max)
- `image`: Use existing images from Firebase Storage or reuse from other posts
- `tag`: Relevant categories separated by commas
- `author`: Always "Carlos García"

### 3. Standard Blog Header

After frontmatter, every blog post should start with:

```markdown
# Your Blog Post Title

<small>Month Day, Year</small>
<EditPost path="your-blog-slug" />

<img
  width="100%"
  alt="descriptive-alt-text"
  src="image-url-from-frontmatter"
  style={{borderRadius:"8px"}}
/>
```

**Important Notes:**
- Use the same title as in frontmatter
- `<EditPost path="">` must use the filename slug (without .mdx)
- Image alt text should be descriptive and relevant
- Always use `borderRadius:"8px"` for consistent styling

### 4. Available MDX Components

The blog uses custom React components. Use them appropriately:

#### BlogLink Component
For external links:

```jsx
<BlogLink
  url="https://example.com"
  content="Link text here"
/>
```

#### CodeSnippet Component
For code blocks with syntax highlighting:

```jsx
<CodeSnippet
  language="javascript"
  code={`
    const example = "code here";
    console.log(example);
  `}
/>

// With optional filename/route
<CodeSnippet
  language="go"
  route="main.go"
  code={`package main`}
/>
```

**Supported Languages:**
- `javascript`, `typescript`, `jsx`, `tsx`
- `go`, `python`, `rust`, `java`
- `bash`, `shell`, `sh`
- `json`, `yaml`, `toml`
- `sql`, `graphql`
- `html`, `css`, `scss`
- `markdown`, `mdx`
- `hcl` (for Terraform)

#### CodeComparition Component
For side-by-side code comparison:

```jsx
<CodeComparition
  languageL="javascript"
  languageR="typescript"
  left={`const bad = "example";`}
  rigth={`const good: string = "example";`}
/>
```

**Note:** The prop is `rigth` (not `right`) - this is a typo in the component but must be used as-is.

#### FolderStructure Component
For displaying file/folder trees:

```jsx
<FolderStructure
  repo="https://github.com/username/repo/"
  tree={[
    {
      type: "folder",
      name: "src",
      content: [
        {
          type: "file",
          name: "index.ts",
        },
        {
          type: "folder",
          name: "components",
          content: [
            {
              type: "file",
              name: "Header.tsx",
            },
          ],
        },
      ],
    },
  ]}
/>
```

### 5. Image Guidelines

**Finding Images:**
- Check existing blog posts for reusable images
- Images are hosted on Firebase Storage
- Common pattern: `https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/images%2F[imagename].jpg?alt=media&token=[token]`

**When to Reuse:**
- Technical topics can share relevant images
- Abstract/conceptual images (code, architecture, AI) are reusable
- Don't create new images - always reuse existing ones

**Image Examples from Existing Posts:**
- AI/Development: `https://miro.medium.com/max/1400/0*EODEF6xTWVm5hv-3`
- Infrastructure: `https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/images%2F4482746.jpg?alt=media&token=510dd66e-15af-4292-b84d-795a267155c4`

### 6. Content Structure Best Practices

**Recommended Blog Structure:**

1. **Introduction** (2-3 paragraphs)
   - Hook the reader
   - Explain what the post covers
   - Why it's valuable

2. **Main Sections** (use H2 `##`)
   - Break content into logical sections
   - Each section should have a clear purpose
   - Use subsections (H3 `###`) when needed

3. **Code Examples**
   - Always use `<CodeSnippet>` component
   - Include comments for clarity
   - Provide context before and after code

4. **Visual Elements**
   - Use `<CodeComparition>` for before/after
   - Use `<FolderStructure>` for project layouts
   - Break up long text sections with visuals

5. **Conclusion**
   - Summarize key takeaways
   - Call to action (visit GitHub, follow, etc.)
   - Always end with horizontal rule `---`

6. **Footer**
   - Thank the reader
   - Include relevant `<BlogLink>` to GitHub/projects

### 7. Bilingual Requirements

**Content Parity:**
- English and Spanish versions must cover the same content
- Translate all text, including code comments where appropriate
- Use equivalent technical terms in both languages

**Code Blocks:**
- Code itself stays the same
- Comments in code should be translated
- Variable names can stay in English (programming convention)

**Examples:**

English:
```jsx
<CodeSnippet language="bash" code={`# Initialize a new project
npm init -y`} />
```

Spanish:
```jsx
<CodeSnippet language="bash" code={`# Inicializa un nuevo proyecto
npm init -y`} />
```

### 8. Writing Style Guidelines

**Tone:**
- Professional but conversational
- Use first person ("I", "my", "let me show you")
- Be enthusiastic but not over-the-top
- Explain concepts clearly for intermediate developers

**Technical Depth:**
- Assume readers have basic programming knowledge
- Explain advanced concepts with examples
- Provide context for architectural decisions
- Include "why" not just "how"

**Emoji Usage:**
- Use sparingly in titles and section headers
- Common patterns: 🚀 (features), 💡 (tips), 🔧 (tools), 🎯 (goals)
- Don't overuse - maintain professional tone

### 9. SEO and Metadata

**Title Best Practices:**
- Include primary keyword
- Keep under 60 characters when possible
- Make it compelling and clear

**Abstract Best Practices:**
- Include main keywords
- Summarize the value proposition
- Keep under 160 characters for search preview

**Tags:**
- Use relevant, searchable terms
- Mix broad and specific tags
- Examples: "Go, Backend, Architecture", "React, Frontend, Performance"

## Workflow for Creating a Blog Post

### Step 1: Understand the Topic
- Research the subject thoroughly
- Review official documentation links provided
- Check existing blog posts for style reference

### Step 2: Plan the Structure
- Outline main sections
- Identify code examples needed
- Determine which components to use

### Step 3: Find Appropriate Image
- Search existing blog posts for reusable images
- Pick image that matches the topic theme
- Never create new images - always reuse

### Step 4: Write English Version
- Create file in `data/en/`
- Write complete content with all components
- Include all code examples and explanations

### Step 5: Write Spanish Version
- Create matching file in `data/es/`
- Translate all content maintaining structure
- Ensure code comments are translated
- Keep technical terms consistent

### Step 6: Review Checklist
- [ ] Both files have identical filenames
- [ ] Frontmatter is complete and correct
- [ ] Standard header format is used
- [ ] All code uses `<CodeSnippet>` component
- [ ] Images are reused from existing posts
- [ ] External links use `<BlogLink>` component
- [ ] Content is equivalent in both languages
- [ ] Technical accuracy is verified
- [ ] File paths reference real documentation
- [ ] Conclusion and footer are included

## Common Patterns and Examples

### Pattern 1: Technical Tutorial Blog

```markdown
---
title: "How to Build X with Y 🚀"
date: "Month Day, Year"
published: "YYYY-MM-DD"
abstract: "Learn how to build [feature] using [technology] with step-by-step examples."
image: "reused-technical-image-url"
tag: "Technology, Tutorial, Development"
author: "Carlos García"
---

# How to Build X with Y 🚀

<small>Date</small>
<EditPost path="slug" />

<img ... />

Introduction explaining what X is and why Y is great for it...

## What is X?

Explanation with context...

## Prerequisites

<CodeSnippet language="bash" code={`npm install ...`} />

## Step 1: Setup

Detailed instructions...

<CodeSnippet language="javascript" route="setup.js" code={`...`} />

## Step 2: Implementation

More detailed steps...

## Best Practices 💡

Tips and recommendations...

## Conclusion 🎉

Summary and takeaways...

---

Thanks for reading! Check out the complete code...

<BlogLink url="..." content="View on GitHub" />
```

### Pattern 2: Announcement/Project Launch Blog

```markdown
---
title: "Introducing My New Project 🎉"
date: "Month Day, Year"
published: "YYYY-MM-DD"
abstract: "I just released [project] - here's what it does and how you can use it."
image: "reused-project-image-url"
tag: "Project, Open Source, Tools"
author: "Carlos García"
---

Introduction to the project...

## The Problem

Explain the pain point...

## The Solution

Introduce your project...

## Features

### Feature 1
Description with code example...

### Feature 2
Description with code example...

## How to Use

<CodeSnippet language="bash" code={`installation...`} />

## Real-World Example

Concrete usage scenario...

## Get Started

Installation and usage instructions...

<BlogLink url="github-url" content="Check it out on GitHub" />
```

## Error Prevention

**Common Mistakes to Avoid:**

1. ❌ Different filenames for EN/ES versions
   ✅ Use identical slugs: `my-post.mdx` in both `data/en/` and `data/es/`

2. ❌ Missing frontmatter fields
   ✅ Always include all required fields

3. ❌ Using triple backticks for code
   ✅ Use `<CodeSnippet>` component

4. ❌ Inline code in regular markdown
   ✅ Use `<CodeSnippet>` for all code blocks

5. ❌ Creating new images
   ✅ Reuse existing images from other posts

6. ❌ Inconsistent content between languages
   ✅ Ensure both versions cover the same material

7. ❌ Wrong prop name in CodeComparition
   ✅ Use `rigth` (not `right`) - it's a typo in the component

8. ❌ Forgetting `<EditPost>` component
   ✅ Always include it in the header

## Quality Checklist

Before considering a blog post complete:

- [ ] **Structure**: Both language versions exist with matching filenames
- [ ] **Frontmatter**: All required fields present and valid
- [ ] **Header**: Standard format with title, date, EditPost, and image
- [ ] **Components**: Using MDX components instead of markdown syntax
- [ ] **Images**: Reused from existing posts, properly formatted
- [ ] **Code**: All code blocks use `<CodeSnippet>` with proper language
- [ ] **Links**: External links use `<BlogLink>` component
- [ ] **Translation**: Spanish version matches English content
- [ ] **Technical**: Code examples are accurate and tested
- [ ] **Footer**: Includes conclusion, horizontal rule, and thanks message
- [ ] **SEO**: Title, abstract, and tags are optimized

## Reference Files

To see examples of well-formatted blog posts, refer to:
- `data/en/como-crear-modulos-terraform.mdx`
- `data/en/como-trabajo-con-ia-desarrollo-software.mdx`
- `data/en/create-your-own-plugin-marketplace.mdx`

## When to Use This Skill

Use this skill whenever you need to:
- Create a new blog post for the carlos.lat blog
- Understand the blog post structure and requirements
- Learn which MDX components are available
- Ensure consistency between English and Spanish versions
- Reference proper formatting and style guidelines
- Validate a blog post before committing

This skill encapsulates all the knowledge needed to create professional, consistent blog posts for the carlos.lat project.
