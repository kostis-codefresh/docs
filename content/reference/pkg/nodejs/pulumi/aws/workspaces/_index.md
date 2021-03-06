---
title: Module workspaces
aliases:
    - "/reference/pkg/nodejs/@pulumi/aws/workspaces/"
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

<a href="../">@pulumi/aws</a> &gt; workspaces

<div class="toggleVisible">
<div class="collapsed">
<h2 class="pdoc-module-header toggleButton" title="Click to show Index">Index ▹</h2>
</div>
<div class="expanded">
<h2 class="pdoc-module-header toggleButton" title="Click to hide Index">Index ▾</h2>
<div class="pdoc-module-contents">
<ul>
<li><a href="#getBundle">function getBundle</a></li>
<li><a href="#GetBundleArgs">interface GetBundleArgs</a></li>
<li><a href="#GetBundleResult">interface GetBundleResult</a></li>
</ul>

<a href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts">workspaces/getBundle.ts</a> 
</div>
</div>
</div>


<h2 class="pdoc-module-header" id="getBundle">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L21">function <b>getBundle</b></a>
</h2>
<div class="pdoc-module-contents">
{{% md %}}

<pre class="highlight"><span class='kd'></span>getBundle(args: <a href='#GetBundleArgs'>GetBundleArgs</a>, opts?: <a href='/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions'>pulumi.InvokeOptions</a>): <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'>Promise</a>&lt;<a href='#GetBundleResult'>GetBundleResult</a>&gt;</pre>


Use this data source to get information about a Workspaces Bundle.

## Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = pulumi.output(aws.workspaces.getBundle({
    bundleId: "wsb-b0s22j3d7",
}));
```

{{% /md %}}
</div>
<h2 class="pdoc-module-header" id="GetBundleArgs">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L37">interface <b>GetBundleArgs</b></a>
</h2>
<div class="pdoc-module-contents">

A collection of arguments for invoking getBundle.

<h3 class="pdoc-member-header" id="GetBundleArgs-bundleId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L41">property <b>bundleId</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>bundleId: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}

The ID of the bundle.

{{% /md %}}
</div>
</div>
<h2 class="pdoc-module-header" id="GetBundleResult">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L47">interface <b>GetBundleResult</b></a>
</h2>
<div class="pdoc-module-contents">

A collection of values returned by getBundle.

<h3 class="pdoc-member-header" id="GetBundleResult-bundleId">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L48">property <b>bundleId</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>bundleId: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}
{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-computeTypes">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L52">property <b>computeTypes</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>computeTypes: {
    name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
}[];</pre>
{{% md %}}

The compute type. See supported fields below.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L56">property <b>description</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>description: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}

The description of the bundle.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L76">property <b>id</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>id: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}

id is the provider-assigned unique ID for this managed resource.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L60">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}

The name of the compute type.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-owner">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L64">property <b>owner</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>owner: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</pre>
{{% md %}}

The owner of the bundle.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-rootStorages">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L68">property <b>rootStorages</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>rootStorages: {
    capacity: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
}[];</pre>
{{% md %}}

The root volume. See supported fields below.

{{% /md %}}
</div>
<h3 class="pdoc-member-header" id="GetBundleResult-userStorages">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-aws/blob/4587f51e21d4082d41ef2a51683fba5eef224c5b/sdk/nodejs/workspaces/getBundle.ts#L72">property <b>userStorages</b></a>
</h3>
<div class="pdoc-member-contents">
<pre class="highlight"><span class='kd'></span>userStorages: {
    capacity: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
}[];</pre>
{{% md %}}

The user storage. See supported fields below.

{{% /md %}}
</div>
</div>
