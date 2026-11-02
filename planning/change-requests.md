# Change requests

IDs have the form `CR-<n>-<keyword>`. Numbers are never reused. Status: open · in progress ·
done · dropped. Source "review" = `review-2026-11-02.md`.

| ID | Summary | Source | Priority | Status |
|---|---|---|---|---|
| CR-1-congestion | Remove the double count of congestion: Term A already contains everyone's equilibrium travel time, so q·t′(q) must not also be subtracted in Term C. Keep q·t′(q) as the basis of the toll. Fix Module 1 (Term C table, "Congestion is strongly convex", chart caption, eight-objectives table, Exercise 1.3) and check Modules 3, 4, 7, 10, 13. Same check for transit crowding and severance. | review | high | done |
| CR-2-land | Land counted twice if construction cost K includes land purchase and Term D also charges r·L. State the rule: land in either K or D, never both. | review | high | done |
| CR-3-transfers | Check that taxes, tolls and fares are treated as transfers consistently in Modules 2, 13, 14 (Module 1 is right). | review | medium | done |
| CR-4-objective-levels | Distinguish model objective, appraisal objective and societal objective; reword "the objective most traffic-engineering software minimizes" so it does not straw-man appraisal practice (UK TAG, BVWP, ATAP). Show where the levels conflict. | review | high | done |
| CR-5-positioning | Present the course as a synthesis: cite predecessors (Banister 2008, Martens 2017, ITF 2024, EU SUMP) and comparable teaching (MIT, TU Delft, ETH, TU Dresden). Defensible claim: the subjects are split across courses and institutions. | review | high | done |
| CR-6-countries | Country pages: separate stated objectives, appraisal procedures, design standards and observed outcomes. Countries are institutional choices, not seven philosophies. | review | medium | open |
| CR-7-question | Adopt the central question: why do competent planners in different countries produce different solutions to the same problem, and how much is objectives, constraints, models, institutions? | review | medium | done |
| CR-8-sim-chain | Expand the chain simulation → welfare → optimizer → public decision (with Goodhart, open tools) beyond a motivation for Module 10. | review | medium | done |
| CR-9-sources | Grow the Sources & translations digests into a reference people return to. | review | low | open |
| CR-10-depth | Bring Modules 2–15 to the Module 1 standard and the didactic tenets. Chapter test: where a method came from, what it assumes, what objective it serves, where it fails, what another tradition does instead. | review, author | high | done |
| CR-11-module7 | Module 7 covers nine traffic-flow models in one chapter: split or select. | review | medium | done |
| CR-12-repetition | Remove repetition: logsum re-derived in Modules 2 and 4; external costs recur in Modules 1, 3, 7. Per topic decide: full treatment, recap with link back, or optional box. | review, author | medium | done |
| CR-13-corridor | One running corridor example judged by a capacity model, a Dutch street-design approach and a Singapore pricing approach, with the evidence that would decide. | review | low | open |
| CR-14-verify | Verify facts stated from memory. **Done 2026-11-03** for HEAT (formula corrected to HEAT's linear rule with cap), TRANSYT (one secondary source), citations, Pigou/Knight/Walters (corrected), Katy (quote reattributed to Tim Lomax 2014; 36→21 min sourced to Houston Press 2008), MCC (corrected: €130 for Germany 2019; €275 EU-wide 2021), KSG 85 Mt, fuel taxes, UBA, US SCC ("set aside"). **Still open:** Hansen's later career (lead: HRB Bulletin 347, 1962; Voorhees?); "father of SCATS" label for Arthur Sims (use "led its development", Sims & Dobinson 1980). | session | low | in progress |
| CR-15-links | External links returning 403 to bots (USDOT, ITF, Légifrance, DOIs) checked by hand; NACTO Urban Street Design Guide URL unverified. | session | low | open |
| CR-16-backlog | Use `story-backlog.md` stories and images in Modules 2–15. | session | low | in progress |
| CR-17-bike-effort | Logsum demo: the bike's "×2 for effort" time weight is a simplification; explain it (mode-specific time weights) or drop it. | session | low | done |
| CR-18-audience | Rewrite the audience statements for the three roles (decision maker, planner, citizen; see `audience.md`): "Why this course" in the introduction, About page, syllabus prerequisites and README. | author | high | done |
| CR-19-paths | Replace the engineering-only tracks in the syllabus with reading paths per role (decision maker, planner, citizen), including time needed. | author | high | done |
| CR-20-layers | Layered depth: each module leads with question, stakes, levers, contested numbers and stories; derivations and calibration move into a marked "under the hood" layer. Define the visual convention once, apply with CR-10-depth. Decide how far Module 1's logsum derivation becomes such a layer. | author | high | done |
| CR-21-steer | "Ask the model yourself": tools a non-specialist can steer (extend the objective explorer; simple simulations), plus a guide to questioning a model or a consultant: which assumptions to demand, red flags, how to check an answer. Connects CR-8-sim-chain. | author | high | done |
| CR-22-citizen | Citizen toolkit: reading an appraisal or traffic study, questions for a hearing, building and testing an alternative with open data and tools, where decisions can be influenced by country. | author | medium | done |
| CR-23-capstone | Capstone variants per role: decision memo, transparent appraisal, citizen proposal. | author | medium | done |
| CR-24-logsum-intuition | Module 1 keeps the intuition of the logsum (demo, shares, value of choice, money, destinations, formulas at the end, check box, worked example); the six-step derivation moves to Module 4, section 4 ("Random utility, step by step", anchor `#random-utility`). First application of CR-20-layers. | author | high | done |

## Status notes (2026-11-03, overnight run)

- CR-1/2/3: Module 1 fixed by the editor; Modules 2–15 by revision agents following `agent-brief.md`. Grep check: no text subtracts congestion in Term C.
- CR-10/12/20: every module now has an In brief box, a main text and Under the hood boxes (Module 15 has none by design). Repetition reduced along the ownership table in `agent-brief.md`.
- CR-16: stories used in Modules 2, 4, 5, 7, 9, 12, 13, 14; Module 11 had none usable. Remaining items stay in `story-backlog.md`.
- CR-21: explorer shows switching values; Module 10 sections "Questioning a model" and "Running your own what-if".
- Open items found during the run are in `overnight-2026-11-03.md`.

