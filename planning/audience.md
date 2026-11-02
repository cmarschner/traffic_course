# Audience (ideal reader profile)

Decided 2 November 2026. Supersedes the implicit audience of the first draft
(engineering students and practising engineers, see `syllabus.html`: calculus prerequisites,
"six-week intensive for practising engineers").

## Why the audience changes

Simulation and analysis are becoming cheap enough that a decision maker can steer them
directly instead of commissioning a planner to answer each question. Whoever controls the
questions, the objective and the limits controls the outcome. The course should therefore
empower the people who decide, and the citizens who hold them to account, first.
Planners remain essential, but as partners who build and verify the models, not as the only
people who can read them.

## 1. Primary: the decision maker

**Who.** Mayors, city councillors, transport ministers and their staff, heads of city
departments, board members of transport authorities, members of parliament on transport or
budget committees.

**Their situation.**
- Decide, fund and defend. Answerable to voters, courts and auditors.
- Little time; reads in short sessions; needs the conclusion before the derivation.
- Receives forecasts and appraisals from consultants and planners; today often cannot
  question them beyond "is this right?".
- Increasingly able to run "what if" questions on a simulation or an AI-assisted model
  themselves.

**What the course must give them.**
- **Name the objective.** Recognize which objective a study silently optimizes, and choose
  one deliberately: which terms, which prices, which limits (Module 1).
- **Know the contested numbers.** Value of time, value of a statistical life, carbon value,
  discount rate, induced demand: where they come from, how far apart countries are, how much
  each one moves the result.
- **Know the levers and their timescales.** Prices, rules, street design, network, land use;
  what works in a year, what takes a generation.
- **Ask a model the right questions, and recognize a bad answer.** Fixed demand, missing
  induced traffic, unverified simulators, optimizing the metric instead of the goal (Goodhart).
- **Run experiments themselves** with tools they control, and know the limits of those tools.
- **Learn from other countries** what was tried, what it cost, and how it was made politically
  possible.

**Success looks like.** They can read an appraisal summary and say which three assumptions
drive it; they can commission a study with an explicit objective and limits; they can try
alternatives themselves before a meeting; they can explain a decision in terms of W.

## 2. Secondary: the urban and transport planner

**Who.** Transport planners, traffic engineers, modelers, urban planners, consultants;
students heading into these jobs.

**Their situation.** Build the models and appraisals; trained in one national tradition;
often asked to answer questions whose objective was never stated.

**What the course must give them.**
- The full method behind each tool: derivations, calibration, verification.
- The international toolbox, including documents only available in other languages.
- How to make their work steerable and checkable by decision makers and citizens:
  transparent objectives, open models, reported vectors of effects, sensitivity analysis.

**Success looks like.** Their models answer the decision maker's questions directly, with the
objective and assumptions visible, and survive scrutiny from outside.

## 3. Third: the informed citizen

**Who.** Residents, neighborhood groups, parents, cyclists and drivers, local business owners,
journalists, students, NGO volunteers. No transport training.

**Their situation.** Affected by decisions; often consulted late, on a finished plan.
Today they can argue only from conclusions ("this will cause congestion"). Open data
(OpenStreetMap, GTFS), open simulators (SUMO, MATSim, A/B Street) and AI assistants now let
them test a proposal themselves.

**What the course must give them.**
- The same core ideas as the decision maker, in plain language.
- How to read an appraisal or a traffic study, and which questions to ask at a hearing.
- How to build and test an alternative proposal with open tools and data.
- How decisions are made and where they can be influenced, by country (consultation rights,
  participatory budgets, referendums, courts).

**Success looks like.** They can make a concrete, evidence-based proposal, put it in terms
of the objective, and get it taken seriously.

## Consequences for the course

- **Layered depth.** Every module leads with what a decision maker needs (the question, the
  stakes, the levers, the contested numbers, the stories). The method sits in a clearly
  marked layer for planners ("under the hood"), which decision makers and citizens can skip
  without losing the argument.
- **Reading paths per role,** instead of only engineering tracks.
- **Tools the reader controls.** The objective explorer, the logsum demo and future simulations
  are central, not decoration. Each tool states its limits.
- **Teach the limits of empowerment.** A decision maker running their own simulation can be
  misled faster than one reading a report. Verification, Goodhart and honest use of W become
  core content for all three roles.
- **Prerequisites.** No calculus required for the main layer; the method layer keeps it.
- **Capstone per role:** a decision memo (decision maker), a transparent appraisal (planner),
  a citizen proposal (citizen).
