---
layout: post
title:  "Developer Productivity"
date:   2014-07-30 13:00:54
categories: posts
---

When measuring developer performance, it’s hard to find an appropriate metric to use that doesn’t rely too heavily on anecdotal evidence. That’s why we at Bowery were excited by [Rebel Labs’ Developer Productivity study](http://zeroturnaround.com/rebellabs/download/?token=80eb432c1d5edfc886f91ad2169c139196a99127&utm_medium=email), a 40-page report on what tools and practices developers employ in their daily life. In order to provide a report that gets at the gist of what “performance” really entails, Rebel Labs weighed the effect of different practices and tools on both the quality of the software and the predictability of its release.

Here are some of the practices the study measured:

- Taking care of technical debt
- Monitoring and fixing code quality issues
- Automated Testing
- Pairing up
- Reviewing Code

Implementing all of the above practices would yield some increase in software quality, but at what monetary and time cost? That’s where the measurement of predictability comes into play. By measuring these practices against the likelihood of software being released as scheduled, we have a fairly solid metric for viewing whether the time spent improving quality helps developers meet deadlines.


### Dealing with Technical Debt
Technical debt refers to work that is pushed off in favor of other tasks. Most tasks that are deferred are not necessary to deal with in the moment, but the failure to handle those tasks may lead to further issues in the future.

**Conclusion: Technical debt needs to be occasionally addressed. Fixing technical debt all the time has a small but insignificant improvement over fixing it in smaller doses.**

![Technical Debt](https://d262ilb51hltx0.cloudfront.net/max/709/1*v4VC_z_5l-22qpGWmrU8fg.png)

### Monitoring and Fixing Code Quality Issues
**Conclusion: Fixing code quality leads to significant improvements in quality and predictability of software releases, likely because doing so leads to engineers addressing underlying structural issues in an application.**

![Code Quality](https://d262ilb51hltx0.cloudfront.net/max/800/1*FuYBGQEYFS8YqJI-8BHxxQ.png)

### Automated Testing
**Conclusion: Using automated testing 100% of the time is better than partial test coverage, but no automated test coverage is slightly better than partial automated test coverage—likely because those engineers are testing their code manually.**

![Automated Testing](https://d262ilb51hltx0.cloudfront.net/max/800/1*mU9gLts_LeSwWbmeA_KYIA.png)

### Pairing up
**Conclusion: Pair coding (having one person review code as the other one writes it) has a significant affect on software quality.**

![Pairing up](https://d262ilb51hltx0.cloudfront.net/max/800/1*XN_J9kCgUNb7aQnZtiIQTw.png)


### Code reviews
**Conclusion: Reviewing code appears to have a significant impact on predictability but a minimal effect on quality. This practice likely helps developers detect major issues in design and direction but not smaller problems like bugs.**

![Pairing up](https://d262ilb51hltx0.cloudfront.net/max/800/1*ByGOzRE8jNo-5GT4v3jYVw.png)

You can read [Rebel Labs’ full report here](http://zeroturnaround.com/rebellabs/download/?token=80eb432c1d5edfc886f91ad2169c139196a99127&utm_medium=email).
