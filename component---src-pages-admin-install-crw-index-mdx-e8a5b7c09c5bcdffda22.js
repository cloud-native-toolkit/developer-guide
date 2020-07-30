(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{jece:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var o=a("k1TG"),r=a("8o2o"),n=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("T0C+"),a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=s("PageDescription"),c=s("InlineNotification"),b={_frontmatter:i},d=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(d,Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"Add CodeReady Workspaces to your environment")),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": An ",Object(n.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(n.b)("p",null,"Optionally install CodeReady Workspaces if you want it to be part of your environment."),Object(n.b)("h2",null,"Installing CodeReady Workspaces"),Object(n.b)("p",null,"CodeReady Workspaces can be easily added to your development experience using the Red Hat Operator Hub. See ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces/1.1/html/administration_guide/installing-codeready-workspaces-from-operator-hub"}),"Chapter 3. Installing CodeReady Workspaces from Operator Hub"),"."),Object(n.b)("p",null,"CodeReady Workspaces is a developer workspace server and cloud IDE. Workspaces are defined as project code files and all of their dependencies necessary to edit, build, run, and debug them. Each workspace has its own private IDE hosted within it. The IDE is accessible through a browser. The browser downloads the IDE as a single-page web application. CodeReady Workspaces will enable a 100% developer experience to be delivered from a user’s browser. This is perfect for running enablement learning from constrained developer laptops, or for SREs to make quick change to a microservice."),Object(n.b)("h3",null,"CodeReady Workspaces Intallation Pre-requisite"),Object(n.b)("p",null,"Do this first:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Provision the OpenShift 4.3 Cluster"),Object(n.b)("li",{parentName:"ul"},"Ensure the logged in user has the Administrator privileges "),Object(n.b)("li",{parentName:"ul"},"Ensure you have created a new Project to manage the “codeready workspace operator & cluster”")),Object(n.b)("p",null,"Setting up the CRW Operator & Cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to Operator Hub and search of the Red Hat Cloudready workspace. Click on the operator and select the appropriate workspace to install the CRW operator.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to the installed operator to view the CRW operator. ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Now click the link visible as part of the operator to create/view the\nCheCluster part of the workspace")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create the CheCluster button, to navigate to the YAML Configuration\npage (displays all the parameters). ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You need to change the following parameter mentioned below, As part of\nthe storage section, please add the following parameters"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"postgresPVCStorageClassName: ibmc-block-gold\nworkspacePVCStorageClassName: ibmc-block-gold\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Post definition the yaml section for storage will look as below"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(o.a)({parentName:"pre"},{})," :storage:\n    postgresPVCStorageClassName: ibmc-block-gold\n    pvcStrategy: per-workspace\n    pvcClaimSize: 1Gi\n    preCreateSubPaths: true\n    workspacePVCStorageClassName: ibmc-block-gold\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Now create, the cluster after doing the above changes. The cluster will take few minutes to get created as its resources such as Postgres DB, Keycloak Auth, CRW workspace will get created.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Once Cluster is created navigate to the overview tab of the CheCluster in\nthe CRW operator. You will be able to see the below :"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"URL of the CodeReady Workspaces URL"),Object(n.b)("li",{parentName:"ul"},"URL of the Red Hat SSO Admin Console URL "),Object(n.b)("li",{parentName:"ul"},"oAuth SSO Enabled."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This should be enabled by default, if not please slide the button to\nenable and confirm")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"TLS Would be disabled. Please slide the button to enable https connectivity\nto the CRW workspace and confirm")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You have now completed the provisioning of the Code Ready Workspaces\noperator into your development cluster and will enable it to be used by the\ndevelopers that plan to use this development cluster"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-install-crw-index-mdx-e8a5b7c09c5bcdffda22.js.map