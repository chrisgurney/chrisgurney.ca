My approach to design is grounded in my roots as a software developer and as a product manager:

> A design is useful to _nobody_ if you can't get it in your customer's and your user's hands as soon as humanly possible. 

Design Principles
-----------------

The principles I believe in are littered throughout my process:

- **Test All Assumptions.** I've seen enough projects completely fail, that felt like a complete waste (aside from my learnings, of course), because we didn't use true MVPs, or do the research, to test client assumptions along the way.
- **Always Be Delivering.** Whether these are photos of whiteboard sketches, or mockups. Minimum viable features don't have to be fully fleshed out (whatever that means) user experiences. Getting data and feedback is infinitely more valuable. Testing builds confidence. Visualizing gets everybody on the same page.
- **Always Be Testing.** Build confidence.
- **Sketch Everything.** An eraser is cheaper. Visualize everything. Get everyone to _see_.
- **Daily Delivery.** Show the process. Get _something_ out there. It will never be "done".
- **Build Empathy Internally.** Bring back research, and let people experience it. Results in much better buy-in and solutioning. Share research and test recordings (with permission) in dedicated chat channel. Let engineers sit in interviews and tests.
- **Involve Everyone**. Everyone is a Designer - It’s not about throwing finished designs over the wall; it’s a conversation. And the more context they have, and empathy, the better.
  - Participatory Design - "an approach to design attempting to involce all stakeholders (e.g., employees, partners, customers, end users) in the design process to help ensure the result meets their needs and is usable"

Process
-------

<https://trello.com/b/K4irJEgZ/design-process>


---

Project Planning
================

Before getting started, my first step is to understand the context that I as a Designer am operating within.

Key Questions:

- What is the project's scope?
- What are the business's, project's, and technical constraints?
- Who are the stakeholders? 
- How can I integrate into the Development team's process?
- What are the assumptions we're operating under?
- What are the risks?
- What is the company's UX process and how mature is it?


Understand Assumptions
----------------------

What is the business based on? So you can test for them. 
Seen business ideas fail because they aren’t tested.
Determine a _true_ MVP.

Become aware of our own assumptions and biases before interviewing.

🛠 **Tools**: TODO


Stakeholder Analysis + Management
---------------------------------

- Who’s involved?
- Who needs to stay updated and how?
  - Who do I need to bring into design reviews and other activities?
- RACI: Responsible, Accountable, Consulted, Informed
- Issue Tracker: Spreadsheet easier to use than JIRA (and without the overhead), to capture suggestions, bugs (show that stakeholders are being listened to), do triage, and to look for patterns.

🛠 **Tools**: RACI, Issue Tracker, MoSCoW

[Issue Tracker example + columns]


Agile
-----

Agile is a conversation.

Be involved in backlog grooming, retrospectives, and other regular Agile activities.

I prefer to do my design work in one week sprints, to keep myself track on constantly producing deliverables.

I recommend managing Design Team work in a separate JIRA project, separate from the Development Team's sprints, so that: Development can commit to, and completely finish their work for a given sprint; and Design's workflow can be customized and separate from Development's.

The workflow can be as simple as:

- Backlog
- In Progress
- Review - Present to and discuss with stakeholders.
- Done - Ready for implementation.

[kanban board columns: Backlog, In Progress, Review, Done]

🛠 **Tools**: Trello, JIRA, Spreadsheets


---

Empathize
=========

"Understand the user’s context, goals and tasks... through research"
"Analyze the visual context, research best practices and competitive products"

Key Questions:

- What's the problem we're trying to solve?


Research Plan
-------------

- qualitative and quantitative

e.g., Neighbor plan?


Stakeholder Interviews
----------------------

→ What are our assumptions?


User Research / Ethnographic Research
-------------------------------------

- interviews, observation 


User Interviews
---------------

Understand the user’s context, goals and tasks
...through research


Analyze the visual context, research best practices and competitive products

Competitive Analysis

