---
title: "I Didn't Think I Would Actually Build It"
date: "2026-08-28T21:06:19.950Z"
category: "monologue"
tags: ["project"]
---

## THE WIND

I have been working on something while the wind was not as warm as it is in the
summer. It reminds me of the umpteen times I had to reconsider the project
direction, refactor and redesign modules in deliberative arguments with myself
until my head hurt from the inside. I have tried to give up and pause the
development indefinitely but I picked it up the next day.

It could have been a project where I familiarized myself with a new tech stack
gradually but I turned it into a challenge by going further than all similar ones
I found on GitHub. I cannot simply fool myself into thinking that I enjoy the process nor
deny that I somewhat like it.

Developing it alone as a new grad is like finding a spot to land in space where
planets are so distant that a week of work seems like zero displacement.
Despite this, I managed to land it midway on the correct path where it is not
ready to be announced but befitting my own need.

Looking at it now still makes me smirk a little. It started with something far
less amusing: my resume.

## THE IDEA

My resumes are all written in LaTeX. I was told in co-op prep class to tailor
each bullet point to the job description and repeated this process for each
role. I spent more time on wrestling with word choice and condensing each
point than looking for more roles. My resume had less on it back then, yet
still ate all my time. Then I started to imagine what if there exists an oracle
that reads one's mind and produces the best-fitting resume given an arbitrary
job description.

I began working on the idea as soon as the co-op ended. It needs to be a
desktop application to access the file system, zero data retention meaning zero
dollars for storage, cross-platform. It has to use LLMs to interpret semantics.
Then two main components were set to be Electron and React.

The initial concept to create a resume consisted of two paths, accepting PDF or
Word document uploads or choosing an existing one as a base. Given job
descriptions, one model from a chosen provider reads and parses it into a
template structure, then tailors it. A checklist is also parsed at the same
time from the job description that tells me what keywords are missing.

The parsing result resembles the uploaded file word for word. However, the
tailoring result contains many keywords and experiences that I didn't have.
The quality of the AI-tailored resumes is solid and sound if embellishment and
dishonesty were acceptable and passing ATS was the priority.

No matter how I changed the system prompts, the fabrication in bullet points was
still present. AI does not know all my experiences, meaning one uploaded resume
alone is insufficient for LLMs to know what experience to highlight to fully
demonstrate one's capabilities.

To me, it was no better than what a new grad with an AI subscription
might produce in one afternoon. And many other projects had already
achieved comparable results. Most importantly, I wanted speed and accuracy, no
tolerance for fabrication and dishonesty. Stopping here meant I created
something I would not even use.

But what if, instead of showing AI the finalized bullet points, I were to give
a short background story to each point along with skill keywords? Then when AI
derives final points, more information is in its context, resulting in higher
accuracy.

## THE BEYOND

The answer took days of designing before it had a name: the inventory, a list
of augmented bullet points in STAR format for each experience. On paper it was
one small concept. In the code it changed almost everything.

For a while the old paths and the new idea lived in the same codebase. I had
to decide what UI presents an inventory, how the main workflow should be
designed, where the old ends and the new begins.

The checklist, the one feature that already worked, had to go for now because
the new design it depended on did not exist yet. Then came a question: does the
inventory belong to the app, or to a profile? My answer was to build
profiles: basic information, willingness to relocate, citizenship, emails, plus
all the experiences in STAR format, education, certificates, projects. One
question, one new subsystem. My head hurt. One idea spiraled into so many others.
I still do not know whether I moved too fast or thought too much, or both.

The generation workflow is a chain of small tasks, so I tweaked the prompts,
changed what each task accepts and returns, added new tasks just to keep the
context clean, and validated the result of every step. Every inventory point
chosen for a generation gets an ID on the fly, and when the results come back,
one invented ID is enough to stop the workflow and mark the whole run failed.

The checklist came back different too. Instead of a flat report of missing
keywords, it now interprets the entire job description into requirements,
responsibilities, and nice-to-haves, each with its own condition: a partial
match when the posting says "or", a must-have when it says "must". Every final
bullet point now traces back to the exact inventory bullets behind it, as
evidence.

Weeks, maybe a month of work, and the place to land looked no closer. But when
I ran the new path over and over, I could not find fabrication at all. Not
once. This was a closer resemblance to the oracle, close enough that I removed
the two generation paths that used to be the core of the app, along with the
old tailoring that lied. The project had pivoted toward something I could no
longer find on GitHub.

Then the new problems introduced themselves. The resumes are honest now, but
keyword-heavy and thin on narrative. Soft skills, the communication
requirements every posting asks for, are barely demonstrated and sometimes not
even selected. Sending each experience through the workflow asynchronously with
the full job description is the performant choice, but it gets a local maximum
for every experience and misses the global maximum of the entire resume. Nothing
yet reads the finished page and judges it as one piece.

## THE PRESENT

I was never interested in building a resume tailor. It is just that none of
what is out there is good enough unless passing ATS is the only goal. The app
still produces resumes that I have to step in and tailor by hand, but it is
closer to the goal than where it started.

All the failed attempts and smaller problems are omitted from this blog to
keep it coherent, and most of them will probably be forgotten anyway. In a
team or a collaborative environment, failed attempts are spread across
people. Working alone, I got to see every single one of them. WD-40 took 39
failed experiments before the name stuck: Water Displacement, 40th formula.
My weeks of zero displacement were in good company. What I went through isn't
exclusive, and I can handle it better the next time.

Speaking of the next time, maybe I will end up somewhere similar, just
skipping the problems and avoiding the mistakes I made previously. But things
will be different enough that there isn't really a next time. The difficult
part is always the same: making decisions, designing the system, balancing
tradeoffs, dealing with problems that have no good solutions. When something
has a mature solution, I can learn from the people who already solved it. On
something hard and alone, there is no one to copy from, so new problems and
new mistakes will come. The app improved because I did.

Solutions become obvious, even effortless, when I look back and connect the
dots of the failures and refactors. This is the part where I like it, seeing
the views from the mountain top, glancing at the path I took and the pitfalls I fell
into and _Smirk_.

The wind is colder now. Time to land somewhere myself.
