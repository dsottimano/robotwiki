<template>     

<div>
    <DocNavbar></DocNavbar>
<h3>Getting Started With Hubot</h3>

<p>You will need node.js and npm. Once those are installed, we can install the hubot generator:</p>

<div class="panel panel-block"></div> %  npm install -g yo generator-hubot
This will give us the hubot yeoman generator. Now we
can make a new directory, and generate a new instance of hubot in it. For example, if
we wanted to make a bot called myhubot:

<div class="panel panel-block"></div>% mkdir myhubot
% cd myhubot
% yo hubot
At this point, you'll be asked a few questions about who is creating the bot,
and which adapter you'll be using. Adapters are hubot's
way of integrating with different chat providers.

<p>If you are using git, the generated directory includes a .gitignore, so you can
initialize and add everything:</p>

% git init
% git add .
% git commit -m "Initial commit"
<p>If you'd prefer to automate your hubot build without being interactively
prompted for its configuration, you can add the following options
to the yo hubot command to do so:</p>

Option	Description
--owner="Bot Wrangler <bw@example.com>"	Bot owner, e.g. "Bot Wrangler bw@example.com"
--name="Hubot"	Bot name, e.g. "Hubot"
--description="Delightfully aware robutt"	Bot description, e.g. "Delightfully aware robutt"
--adapter=campfire	Bot adapter, e.g. "campfire"
--defaults	Declare all defaults are set and no prompting required
<p>You now have your own functional hubot! There's a bin/hubot
command for convenience, to handle installing npm dependencies, loading scripts,
and then launching your hubot.</p>

<p>Hubot needs Redis to persist data, so before you can start hubot on your own computer, you should have Redis installed on your localhost. If just want to test Hubot without Redis, then you can remove hubot-redis-brain from external-scripts.json.</p>

% bin/hubot
Hubot>
<p>This starts hubot using the shell adapter, which
is mostly useful for development. Make note of Hubot>; this is the name your hubot will
respond to with commands. For example, to list available commands:</p>

<code>% bin/hubot
hubot> hubot help
hubot adapter - Reply with the adapter
hubot animate me <query> - The same thing as `image me`, except adds a few parameters to try to return an animated GIF instead.
hubot echo <text> - Reply back with <text>
hubot help - Displays all of the help commands that hubot knows about.
hubot help <query> - Displays all help commands that match <query>.
hubot image me <query> - The Original. Queries Google Images for <query> and returns a random top result.
hubot map me <query> - Returns a map view of the area returned by `query`.
hubot mustache me <query> - Searches Google Images for the specified query and mustaches it.
hubot mustache me <url> - Adds a mustache to the specified URL.
hubot ping - Reply with pong
hubot pronounce <phrase> in <language> - Provides pronunciation of <phrase> (<language> is optional)
hubot pug bomb N - get N pugs
hubot pug me - Receive a pug
hubot the rules - Make sure hubot still knows the rules.
hubot time - Reply with current time
hubot translate me <phrase> - Searches for a translation for the <phrase> and then prints that bad boy out.
hubot translate me from <source> into <target> <phrase> - Translates <phrase> from <source> into <target>. Both <source> and <target> are optional
hubot youtube me <query> - Searches YouTube for the query and returns the video embed link.
ship it - Display a motivation squirrel</code>
<p>You almost definitely will want to change your hubot's name to add character. bin/hubot takes a --name:</p>

% bin/hubot --name myhubot
myhubot>
<p>Your hubot will now respond as myhubot. This is
case-insensitive, and can be prefixed with @ or suffixed with :. These are equivalent:</p>

MYHUBOT help
myhubot help
@myhubot help
myhubot: help
Scripts

<p>Hubot's power comes through scripts. There are hundreds of scripts written and maintained by the community. Find them by searching the NPM registry for hubot-scripts <your-search-term>. For example:</p>

$ npm search hubot-scripts github
NAME                  DESCRIPTION
hubot-deployer        Giving Hubot the ability to deploy GitHub repos to PaaS providers hubot hubot-scripts hubot-gith
hubot-gh-release-pr   A hubot script to create GitHub's PR for release
hubot-github          Giving Hubot the ability to be a vital member of your github organization
…
<p>To use a script from an NPM package:</p>

Run npm install --save <package-name> to add the package as a dependency and install it.
Add the package to external-scripts.json.
Run npm home <package-name> to open a browser window for the homepage of the script, where you can find more information about configuring and installing the script.
You can also put your own scripts under the scripts/ directory. All scripts placed there are automatically loaded and ready to use with your hubot. Read more about customizing hubot by writing your own scripts.

<h3>Adapters</h3>

<p>Hubot uses the adapter pattern to support multiple chat-backends. Here is a list of available adapters, along with details on how to configure them.</p>

<h3>Deploying</h3>

<p>You can deploy hubot to Heroku, which is the officially supported method.
Additionally you are able to deploy hubot to a UNIX-like system or Windows.
Please note the support for deploying to Windows isn't officially supported.</p>

Deploying Hubot onto Heroku
Deploying Hubot onto UNIX
Deploying Hubot onto Windows
<h3>Patterns</h3>

<p>Using custom scripts, you can quickly customize Hubot to be the most life embettering robot he or she can be. Read docs/patterns.md for some nifty tricks that may come in handy as you teach your hubot new skills.</p>
</div>


</template>


<script>

import DocNavbar from '../Document-navbar'

export default {
    name:'document',
    components: { DocNavbar }
}

</script>


<style>

    
</style>