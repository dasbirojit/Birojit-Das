# Validation — 1 October 2026

- TypeScript check passed.
- Desktop preview visually inspected at 1348 px; root client width and scroll width both 1348 px.
- Responsive phone rendering visually inspected using same-origin frames with CSS widths of 390 and 320 px. Actual content viewports were 373 and 303 px after borders and scrollbars; document scroll widths matched, with no horizontal overflow.
- Desktop publication search for Filomat returned one published article. Manuscript status filter returned only the manuscript.
- Desktop course topic search for pumping returned Theory of Computation. A nonexistent search returned the empty state. Clear filters restored all 12 records.
- Institution filter for NIT Agartala returned six records. Combining it with Course taught returned four records. Expanded details showed the correct Theory of Computation topics.
- Mobile navigation opened, then closed on selecting Publications. Mobile publication search for neutrosophic returned the manuscript. Mobile course-code search for MATH712 returned the matching course.
- No invented DOI links, biography facts, portraits, or publication totals. Pending facts are visible. Manuscript publication status and Ph.D. institution remain unresolved.
- The temporary layout-validation route was removed before the production build.
- Browser extension metadata errors were unrelated to the application. No blocking application failure observed in the preview.

## Profile and GitHub Pages update — 1 October 2026

Photo loaded on desktop and both phone widths; appointments and WhatsApp link verified. Standalone GitHub version: desktop content width and scroll width 1348px; phone frames 390px and 320px yielded content widths 375px and 305px, both matching scroll widths. Private React version at a 390px frame yielded 375px content/scroll width. No horizontal overflow. Native publication status and institution/record-type filters tested; Filomat + 2021 search gave 1 of 2; manuscript filter 1 of 2; no-match empty state and resets passed. Combined NIT + course taught 4 of 12; Picard topic search 1 of 12; syllabus filter 2 of 12; MATH712 mobile search 1 of 12. Course details expanded. Mobile navigation opened and closed on link selection. Exact academic IDs pending. Temporary QA pages removed before packaging.
