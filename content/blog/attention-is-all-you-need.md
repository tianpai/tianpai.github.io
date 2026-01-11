+++
title = "Attention is All You Need, Understanding is All We Missed"
date = "2026-01-11T16:28:58-05:00"
tags = ["programming","opinion" ]
+++

Looking back, 2025 is the year where agentic programming took off. Maybe the
models themselves are incapable of handling tasks on their own and LLM
providers need a way to interact with programs in real time. Some LLMs are
focused on coding more than others. Coding itself is difficult since programs
have to compile and run.

Each model performs differently in different languages. In a language test
benchmark by Tencent, the best language LLMs perform in is Elixir. I haven't
had a chance to look into the reason, but it's not TypeScript, it's a
functional programming language. Perhaps functional languages with strong type
systems and immutable data give LLMs more constraints to work within. Fewer
ways to be subtly wrong.

After I finished my co-op in December, I had a different experience. Everyone
is using AI for some tasks and I felt that the fun from solving a problem and
then learning something goes away. My brain is not getting rewarded. I felt we
are becoming bricklayers. We just prompt, wait, see it works, then move on to
the next. The code, even written by Claude Opus 4.5, is getting ugly and
disgusting when I review it. Extremely long components. No code reuse. LLMs
don't refactor, they just make a new one, the exact same thing. Interfaces,
types, structures, class names, all over the place! The model has no memory of
what's outside its context window, so it reinvents constantly when the
exploration agent provides lower quality results. You end up with a codebase
that looks like it was written by a team of amnesiac contractors who never
talked to each other.

Then we have different things to save it, like SKILL files in Claude, which are
just markdown files to tell Claude or some other LLM what to do in a specific
case, to overwrite the default or most probable behavior. More scaffolding to
manage the tool. Whether that's a reasonable tradeoff or a sign we're papering
over fundamental limitations is worth asking.

Later, Anthropic doubled usage limits on the Max plan during Christmas, and
everyone is running to hit the limit. We do what humans are best at: getting
the most out of what we paid. Prompt after prompt; where is all the learning
and joy after a problem is solved? Where is the understanding?

Like Linus Torvalds said in the Linus Tech Tips video (yes, the two Linuses
finally met each other): the genie is out of the bottle. We as developers have
to find a way to deal with it. It doesn't have to be a lament if we change the
current usage of AI.

It's not good for junior devs. The world needs senior devs, but they were once
junior devs. If juniors skip the struggle, where do seniors come from? The
development world needs to start thinking about talent nourishment and giving
opportunities to these people, not short-term corporate greed. It will hurt
them in the long run.

"Attention is All You Need" and understanding is all we missed.
