---
title: "Fix DailyRepo Semantic keyword analysis"
date: "2026-01-26T13:22:30-05:00"
tags: ["programming", "opinion", "Dailyrepo"]
---

## Problem

The "TOPICS BY PROGRAMMING LANGUAGE" section on the website was empty. The
service that computes weekly topics was failing, so no new weekly data was
saved for recent weeks.

## Diagnosis

- The backend calls Hugging Face Inference (hf-inference) for embeddings
  and clustering.
- Logs showed repeated HTTP 504 timeouts from the Hugging Face router
  during the weekly topics job.
- Weekly documents for 2026 week 3–5 in `weeklytopicfindings` were missing
  or empty, while week 2 contained data.

## How I Tested

- Triggered the weekly computation locally via a script:
  - `bun run backend/scripts/trigger-weekly-topics.ts --force`
- Verified output in logs and checked MongoDB for new weekly documents.
- Added fallback behavior to keep the UI from going blank when HF fails.

## Findings

- The **root cause** is HF `hf-inference` timeouts (HTTP 504). This is a
  best-effort, shared free service.
- The original logic clustered **all topics globally** across all repos,
  which created large inputs and high failure risk.
- The weekly job could finish without saving if clustering failed, leaving
  the UI empty.

## Solution Implemented

1. **Weekly scope**: only include repos whose `trendingDate` is inside the
   current UTC week.
2. **Per-language clustering**:
   - Build `language -> topics[]` first.
   - If a language has fewer than 20 topics, skip clustering and use raw
     counts.
   - Otherwise, cluster per language with HF.
3. **Fallbacks**:
   - If HF fails for a language, use raw topic counts for that language
     only.
   - If the current week is empty, fall back to the latest non-empty week.
4. **Operational tuning**:
   - Batch size reduced to 4.
   - Concurrency limited to 3 languages at a time.
   - Log summary of languages that fell back to raw counts.

## Result of the New Approach

- The weekly computation completes more reliably on the free tier.
- The UI no longer goes blank; it shows data even when HF fails.
- The output now better matches the "per language" intent.

## Trade-offs

- Cross-language comparability is weaker, because clustering is now per
  language.
- Still dependent on HF for higher-quality clustering; raw counts are used
  when HF fails.

## Accepted Solution and Conclusion

This approach is accepted as a pragmatic fix for free hosting:

- It restores the feature without paid infrastructure.
- It aligns with the per-language analysis goal.
- It degrades gracefully when the inference service is unavailable.

If the project moves to paid or dedicated inference later, the clustering
can be made fully reliable and optionally cross-language comparable again.
