---
layout: post
title: Static websites for the .Net Developer
---

Consider this scenario that plays out often in a Enterprise .Net developer's life.  You are busying trying to get the last project you were assigned actually working correctly or shoving in last minute requirements nobody bothered to tell you about, when you get a drive-by from an Analyst or PM requesting you spin-up a quick and simple website.  Famous last words.  Worse, since the the Analyst or PM have been working around .Net devs for a while, possibly he or she stipulates it should be Asp.Net MVC - EF ...etc.<!--more-->

##### Why?  
What are the requirements?  Is it just a prototype?  Is it just an intranet site that needs only simple content version control control.  Likely.  

Consider just creating a static website.  Use Markdown for content creation.  Store your Markdown in version control.

##### Why?
Static is easy

Static love's version control

Nothing is faster than static, server or client

Very fast and flexible prototypes

But the PM argues, all data must be a database!  'Unlikely' is the correct answer, because source control systems essentially act as databases.  Or, the data that does need to live in a database can still remain there.  The act of storing data in a database doesn't mean it needs to be dynamically served from that database.  Sometimes it does, but it depends on your content latency requirements.

##### Be professional.  
If you consider yourself a web developer you should be able to spin up a static and responsive mobile ready website in a moment's notice.  Have your tools ready (generators, frameworks and style guides).  Get working on business value sooner.  Static prototype frameworks and style guides help keep these tools warm and ready to use.

**Bonus professional development for a .Net developer: Docker!** -- Don't be afraid...its ok...its easy! Start practicing working with Containers.  Microsoft has Containers coming!

**Final bonus**: FREE site hosting on [GitHub](https://pages.github.com/)!

**Goal**: Create a statically generated blog website with minimal environment setup and host on GitHub.

**Getting Started**:
Don't write your own static generator.  There are many to pick [from](https://staticsitegenerators.net/), I picked [Jekyll](http://jekyllrb.com/) because of its GitHub integration and its popularity.  As a .Net developer you will get to learn a sliver of Ruby.  

You can install [Ruby](http://rubyinstaller.org/), Jekyll and other dependencies on your Windows instance, but lets face it, you are a .Net dev and not a Ruby dev yet.  Further, installing Ruby, Jekyll and all of the other dependencies on a Windows box is a pain.  You could, for learning purposes get it working.  But, it won't be identical to your runtime host (linux) on GitHub.  Feel free to experiment with your environment as desired.

The alternative is to run your Jekyll instance in a Docker Container.

* Install Docker: Docker has good documentation.  [https://docs.docker.com/installation/windows/](https://docs.docker.com/installation/windows/)
The following commands are git bash based.  If you prefer the command line or powershell, the Docker documentation has options for those.

* Start the VM (in the 'C:\Program Files\Docker Toolbox' directory): 

``` bash
sh start.sh
```

![alt text](../../../assets/images/Capture.png)

![alt text](../../../assets/images/Capture2.png)

* List your VMs created for Docker: 'docker-machine ls' this command will list any Virtual Machines docker has installed and their state.  You will have a 'default' VM created.  

``` bash
docker-machine ls
```
![alt text](../../../assets/images/Capture3.png)

* Create a directory for your source and navigate to it.
* Run the following command to create a Docker Container.
  * If you use the bash command line you will need to prefix the path to your source with '//'.  See [StackOverflow](https://stackoverflow.com/questions/29788897/boot2docker-mount-host-volume-to-externalize-data-using-windows) answer.
  * The Docker documentation does a good job describing the parameters in this command.
  * The 'jekyll/jekyll' parameter refers to the linux image that will be downloaded from the [Docker Hub](https://hub.docker.com/r/jekyll/jekyll/). There is a jekyll/pages that is a GitHub specific flavor, but I have had mixed results with that image. 
  * '-d' will make the container run until stopped
  * 'jekyll s' is the command to serve your source directory with jekyll's HTTP server

``` bash
docker run -d -v //c/Users/Christopher/Documents/GitHub/jekyll-material-design-lite://srv/jekyll -p 192.168.99.100:4000:4000 jekyll/pages jekyll serve --watch --force_polling
```

* Show your created Containers and their status

``` bash
docker ps -a
```
![alt text](../../../assets/images/Capture4.png)

* Stop the running Container.  Docker automatically names each Container (which you can override).  In this case it named it 'kickass_morse'.

``` bash
docker stop kickass_morse
```
* This command will create a Container that will start, run and shut down right away.
  * You would run this to create a starting boilerplate Jekyll site
  * 'jekyll new . --force'
  * If you are using one of the Docker Containers for Jekyll, it will automatically build your static site.
  * If you are running Ruby and Jekyll locally, you will need to build the site via the command line.

``` bash
docker run -it -v //c/Users/Christopher/Documents/jekyll-material-design-lite://srv/jekyll -p 19 2.168.99.100:4000:4000 jekyll/pages jekyll new . --force
```
* Start your previous long-running Container.

``` bash
docker start kickass_morse
```
* Navigate to [http://192.168.99.100:4000](http://192.168.99.100:4000/) to see your site.
* Create a repo and commit your code to GitHub.  Refer to their [documentation](https://pages.github.com/) on publishing your website.

Whether you use Docker or not, the Jekyll site generator is simple and effective.  A good start and building block for future projects.

Watch for a coming post on how I combined Jekyll and Google's [Material Design Lite](http://www.getmdl.io/) framework to integrate it's mobile first style guide and Jekyll's site generation features into a functioning static website.
