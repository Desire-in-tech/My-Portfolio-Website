# AGENTS.md

## Project Overview

This repository contains a personal software engineering portfolio and technical blog built with React, TypeScript, Vite, Tailwind CSS, React Router, Framer Motion, and related frontend tooling.

The application is deployed as a production website. Existing functionality and content must be treated as intentional unless a task explicitly requests a change.

The blog is a data-driven system. Blog posts are stored as structured data and rendered dynamically by the existing blog components.

The primary blog data source is:

`src/data/blogPosts.ts`

Do not replace the existing blog architecture with a CMS, database, new content system, or different blog implementation unless explicitly instructed.

---

# Core Agent Rules

## 1. Protect Existing Functionality

Before making changes:

1. Inspect the relevant existing files.
2. Understand how the current implementation works.
3. Reuse existing architecture wherever possible.
4. Make the smallest change necessary.
5. Do not refactor unrelated code.
6. Do not change existing blog posts unless explicitly instructed.
7. Do not remove existing functionality.
8. Do not change routes, components, styling, SEO behavior, or data structures unnecessarily.

Existing code may contain legacy inconsistencies. Do not silently "clean up" unrelated issues while performing a requested task.

---

# Blog Architecture

The blog is currently implemented using static TypeScript data.

Primary files include:

* `src/data/blogPosts.ts`
* `src/pages/Blog.tsx`
* `src/pages/BlogPost.tsx`
* `src/lib/blog.ts`
* `src/lib/related.ts`
* `src/components/TableOfContents.tsx`
* `src/hooks/use-seo.ts`

Before modifying blog functionality, inspect these files and understand how they interact.

Do not assume that a new implementation is required when the existing architecture already supports the requested functionality.

---

# BlogPost Data Structure

The exact implementation in the repository is authoritative.

The existing `BlogPost` interface includes fields similar to:

```ts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  readingTime?: string;
  excerpt?: string;
  featuredImage: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  targetKeywords: string[];
  tags: string[];
  content: string;
  featured: boolean;
  relatedProjectSlug?: string;
}
```

Always inspect the actual interface in the repository before importing posts.

Do not invent new fields unless the existing application requires them.

---

# Adding a Blog Post

When instructed:

> Add this blog post

the default behavior is:

1. Read the supplied post.
2. Inspect the existing `BlogPost` interface.
3. Convert the supplied content into the existing `BlogPost` structure.
4. Add the new object to `src/data/blogPosts.ts`.
5. Preserve the author's content.
6. Preserve heading hierarchy.
7. Preserve the supplied metadata.
8. Generate only metadata that is actually required by the existing application.
9. Do not require the source document to contain a reading-time field.
10. Validate the new post.
11. Run type checking.
12. Run the production build.
13. Report any errors.

Do not modify unrelated files.

---

# Blog Post IDs

Every blog post must have a unique `id`.

Before adding a post:

1. Inspect existing IDs.
2. Do not reuse an existing ID.
3. Do not change IDs of existing posts.

If the source files provide IDs, preserve them only when they do not conflict with the existing data.

If IDs are not supplied, generate a unique ID consistent with the existing project's conventions.

---

# Blog Post Slugs

Every new blog post must have a unique URL-friendly `slug`.

Rules:

* lowercase
* words separated with hyphens
* no unnecessary special characters
* descriptive and readable
* unique within the blog

Example:

```text
building-rest-apis-with-fastapi
```

Before adding a slug:

1. Inspect existing slugs.
2. Do not create a duplicate.
3. Do not change existing slugs.

A legacy post may contain an existing data-quality issue, such as a missing slug. Do not modify unrelated legacy posts merely because you encounter such an issue.

---

# Blog Categories

Use the existing category conventions in the repository.

Do not invent new categories unless explicitly instructed.

Examples of existing/expected categories may include:

* Machine Learning
* Backend
* Data Science
* Career

Before assigning a category, inspect existing blog data and use the established naming convention.

---

# Publication Dates

The source blog documents use the publication-date format:

```text
DD/MM/YYYY
```

Example:

```text
21/09/2026
```

When importing the supplied Markdown documents, preserve the publication date represented in the source document.

Do NOT force the source documents to use ISO `YYYY-MM-DD` simply because another format might be technically preferable.

The date format used by the existing application should be inspected before inserting the value into `blogPosts.ts`.

Do not invent historical publication dates.

If a source document contains a publication date, use that date.

---

# Author

The standard author used by the user's blog source documents is:

```text
Desire E
```

Newly imported posts should use:

```text
Desire E
```

Do not change the author of a source document to `Desire`.

---

# Existing Blog Posts — Limited Metadata Update

If explicitly instructed to bring existing blog posts into alignment with the current source-document conventions, the agent may update ONLY:

