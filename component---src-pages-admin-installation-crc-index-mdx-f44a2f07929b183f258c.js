(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{JCsL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return g}));var a=n("k1TG"),r=n("8o2o"),i=(n("q1tI"),n("7ljp")),o=n("013z"),l=n("T0C+"),b=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=c("Tabs"),p=c("Tab"),d=c("PageDescription"),m=c("InlineNotification"),u=c("AnchorLinks"),h=c("AnchorLink"),O={_frontmatter:b},j=o.a;function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"Tabs"},Object(i.b)(p,{label:"Prerequisites",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Prepare to install developer tools into Red Hat CodeReady Containers on your laptop")),Object(i.b)("p",null,"The IBM Garage for Cloud Developer Tools facilitate development and deployment of cloud-native applications.\nThey can be hosted in any Kubernetes or OpenShift cluster, including the Red Hat CodeReady Containers local OpenShift environment."),Object(i.b)("p",null,"These instructions help you install Red Hat CodeReady Containers and explain\nhow to configure and run the Terraform infrastructure-as-code (IasC) scripts to install the Developer Tools into that CodeReady Containers install."),Object(i.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," Red Hat CodeReady Containers (CRC) is based on OpenShift 4.2 and the current installation of  IBM Garage for Cloud Developer Tools only installs the Tekton pipeline operator, Jenkins is not installed.\nRead the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/continuous-integration-tekton"}),"Tekton Pipelines and Tasks Guide")," to understand how to deploy your app into CRC using Tekton.")),Object(i.b)("p",null,"The following prerequisites are required to support installing CodeReady Containers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CodeReady Containers ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#minimum-system-requirements_gsg"}),"Minimum system requirements")),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/login"}),"Red Hat account")," is required")),Object(i.b)("p",null,"The following prerequisites are required before following the setup instructions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/getting-started/prereqs"}),"Prerequisites")," listed before continuing"))),Object(i.b)(p,{label:"Install CRC",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Download CodeReady Containers (CRC) and install it")),Object(i.b)("p",null,"Install and configure CRC as described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"Install on Laptop")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remember to take a copy of ",Object(i.b)("strong",{parentName:"p"},"Pull Secret"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"CRC executable"),": Copy the crc binary to your $PATH:"),Object(i.b)("p",{parentName:"li"},"  From the directory where you unzipped the download:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cp crc /usr/local/bin\n")))),Object(i.b)("p",null,"Follow these steps to complete the installation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Setup"),": Run the following command from a terminal session:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"crc setup\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Add memory"),": By default, the CRC VM is set to only use 8 GB of RAM. The more RAM you can give it, the better."),Object(i.b)("p",{parentName:"li"},"  To set the CRC VM to 10 GB of RAM, do this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"crc config set memory 10240\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Start")," the local CRC Cluster"),Object(i.b)("p",{parentName:"li"},"  Run the crc start command in a terminal window:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"crc start\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"During the start process, you will be prompted for your pull secret. Copy and paste it into the terminal window.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Wait about 5 minutes for the VM initialization to complete. When complete, the kubeadmin password will be displayed. Make note of\nthis password because you will need it to log into the console.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Cluster Admin ",Object(i.b)("strong",{parentName:"p"},"Console")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"crc console\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open a web browser and go to the OpenShift console")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login with user id ",Object(i.b)("strong",{parentName:"p"},"kubeadmin")," and the password that was displayed\nafter the ",Object(i.b)("inlineCode",{parentName:"p"},"crc start")," had completed."))),Object(i.b)("p",null,"Other useful links:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"}),"Getting started with Red Hat CodeReady Containers, Section 1.5")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg#installing-codeready-containers_gsg"}),"Installing CodeReady Containers"),"."))),Object(i.b)(p,{label:"Download",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Obtain the Terraform infrastructure-as-code (IasC) scripts that will install the tools into CodeReady Containers")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))))),Object(i.b)(p,{label:"API keys",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the keys the CLI uses to authenticate")),Object(i.b)("p",null,"API keys are not needed to connect to CRC, but the file must still exist."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Inside the ",Object(i.b)("inlineCode",{parentName:"p"},"iteration-zero-ibmcloud")," folder, copy ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.template")," to a file named ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file and set the ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property to the admin password displayed in the terminal when CRC was started.")))),Object(i.b)(p,{label:"Configuration",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the properties describing the environment")),Object(i.b)("p",null,"The settings for installing the Developer Tools go in a single property file\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the Developer Tools")),Object(i.b)("h3",null,"Environment variables"),Object(i.b)("p",null,"Use the  ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties to configure the installation for the Development Tools."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the following properties so they match below, all the other properties will be ignored:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes, openshift, or crc)\ncluster_type="crc"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="true"\n# Enter any value for the resource group name\nresource_group_name="crc-resource-group"\n# Flag indicating if we are using an existing postgres server or creating a new one\npostgres_server_exists="false"\n'))))),Object(i.b)(p,{label:"Run",mdxType:"Tab"},Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"Run Terraform to install the tools into the CRC environment")),Object(i.b)("p",null,"Having configured the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties"),", ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties files,\nwe are now ready to kick off the installation."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Launch a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container"),"."),Object(i.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(i.b)("p",{parentName:"li"},"  For more information on the ",Object(i.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide:"),Object(i.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(i.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(i.b)("p",{parentName:"li"},"  The supplied Terraform scripts are ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From inside the terminal/container run this script:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(i.b)("p",{parentName:"li"},"  This script will setup the Developer Tools in the CRC environment."),Object(i.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(i.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(i.b)("p",{parentName:"li"},"  The existing cluster’s contents will be cleaned up to prepare for the terraform\nprocess. Any resources in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"staging")," namespaces/projects will be deleted."),Object(i.b)("p",{parentName:"li"},"  Installing the tools into an existing cluster takes about 20 minutes."),Object(i.b)(m,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},"  You should now have your ",Object(i.b)(l.a,{name:"env",mdxType:"Globals"}),"\nfully provisioned and configured. Enjoy!")))),Object(i.b)("h3",null,"Finish"),Object(i.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created."),Object(i.b)("p",null,"To see this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the OpenShift web console. You should see:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Namespaces: ",Object(i.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(i.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"staging")),Object(i.b)("li",{parentName:"ul"},"Deployments in the ",Object(i.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(i.b)("inlineCode",{parentName:"li"},"catalyst-dashboard"),", ",Object(i.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(i.b)("p",null,"To get started with code using the following guides:"),Object(i.b)(u,{mdxType:"AnchorLinks"},Object(i.b)(h,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(i.b)(h,{to:"../../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(i.b)(h,{to:"../../guides/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(i.b)("h3",null,"Possible issues"),Object(i.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-installation-crc-index-mdx-f44a2f07929b183f258c.js.map