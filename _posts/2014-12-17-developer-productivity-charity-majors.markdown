---
layout: post
title:  "Charity Majors of Parse at Facebook"
date:   2014-12-16 14:00:00
categories: posts
tags:
- tech
- productivity
---

Developer productivity is not all about how many lines of code you can write in a day and it’s not about how fast you can complete a given task. In truth there’s no one trait or silver bullet that will help you become a more productive developer. It’s a combination of the practices, tricks and tools that you employ to improve software quality and delivery every day. 

At Bowery, our goal is to enable stronger and more productive developers. So we set out to get advice from the most talented and productive developers we know on how they manage their time to stay on task and productive. To kick off the series, we spoke with [Charity Majors](twitter.com/mipsytipsy), a Production Engineering Manager at [Parse](https://parse.com/), a mobile app platform for developers which is now a part of [Facebook](https://code.facebook.com/). Charity has a ton of experience deploying large systems at scale and she also happens to be one of the funniest people in DevOps--no easy feat. After working at a small startup and transitioning to Facebook, Charity has great advice for how to stay productive and work better with your team. 

### What is your title?

I am currently a Production Engineering Manager at Parse, which is now part of Facebook.  Parse provides a fully featured backend as a service for mobile developers, and Production Engineering at FB is like a hybrid Software Engineering and Ops role.  Before the Parse acquisition I was the first Site Reliability Engineer hired at Parse.  I have also been called a Sysadmin, a Systems Engineer, a Release Engineer, a DBA, a Data Monger, and a really shitty software engineer.

### What was your first engineering job? What's the one thing you learned there that you look back on today?

My first engineering job was running systems and networks for the University of Idaho when I was 17.  I felt *so* unqualified and was so terrified of being "found out" that I worked five times harder than I needed to.  I would pound away on a problem all night instead of asking for help, which was frankly dumb and held me back.  

Now I *love* asking dumb questions!  Especially now that I'm managing a team.  I love modeling an environment where it's okay to ask dumb questions and not know all the answers.   It’s really okay, nobody else knows what they’re doing either.


### What are three qualities that make you great at your job?

I am stubborn as hell.  I am hardly the best computer scientist in the world, but if I decide to fix a thing or figure out a thing it will get done.  

I'm really good at firefighting and staying cool in the middle of a crisis.  I never panic or freak out and make bad decisions, even under extreme pressure.  

I think technology is inherently hilarious.  The internet is held together by spit and baling wire and unicorns and dreams and ridiculous bugs and it’s amazing that it ever works at all.   We’re just monkeys pushing bits around.  Ops can be really stressful and high pressure, and remembering how ridiculous everything is can help you keep your sanity and perspective.


### What are some tactics you’ve developed that help you manage systems effectively?

There are the obvious things, like automate everything.  Treat your infrastructure as code.  Treat your services as naively as possible.  Care about as few things as possible.  Build resiliency into every layer.   But everybody knows this by now.

Honestly I feel like engineers tend to answer every problem with more software.  Have a problem?  Let’s write more software!  I think this is completely backwards.  By adding more software you are adding more opportunities for failure, more things you have to understand and debug and be an expert in.  I believe in using as little software as necessary to solve the problem, and reusing solutions as often as possible.

Sometimes your problem really is a special snowflake and you need to write custom software to solve it, but this should be a last resort, especially for anything that isn’t your absolute core business.

Also?  Take vacations.  Make your people go on vacation.  We call vacation time “chaos monkey for humans” and it really is the only way to make sure your human systems are redundant and refreshed.



### What are some best practices you’ve developed to work better with your team?

Software is mostly terrible, and ops is where design meets reality.  We don’t run services; we build architecture, and empower developers to run their own services.

I feel really strongly that developers should deploy their own code.  The person who wrote the code will always have the most context on what changeset is going out, what the dependencies are, and which graphs to watch.   Developers write better code when they are exposed to the production impact of the changes they are making.  Deploying and alerting create a virtuous feedback loop that both empowers developers to move quickly and educates them on the consequences of their code.

We practice blameless post mortems.  In addition to post-morteming any production impacting event, we have a weekly meeting where we run through any open followup tasks and figure out why they haven’t been closed out yet.  Are there blockers? Is it outside the scope of a followup task? Is it something we actually don’t need to do?  This meeting has been highly effective at getting people to complete their followup tasks because *nobody* wants to go to yet another meeting.

Speaking of which: minimize meetings, for the sake of all that is unholy.  Make meetings optional.  If you don't feel like a meeting is worthwhile, don't go!  *Vote with your feet!*



### How do you (how does your company) measure your own productivity or that of your team?

Every six months we set aggressive goals for ourselves as a team.  And then we hold ourselves accountable for reaching those goals six months later.  We don't expect to hit all of our goals -- things change all the time!  It’s more important to be flexible and focus on impact than to hold yourself to accomplishing what you thought was going to be important six months ago.

“Focus on impact” is one of Facebook’s big catchphrases but I actually think it’s really valuable.  If an engineer writes some elegant framework that doesn’t solve a real problem, or nobody else wants to use it, that is way less valuable than if they wrote five ugly lines of bash that remediates some problem that keeps waking engineers up at 2 am.

Setting goals is about figuring out all the things you are going to say no to.  Any time you choose to do a thing, you are implicitly choosing not to do twenty other things with that time.  You can either get really ruthless and explicit about choosing what not to do, or you just slide into constantly reacting to events.   Not saying no is the best way to get trapped in a state of constant firefighting and burnout and never reaching your goals.



### One frustrating thing for developers is often maintaining technical debt. How do you and your team manage proper maintenance of high-quality code at Parse and Facebook?

We do a lot of cross-functional code reviews and system design reviews with the backend software engineering team.  There’s a lot of skill set overlap, but generally speaking they push us on code quality, unit tests, and safely handling data.  We push them on building maintainable and scalable systems.

But culture has a HUGE role to play here.  Do you have a culture of calling out and rewarding the people who do the dogged, unflashy work of tracking down hard bugs, cleaning up old code, responding to customers, keeping unit tests green and the build pipeline rolling?  Or do you only praise and promote people for shipping shiny new features?  You need to sing out and recognize your heroes.

At Parse we have a Tiara of Technical Debt and a Wand of Developer Satisfaction that we periodically award to engineers when they go way beyond the call of duty in cleaning up old code or responding to challenging customer complaints.  Everything is better when you make a game out of it.


### What are some tools you and your team use to maximize productivity?

Most “productivity tools” are terrible time sinks.  I personally prefer a notebook and sparkly pens for my todo lists but I reluctantly concede that this solution does not scale.

We use [Github](http://github.com/) and [Phabricator](http://phabricator.org/) for code reviews, which everyone is pretty happy with.

For task tracking and project management, we use the [Facebook Tasks](http://www.quora.com/How-does-Facebook-track-tasks-internally) tool a lot.  It’s similar to Asana (Asana was founded by former Facebook employees and "Tasks" engineers.)  It’s a very simple, stripped down minimal set of features for collaborating with other engineers and teams.  Task tracking tools are mostly good insofar as they increase transparency and ambient awareness of what’s going on.

I feel like the most important productivity tool of all is cultivating a consciousness of what it takes for you do your best work, and creating that environment for yourself.  Like, I can’t take interruptions when I’m writing code.  The context switching is incredibly expensive for me, so I’ll find a quiet room, log out of chat, or work from home.  You have to be aggressive in carving out the space and time you need to be successful.  Nobody’s going to do that work for you.

One trick I use is, I have different Pandora channels devoted to different types of work.  I have one channel that I only listen to while writing code, another for digging in to systems problems, another for working on slides or docs or presentations, another for writing emails.  It's a cue that helps me slip into the right frame of mind and brings me back to what I'm supposed to be focusing on.


### What is a big challenge that you overcame in your engineering career?  

Lately my biggest challenge has been learning how to be effective at a big company.  It’s a totally different skill set than being effective at a startup.  I have avoided large companies my entire career, but when Parse got acquired I went from working at a 25-person startup to an 8000-person corporation.  The culture shock was intense.  Working at a large company requires so many more intangible people skills like negotiating, marketing your projects internally, representing your team and your product in a way that benefits them and gains them recognition, etc.  There’s so much more overhead just to keep everyone working together smoothly.  But there are some goals that only big companies can tackle, so I do think it’s a skill set worth learning.  We now have access to some of the best engineering resources in the world if we can just figure out how to leverage them.

I’m also super proud of the work I did on the early days at Parse.  When I started on Parse I had never used AWS, Chef, MongoDB, Redis, Ruby & Rails, Cassandra – basically all the core technologies the company was originally built on.  They took a risk and hired me just because I had a track record of rapidly scaling systems.  Learning everything at once was exhilarating, like getting plunged into a deep cold pool of I-don’t-know-how-the-fuck-anything-works.  It was amazing.  Definitely an experience I want to repeat. 


### Have you ever had a mentor at a new job? Has that helped improve your skills or your productivity over time?

I’ve never had an explicitly mentor-type relationship, but I’ve been fortunate to work with some world-class engineers, and some really introspective leaders who have helped me understand and unpack my own needs and strengths and weaknesses.

At [Linden Lab](http://www.lindenlab.com/), part of our company mission statement was “Do it with style.”  I love this so much.  If a thing is worth doing, it’s worth doing with flair.   Why would you ever want to just show up, do the task, be a cog in the machine and go home?  It’s worth pouring a bit of your self and your heart into your work and putting your own personal stamp on it.  It builds a culture where people are valued for the whole selves that they bring to work.  And for me personally, I find that if I don’t feel like doing something with style, it’s a good signal that actually I don’t really want to do it at all and I won’t do it very well.

For more useful and hilarious tips from Charity, follow her on Twitter [@mipsytipsy](https://twitter.com/mipsytipsy). 

Want more productivity tips? Sign up for the Bowery newsletter. We’ll send you an email with great stuff once a month. 


<div style = "line-height: 20px; font-family: Monosten A, Courier, monospace; font-size: 12; width: 65%; padding 13px 0 12px; left: 0; letter-spacing: 3px;"> 
<form action="https://formkeep.com/f/a9d9bd96ce41" method="POST" class="subscribe">
      <span class="cover email-cover"></span>
      <input class="email-submit" type="email" name="email" placeholder="newsletter" required="">
      <span class="cover submit-cover"></span>
      <input type="submit" value="signup">
    </form>
</span>
</div>
