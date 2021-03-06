---
title: Module devspace
aliases:
    - "/reference/pkg/nodejs/@pulumi/azure/devspace/"
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

<a href="../">@pulumi/azure</a> &gt; devspace

<div class="toggleVisible">
<div class="collapsed">
<h2 class="pdoc-module-header toggleButton" title="Click to show Index">Index ▹</h2>
</div>
<div class="expanded">
<h2 class="pdoc-module-header toggleButton" title="Click to hide Index">Index ▾</h2>
<div class="pdoc-module-contents">
<ul>
<li><a href="#Controller">class Controller</a></li>
<li><a href="#ControllerArgs">interface ControllerArgs</a></li>
<li><a href="#ControllerState">interface ControllerState</a></li>
</ul>

<a href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts">devspace/controller.ts</a> 
</div>
</div>
</div>


<h2 class="pdoc-module-header" id="Controller">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L52">class <b>Controller</b></a>
</h2>
<div class="pdoc-module-contents">
<pre class="highlight"><span class='kd'>extends</span> <a href='/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></pre>

Manages a DevSpace Controller.

## Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure";

const testResourceGroup = new azure.core.ResourceGroup("test", {
    location: "westeurope",
    name: "acctestRG1",
});
const testKubernetesCluster = new azure.containerservice.KubernetesCluster("test", {
    agentPoolProfile: {
        count: 1,
        name: "default",
        vmSize: "Standard_DS2_v2",
    },
    dnsPrefix: "acctestaks1",
    location: testResourceGroup.location,
    name: "acctestaks1",
    resourceGroupName: testResourceGroup.name,
    servicePrincipal: {
        clientId: "00000000-0000-0000-0000-000000000000",
        clientSecret: "00000000000000000000000000000000",
    },
});
const testController = new azure.devspace.Controller("test", {
    hostSuffix: "suffix",
    location: testResourceGroup.location,
    name: "acctestdsc1",
    resourceGroupName: testResourceGroup.name,
    sku: {
        name: "S1",
        tier: "Standard",
    },
    tags: {
        Environment: "Testing",
    },
    targetContainerHostCredentialsBase64: testKubernetesCluster.kubeConfigRaw.apply(kubeConfigRaw => Buffer.from(kubeConfigRaw).toString("base64")),
    targetContainerHostResourceId: testKubernetesCluster.id,
});
```

<h3 class="pdoc-member-header" id="Controller-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L100"> <b>constructor</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span><span class='kd'>new</span> Controller(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args: <a href='#ControllerArgs'>ControllerArgs</a>, opts?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</pre>


Create a Controller resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L61">method <b>get</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#ControllerState'>ControllerState</a>, opts?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#Controller'>Controller</a></pre>


Get an existing Controller resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L14">method <b>getProvider</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): ProviderResource | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></pre>

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L107">method <b>isInstance</b></a>
</h3>
<div class="pdoc-member-contents">
{{% md %}}

<pre class="highlight"><span class='kd'>static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span></pre>


Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-dataPlaneFqdn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L68">property <b>dataPlaneFqdn</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>dataPlaneFqdn: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

DNS name for accessing DataPlane services.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-hostSuffix">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L72">property <b>hostSuffix</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>hostSuffix: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L102">property <b>id</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>id: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</pre>
{{% md %}}

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L76">property <b>location</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>location: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L80">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>name: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L84">property <b>resourceGroupName</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>resourceGroupName: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-sku">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L88">property <b>sku</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>sku: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;{
    name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
    tier: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
}&gt;;</pre>
{{% md %}}

A `sku` block as documented below. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L92">property <b>tags</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>tags: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>}&gt;;</pre>
{{% md %}}

A mapping of tags to assign to the resource.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-targetContainerHostCredentialsBase64">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L96">property <b>targetContainerHostCredentialsBase64</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>targetContainerHostCredentialsBase64: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-targetContainerHostResourceId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L100">property <b>targetContainerHostResourceId</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'>public </span>targetContainerHostResourceId: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="Controller-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L12">property <b>urn</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>urn: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</pre>
{{% md %}}

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

{{% /md %}}
</div>
</div>
<h2 class="pdoc-module-header" id="ControllerArgs">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L206">interface <b>ControllerArgs</b></a>
</h2>
<div class="pdoc-module-contents">

The set of arguments for constructing a Controller resource.

<h3 class="pdoc-member-header" id="ControllerArgs-hostSuffix">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L210">property <b>hostSuffix</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>hostSuffix: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L214">property <b>location</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>location?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L218">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>name?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L222">property <b>resourceGroupName</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>resourceGroupName: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-sku">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L226">property <b>sku</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>sku: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
    name: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
    tier: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
}&gt;;</pre>
{{% md %}}

A `sku` block as documented below. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L230">property <b>tags</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>tags?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>}&gt;;</pre>
{{% md %}}

A mapping of tags to assign to the resource.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-targetContainerHostCredentialsBase64">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L234">property <b>targetContainerHostCredentialsBase64</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>targetContainerHostCredentialsBase64: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerArgs-targetContainerHostResourceId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L238">property <b>targetContainerHostResourceId</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>targetContainerHostResourceId: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
</div>
<h2 class="pdoc-module-header" id="ControllerState">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L164">interface <b>ControllerState</b></a>
</h2>
<div class="pdoc-module-contents">

Input properties used for looking up and filtering Controller resources.

<h3 class="pdoc-member-header" id="ControllerState-dataPlaneFqdn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L168">property <b>dataPlaneFqdn</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>dataPlaneFqdn?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

DNS name for accessing DataPlane services.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-hostSuffix">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L172">property <b>hostSuffix</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>hostSuffix?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The host suffix for the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L176">property <b>location</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>location?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L180">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>name?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L184">property <b>resourceGroupName</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>resourceGroupName?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-sku">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L188">property <b>sku</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>sku?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
    name: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
    tier: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
}&gt;;</pre>
{{% md %}}

A `sku` block as documented below. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L192">property <b>tags</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>tags?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>}&gt;;</pre>
{{% md %}}

A mapping of tags to assign to the resource.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-targetContainerHostCredentialsBase64">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L196">property <b>targetContainerHostCredentialsBase64</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>targetContainerHostCredentialsBase64?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

Base64 encoding of `kube_config_raw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="ControllerState-targetContainerHostResourceId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/9ad002cd8d3c86adcf7430e550cbb381cb2e36c5/sdk/nodejs/devspace/controller.ts#L200">property <b>targetContainerHostResourceId</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>targetContainerHostResourceId?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
{{% md %}}

The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.

{{% /md %}}
</div>
</div>
