---
title: Module containeranalysis
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

<a href="../index.html">@pulumi/gcp</a> &gt; containeranalysis

<div class="toggleVisible" markdown="1">
<div class="collapsed" markdown="1">
<h2 class="pdoc-module-header toggleButton" title="Click to show Index">Index ▹</h2>
</div>
<div class="expanded" markdown="1">
<h2 class="pdoc-module-header toggleButton" title="Click to hide Index">Index ▾</h2>
<div class="pdoc-module-contents" markdown="1">
* <a href="#Note">class Note</a>
* <a href="#NoteArgs">interface NoteArgs</a>
* <a href="#NoteState">interface NoteState</a>

<a href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts">containeranalysis/note.ts</a> 
</div>
</div>
</div>


<h2 class="pdoc-module-header" id="Note">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L19">class <b>Note</b></a>
</h2>
<div class="pdoc-module-contents" markdown="1">
<pre class="highlight"><span class='kd'>extends</span> <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#CustomResource'>CustomResource</a></pre>

Provides a detailed description of a Note.

> **Warning:** This resource is in beta, and should be used with the terraform-provider-google-beta provider.
See [Provider Versions](https://terraform.io/docs/providers/google/provider_versions.html) for more details on beta resources.

To get more information about Note, see:

* [API documentation](https://cloud.google.com/container-analysis/api/reference/rest/)
* How-to Guides
    * [Official Documentation](https://cloud.google.com/container-analysis/)

<h3 class="pdoc-member-header" id="Note-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L34"> <b>constructor</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">

<pre class="highlight"><span class='kd'></span><span class='kd'>new</span> Note(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args: <a href='#NoteArgs'>NoteArgs</a>, opts?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</pre>


Create a Note resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

</div>
<h3 class="pdoc-member-header" id="Note-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L28">method <b>get</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">

<pre class="highlight"><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#NoteState'>NoteState</a>, opts?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#Note'>Note</a></pre>


Get an existing Note resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

</div>
<h3 class="pdoc-member-header" id="Note-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L14">method <b>getProvider</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">

<pre class="highlight"><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): ProviderResource | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></pre>

</div>
<h3 class="pdoc-member-header" id="Note-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L107">method <b>isInstance</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">

<pre class="highlight"><span class='kd'>static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span></pre>


Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

</div>
<h3 class="pdoc-member-header" id="Note-attestationAuthority">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L32">property <b>attestationAuthority</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'>public </span>attestationAuthority: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Output'>pulumi.Output</a>&lt;{
    hint: {
        humanReadableName: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;
    };
}&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="Note-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L102">property <b>id</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>id: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Output'>Output</a>&lt;<a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#ID'>ID</a>&gt;;</pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

</div>
<h3 class="pdoc-member-header" id="Note-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L33">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'>public </span>name: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="Note-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L34">property <b>project</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'>public </span>project: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="Note-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/node_modules/@pulumi/pulumi/resource.d.ts#L12">property <b>urn</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>urn: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Output'>Output</a>&lt;<a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#URN'>URN</a>&gt;;</pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

</div>
</div>
<h2 class="pdoc-module-header" id="NoteArgs">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L76">interface <b>NoteArgs</b></a>
</h2>
<div class="pdoc-module-contents" markdown="1">

The set of arguments for constructing a Note resource.

<h3 class="pdoc-member-header" id="NoteArgs-attestationAuthority">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L77">property <b>attestationAuthority</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>attestationAuthority: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
    hint: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
        humanReadableName: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
    }&gt;;
}&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="NoteArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L78">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>name?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="NoteArgs-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L79">property <b>project</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>project?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
</div>
<h2 class="pdoc-module-header" id="NoteState">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L67">interface <b>NoteState</b></a>
</h2>
<div class="pdoc-module-contents" markdown="1">

Input properties used for looking up and filtering Note resources.

<h3 class="pdoc-member-header" id="NoteState-attestationAuthority">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L68">property <b>attestationAuthority</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>attestationAuthority?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
    hint: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{
        humanReadableName: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;
    }&gt;;
}&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="NoteState-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L69">property <b>name</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>name?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
<h3 class="pdoc-member-header" id="NoteState-project">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-gcp/blob/dfd50d3cd37076dc64bfff16a687877050b08fcb/sdk/nodejs/containeranalysis/note.ts#L70">property <b>project</b></a>
</h3>
<div class="pdoc-member-contents" markdown="1">
<pre class="highlight"><span class='kd'></span>project?: <a href='https://pulumi.io/reference/pkg/nodejs/@pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</pre>
</div>
</div>