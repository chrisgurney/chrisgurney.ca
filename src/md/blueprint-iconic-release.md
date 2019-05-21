> I published this in November 2007 when Blueprint Requirements Center was a Windows desktop application (it has since been updated as a web application). I acted as Project Manager, and worked with an outside design firm.

![Blueprint RC2008 screenshot crop.](images/portfolio/blueprint-icons-rc2008.jpg){: .col-12 .my-3}
Some poor-resolution screenshots of Requirements Center 2008, showing just some of the 250 icons and their decorators that we had to conceive and iterate on with our design partner. 
{: .figure-caption .text-center .mb-5}

Our latest product release was a big one for our company.

While providing an important, fresh set of features, it also visually marked a turning point in the design of our application. Compared to the previous version, the new release had a more modern look-and-feel to it and relied on updated technology, such as a brand new windowing framework.

As a result, it became apparent that we needed somebody to direct the redesign of all of the icons and graphics, as things would have looked very much out of place on top of our shiny new toolbars. That somebody had to identify all 250 icons, work with somebody to refresh what we had, and help to come up with design ideas for the new features we were adding.

As it turned out, that somebody was me.

## Hiring Help

We decided early on in the process that we wanted to get help from a qualified design team outside of our company to actually implement our graphics.

To this end, our SVP of Research & Development proceeded with a procurement process to look for skilled designers. Our goal was to work with a local firm that had prior experience with application graphics design, with immediate availability, and sufficient resources to get everything done within our time-lines and budget. The trick was to find somebody that fit this profile.

It turns out that there's a professional body known as the [Association of Registered Graphic Designers of Ontario](http://www.rgdontario.com){: target=_blank_}. Through their web site, companies can submit RFPs for various design projects, such as ours.

