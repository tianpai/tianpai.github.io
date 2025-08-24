import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateReadTime = (content) => {
  const wordsPerMinute = 175;
  let words = content.trim().split(/\s+/).length;

  // Add time for code blocks (slower reading)
  const codeBlocks = (content.match(/```[\s\S]*?```/g) || []).length;
  words += codeBlocks * 50; // Add 50 words per code block

  // Add time for images
  const images = (content.match(/!\[.*?\]\(.*?\)/g) || []).length;
  words += images * 12; // Add 12 words per image

  const minutes = words / wordsPerMinute;

  if (minutes < 1) {
    return "< 1 min read";
  } else if (minutes < 2) {
    return "1 min read";
  } else {
    return `${Math.ceil(minutes)} min read`;
  }
};

const generateBlogMeta = () => {
  const contentDir = path.join(__dirname, "../src/content");
  const outputDir = path.join(__dirname, "../src/data");

  // Create data directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const blogMeta = {};

  // Read all HTML files from content directory
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".html"));

  files.forEach((file) => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    // Load HTML with Cheerio
    const $ = cheerio.load(content);

    // Extract content from document-wrapper div if it exists, otherwise use body
    const $content =
      $(".document-wrapper").length > 0 ? $(".document-wrapper") : $("body");

    // Extract title from first h1 tag
    const title =
      $content.find("h1").first().text().trim() || file.replace(".html", "");

    // Extract first paragraph as excerpt (skip empty paragraphs)
    let excerpt = "";
    $content.find("p").each((i, el) => {
      const text = $(el).text().trim();
      if (text && text.length > 20) {
        excerpt = text;
        return false; // Break out of each loop
      }
    });

    // Generate slug from filename
    const slug = file.replace(".html", "").toLowerCase().replace(/\s+/g, "-");

    // Get clean HTML content and text content for reading time
    const bodyContent = $content.html();
    const textContent = $content.text().replace(/\s+/g, " ").trim();

    blogMeta[slug] = {
      title,
      excerpt,
      content: bodyContent, // Clean HTML content without document structure
      readTime: calculateReadTime(textContent),
      wordCount: textContent.split(/\s+/).length,
      filename: file,
    };
  });

  // Write metadata to JSON file
  const outputPath = path.join(outputDir, "blog-meta.json");
  fs.writeFileSync(outputPath, JSON.stringify(blogMeta, null, 2));

  console.log(
    `Generated blog metadata for ${Object.keys(blogMeta).length} posts`,
  );
  console.log(`Output: ${outputPath}`);
};

// Run the script
generateBlogMeta();
