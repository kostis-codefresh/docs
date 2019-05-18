$(function() {
    // Make "$ " inside bash and shell code snippets unselectable.
    var pattern = /((^|\r|\n|\r\n)( |\t)*\$ )/gi;
    var replaceWith = '<span class="no-select">$1</span>';
    $(".highlight .chroma .language-bash, .highlight .chroma .language-shell").each(function() {
        $(this).html($(this).html().replace(pattern, replaceWith));
    });
});
