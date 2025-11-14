+++
title = "Building DailyRepo: A Solo Developer's Journey from Scraper to Full-Stack App"
date = "2025-08-27T16:28:58-05:00"
tags = ["project","dailyrepo", "dev-sotry"]
+++

As a CS graduate whose group projects involved more project management than
coding, I had a problem: I wanted to build something substantial that was
entirely mine. Scrolling through X (formerly Twitter), I kept seeing posts
about AI-powered projects and monetized side hustles, but I wanted concrete
data about what developers were actually building, not just what they were
bragging about on social media.

That curiosity led to _[Daily Repo](https://dailyrepo.tianpai.io)_, a
full-stack application that tracks GitHub's trending repositories with
historical data, developer rankings, and insight analytics. What started as a
simple DOM scraper evolved into a TypeScript-powered system processing 150+
repositories daily, complete with intelligent rate limiting, conditional
caching, and a custom ASCII design language.

This is the story of building my first solo full-stack project: the technical
challenges, architectural decisions, and surprising insights discovered along
the way.

## The Problem: Data vs. Feelings

I was getting annoyed by the constant stream of project bragging and "AI is
taking everyone's jobs" grandiloquence flooding my feed. As someone who relied
heavily on feelings and assumptions about tech trends, I recognized my own
bias. Warren Buffett once noted that having 1,000 people tell you you're right
doesn't make you right. What matters is that the reasoning is correct.

GitHub's trending page provided some insight, but it was missing the historical
context I craved. Why does a 5-year-old repository suddenly surge in
popularity? What makes a 10-year-old project still relevant? These questions
couldn't be answered by a simple trending list.

I needed to see patterns over time, understand what languages people were
actually using for different types of projects, and get beyond the
surface-level hype.

## Technical Evolution: From Simple Scraper to Full System

### Phase 1: The DOM Scraping Foundation

My technical background was basic: C, Python, HTML, CSS, JavaScript, Node.js,
and a bit of Express. No React experience, no TypeScript, no production
deployment knowledge (school projects are all 'deployed' on `localhost: 3000`).
But I subscribed to the philosophy that as a software engineer, it's not about
the programming language. If COBOL is the best tool for a project, I'll learn
COBOL.

The first two weeks were spent building a DOM scraper using Cheerio and Axios
to fetch repository data from GitHub's trending page, since there's no official
API for trending repos. I set up MongoDB to store the data and began the
process that would become my daily nightmare: fighting GitHub's rate limits.

I discovered the Star History project and learned how to fetch historical star
data through GitHub's API. But this meant making hundreds of API requests
daily, and I quickly hit the infamous 403 errors that would plague my
development for weeks.

### Phase 2: The Rate Limiting Wars

GitHub's API has a 5,000 hourly rate limit with personal tokens, plus
undocumented sub-rate limits designed to prevent abuse. Those first two weeks
involved constant 403 errors, timeout handling, and manually adding delays
between requests.

The breakthrough came from implementing intelligent error handling that checks
rate limit reset times rather than blindly retrying. I also added a
"pre-warming" request 20-30 minutes before the main scraping job, so by the
time I hit the hourly limit, I'd only need to wait 5-10 minutes instead of a
full hour.

**Result**: Scraping time dropped from 2+ hours to under 50 minutes for 150+
repositories and their complete star histories.

### Phase 3: The JavaScript to TypeScript Migration

As the backend grew beyond basic repository listings, I hit the familiar
problem of variables typed as `any` leading to unpredictable bugs. I was
constantly using vim's `gd` command to jump into functions and check return
types and values.

I dedicated three days to learning TypeScript essentials and switched to Bun as
the runtime for native TypeScript support, eliminating build steps entirely.
The migration wasn't about TypeScript evangelism; it was about static error
checking and better developer experience.

### Phase 4: Frontend Architecture Learning

I chose React + Vite + TailwindCSS over full-stack frameworks like Next.js,
which felt like overkill. Despite having zero frontend experience, I embraced
the learning opportunity.

The biggest hurdle was mastering `useEffect` for data fetching. The hook's
complexity can lead to infinite loops and unnecessary renders. React's
documentation on "You Might Not Need an Effect" became essential reading during
this phase. It is easier to create a infinite loop.

I also moved away from Shadcn UI, which made the app look too generic. Instead,
I developed a custom ASCII design language that reflects the developer-focused
nature of the project.

## Key Architecture Decisions

### JIT Abstraction: Avoiding the Over-Engineering Trap

I developed what I call "JIT abstraction," borrowing from compiler terminology,
which means adding abstraction layers exactly when needed, not before.

The process involves:

1. Writing similar code patterns (2-3 similar controllers)
2. Identifying common behaviors and pain points
3. Abstracting when patterns become clear and maintenance becomes difficult
4. Refactoring before complexity becomes unmanageable

Here's an example of controller evolution:

**Before**: Fat controllers handling everything

```javascript
app.get("/trending/:language", async (req, res) => {
  // 130+ lines of validation, DB queries, formatting, error handling...
});
```

**After**: Lean controllers with service layer

```typescript
export async function getTrending(
  req: Request,
  res: Response,
  _next: NextFunction,
): Promise<void> {
  try {
    const params = parseTrendingParams(req);
    const { repoList, fromCache } = await fetchTrendingWithCache(params.date);
    const response = formatTrendingResponse(repoList, params, fromCache);

    res.status(200).json(response);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch trending repos";
    res.status(400).json(makeError(new Date().toISOString(), 400, message));
  }
}
```

This approach prevented both code duplication and premature optimization, a
common trap in personal projects where you want to showcase architecture
skills.

### Conditional Caching Strategy

I implemented a `withCache` utility that combines caching logic with
conditional storage:

```typescript
export async function withCache<T>(
  cacheKey: string,
  fetchFn: () => Promise<T>,
  ttl: number,
  shouldCache?: (data: T) => boolean,
): Promise<{ data: T; fromCache: boolean }> {
  const cached = getCache(cacheKey) as T;
  if (cached) {
    return { data: cached, fromCache: true };
  }

  const data = await fetchFn();

  // Only cache if shouldCache function returns true
  if (!shouldCache || shouldCache(data)) {
    setCache(cacheKey, data, ttl);
  }

  return { data, fromCache: false };
}
```

This pattern allowed me to cache search results only when data was found,
avoiding expensive cache misses for failed searches. Working within MongoDB's
free tier constraints, every optimization mattered.

### Batched Database Operations

As the system scaled from 15 daily repositories to 150+, I moved from
individual database calls to batched operations. This reduced database calls
significantly while working within free tier limitations, though the
performance improvement was less dramatic than the rate limiting optimizations.

## Performance & Scaling Lessons

### Rate Limiting Optimization

The biggest performance breakthrough came from understanding GitHub's
undocumented sub-rate limits. Rather than implementing a complex event loop
system (which would still hit the 5,000/hour ceiling), I focused on minimizing
delays and handling 403 errors intelligently.

The system now makes a single request to GitHub's rate limit endpoint when it
encounters a 403, calculates the exact wait time, and pauses scraping until the
limit resets. This eliminated the cascading 403 errors that previously extended
scraping times.

### Deployment Platform Juggling

Working with free tiers meant constant deployment platform switching: Vercel
for frontend, Railway for backend (after Render's custom domain issues), and
GitHub Actions for scheduled scraping. Each platform had its quirks: Bun
deployment issues on Railway, MongoDB connection problems in GitHub Actions,
CORS configuration headaches.

These constraints taught me to design systems that can adapt to different
deployment environments rather than being tightly coupled to specific
platforms.

## Surprising Data Insights

The data revealed patterns that contradicted my assumptions about modern
development:

**Language Distribution**: C and C++ still dominate trending repositories (32%
and 19% respectively), followed by Java (17%). This was genuinely surprising in 2025.

**Language-Specific Patterns**:

- **Go**: Primarily backend infrastructure (Kubernetes, microservices, databases)
- **TypeScript**: Heavily React-focused rather than general web development
- **Java**: Still relevant for Android, Kafka, and surprisingly,
  algorithm/interview prep
- **Python**: Concentrated in AI/ML research as expected
- **Rust**: Most evenly distributed across topics, unique in blockchain
  representation

**NOTE**: However, I suspect this language dominance reflects structural
differences rather than pure popularity. C/C++ projects often need to rebuild
foundational tools that higher-level languages import as packages. Java's
verbosity might mean even simple concepts require substantial codebases that
attract more attention.

**Trending Anomalies**: Developers often trend without their repositories
trending, suggesting GitHub's algorithms work differently for people versus
projects, possibly based on contributions to established projects rather than
new repository creation.

**Infrastructure Details**: Even seemingly simple features required hunting
down community-maintained resources, like finding a comprehensive GitHub
language-to-color mapping that someone had reverse-engineered and shared.

## What I'd Do Differently

### Start with a Monorepo

Keeping frontend and backend in separate repositories created deployment
coordination headaches and duplicated TypeScript interfaces. A monorepo would
have simplified shared types, development environment setup, and coordinated
deployments.

### Design-First Approach

Having gained experience, I would prioritize the user interface design earlier.
The current ASCII design language evolved organically but would benefit from
more systematic planning. Understanding how to present the data effectively
should inform the backend API design.

### Unified Deployment Architecture

Running the scraper, server, and frontend on the same platform would reduce
complexity and deployment coordination issues. The current split across GitHub
Actions, Railway, and Vercel works but adds unnecessary operational overhead.

## The Meta-Learning

Building DailyRepo taught me that good software development isn't just about
code. It's about understanding problems, designing solutions, and iterating
based on real-world constraints.

The temptation with full-stack development is to master every layer perfectly
before moving forward. Instead, I learned to embrace "progressive competence,"
building working solutions while gradually deepening understanding of the
underlying technologies.

**Most importantly**: The ability to research and learn efficiently often
matters more than existing knowledge. Every constraint from GitHub's rate
limits to free tier database restrictions became an opportunity to develop
better engineering judgment.

The data collection continues automatically, the insights keep revealing new
questions, and the codebase remains a living testament to the iterative nature
of building something substantial alone. Sometimes the best way to understand
what developers are actually working on is to become one of them.

---

- View the project at [dailyrepo.tianpai.io](https://dailyrepo.tianpai.io)
- Source code:
  [github.com/tianpai/dailyRepo](https://github.com/tianpai/dailyRepo)
