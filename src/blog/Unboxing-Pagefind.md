---
title: "Unboxing Pagefind for this blog site"
date: "2026-03-14T19:21:45-04:00"
category: "technical"
tags: ["unboxing", "search", "PageFind"]
---

After I migrated my blogs from Hugo to Astro and got the new design done, I was
looking for a way to search for something. I do not want to have any backend for
search to work. Then I found [Fuse.js](https://www.fusejs.io) and
[Pagefind](https://pagefind.app).

`Fuse.js` does not provide an easy way to generate a data set for searching.
Their examples are all based on predefined data. Either they do not provide
documentation on how to use it in a static site, or they imply that developers
should generate the search data set themselves.

`Pagefind`, on the other hand, takes care of tokenizing the content, creating
the index, and storing the search data.

To fit the minimal and text-based terminal-like blog, their [default
search UI](https://pagefind.app/docs/ui-usage/) was not considered.

```Bash
npx -y pagefind --site ./dist
```

This command scans the generated HTML files inside `./dist`, reads the content on
each page, and builds a search index for the site. Since Astro already outputs
static files, Pagefind can work directly on top of that.

I might consider adding more features to search, for example,
[highlighting](https://pagefind.app/docs/highlighting/) on the destination page,
if I do keep posting more, though.

Searching is also simple. On the client side, I only need to load the Pagefind
script and call its search API when the user types something. The general flow
is straightforward:

1. Wait until the user enters a query.
2. Send that query to Pagefind.
3. Get back matched pages.
4. Render the result list in the custom UI.

I did not do much configuration (yet). Thanks to how well it worked out of the
box, I was able to add the search feature in one sitting. It still took about
four hours from having the idea to getting it deployed. Overall, I’d rate the
experience 8 out of 10. The missing two points are mostly about UI ergonomics
rather than Pagefind itself. In a plain Astro page script, the search logic is
a bit more manual and DOM-driven than I would like. If I revisit it, I would
probably move the search UI into a small island component for cleaner state
management and more natural TypeScript. But that’s another story. I can already
feel the irresistible urge to refactor it into a small island component, mostly
just to make the code cleaner. ~~(Maybe I’m just overthinking the structure a
little.)~~