- with a goal: how do competing products solve specific design problem? e.g., ...
- [Article](https://www.toptal.com/designers/ux/product-designer-guide-to-competitive-analysis)
- what does the market look like? how are they positioned? how can we be different?

For existing applications:

- If new to me: Audit + map user flow
- JTBD survey for existing features
- Look at data (SQL, GA), or get in place ASAP





Inspiration

🛠 **Tools**: Style Tiles, Moodboards





Personas
--------

→ Affinity mapping


Jobs to be Done 
---------------

- (Ulwick)
→ Survey for existing features


How Might We
------------

- (IDEO)


Job Mapping
-----------


Journey Mapping
---------------


OOUX
----

[Article](http://alistapart.com/article/ooux-a-foundation-for-interaction-design)

🛠 Card Sorting - "SMEs are given key concepts on post-its, who then arrange them to represent how they see the struture and relationships" -- example of this?


Design Stories
--------------


---

Sketch, Mockup, and Prototype
=============================

"explore different options for UI components needed: look at what's out there, try new ideas and experiment to see how they fit with the existing style guide and brand"
"shape and improve the language of the product for usability and appropriate tone as I go."

Get stuff into tappable/clickable prototype ASAP.

Design Sprint - Around a particular design problem



Diverge and Converge
--------------------

- Crazy 8s
- Affinity Diagramming - "Affinity diagramming helps us shift from casting a wide net in exploring many possibilities, to gaining focus on the right solutions for this audience."


Interaction Design + Animation
------------------------------

🛠 **Tools**: Principle



Establish Design Principles
---------------------------

Core design principles that apply to everything:

- Simplicity
- Reflect/Reuse Existing Patterns
- Discoverability
- Offer Forgiveness
- Provide Feedback


![Neighbor logo](images/design-process/svg/logo-neighbor.svg)

For example, my designs for [Neighbor](neighbor-brand.html)'s UI followed these principles:

- _Findability._ Provide answers to customers on the phone, and make updates quickly. Scanability, search.
- _Performance._ Fast.
- _For humans._ Simple language. No manuals. Flexible workflows.
- _Intentional changes._ 


Voice & Tone
------------

"shape and improve the language of the product for usability and appropriate tone as I go"


Sketching
---------



Wireframes
----------

- review with experts

🛠 **Tools**: whiteboards, pencil/paper, Balsamiq


Mockups
-------


🛠 **Tools**: Sketch, Design Workflow Documentation (Readme)


Rapid Prototyping
-----------------


🛠 **Tools**: Paper, POP, Sketch (paste sketches into Sketch and setup a prototype), InVision


Rich Prototyping
----------------

- Only as necessary.
- e.g., Nintendo user test

🛠 **Tools**: Sketch, InVision


Atomic Design
-------------

"explore different options for UI components needed: I look at what's out there, try new ideas and experiment to see how they fit with the existing style guide and brand"

Atomic Design - Brad Frost

- look at existing design systems


Design Readme
-------------

[Article](https://www.notion.so/Design-README-Template-8282d52492d34c4a8aace9a04ab2e294)


---

Test
====

User Testing
------------

- In person: Task-based testing

Usability Test
--------------


Design Reviews
--------------


Measuring
---------

Tools used here depend on the maturity of the product or feature.

- FullStory
- Google Analytics (conversion funnels at scale)
- application DB → configuration usage

🛠 **Tools**: Google Analytics, FullStory, application database

Tracking Plan

e.g., Fanergy Tracking Plan


Regular Reporting (Audit)
-------------------------

Accessiblity, Performance, ...
Identify Improvements


Feedback
--------

- Issue Tracker: Spreadsheet easier to use than JIRA (and without the overhead), to capture suggestions, bugs (show that stakeholders are being listened to), do triage, and to look for patterns.

🛠 **Tools**: Issue Tracker, MoSCoW

[Issue Tracker example + columns]



---

Deliver
=======

Design Requirements
-------------------

- behavior, data requirements


Prepare Assets
--------------


🛠 **Tools**: Nucleo, ImageOptim


Define Guidelines / Style Guide
-------------------------------


Accessibility

- Interpret WCAG, decide on level and implementing approach.
- Audit regularly with tools, test otherwise.

Localization

- Review designs with localization stakeholder, it present.
- Ensure elements don’t run into one another.
- Audit regularly with tools, test otherwise.

Prioritization

- tactical (day-to-day)
- story map with PM - across the user journey

Project Documentation