1. `author`
2. `publishDate`

For this specific migration:

* change the author to `Desire E` where appropriate
* change the publication date to the date represented in the corresponding source document
* preserve the requested date format
* do not change any other existing post data

The following must NOT be changed during this limited metadata migration:

* title
* slug
* ID
* category
* content
* excerpt
* featured image
* image alt text
* meta title
* meta description
* target keywords
* tags
* featured status
* related project
* links
* formatting
* headings

Do not rewrite or "improve" existing posts.

Do not make SEO improvements during this task.

Do not change existing images during this task.

The instruction to update existing posts applies ONLY when the user explicitly requests this migration.

---

# Reading Time

The source blog documents do NOT need to contain a `readingTime` field.

Do not require `readingTime` in imported Markdown files.

The existing application/Bolt workflow may calculate reading time automatically.

Before changing reading-time behavior, inspect the existing implementation.

Do NOT:

* invent a reading-time field in the source Markdown
* require the user to add reading time to every Markdown document
* replace the existing reading-time calculation
* manually calculate and insert reading time unless the existing application explicitly requires it

When importing a post, preserve the existing application's reading-time behavior.

If the `BlogPost` interface makes `readingTime` optional, leave it to the existing application logic unless the current architecture clearly requires a value.

---

# Excerpts

Each blog post should have a useful `excerpt` when the existing architecture expects one.

The excerpt should:

* accurately summarize the article
* be concise
* be suitable for the blog listing/card
* not introduce information that does not appear in the article

Do not rewrite the article merely to create an excerpt.

If the existing application or Bolt already generates an excerpt automatically, preserve that behavior rather than creating duplicate logic.

---

# Featured Posts

The `featured` field controls whether a post qualifies for the website's featured blog section.

```ts
featured: true
```

means the post is treated as a featured article.

```ts
featured: false
```

means the post is treated as a normal article.

When importing posts from Markdown:

* Preserve an explicitly supplied `featured` value.
* If the source does not specify a value, use `featured: false`.
* Do not arbitrarily decide that an article should be featured.
* Do not change the featured status of existing posts unless explicitly instructed.

---

# Table of Contents

The blog application automatically generates the Table of Contents for individual blog posts from the article's heading structure.

The relevant existing architecture includes:

* `src/pages/BlogPost.tsx`
* `src/components/TableOfContents.tsx`
* existing blog rendering utilities

**The Table of Contents is generated automatically from headings in the article content.**

**`##` and `###` headings are critical to this behavior and must be preserved.**

When importing or creating a blog post:

* Preserve the article's existing `##` and `###` heading hierarchy.
* **Do NOT create a separate `tableOfContents` field** unless the existing application explicitly requires one.
* **Do NOT manually insert a duplicate Table of Contents into the article content.**
* Do not flatten or unnecessarily rename headings.
* Do not remove headings merely for formatting convenience.
* Inspect the existing TOC implementation before changing heading behavior.

If Markdown source content contains headings that appear incompatible with the existing TOC implementation, preserve the author's content as much as possible and report the issue rather than silently restructuring the article.

The goal is to integrate the article with the existing automatic TOC system.

---

# Markdown Content

The source documents are Markdown files downloaded from Google Docs.

Google Docs Markdown exports may not use YAML front matter.

The agent MUST inspect the actual structure of each supplied Markdown document rather than assuming that metadata is stored in YAML front matter.

The supplied documents may use labeled metadata such as:

```text
Title: "..."
Slug: "..."
Category: "..."
publishDate: ...
Author: "..."
featuredImage: "..."
imageAlt: "..."
metaTitle: "..."
metaDescription: "..."
targetKeywords:

- ...

Tags:

- ...

Featured: false

Content: "..."
```

The agent must parse the actual document structure and map the information into the existing `BlogPost` interface.

Before importing Markdown files, inspect:

`src/lib/blog.ts`

and determine exactly which Markdown syntax is supported.

Expected content may include:

* `##` headings
* `###` headings
* paragraphs
* unordered lists
* ordered lists
* bold text
* italic text
* inline code
* links
* images

Do not assume that arbitrary Markdown syntax is supported.

If a source Markdown file contains unsupported syntax, preserve the information and convert it only as necessary to the format supported by the existing renderer.

Do not introduce a new Markdown parser unless explicitly instructed.

---

# Google Docs Markdown Image URLs

Google Docs may alter the appearance of image URLs when exporting a document as Markdown.

A correctly entered image URL in the original blog document may appear in the downloaded Markdown as Markdown-link syntax, for example:

```text
featuredImage: "[https://res.cloudinary.com/example/image.png](https://res.cloudinary.com/example/image.png)"
```

This does NOT mean the original image URL was incorrect.

