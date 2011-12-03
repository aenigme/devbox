Download
--------

[Markdown 1.0.1][dl] (18 KB) -- 17 Dec 2004

[dl]: http://daringfireball.net/projects/downloads/Markdown_1.0.1.zip


Introduction
------------

Markdown is a text-to-HTML conversion tool for web writers. Markdown
allows you to write using an easy-to-read, easy-to-write plain text
format, then convert it to structurally valid XHTML (or HTML).

Thus, "Markdown" is two things: (1) a plain text formatting syntax;
and (2) a software tool, written in Perl, that converts the plain text
formatting to HTML. See the [Syntax][] page for details pertaining to
Markdown's formatting syntax. You can try it out, right now, using the
online [Dingus][].

  [syntax]: /projects/markdown/syntax
  [dingus]: /projects/markdown/dingus

The overriding design goal for Markdown's formatting syntax is to make
it as readable as possible. The idea is that a Markdown-formatted
document should be publishable as-is, as plain text, without looking
like it's been marked up with tags or formatting instructions. While
Markdown's syntax has been influenced by several existing text-to-HTML
filters, the single biggest source of inspiration for Markdown's
syntax is the format of plain text email.

The best way to get a feel for Markdown's formatting syntax is simply
to look at a Markdown-formatted document. For example, you can view
the Markdown source for the article text on this page here:
<http://daringfireball.net/projects/markdown/index.text>

### Movable Type ###

Markdown works with Movable Type version 2.6 or later (including
Movable Type 3.0).

1.  Copy the "Markdown.pl" file into your Movable Type "plugins"
	directory. The "plugins" directory should be in the same directory
	as "mt.cgi"; if the "plugins" directory doesn't already exist, use
	your FTP program to create it. Your installation should look like
	this:

        (mt home)/plugins/Markdown.pl

2.  Once installed, Markdown will appear as an option in Movable Type's
	Text Formatting pop-up menu. This is selectable on a per-post basis:
	
	![Screenshot of Movable Type 'Text Formatting' Menu][tfmenu]
	
	Markdown translates your posts to HTML when you publish; the posts
	themselves are stored in your MT database in Markdown format.

3.	If you also install SmartyPants 1.5 (or later), Markdown will
	offer a second text formatting option: "Markdown With
	SmartyPants". This option is the same as the regular "Markdown"
	formatter, except that it automatically uses SmartyPants to create
	typographically correct curly quotes, em-dashes, and ellipses. See
	the [SmartyPants web page][sp] for more information.

4.	To make Markdown (or "Markdown With SmartyPants") your default
	text formatting option for new posts, go to Weblog Config:
	Preferences.

Note that by default, Markdown produces XHTML output. To configure
Markdown to produce HTML 4 output, see "Configuration", below.

  [sp]: http://daringfireball.net/projects/smartypants/




Configuration  <a id="configuration"></a>
-------------

By default, Markdown produces XHTML output for tags with empty elements.
E.g.:

    <br />

Markdown can be configured to produce HTML-style tags; e.g.:

    <br>


### Movable Type ###

You need to use a special `MTMarkdownOptions` container tag in each
Movable Type template where you want HTML 4-style output:

    <MTMarkdownOptions output='html4'>
        ... put your entry content here ...
    </MTMarkdownOptions>

The easiest way to use MTMarkdownOptions is probably to put the
opening tag right after your `<body>` tag, and the closing tag right
before `</body>`.

To suppress Markdown processing in a particular template, i.e. to
publish the raw Markdown-formatted text without translation into
(X)HTML, set the `output` attribute to 'raw':

    <MTMarkdownOptions output='raw'>
        ... put your entry content here ...
    </MTMarkdownOptions>


[Michel Fortin][] has ported Markdown to PHP; it's a splendid port, and highly recommended for anyone looking for a PHP implementation of Markdown.

  [Aaron Swartz]:		http://www.aaronsw.com/
  [Nathaniel Irons]:	http://bumppo.net/
  [Dan Benjamin]:		http://hivelogic.com/
  [Daniel Bogan]:		http://waferbaby.com/
  [Jason Perkins]:		http://pressedpants.com/
  [Michel Fortin]:		http://www.michelf.com/projects/php-markdown/
  [html2text]:          http://www.aaronsw.com/2002/html2text/
 
  [tfmenu]: /graphics/markdown/mt_textformat_menu.png
