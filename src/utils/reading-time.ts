export const calculateReadTime = (content: string): string => {
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