When importing a Markdown file:

1. Inspect the underlying URL.
2. If the `featuredImage` value is wrapped in Markdown link syntax, extract the actual destination URL.
3. Store the actual image URL in the `featuredImage` field.
4. Do not store the Markdown wrapper as the `featuredImage` value.
5. Preserve valid Cloudinary URLs.
6. Do not replace, re-host, or alter a valid Cloudinary image URL.
7. Do not modify existing blog image URLs unless explicitly instructed.

For example, convert:

```text
"[https://res.cloudinary.com/example/image.png](https://res.cloudinary.com/example/image.png)"
```

to:

```text
https://res.cloudinary.com/example/image.png
```

The agent should inspect the actual destination URL rather than assuming that Google Docs exported an invalid image.

If the Markdown contains an actual Markdown image such as:

```md
![Alt text](https://res.cloudinary.com/example/image.png)
```

parse it according to the existing blog renderer and preserve the image URL and alt text.

Do not download or re-host images unnecessarily.

---

# Images

Blog posts may use Cloudinary-hosted images.

The existing project uses Cloudinary for blog and project imagery.

When a source post contains an image:

* Preserve a valid existing Cloudinary URL.
* Preserve image meaning and placement.
* Preserve `imageAlt`.
* Do not replace existing image URLs without instruction.
* Do not download and re-host images unnecessarily.
* Handle Google Docs Markdown-export URL wrappers as described in the previous section.

The `featuredImage` field must contain the actual URL expected by the existing application, not a Markdown-link wrapper.

---

# SEO Metadata

Each blog post should contain the SEO fields expected by the existing `BlogPost` interface:

* `metaTitle`
* `metaDescription`
* `targetKeywords`
* `tags`

Rules:

### metaTitle

Preserve the supplied metadata when it exists.

Do not keyword-stuff.

### metaDescription

Preserve the supplied metadata when it exists.

Do not make claims that are not supported by the article.

### targetKeywords

Preserve the supplied target keywords when they exist.

### tags

Preserve the supplied tags when they exist.

Do not unnecessarily rewrite the user's metadata during import.

---

# Related Projects

If a post is associated with an existing project, use:

```ts
relatedProjectSlug
```

only when the referenced project actually exists.

Before adding a related project:

1. Inspect `src/data/projects.ts`.
2. Confirm the project slug.
3. Use the exact existing slug.

Do not invent project slugs.

---

# Bulk Blog Import

The repository may contain a temporary directory:

```text
blog-import/
```

This directory is a staging area for Markdown files that need to be imported into the blog.

It is NOT the production blog database.

It is NOT the source used by the website at runtime.

The production blog remains:

```text
src/data/blogPosts.ts
```

Each Markdown file normally represents one blog post.

Example:

```text
blog-import/
├── post-001.md
├── post-002.md
├── post-003.md
└── post-004.md
```

Do not delete source Markdown files immediately after importing them.

They should remain available until the import has been verified.

---

# Bulk Import Procedure

When instructed to import a batch of blog posts:

## Step 1 — Inspect

Read all Markdown files in the requested batch.

Do not modify anything yet.

Check:

* title
* slug
* category
* publication date
* author
* excerpt
* featured image
* image alt text
* SEO metadata
* keywords
* tags
* featured status
* related project
* article content
* heading structure
* links
* images
* unsupported Markdown

Do NOT require reading time in the source document.

## Step 2 — Understand the Export Format

These Markdown files originate from Google Docs.

Do not assume YAML front matter.

Inspect the actual structure and parse the labeled metadata and article content correctly.

Pay particular attention to:

* publication date format
* author
* Cloudinary image URLs
* Markdown link wrappers
* heading structure
* lists
* article boundaries

## Step 3 — Check for Conflicts

Compare the posts against existing blog data.

Check for:

* duplicate IDs
* duplicate slugs
* duplicate titles
* missing required fields
* invalid project references
* malformed metadata
* unsupported content syntax

Do not silently overwrite an existing post.

## Step 4 — Import

Convert each valid Markdown file into the existing `BlogPost` object format.

Add the posts to:

```text
src/data/blogPosts.ts
```

Preserve the existing posts.

Do not replace the entire file unless explicitly instructed.

## Step 5 — Validate

Run:

```bash
npm run typecheck
```

Then run:

```bash
npm run build
```

## Step 6 — Inspect

Review the resulting diff.

Confirm:

* only intended files changed
* existing posts were not modified accidentally
* imported posts are present
* IDs are unique
* slugs are unique
* publication dates are correct
* author is correct
* headings were preserved
* TOC compatibility was preserved
* image URLs are actual destination URLs
* metadata is valid

## Step 7 — Report

Report:

