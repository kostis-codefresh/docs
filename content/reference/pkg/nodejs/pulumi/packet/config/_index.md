---
title: Module config
aliases:
    - "/reference/pkg/nodejs/@pulumi/packet/config/"
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->

<a href="../">@pulumi/packet</a> &gt; config

<div class="toggleVisible">
<div class="collapsed">
<h2 class="pdoc-module-header toggleButton" title="Click to show Index">Index ▹</h2>
</div>
<div class="expanded">
<h2 class="pdoc-module-header toggleButton" title="Click to hide Index">Index ▾</h2>
<div class="pdoc-module-contents">
<ul>
<li><a href="#authToken">let authToken</a></li>
</ul>

<a href="https://github.com/pulumi/pulumi-packet/blob/bf168f0c90561dc03992c92dedcb260913a11053/sdk/nodejs/config/vars.ts">config/vars.ts</a> 
</div>
</div>
</div>


<h2 class="pdoc-module-header" id="authToken">
<a class="pdoc-member-name" href="https://github.com/pulumi/pulumi-packet/blob/bf168f0c90561dc03992c92dedcb260913a11053/sdk/nodejs/config/vars.ts#L12">let <b>authToken</b></a>
</h2>
<div class="pdoc-module-contents">
<pre class="highlight"><span class='kd'>let</span> authToken: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> = <span class='s2'> utilities.requireWithDefault(() =&gt; __config.require(&#34;authToken&#34;), utilities.getEnv(&#34;PACKET_AUTH_TOKEN&#34;))</span>;</pre>

The API auth key for API operations.

</div>