Fortunately, after examining our particular requirements, we were approached by the talented guys at [Swerve Design](http://www.swervedesign.com/){: target=_blank_}. Swerve's credentials and portfolio spoke for themselves, making the decision to work with these guys a no-brainer.

## Selecting a Starting Point

In our first meeting with Swerve, we aimed to establish the scope of the project, ensure that our requirements were well-understood, and requested an estimate. After seeing the numbers they responded with as a result, we decided to proceed.

We followed this up by providing a demonstration of the existing product, which gave the team a point of reference. Then came the all-important question of deciding where to begin our work.

At the time, if you were to take a glance at our existing product, you might have thought that it had, at most, 50 icons. After peeking under the window panes and looking behind the wizards, however, you would have uncovered close to 250 icons and images. And that number, it should be noted, didn't include the various "states" -- such as "on" and "off" -- that some icons might have had.

Fortunately, there was a logical starting point: In our application we have a tree control -- akin to the Windows Explorer -- that lets you navigate to many portions of the application. This provided a very nice cross-section of the icons and themes we needed, so it made sense to make this the starting point.

From there we broke down the remaining portions of the application by functional area. This allowed graphics to be implemented in batches and presented back to us in context, in the areas of the application where they would all be grouped together, visually.

Organizing by functional area also helped to prioritize our work: If we had run out of time, or had reached our anticipated budget ahead of time, we could have always fallen back on existing graphics in the areas of the application that were used less frequently.

## Tracking Things

To keep track of the hundreds of elements scattered throughout the application, it quickly became apparent that we needed to establish a formal management process. To handle this, I started to assemble an inventory of all of the icons and graphics in our software.

At first, this appeared to be a daunting, not-so-fun task. There was no practical way of automatically generating such a list from the source code. Early in the process I didn't have a handle on the new functionality we were introducing, nor had certain functional areas been enabled in the builds that I was provided with. On top of that, where new features were involved, there was no existing point of reference.

Fortunately, as I started to make lists, the project started to feel more structured, and a lot more manageable.

For each graphical "thing" in the product, we tracked a number of different properties in a spreadsheet. Here's what worked well:

* **ID.** Using row numbers to refer to individual items doesn't work, as they could be potentially removed from the spreadsheet, messing up the numbering of subsequent items. A unique number ensured we were always talking about the same things, and became especially helpful when communicating, which was done primarily over the phone.
* **Functional Area.** This answered the question "Where in the application does a this thing live?". Even if the thing was used in more than one place, it was listed out as a separate line item. Not only did this ensure we didn't miss anything, it also allowed me to do a little bit of sandbagging, when it came to estimating the remaining work.
* **Item/Name.** What is this thing called?
* **Type.** What kind of thing is it: A toolbar button icon? A graphic? A splash screen? Based on the type, we could make a general statement about what it was. For example, "Wizard Graphics" were all designated as being PNG images, 72 by 64 pixels, with a white background. "Toolbar Icons" were all PNGs, 16 by 16 pixels, transparent background, with two states (enabled and disabled).
* **Priority.** How important was it to have this thing created? The majority of graphics were mandatory and would result in a visible hole if they weren't created. However, there were other, less-used areas in which we could get away with using a placeholder image, or re-use existing graphics without compromising the overall look-and-feel. If we couldn't complete these areas in time, they would be less noticeable.
* **Status.** How far along are we in creating this item? This provided an easy way to keep management updated, and identify where the road blocks were. Here are the various states we used:
	* *Drafted*: We received a mock-up from the design team.
	* *Signed off*: We approved a given design (which may have taken several iterations to arrive at).
	* *Delivered*: The creative team has provided us with the raw image, ready to be incorporated into the product.
	* *Sent to Development*: Submitted to our version-control system, and Development has been notified.
	* *Implemented*: It's made it into the product, by validating it exists within a build.

## The Design Process

The hard part is coming up with the concept for an icon in the first place. In general, here's the thought process we went through for each graphical element:

1. Identify an object (noun), on which the user will perform actions (verbs). For example, we have the concept of "models", "projects", "simulations", and "tests".
2. Come up with a graphic that best represents the object. Some of these things may conjure up an image in one's mind. A "test", for example, may bring to mind an image of a science lab flask or test tube. A "simulation", within the context of our application, is like playing a movie about the application you're prototyping; so in our case, it made sense to use a graphic of a filmstrip.
3. On top of those graphics you drop on "decorations" to represent the actions the user can perform on those objects, such as Add (green plus), Delete (red X), or Open (curved arrow).

If we couldn't conjure up a better design for an existing element, our fall-back plan was to simply redesign the icons we already had. In addition to saving time, this had the benefit of maintaining some level of familiarity for existing users.

Graphics came back from the design team in batches. This was either in a series of screenshots, or in single images that contained a series of icons. Seeing icons individually it's hard to put them in to context and tell what works, so it helps to see them next to their neighbouring icons, even if it's only within a mock-up.

The next challenge was to incorporate feedback and iterate on the design, if necessary. Whether you're designing a full-blown application or a seemingly simple, little icon, everybody has their own opinions. Here's what I learned:

* The fewer cooks stirring the pot, the better. Limit the size of the review team, or shorten the time allotted when dealing with larger groups.
* There are cases where, no matter how hard you try, there's always somebody who isn't going to be happy.
* Present new ideas in the context of old ones, to provide a point of reference.
* Deadlocked? Try to come up with multiple options and have people vote on the best one. At least you will have shown that you've considered alternatives.
* As I've learned with traditional web design, gathering and incorporating feedback can be the most time-consuming aspect of the overall design process. In this sort of project, however, this aspect is magnified due to the sheer number of graphics.

Once reviewed, a change request list was drafted up for each batch, and handed back to the design team.

Once signed off, graphics were handed over to the development team, through a version control system. While I don't need to remind you how helpful a version control system is, it became especially important here since graphics tended to go through multiple iterations, and provided us with a means at recovering previous work.

## Closing Thoughts

At first, it may seem daunting to start in on a large redesign project such as this.

So, take my advice: Find a great design team (Thanks Swerve!), maintain a list of everything, focus your feedback cycles, learn from what I've noted here... and you'll be set. In the end, you'll be rewarded with seeing the finished product on the desktops of your users.

And hey, if nobody likes your icons, there's always the next release!