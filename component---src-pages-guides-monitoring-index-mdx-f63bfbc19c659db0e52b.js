(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{zTaP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var n=a("k1TG"),i=a("8o2o"),o=(a("q1tI"),a("7ljp")),r=a("013z"),s=a("T0C+"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),p=c("AnchorLinks"),d=c("AnchorLink"),m={_frontmatter:l},u=r.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use Sysdig to monitor your running application")),Object(o.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),". Sysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments. The ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," includes an IBM Cloud Monitoring with Sysdig service instance configured with a Sysdig agent installed in the environment’s cluster. Simply by deploying your application into the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"}),", Sysdig monitors it, just open the Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."),Object(o.b)("h2",null,"Sysdig Monitoring"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig"}),"IBM Cloud Monitoring with Sysdig")," explains how to configure and use an instance of the Sysdig service, but the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," has already done most of this for you. You can skip steps 1-3 about user access, provisioning an instance, and installing an agent."),Object(o.b)("h3",null,"Explore your application"),Object(o.b)("p",null,"By default, the Sysdig dashboard opens the ",Object(o.b)("strong",{parentName:"p"},"Explore")," page on its ",Object(o.b)("strong",{parentName:"p"},"Deployments and Pods")," grouping."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select your cluster")),Object(o.b)("p",null,"By default, Sysdig opens its ",Object(o.b)("strong",{parentName:"p"},"Overview by Process")," dashboard, which has panels showing stats about CPU, memory, and networking.\nThis is one of Sysdig’s ",Object(o.b)("strong",{parentName:"p"},"Default Dashboards")," (i.e. built-in dashboards)."),Object(o.b)("p",null,"These are the cumulative totals for all of the pods running in the cluster. Hover over a graph and a key pops up to list\nthe pods and show each one’s color."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Expand your cluster and namespace, then select your deployment")),Object(o.b)("p",null,"This shows the stats just for the pods in your deployment."),Object(o.b)("p",null,"On the ",Object(o.b)("strong",{parentName:"p"},"Dashboard")," page, you can create your own custom dashboards."),Object(o.b)("p",null,"The Getting started tutorial, starting with\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step5"}),"Step 5: Monitor your environment"),",\ngives some instructions on monitoring, managing, and what to do next."),Object(o.b)("h2",null,"Give it a try"),Object(o.b)("p",null,"Before you start to understanding how to monitor your application instances, make sure you have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/deployapp"}),"deployed an app")," into your development cluster. This ",Object(o.b)("em",{parentName:"p"},"Git it a Try")," uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/starterkits/starterkittemplates"}),"template-node-typescript")," as an example."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SysDig")," service is already created, bound and configured to listen to monitoring metrics and events for your development cluster. You can see this in the HTTP overview."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the ",Object(o.b)("strong",{parentName:"li"},"SysDig")," instance that is named the same as your development cluster."),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("strong",{parentName:"li"},"Dashboards")," > ",Object(o.b)("strong",{parentName:"li"},"HTTP Overview"))),Object(o.b)("p",null,"The dashboard shows stats for all incoming HTTP requests for all apps in the cluster. Browse through these views to get a feel for what they’re showing."),Object(o.b)("h3",null,"View your app’s metrics"),Object(o.b)("p",null,"Take a look at the metrics for your app."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Explore")," page in the left nav menu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the Explore page, select the ",Object(o.b)("strong",{parentName:"p"},"Containerized Apps")," grouping")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Search for your app, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the list of apps, select yours, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"us.icr.io/mooc-team-one/hello-world-mjp:1.0.0-10"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"With your app selected, select the ",Object(o.b)("strong",{parentName:"p"},"Overview by Container")," dashboard"),Object(o.b)("p",{parentName:"li"},"  The Overview by Container dashboard shows metrics for the containers in your app. You will now see just the metrics for your your app. You can view at different levels—from pod to namespace to node to cluster—giving you a fine grain access to you monitoring requirements."),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+0lEQVQoz4VR7WrDMAz0+79TSSC/2l/tulcYc9IlsRN/f+Qmm2ZshXaCA0tnHSeJWWvhvEeMscKHUPOCQO+UUsXOv0JKAcwoDeccSmwERbkUC0HCWocUEzyJ5y3jv+CjBePDDbdpwtc8Q8gFb/MV7dDirM7o+g4Nb8BNj1WusM5CGwO9GnxaXrnjfIQwAmpRsD6CTbOEEILGK7YTrvIdh48DLvqCjhfBFmMcsYoVIQYoTRNQz+AHNH2DkzhhcQsE1VJOYJJcaaV+bBfhOvvvuOfbttX1lBWU92PknMHCfaF7QzlK3RmRjyjHKXz5/4xnf4yQYCnu5DO84r8B4SEfGkb0b20AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Metrics View",title:"Metrics View",src:"/static/a02d9787bdccba1fa1f01486dcadf743/3cbba/appview.png",srcSet:["/static/a02d9787bdccba1fa1f01486dcadf743/7fc1e/appview.png 288w","/static/a02d9787bdccba1fa1f01486dcadf743/a5df1/appview.png 576w","/static/a02d9787bdccba1fa1f01486dcadf743/3cbba/appview.png 1152w","/static/a02d9787bdccba1fa1f01486dcadf743/0b124/appview.png 1728w","/static/a02d9787bdccba1fa1f01486dcadf743/4ea69/appview.png 2304w","/static/a02d9787bdccba1fa1f01486dcadf743/4cae6/appview.png 2864w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(o.b)("h3",null,"Creating a custom alert"),Object(o.b)("p",null,"SysDig enables monitoring for custom events and alerting for events. Let’s create a simple alert that will send an email when ever the total number of pods in your namespace/project exceeds a specific number. This is helpful to monitor when project is consuming unnecessary resources in the development environment."),Object(o.b)("p",null,"Note: This is not tracking the number of pods in an application, but the number of pods (for all applications) in a namespace/project."),Object(o.b)("h4",null,"Add Notification Channel"),Object(o.b)("p",null,"Create a notification channel, which is how SysDig will send you an alert."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the SysDig dashboard, press the button with your initials at the bottom of the left nav menu, and select ",Object(o.b)("strong",{parentName:"li"},"Settings")),Object(o.b)("li",{parentName:"ul"},"In the Settings page, select ",Object(o.b)("strong",{parentName:"li"},"Notification Channels")),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Add Notification Channel")," and select ",Object(o.b)("strong",{parentName:"li"},"email")," as the channel type"),Object(o.b)("li",{parentName:"ul"},"Enter your business email address and give your channel a name, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"MJP Dev Channel")),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Save")),Object(o.b)("li",{parentName:"ul"},"Using the ",Object(o.b)("inlineCode",{parentName:"li"},"...")," menu, send a test notification and verify that it arrives into your email account")),Object(o.b)("h4",null,"Add Alert"),Object(o.b)("p",null,"Create an alert, which notifies you when an event occurs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Alerts")," page in the left nav menu"),Object(o.b)("li",{parentName:"ul"},"Press ",Object(o.b)("strong",{parentName:"li"},"Add Alert")," and select ",Object(o.b)("strong",{parentName:"li"},"Metric"))),Object(o.b)("p",null,"The New Alert/Metric wizard enables you to configure a wide range of alerts."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the default title, “New Metric Alert”, and edit it to name the alert, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Change the severity to red ",Object(o.b)("inlineCode",{parentName:"p"},"High"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In Section 1: Define of th wizard, complete the fields as shown\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABJElEQVQoz42TW4rDMAxFvf+NdDdlPuenLbQEGgJ5vxNHk+NBxuO2YQzCsS1dH0mOOZ2/5Pt2k8f9LvM8C2PbNjkanKvF/uZRlPLMMrleLlKW5UvAO4vFw2F0s6pr6bpOlmWRvu+l3tdN2/7OTeNnzjGysdb+AXCCTAilaeoC4rQIwkKSI1pHyG1FUUie59LuVAgP4+hI1nUV9eGMvVDU+WzW0xpVH3cBUiUQw3GaJk9BAOJKq/uLXaWeRifqBUk5SRLJ9ubE3dN68a204X58gW8KohAqRUg+DIPzgVhJ2aMEiLLWy7wgXaSOOCGCY3iBluHo6bim6IJgKJUU4wJIqqpybxRTIi1D/LjNf/4KBFWUTEg9pH1bw09Guiqo9FCHDQqhfgAG66+Cgdrw1gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Section1",title:"Section1",src:"/static/70e371cf39aeced5c9dfb274d0c24f86/3cbba/createalert.png",srcSet:["/static/70e371cf39aeced5c9dfb274d0c24f86/7fc1e/createalert.png 288w","/static/70e371cf39aeced5c9dfb274d0c24f86/a5df1/createalert.png 576w","/static/70e371cf39aeced5c9dfb274d0c24f86/3cbba/createalert.png 1152w","/static/70e371cf39aeced5c9dfb274d0c24f86/bf02b/createalert.png 1504w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nThis alert will trigger after the number of pods (in any/all applications) in your namespace/project raises above 3. This will only trigger for your own developer space, make sure this is set to the one you use for deploying your applications, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"dev-mjp"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In Section 2: Notify of the wizard, switch on the notification channel you created earlier, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Channel"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Set it to notify you every 2 minutes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Notification Subject & Event Title")," field, add your namespace to the end, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"- Dev-MJP namespace"),"\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"754px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABxUlEQVQ4y5VU206DQBTkO/0rv8HED9FXoy/GqKmXWoGFUqAtt6Wl45l1FwFtYptM9kCX2TkzB7yLm1vcPT3jdTZDu9vhP7/D4fCr5tp1Hbx2v0e+XkN9+lBhiDiOEQQBVqsV9vLfTg7hyn01a3nIETgMrz130sNK4SPwkWcZ0jTFdrtF0zQGWlDqBmlTQwvxVNlQsceybVvMkggv72+IlEIoSqnw1NZ7hUVRYKak5WWMVIgyUZnnObTW/UYeStACrvuB0qFKzxWPmwRZWaAVEprL+2VZfvsnBFVVGdR1bQTwnmUct+wUJiqCknYJ3/dN2wTVTtvrUz0WChWRlEGwVYJEm83GKCKcOqe0rCtkElJtR61v2V0kSWLUcWyI5XKJtYwTD6NvRGdH5q9wRgpZUA1VkeQvcJS40js3TgQ9dkM9IuSYRFFklGl5qLObDKxfrEkwRO+h5elT1i5J61ktpzv/HBp7zymbHmBePUe4lpbn87lJ+GOxMEqp+hgSQnw3kDqW/aUIGink3JkEZR2mW01S5rqzipx3P6+eTWfo08i/I+AzJNWSftFo3IcKCwnVm77cp3y+CvEylPQfghBnF5c4v7rGF1ra3iiUVPEPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Notify",title:"Notify",src:"/static/6b056add61f161a4b7869543554b4b35/5ee13/section2.png",srcSet:["/static/6b056add61f161a4b7869543554b4b35/7fc1e/section2.png 288w","/static/6b056add61f161a4b7869543554b4b35/a5df1/section2.png 576w","/static/6b056add61f161a4b7869543554b4b35/5ee13/section2.png 754w"],sizes:"(max-width: 754px) 100vw, 754px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Press ",Object(o.b)("strong",{parentName:"p"},"Save")))),Object(o.b)("h3",null,"Cause the event"),Object(o.b)("p",null,"Let’s test your alert by causing the event to occur."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Back in your OpenShift or Kubernetes dashboard, navigate to your namespace/project and its deploments"),Object(o.b)("li",{parentName:"ul"},"Select the deployment for your app and increase the number of pods for your app to 4")),Object(o.b)("p",null,"Once your app has started 4 pods/replicas, your namespace/project will be running more than the 3 pods your alert is monitoring for."),Object(o.b)("h3",null,"Acknowledge your event"),Object(o.b)("h4",null,"Watch the container count"),Object(o.b)("p",null,"While starting pods goes very quickly, SysDig monitoring is not instantaneous. It will take 2-20 min for monitoring to detect the event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Back in the SysDig dashboard, navigate to your app again",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Explore")," > ",Object(o.b)("strong",{parentName:"li"},"Containerized Apps")),Object(o.b)("li",{parentName:"ul"},"Select your app to display the ",Object(o.b)("strong",{parentName:"li"},"Overview by Container Image")," dashboard")))),Object(o.b)("p",null,"Wait and watch for the container count to rise to 4. (Again, this could take 2-20 min. Watch for the times along the bottom of the graph to finally change.)"),Object(o.b)("h4",null,"Watch for the event"),Object(o.b)("p",null,"Look for the event showing that your condition has been detected."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Events")," page in the left nav menu")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the search field, enter the name of your app, i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Look for an event named “{alert} is Triggered - {namespace} namespace”"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"{alert} is the name of the alert you created, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"{namespace} is the name of your namespace/project, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"dev-mjp")),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQoz6WS227EIAxE8/+fWKmPu20CgXA196mhykqt+lakIxskD/bAppQGUcJcYwz8Z502YFP6gnUevfd1OGNj7thae5FzWee1VpRSfhAy4e35xEaJQDEiEuGyFsYYCClxKgWlNZxzL/GU0irOOS9uscy0WvCxS2y9Dy5ooFSw7wcuFgk+MB6JrWi1Yczu2Y6ZxxCQWRh/2GMdTcG+CgKP86kklDdwOcKlCEMeV3ALEzlndLCIjbsDdzzYBiaNCr4Wh3HYpje9VSiKeD+eeBiBs3ioEla8mfuJSBa6RVhkmHGT4FHxsNd3h2tk7lCIE1IK9s0vvyJ7G3jEwHHuZz4f5PePuHPNr/wFyZQiiBwh48kAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alert",title:"Alert",src:"/static/de3b975f6a8096d1e915380187f8102f/3cbba/alerttriggered.png",srcSet:["/static/de3b975f6a8096d1e915380187f8102f/7fc1e/alerttriggered.png 288w","/static/de3b975f6a8096d1e915380187f8102f/a5df1/alerttriggered.png 576w","/static/de3b975f6a8096d1e915380187f8102f/3cbba/alerttriggered.png 1152w","/static/de3b975f6a8096d1e915380187f8102f/0b124/alerttriggered.png 1728w","/static/de3b975f6a8096d1e915380187f8102f/0d9e4/alerttriggered.png 2284w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",{parentName:"li"},"If you’ve already waited a few minutes until the container count increased to 4, you should see this event immediately. Otherwise, you need to wait (2-20 min?) until monitoring detects the change, triggers the alert, and logs the event."))))),Object(o.b)("h4",null,"Watch for the alerts"),Object(o.b)("p",null,"Once the event is displayed, check your email. You should get an email from ",Object(o.b)("inlineCode",{parentName:"p"},"Sysdig Notifications <ibm-saas-emailer@sysdig.com>")," with the subject “{alert} is Triggered - {namespace} namespace” (same as the event label). It says the metric is ",Object(o.b)("inlineCode",{parentName:"p"},"kubernetes.namespace.pod.available.count")," and the value is the number of pods in your namespace/project, at least 4 — plus a bunch of other info about the event."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-email"}),"From: Sysdig Notifications <ibm-saas-emailer@sysdig.com>\nTo: \"Matthew J Perrins\"\nSubject: MJP Dev Alert is Triggered - Dev-MJP namespace\n\n                Event Generated:\n    Severity    High\n      Metric    kubernetes.namespace.pod.available.count = 4\n     Segment    kubernetes.cluster.id = '75240dcc-0326-11ea-be8d-eadf5501b087' and kubernetes.cluster.name = 'default' and kubernetes.namespace.name = 'dev-mjp'\n       Scope    kubernetes.namespace.name in dev-mjp\n        Time    11/17/2019 09:29 PM UTC\n       State    Triggered\nActive since    4 minutes\n   More info    View notification\n\n                Triggered by Alert:\n        Name    MJP Dev Alert\n        Team    Monitor Operations\n       Scope    kubernetes.namespace.name in dev-mjp\n  Segment by    kubernetes.cluster.id, kubernetes.cluster.name, kubernetes.namespace.name\n        When    max(max(kubernetes.namespace.pod.available.count)) > 3\nFor at least    1 d\n   More info    View alert\n")),Object(o.b)("p",null,"Wait awhile and you should get more emails notifying you about this event, 1 email about every 10 min. The event is only listed once in the Events view, when the condition was first detected. But SysDig will continue to notify you about the event until you acknowledge it."),Object(o.b)("h4",null,"Acknowledge the event"),Object(o.b)("p",null,"Tell SysDig you’re aware of the event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the event and press ",Object(o.b)("strong",{parentName:"p"},"Acknowledge")),Object(o.b)("p",{parentName:"li"},"  This will inform the monitoring that an operations team member is working the issue."))),Object(o.b)("p",null,"Alerting will send you one more alert email, subject “{alert} is Acknowledged - {namespace} namespace”, informing you that the event has been acknowledged. Then it won’t send you any more alert emails about this event."),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"It’s important to be able to monitor your deployed applications.\nHere, the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," uses Sysdig Monitoring, but you never had to install or run Sysdig.\nJust deploy your application into the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," and it gets moniotored automatically.\nAfter deploying your application, open the Sysdig web UI and browse the status, including the status\nof your cluster as a whole and your deployment in particular."),Object(o.b)("h3",null,"Learn more"),Object(o.b)("p",null,"Learn more about using SysDig Monitoring:"),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(d,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-monitoring",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Monitoring your environment"),Object(o.b)(d,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-dashboards",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Working with dashboards"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/dashboards.html",mdxType:"AnchorLink"},"Sysdig Monitor > Dashboards"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/explore.html",mdxType:"AnchorLink"},"Sysdig Monitor > Explore"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/events.html",mdxType:"AnchorLink"},"Sysdig Monitor > Events"),Object(o.b)(d,{to:"https://docs.sysdig.com/en/metric-alerts.html",mdxType:"AnchorLink"},"Sysdig Monitor > Alerts > Metric Alerts")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-monitoring-index-mdx-f63bfbc19c659db0e52b.js.map