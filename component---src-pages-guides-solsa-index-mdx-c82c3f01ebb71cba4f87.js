(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"5Wl6":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return u}));var a=t("k1TG"),o=t("8o2o"),i=(t("q1tI"),t("7ljp")),s=t("013z"),r=(t("qKvR"),{}),l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},c=l("PageDescription"),p=l("Tabs"),b=l("Tab"),m={_frontmatter:r},d=s.a;function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"SolSA makes it possible to specify the software architecture of Kubernetes-managed cloud applications as JavaScript or TypeScript programs.")),Object(i.b)("h2",null,"Overview"),Object(i.b)("p",null,"Kubernetes is becoming the de facto standard for managing applications in the cloud. Thanks to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://operatorhub.io/"}),"operators"),", Kubernetes can be extended to manage virtually any kind of application resources: not only containers and microservices, but also virtual machines, cloud functions and events, managed cloud services, policies, meshes, etc. Each resource can be declared and configured with a few lines of YAML. However, while YAML is a fine language to perform some basic configuration, SolSA is designed to enable application developers to reason about applications at a higher-level of abstraction using familiar languages and development tools."),Object(i.b)("p",null,"The SolSA library for Node.js —a shorthand for Solution Service Architecture — makes it possible to specify the architecture of cloud applications as programs. SolSA enables developers to configure Kubernetes-managed resources by writing JavaScript or TypeScript code instead of YAML. SolSA automatically translates the developer written code to the required lower-level YAML. SolSA integrates with IDEs such as Visual Studio Code to provide online validation, code completion, and documentation of the various resources and configuration parameters."),Object(i.b)("h2",null,"Getting Started"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"solsa")," CLI is included in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/tools-image"}),"Tools Image")," and is pre-configured as a plugin to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/continuous-delivery"}),"ArgoCD instance")," installed in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace of your cluster. No further setup is needed for basic usage of SolSA.  To enable full IDE support, you will need to install the ",Object(i.b)("inlineCode",{parentName:"p"},"solsa")," package using npm in the same manner in which you would install any npm package you want to use in your IDE. Some typical installation options are discussed in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/solsa#solsa-setup"}),"SolSA setup instructions"),"."),Object(i.b)("h2",null,"Usage Scenarios"),Object(i.b)("p",null,"SolSA can be applied in any scenario where it is desirable to use a higher-level of abstraction to programmatically generate YAML to be applied to a Kubernetes or OpenShift cluster.  The use of SolSA is particularly compelling to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Specify the architecture of complex applications composed of multiple Kubernetes resources. SolSA augments the base Kubernetes resources with additional abstractions that simplify the specification of common patterns and reduce the amount of code written."),Object(i.b)("li",{parentName:"ul"},"Enable full IDE-support for your software architecture, including validation, code assist, and integrated documentation of Kubernetes resources and operators."),Object(i.b)("li",{parentName:"ul"},"Allow a single architecture specification to be programmatically specialized to different contexts (eg. dev vs. test vs. prod).")),Object(i.b)("h3",null,"Specification of Kubernetes Resources"),Object(i.b)("p",null,"Deploying just a single microservice that is accessible outside of a Kubernetes cluster requires specifying three related Kubernetes resources: a ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"Service"),", and an ",Object(i.b)("inlineCode",{parentName:"p"},"Ingress"),". SolSA simplifies this task by reducing the amount of repetitive code a developer needs to write and maintain."),Object(i.b)("p",null,"To illustrate how to use SolSA to specify the architecture of a simple cloud native application, we use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://istio.io/docs/examples/bookinfo/"}),"Bookinfo sample application")," from the Istio project. Bookinfo consists of four containerized microservices: an externally exposed productpage service that is implemented using three internal backend microservices."),Object(i.b)("p",null,"The tabs below contain two variants of the SolSA specification of Bookinfo’s architecture and the (identical) Kubernetes YAML that is generated from either one of these specifications by the ",Object(i.b)("inlineCode",{parentName:"p"},"solsa")," CLI."),Object(i.b)(p,{mdxType:"Tabs"},Object(i.b)(b,{label:"SolSA ContainerizedService",mdxType:"Tab"},Object(i.b)("p",null,"A very common Kubernetes pattern is the combination of a ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"Service")," to implement a single logical microservice. SolSA’s ",Object(i.b)("inlineCode",{parentName:"p"},"ContainerizedService")," provides a higher level abstraction for this pattern that allows the developer to specify the essential elements while eliding virtually all of the Kubernetes-specific details. As shown below, simple microservices can be specified very concisely. By providing additional arguments to the ",Object(i.b)("inlineCode",{parentName:"p"},"ContainerizedService")," constructor it is possible to control many aspects of the generated YAML. Specifying that the ",Object(i.b)("inlineCode",{parentName:"p"},"productpage")," service should be exposed outside the cluster is declared by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"getIngress")," passing the desired virtual host name ",Object(i.b)("inlineCode",{parentName:"p"},"bookinfo"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let solsa = require('solsa')\n\nlet details = new solsa.ContainerizedService({ name: 'details', image: 'istio/examples-bookinfo-details-v1:1.15.0', port: 9080 })\nlet ratings = new solsa.ContainerizedService({ name: 'ratings', image: 'istio/examples-bookinfo-ratings-v1:1.15.0', port: 9080 })\nlet reviews = new solsa.ContainerizedService({ name: 'reviews', image: 'istio/examples-bookinfo-reviews-v1:1.15.0', port: 9080 })\nlet productpage = new solsa.ContainerizedService({ name: 'productpage', image: 'istio/examples-bookinfo-productpage-v1:1.15.0', port: 9080 })\nproductpage.env = {\n  DETAILS_HOSTNAME: details.name,\n  RATINGS_HOSTNAME: ratings.name,\n  REVIEWS_HOSTNAME: reviews.name\n}\nlet entry = productpage.getIngress({ vhost: 'bookinfo' })\n\nmodule.exports = new solsa.Bundle({ details, ratings, reviews, productpage, entry })\n"))),Object(i.b)(b,{label:"SolSA Deployment",mdxType:"Tab"},Object(i.b)("p",null,"The SolSA library includes fully integrated support for all Kubernetes resource types. The (much larger) code block below shows how Bookinfo would be specified in SolSA directly using the Kubernetes native concept of ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment"),".  Working at this lower level of abstraction requires that the developer be more familiar with Kubernetes concepts, but enables full control over all aspects of the generated YAML.  Notice that even when working directly with ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment"),", the developer is still able to elide the details of the ",Object(i.b)("inlineCode",{parentName:"p"},"Service")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Ingress")," resources by using SolSA’s ",Object(i.b)("inlineCode",{parentName:"p"},"getService")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getIngress")," methods which derive all the necessary information the underlying ",Object(i.b)("inlineCode",{parentName:"p"},"Deployment"),". Thus even when working at a Kubernetes-native level of abstraction, SolSA can eliminate some of the repetitive and error prone coding present when working purely at the YAML level."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"let solsa = require('solsa')\n\nlet details = new solsa.apps.v1.Deployment({\n  metadata: { name: 'details' },\n  spec: {\n    selector: { matchLabels: { 'solsa.ibm.com/pod': 'details' } },\n    replicas: 1,\n    template: {\n      spec: {\n        containers: [\n          {\n            name: 'details',\n            image: 'istio/examples-bookinfo-details-v1:1.15.0',\n            env: [{ name: 'PORT', value: '9080' }],\n            ports: [{ containerPort: 9080 }],\n            livenessProbe: { tcpSocket: { port: 9080 } },\n            readinessProbe: { tcpSocket: { port: 9080 } }\n          }\n        ]\n      }\n    }\n  }\n})\nlet detailsService = details.getService()\n\nlet reviews = new solsa.apps.v1.Deployment({\n  metadata: { name: 'reviews' },\n  spec: {\n    selector: { matchLabels: { 'solsa.ibm.com/pod': 'reviews' } },\n    replicas: 1,\n    template: {\n      spec: {\n        containers: [\n          {\n            name: 'reviews',\n            image: 'istio/examples-bookinfo-reviews-v1:1.15.0',\n            env: [{ name: 'PORT', value: '9080' }],\n            ports: [{ containerPort: 9080 }],\n            livenessProbe: { tcpSocket: { port: 9080 } },\n            readinessProbe: { tcpSocket: { port: 9080 } }\n          }\n        ]\n      }\n    }\n  }\n})\nlet reviewsService = reviews.getService()\n\nlet ratings = new solsa.apps.v1.Deployment({\n  metadata: { name: 'ratings' },\n  spec: {\n    selector: { matchLabels: { 'solsa.ibm.com/pod': 'ratings' } },\n    replicas: 1,\n    template: {\n      spec: {\n        containers: [\n          {\n            name: 'ratings',\n            image: 'istio/examples-bookinfo-ratings-v1:1.15.0',\n            env: [{ name: 'PORT', value: '9080' }],\n            ports: [{ containerPort: 9080 }],\n            livenessProbe: { tcpSocket: { port: 9080 } },\n            readinessProbe: { tcpSocket: { port: 9080 } }\n          }\n        ]\n      }\n    }\n  }\n})\nlet ratingsService = ratings.getService()\n\nlet productpage = new solsa.apps.v1.Deployment({\n  metadata: { name: 'productpage' },\n  spec: {\n    selector: { matchLabels: { 'solsa.ibm.com/pod': 'productpage' } },\n    replicas: 1,\n    template: {\n      spec: {\n        containers: [\n          {\n            name: 'productpage',\n            image: 'istio/examples-bookinfo-productpage-v1:1.15.0',\n            env: [\n              { name: 'PORT', value: '9080' },\n              { name: 'DETAILS_HOSTNAME', value: details.metadata.name },\n              { name: 'RATINGS_HOSTNAME', value: ratings.metadata.name },\n              { name: 'REVIEWS_HOSTNAME', value: reviews.metadata.name }\n            ],\n            ports: [{ containerPort: 9080 }],\n            livenessProbe: { tcpSocket: { port: 9080 } },\n            readinessProbe: { tcpSocket: { port: 9080 } }\n          }\n        ]\n      }\n    }\n  }\n})\nlet productpageService = productpage.getService()\nlet ingress = productpageService.getIngress({ vhost: 'bookinfo' })\n\nmodule.exports = new solsa.Bundle({ details, detailsService, reviews, reviewsService, ratings, ratingsService, productpage, productpageService, ingress })\n"))),Object(i.b)(b,{label:"Generated YAML",mdxType:"Tab"},Object(i.b)("p",null,"Shown below is the output from ",Object(i.b)("inlineCode",{parentName:"p"},"solsa yaml")," when applied to either of the two Bookinfo specifications."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Service\nmetadata:\n  name: details\nspec:\n  ports:\n  - port: 9080\n    targetPort: 9080\n  selector:\n    solsa.ibm.com/pod: details\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: productpage\nspec:\n  ports:\n  - port: 9080\n    targetPort: 9080\n  selector:\n    solsa.ibm.com/pod: productpage\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ratings\nspec:\n  ports:\n  - port: 9080\n    targetPort: 9080\n  selector:\n    solsa.ibm.com/pod: ratings\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: reviews\nspec:\n  ports:\n  - port: 9080\n    targetPort: 9080\n  selector:\n    solsa.ibm.com/pod: reviews\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      solsa.ibm.com/pod: details\n  template:\n    metadata:\n      labels:\n        solsa.ibm.com/pod: details\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "9080"\n        image: istio/examples-bookinfo-details-v1:1.15.0\n        livenessProbe:\n          tcpSocket:\n            port: 9080\n        name: details\n        ports:\n        - containerPort: 9080\n        readinessProbe:\n          tcpSocket:\n            port: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: productpage\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      solsa.ibm.com/pod: productpage\n  template:\n    metadata:\n      labels:\n        solsa.ibm.com/pod: productpage\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "9080"\n        - name: DETAILS_HOSTNAME\n          value: details\n        - name: RATINGS_HOSTNAME\n          value: ratings\n        - name: REVIEWS_HOSTNAME\n          value: reviews\n        image: istio/examples-bookinfo-productpage-v1:1.15.0\n        livenessProbe:\n          tcpSocket:\n            port: 9080\n        name: productpage\n        ports:\n        - containerPort: 9080\n        readinessProbe:\n          tcpSocket:\n            port: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ratings\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      solsa.ibm.com/pod: ratings\n  template:\n    metadata:\n      labels:\n        solsa.ibm.com/pod: ratings\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "9080"\n        image: istio/examples-bookinfo-ratings-v1:1.15.0\n        livenessProbe:\n          tcpSocket:\n            port: 9080\n        name: ratings\n        ports:\n        - containerPort: 9080\n        readinessProbe:\n          tcpSocket:\n            port: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      solsa.ibm.com/pod: reviews\n  template:\n    metadata:\n      labels:\n        solsa.ibm.com/pod: reviews\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "9080"\n        image: istio/examples-bookinfo-reviews-v1:1.15.0\n        livenessProbe:\n          tcpSocket:\n            port: 9080\n        name: reviews\n        ports:\n        - containerPort: 9080\n        readinessProbe:\n          tcpSocket:\n            port: 9080\n---\napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: productpage\nspec:\n  rules:\n  - host: bookinfo.mycluster.us-east.containers.appdomain.cloud\n    http:\n      paths:\n      - backend:\n          serviceName: productpage\n          servicePort: 9080\n        path: /\n  tls:\n  - hosts:\n    - bookinfo.mycluster.us-east.containers.appdomain.cloud\n    secretName: mycluster\n')))),Object(i.b)("h3",null,"Using SolSA with Kubernetes Operators"),Object(i.b)("p",null,"The SolSA library includes JavaScript/TypeScript bindings for every Kubernetes Operator available on\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://operatorhub.io/"}),"OperatorHub.io"),".  These enables full IDE-support for defining applications that utilize operators to manage the life-cycles of some portions of their resources."),Object(i.b)("p",null,"As an example, the tabs below show the SolSA specification and the generated YAML of a simple language translation application in which a microservice defined using SolSA’s ",Object(i.b)("inlineCode",{parentName:"p"},"ContainerzedService")," abstraction is combined with an instance of the Watson Translator service on the IBM Public Cloud. The IBM Cloud Operator is used to instantiate the Watson Translator Service instance and make the credentials for accessing it available to the dependent microservice via a Kubernetes secret."),Object(i.b)(p,{mdxType:"Tabs"},Object(i.b)(b,{label:"SolSA",mdxType:"Tab"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst path = require('path')\nconst solsa = require('solsa')\n\nfunction translator ({ name, language }) {\n  let watson = new solsa.LanguageTranslator({ name: 'watson-translator-for-' + name })\n  let translator = new solsa.ContainerizedService({ name, image: 'solsa-translator', build: path.join(__dirname, 'solsa-translator'), port: 8080 })\n  translator.env = { LANGUAGE: { value: language }, WATSON_URL: watson.getSecret('url'), WATSON_APIKEY: watson.getSecret('apikey') }\n  let ingress = translator.getIngress()\n  return new solsa.Bundle({ watson, translator, ingress })\n}\n\nmodule.exports = translator({ name: 'my-translator', language: 'en' })\n"))),Object(i.b)(b,{label:"YAML",mdxType:"Tab"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: ibmcloud.ibm.com/v1alpha1\nkind: Service\nmetadata:\n  name: watson-translator-for-my-translator\nspec:\n  plan: lite\n  serviceClass: language-translator\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-translator\nspec:\n  ports:\n  - port: 8080\n    targetPort: 8080\n  selector:\n    solsa.ibm.com/pod: my-translator\n  type: ClusterIP\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-translator\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      solsa.ibm.com/pod: my-translator\n  template:\n    metadata:\n      labels:\n        solsa.ibm.com/pod: my-translator\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "8080"\n        - name: LANGUAGE\n          value: en\n        - name: WATSON_URL\n          valueFrom:\n            secretKeyRef:\n              key: url\n              name: watson-translator-for-my-translator\n        - name: WATSON_APIKEY\n          valueFrom:\n            secretKeyRef:\n              key: apikey\n              name: watson-translator-for-my-translator\n        image: docker.io/solsa/solsa-translator\n        livenessProbe:\n          tcpSocket:\n            port: 8080\n        name: my-translator\n        ports:\n        - containerPort: 8080\n        readinessProbe:\n          tcpSocket:\n            port: 8080\n---\napiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: my-translator\nspec:\n  rules:\n  - host: my-translator.mycluster.us-east.containers.appdomain.cloud\n    http:\n      paths:\n      - backend:\n          serviceName: my-translator\n          servicePort: 8080\n        path: /\n  tls:\n  - hosts:\n    - my-translator.mycluster.us-east.containers.appdomain.cloud\n    secretName: mycluster\n---\napiVersion: ibmcloud.ibm.com/v1alpha1\nkind: Binding\nmetadata:\n  name: watson-translator-for-my-translator\nspec:\n  serviceName: watson-translator-for-my-translator\n\n')))),Object(i.b)("h3",null,"Using SolSA with ArgoCD"),Object(i.b)("p",null,"The usage of ArgoCD is described in more detail in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/continuous-delivery/"}),"continuous delivery")," section of this guide. A SolSA-specified application can be used in exactly the same workflows as an application specified by a Helm chart or Kustomize tree. The only additional step is to inform ArgoCD that it should use its SolSA plugin to generate the YAML for the application. In the instructions below, we will continue using the Bookinfo sample from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/solsa-examples"}),"solsa-examples")," git repo. The main SolSA file for this application is ",Object(i.b)("inlineCode",{parentName:"p"},"instance.js")),Object(i.b)(p,{mdxType:"Tabs"},Object(i.b)(b,{label:"ArgoCD UI",mdxType:"Tab"},Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into ArgoCD")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("inlineCode",{parentName:"p"},"New Application")," and provide the following values:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"application name")," - dev-bookinfo"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"project")," - default"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sync-policy")," - ",Object(i.b)("inlineCode",{parentName:"li"},"Automatic with pruning")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repository url")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/IBM/solsa-examples.git"}),"https://github.com/IBM/solsa-examples.git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"revision")," - HEAD"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," - examples/bookinfo"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination cluster")," - ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.default.svc"}),"https://kubernetes.default.svc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destination namespace")," - dev"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the ",Object(i.b)("inlineCode",{parentName:"p"},"EDIT AS YAML")," button and add the plugin stanza shown below to the ",Object(i.b)("inlineCode",{parentName:"p"},"source:")," block"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"source:\n  plugin:\n    name: solsa\n    env:\n      - name: SOLSA_APP_MAIN\n        value: instance.js\n")),Object(i.b)("p",null,"Finally deploy Bookinfo by clicking the Create button.")),Object(i.b)(b,{label:"Textual CRD",mdxType:"Tab"},Object(i.b)("p",null,"ArgoCD Applications can also be specified without using the ArgoCD UI by defining an ",Object(i.b)("inlineCode",{parentName:"p"},"argoproj.io.Application")," Custom Resource. In this style of management you\ncreate a ",Object(i.b)("inlineCode",{parentName:"p"},"bookinfoApp.yaml")," file containing the YAML shown below and then either check it into a git repo that ArgoCD is monitoring\nor directly apply it to your cluster via ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl apply -f bookinfoApp.yaml -n tools"),". Within a few seconds, the Bookinfo application should be deployed to your ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," namespace."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: bookinfo\nspec:\n  project: default\n  source:\n    repoURL: 'https://github.com/IBM/solsa-examples.git'\n    path: examples/bookinfo\n    targetRevision: HEAD\n    plugin:\n      name: solsa\n      env:\n        - name: SOLSA_APP_MAIN\n          value: instance.js\n  destination:\n    server: 'https://kubernetes.default.svc'\n    namespace: dev\n  syncPolicy:\n    automated:\n      prune: true\n")))),Object(i.b)("h2",null,"More Information"),Object(i.b)("p",null,"Additional information on SolSA, including ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/solsa-examples"}),"a tutorial and sample applications"),", is available from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/solsa"}),"SolSA open source project"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-solsa-index-mdx-c82c3f01ebb71cba4f87.js.map