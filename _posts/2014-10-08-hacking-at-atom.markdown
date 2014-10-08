---
layout: post
title:  "Hacking at Atom"
date:   2014-10-08  15:18:12
categories:
author: "Nevin Valsaraj"
---

Finally got my hands on [Atom](https://atom.io/), the hackable text editor from GitHub. Thanks to the unofficial PPA provided by `webupd8`, installing _Atom_ on Ubuntu 14.04 LTS is as simple as:

{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom
{% endhighlight %}

As first impressions go, I wasn't mightily impressed by the UI - it is quite a shameless rip-off of my favourite text editor [Sublime Text 3](http://www.sublimetext.com/). Yes, the features are fantastic, the command palette, the multiple cursors, the package ecosystem, all wonderful - but that's already been done long back in _Sublime_.

![Atom]({{ " /resources/posts/atom-screenshot.png " | prepend: site.baseurl }})

![Sublime Text 3]({{ " /resources/posts/st3-screenshot.png " | prepend: site.baseurl }})

Then I asked myself - why then, do we need _Atom_? Why would anyone go to the extent of building a whole new editor, accompanying package manager and ecosystem from ground up if only to implement tools that already exist in another?

Enter Google search.

Turns out, _Atom_ though looks like a total rip-off of _Sublime_, is underneath a different beast entirely. Built on `node.js` and rendered as `HTML` (I kid you not) on a pseudo-browser based on Chromium open-source project, _Atom_ borrows very few bones from _Sublime_ once you look past the  skin. While the latter is a full-fledged native desktop application, _Atom_ is essentially a web-based tool with neat desktop integration, thanks to `node.js`. Also, _Sublime_ is more of a one-man show run by Jon Skinner and therefore slow in coming when it comes to bug-fixes and patches for the editor core, but _Atom_ being a community band-wagon run by the collaborative coding gurus at GitHub translates to faster release cycles and quick bug-fixes.

Taking a look at the framework, _Atom_ packages are entirely in `coffeescript` while _Sublime_ has been written in `C++` and `Python` and is extended in`Python`. This, and its non-native status causes _Atom_ to lose out to _Sublime_ in raw performance statistics, especially in file sizes >2 MB where _Atom_ is said to start slowing down. Coming to packages/add-ons, to no one's surprise the packages written for _Sublime_ is far more mature than those for _Atom_, the newer kid in town. But what _Atom_ brings to the table is a vaster API to interact with the editor core and more customisability thanks to its web-based origins and community-centric approach. (Hence, GitHub touting _Atom_ as the __hackable__ editor ). In comparison, _Sublime_ doesn't allow drawing on editor space, restricts status bar to text-based customisation, and surprisingly keeps developers away from key areas like side-bar. The [merge-conflicts](https://atom.io/packages/merge-conflicts) package in particular is a really cool example of the power of _Atom_.

_Atom_ bases its entirety on `node.js`, `coffeescript` and `less`, all of which are being actively developed. As a web-developer, this is fantastic news. Itself being a love-child of the web, _Atom_ is virtually guaranteed to have top-notch support for all the latest tools of the trade.

Sadly, there is a downside to this awesomeness. Since the whole window is essentially a Webkit box that is being rendered over and over again from `HTML`, the UI is slightly sluggish, as confirmed by beta testers of the editor when it was first made open source by GitHub. This has been greatly reduced since, by [moving to `react.js`](http://blog.atom.io/2014/07/02/moving-atom-to-react.html) and use of hardware rendering. The lag thankfully is now nearly unnoticeable, but what is noticeable is my graphics card huffing and puffing and breathing fire after an hour's use or two. Unacceptable.

To summarize all that I need to say is, I began this post in _Atom_ using the handy `Jekyll` plugin to scaffold a new blog post with a server GUI running in another editor tab and live markdown preview side-by-side, but now I'm completing it in good ol' _Sublime_, much to my laptop's relief. Working in _Atom_ is exciting (the emanating heat will be comforting in the coming winter, surely), but it's still some ways from bringing the fight to the old-school heroes. _Atom_ is very much a work in progress and I for one am curious to see how it turns out.

Bonus link:

[_Atom_ vs. _Sublime_ on Reddit](http://www.reddit.com/r/programming/comments/2dfogp/sublime_vs_atom_text_editor_battles)
