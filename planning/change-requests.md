# Change requests

IDs have the form `CR-<n>-<keyword>`. Numbers are never reused. Status: open · in progress ·
done · dropped. Source "review" = `review-2026-11-02.md`.

| ID | Summary | Source | Priority | Status |
|---|---|---|---|---|
| CR-1-congestion | Remove the double count of congestion: Term A already contains everyone's equilibrium travel time, so q·t′(q) must not also be subtracted in Term C. Keep q·t′(q) as the basis of the toll. Fix Module 1 (Term C table, "Congestion is strongly convex", chart caption, eight-objectives table, Exercise 1.3) and check Modules 3, 4, 7, 10, 13. Same check for transit crowding and severance. | review | high | open |
| CR-2-land | Land counted twice if construction cost K includes land purchase and Term D also charges r·L. State the rule: land in either K or D, never both. | review | high | open |
| CR-3-transfers | Check that taxes, tolls and fares are treated as transfers consistently in Modules 2, 13, 14 (Module 1 is right). | review | medium | open |
| CR-4-objective-levels | Distinguish model objective, appraisal objective and societal objective; reword "the objective most traffic-engineering software minimizes" so it does not straw-man appraisal practice (UK TAG, BVWP, ATAP). Show where the levels conflict. | review | high | open |
| CR-5-positioning | Present the course as a synthesis: cite predecessors (Banister 2008, Martens 2017, ITF 2024, EU SUMP) and comparable teaching (MIT, TU Delft, ETH, TU Dresden). Defensible claim: the subjects are split across courses and institutions. | review | high | open |
| CR-6-countries | Country pages: separate stated objectives, appraisal procedures, design standards and observed outcomes. Countries are institutional choices, not seven philosophies. | review | medium | open |
| CR-7-question | Adopt the central question: why do competent planners in different countries produce different solutions to the same problem, and how much is objectives, constraints, models, institutions? | review | medium | open |
| CR-8-sim-chain | Expand the chain simulation → welfare → optimizer → public decision (with Goodhart, open tools) beyond a motivation for Module 10. | review | medium | open |
| CR-9-sources | Grow the Sources & translations digests into a reference people return to. | review | low | open |
| CR-10-depth | Bring Modules 2–15 to the Module 1 standard and the didactic tenets. Chapter test: where a method came from, what it assumes, what objective it serves, where it fails, what another tradition does instead. | review, author | high | open |
| CR-11-module7 | Module 7 covers nine traffic-flow models in one chapter: split or select. | review | medium | open |
| CR-12-repetition | Remove repetition: logsum re-derived in Modules 2 and 4; external costs recur in Modules 1, 3, 7. Per topic decide: full treatment, recap with link back, or optional box. | review, author | medium | open |
| CR-13-corridor | One running corridor example judged by a capacity model, a Dutch street-design approach and a Singapore pricing approach, with the evidence that would decide. | review | low | open |
| CR-14-verify | Verify facts stated from memory: health chart parameters (RR 0.9 per 100 min, cap 450); TRANSYT details; Braess 1968, LeBlanc 1975, Williams 1977, de Hartog 2010, Nilsson 2004 references; Hansen's career; Pigou's intent (single source); Katy design volume; MCC €275 (2019, transport and heating); Germany's 2021 transport target of 85 Mt. | session | medium | open |
| CR-15-links | External links returning 403 to bots (USDOT, ITF, Légifrance, DOIs) checked by hand; NACTO Urban Street Design Guide URL unverified. | session | low | open |
| CR-16-backlog | Use `story-backlog.md` stories and images in Modules 2–15. | session | low | open |
| CR-17-bike-effort | Logsum demo: the bike's "×2 for effort" time weight is a simplification; explain it (mode-specific time weights) or drop it. | session | low | open |