* number of files processed
* number successfully imported
* any skipped files
* any metadata problems
* any duplicate/conflict problems
* typecheck result
* build result
* files changed

Do not proceed to the next batch if the current batch has unresolved errors.

---

# Initial Test Batch

For the first test, import only the four explicitly selected Markdown files.

Do not automatically process every file in `blog-import/`.

The first four posts are a validation batch.

Verify that:

1. The Google Docs Markdown format is parsed correctly.
2. Metadata is mapped correctly.
3. Dates are preserved correctly.
4. Author is `Desire E`.
5. Images are mapped to their actual URLs.
6. Article content is preserved.
7. `##` and `###` headings remain intact.
8. The existing automatic Table of Contents works.
9. Reading time continues to be handled by the existing application.
10. Existing blog posts remain unchanged except for explicitly requested author/date migration.
11. Typecheck passes.
12. Build passes.

After the four-post test has been successfully validated, future batches may contain approximately 10 posts unless instructed otherwise.

The agent must process only the requested batch.

---

# Failure Handling

If `npm run typecheck` fails:

1. Determine whether the failure was caused by the current import.
2. Fix only issues caused by the current task.
3. Re-run typecheck.

If `npm run build` fails:

1. Determine whether the failure was caused by the current import.
2. Fix only issues caused by the current task.
3. Re-run the build.

Do not perform unrelated refactoring to make a build pass.

If an error is caused by pre-existing code, report it clearly rather than modifying unrelated code.

If an imported article contains ambiguous or missing information, report it instead of inventing important metadata.

---

# Existing Content Preservation

Existing blog posts are valuable content and must be preserved.

During normal blog imports, never:

* delete existing posts
* rewrite existing posts
* change existing slugs
* change existing IDs
* change publication dates
* change authors
* change featured images
* change image alt text
* change SEO metadata
* change featured status

unless explicitly instructed.

When performing the specifically requested author/date migration, the ONLY permitted changes to already-existing posts are:

* `author`
* `publishDate`

Nothing else.

When performing a bulk import, the normal task is to ADD the new posts.

---

# Git Safety

Before making substantial changes:

* inspect the current repository state
* do not discard unrelated user changes
* do not reset the repository
* do not force-push
* do not delete branches
* do not rewrite Git history
* do not commit or push unless explicitly instructed

When reviewing changes, use the repository's normal Git diff/status tools.

---

# Secrets and Environment Variables

Never expose, commit, or modify secrets.

Do not place API keys, passwords, tokens, private credentials, or `.env` secrets into blog posts, Markdown files, source code, or `AGENTS.md`.

Do not print secret values in reports.

---

# Agent Behavior

The agent should behave conservatively.

When the instruction is clear:

* inspect
* make the requested change
* validate
* report

When information is missing:

* inspect the repository first
* use existing conventions
* avoid guessing when guessing could damage content or functionality

When there are multiple reasonable implementations, prefer the implementation that matches the existing architecture.

Do not introduce new frameworks, libraries, CMS systems, databases, or build tools for simple blog-content tasks.

Do not create a new reading-time system.

Do not create a new Table of Contents system.

Do not create a new image-hosting system.

---

# Special Rule for Blog Import Requests

If the user says:

> Import these blog posts

interpret this as:

1. Read the requested Markdown files.
2. Understand the existing blog architecture.
3. Parse the actual Google Docs Markdown export format.
4. Convert the posts into the existing `BlogPost` structure.
5. Add them to `src/data/blogPosts.ts`.
6. Preserve the existing blog posts.
7. Preserve article content and heading structure.
8. Preserve automatic Table of Contents compatibility.
9. Preserve the supplied publication dates.
10. Use `Desire E` as the author.
11. Extract actual image destination URLs when Google Docs has wrapped them in Markdown-link syntax.
12. Do not require reading time in the source documents.
13. Preserve the existing application's reading-time behavior.
14. Validate metadata.
15. Run typecheck.
16. Run the production build.
17. Inspect the final diff.
18. Report the result.

Do not redesign the blog system.

Do not create a CMS.

Do not create a database.

Do not create a second blog-data source.

Do not modify unrelated application code unless required to complete the import.

---

# Definition of Done

A blog import is complete only when:

* all requested posts have been processed
* required fields are present
* IDs are unique
* slugs are unique
* existing posts remain intact
* article content is preserved
* heading hierarchy is preserved
* automatic TOC behavior remains compatible
* SEO metadata is preserved or correctly mapped
* Cloudinary image URLs are correctly extracted and preserved
* author is correctly mapped
* publication dates are correctly mapped
* reading time continues to use the existing application behavior
* `npm run typecheck` passes
* `npm run build` passes
* the final changes have been inspected
* any unresolved issues have been reported
