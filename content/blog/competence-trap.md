+++
title = 'The Competence Trap: Why AI Makes Us Feel Smarter While Making Us Less Capable'
date = 2025-08-23T22:50:00Z
description = 'Reflections on how AI can boost confidence while eroding core engineering competence.'
tags = ['ai', 'llm', 'engineering']
draft = false
+++

I've been working with LLMs for a while now, and I'm not here to bash AI or
ignore how useful it can be. But I've noticed some troubling patterns that I
think we need to talk about.

## Information Always Gets Lost in Translation

Here's something I've been thinking about: when information passes from person
to person (whether it's through 10 people or 100), it gets distorted. By the
time it reaches the end of the chain, it barely resembles what the original
person intended to communicate.

The same thing happens when we communicate with AI models. No AI system can
fully capture what we mean, just like humans can't perfectly understand each
other either. There's always something lost in translation.

## The "Magic Oracle" Problem

I see this information loss playing out in a particularly dangerous way with
non-technical users. They treat AI like some kind of magic oracle that suddenly
gives them superpowers to build things they never could before.

Don't get me wrong though. They can absolutely create functional web apps and
desktop applications now. I watched a YouTube video recently where someone used
AI to build a MacOS app for analyzing iPhone health data. It worked but it was
basically just displaying information in charts, not actually analyzing
anything meaningful. The creator didn't have the statistical or mathematical
background to turn that data into real insights.

### The App Store Gold Rush Mentality

What I'm seeing more and more is this pattern: someone gets an idea, uses AI to
generate the code, creates a flashy marketing video (probably also with AI),
and then floods social media with bot accounts to promote it. The goal isn't to
solve real problems. **It's to chase trends and make quick money.**

These apps might work on the surface, but without foundational knowledge,
creators are walking into potential legal and reputation disasters. What
happens when an app crashes and loses someone's data? What if it mishandles
sensitive information?

## Most AI Apps Won't Make It Past Year One

I'm betting most of the apps being cranked out right now won't survive more
than a few months. But AI does serve one genuinely valuable purpose for
non-technical people: creating prototypes to show technical team members what
they have in mind, which bridge the communication gap (a little bit) between
technical and non-technical people.

## AI Is Still Just a Tool

No matter how powerful AI gets, I think it'll remain what it is today: a tool
for handling routine tasks. We don't implement sorting algorithms from scratch
anymore (except in computer science classes), but we still need to understand
when and why to use them.

Here's something I've noticed about how people interact with AI: non-technical
users tend to ask AI to "do something" while technical people ask "how to do
something." That difference in approach says everything about the growing
knowledge gap.

## We’re Still Figuring This Out

We don't really know what we're doing with AI yet. "AI engineering" isn't a
mature discipline. We have some emerging patterns like prompt design and
human-in-the-loop workflows, but these are still evolving, not established best
practices.

## Real-World Reality Check

I've been testing this with current state-of-the-art models (DeepSeek R1,
Claude Sonnet 4, Opus 4, OpenAI O3, and O4-mini, etc). (Good) Human engineers
see the bigger picture, understand how everything fits together.

The AI-generated code? It's full of problems: unnecessary complexity, violation
of basic principles, spaghetti architecture, and way too many emojis. I bet
Linus would really be pissed off if someone vibed the kernel. These are
fundamental issues that any computer science program teaches you to avoid.

If our best programming models still can't meet basic engineering standards,
we've got a long way to go. As of the time of writing this, AI generating code
better be under some heavy supervision.

## The Productivity Paradox Is Getting Weird

Here's where things get economically interesting (and concerning). Companies
are struggling to grow at expected rates, so they're hiring slower. But AI is
making existing employees way more productive. This creates a weird imbalance.

When I say AI makes people more productive, I don't necessarily mean they're
producing better work. I mean they can suddenly tackle projects in completely
unfamiliar areas and juggle multiple things at once. But since they don't
actually understand what they're building, they either ship broken products or
spend ages fixing problems they created without realizing it.

I'm hearing companies ask: "Why do we need to hire someone when AI can handle
this?" (Shopify?) If demand was really booming, companies would hire more
people AND give them all AI tools to produce even faster.

Instead, what's happening is that AI-equipped teams are cranking out products
faster than companies can find customers for them. Some companies (like
Microsoft) REPLACE the right Windows key with Copilot Key! Growth and
purchasing power have slowed down, so this productivity surge isn't translating
into more jobs (in the post-COVID era).

## We're About to Have a Senior Developer Problem

This is the part that really worries me: if we stop hiring junior developers
now, who's going to be the senior developers in 10 years?

Companies seem to be betting that AI will completely replace junior roles.
Maybe that's a calculated decision, or maybe they're just caught up in the
hype. Either way, we might be creating our own talent shortage. What's next?
Offshore programming tasks to Asia (like Boeing, their fly control system must
be so good and reliable!).

Additionally, investment money is pouring into AI startups that use AI to build
their own products. So we have AI-generated code (which often isn't great)
potentially being used to train future AI models. That seems like a recipe for
degrading quality over time.

## This Isn't Like the Textile Industry

People love to point to the textile industry as proof that technology
displacement creates new opportunities. But AI is different. Instead of
automating specific manual tasks, AI can do cognitive work across virtually
every industry.

The scale of potential displacement isn't limited to a few industries. It's the
entire economy. And unlike previous technological shifts where workers could
learn new skills and transition to different roles, AI threatens something more
permanent. How would the world digest this unemployment? (Well, government can
hide the data [Trump's pick to lead economic data agency floats ending monthly
jobs report](https://www.bbc.com/news/articles/czerwl2xee4o).

But context matters. If we had a booming economy with rising consumer
confidence and purchasing power, businesses would hire more people (even
AI-enabled ones) to meet demand.

## The Most Dangerous Part: Feeling Smarter Than You Are

Here's what I think is the biggest risk: AI makes people feel more intelligent
than they actually are. It handles the execution so smoothly that users start
thinking they understand what's happening. They become more ambitious, work
faster, work on multiple projects simultaneously and mistake the AI's output
for their own competence.

**AI might handle 90% of the coding tasks, but it can't do 90% of a developer's
actual job.** Strategic thinking, UX design, architecture decisions, debugging
complex systems, understanding business requirements. These are what
professional development is really about.

AI only works well when combined with real expertise and critical thinking.
This should be obvious, but non-technical users consistently miss this. They
confuse AI output with genuine understanding.

## My Take: Use AI When You Could Do It Without AI

Here's my rule of thumb: **use LLMs for things you could theoretically do
without them**. Don't throw good design principles and security measures out
the window just because AI is involved. AI assistance doesn't excuse sloppy
code or poor architecture.

The illusion of competence might be the most significant risk of widespread AI
adoption. It encourages overconfidence while eroding the deep understanding
necessary for quality work.

We need to be smarter about this. AI is a powerful tool, but it's not magic,
and it's definitely not a substitute for actually knowing what you're doing.
