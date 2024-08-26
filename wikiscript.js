// Sample data loaded from export
const pages = {
    "Home": {
        "content": "<h1>Welcome to My Wiki</h1><p>This is the main page of the wiki.</p>",
        "anchors": ""
    },
    "Commands": {
        "content": "<div id=\"usage\">\n<h2>Usage</h2>\n<p>In the client, commands are entered via the chat window, which is displayed by pressing the T or / key. Using the / key also enters the forward-slash that commands require as a prefix, so it is a useful shortcut. The Up and Down keys can be used to view previously entered text, including all previously executed commands. When the cursor is at a location corresponding to some types of argument (such as an entity ID), a list of applicable values appears above the text box. If the argument is already containing some characters, the list displays only those values containing the typed text. Pressing Tab while entering commands cycles through possible commands or arguments, and can be used to auto-enter them. Commands may also be entered in a multiplayer server's console, but are not preceded by a / when entered this way. A server owner running commands in this way is often referred to as 'ghosting'. Commands in command blocks can be preceded by a slash, but it is not required.</p>\n<ul>\n<li>Entered by a player in the chat screen.</li>\n<li>Executed by a command block or a minecart with command block.</li>\n<li>In a dedicated server, entered in the console.</li>\n<li>In functions, in a data pack.</li>\n<li>Clicking a Json text that has 'run_command' action.</li>\n<li>In animation controllers, in a behavior pack.</li>\n</ul>\n</div>\n<div id=\"commandguide\">\n<h2>Command Guide</h2>\n<h3>Syntax</h3>\n<p>In Java Edition, commands have a specific syntax:</p>\n<ul>\n<li><strong>plain text</strong> - Enter this literally, exactly as shown.</li>\n<li><strong>&lt;argumentName&gt;</strong> - An argument, which should be replaced with an appropriate value.</li>\n</ul>\n<h4>Decorators</h4>\n<ul>\n<li><strong>[entry]</strong> - This entry is optional.</li>\n<li><strong>(entry|entry|...)</strong> - Required. Pick one of these entries.</li>\n<li><strong>[entry|entry|...]</strong> - Optional. Pick one of these entries.</li>\n<li><strong>ellipsis (...)</strong> - In the game, another full command is required.</li>\n</ul>\n<p>Examples include: [<size>] is an optional argument, and <code>advancement (grant|revoke) &lt;targets&gt; only &lt;advancement&gt; [&lt;criterion&gt;]</code>.</p>\n<h3>Restrictions</h3>\n<p>Most commands require the executor to have a high enough permission level. This means most commands are available in the singleplayer world only if cheats are enabled and available in a multiplayer server only if the player is an operator. See permission level for details.</p>\n<ul>\n<li><strong>None</strong> - The command has no restriction.</li>\n<li><strong>Dedicated server only</strong> - The command is available only on dedicated servers.</li>\n<li><strong>No dedicated server</strong> - The command is not available on dedicated servers.</li>\n</ul>\n<p>In Java Edition, whether cheats are enabled only affects the permission level of a player. If an executor has a high enough permission level, they can use corresponding commands regardless of whether cheats are allowed. Cheats can be enabled when creating a new world by allowing commands via the 'Allow Commands' option. Cheats can also be enabled on a temporary basis by opening the current game session to LAN play (Esc → 'Open to LAN', then 'Allow Cheats' button and 'Start LAN World'). This is not permanent but allows the use of commands until the player quits the world. Changes made via commands are saved with the world. To permanently enable cheats, the level.dat file has to be edited.</p>\n</div>\n<div id=\"argumenttypes\">\n<h2>Argument Types</h2>\n<p>There are different argument types for commands. Coordinates, target selector, SNBT, text component, and so on are commonly used formats in arguments.</p>\n</div>\n<div id=\"parsingandexecution\">\n<h2>Parsing and Execution</h2>\n<p>The command performing on the server side is divided into two stages: command parsing and command execution.</p>\n<h3>Parsing</h3>\n<p>During the command parsing stage, the game identifies the string as a command and checks whether the command is complete and whether arguments are specified correctly.</p>\n<h3>Execution</h3>\n<p>During the command execution stage, the command fulfills its purpose.</p>\n<h4>Client Parsing</h4>\n<ul>\n<li>In Java Edition, if an argument cannot be parsed by the client, the argument is marked in red, and a syntax error message is displayed above the chat bar.</li>\n<li>In Java Edition, typing a command in a command block also behaves as above.</li>\n</ul>\n<h4>Output Errors</h4>\n<p>In Java Edition, the message has a '<--[HERE]' at its end.</p>\n<h4>Result Values</h4>\n<ul>\n<li>In Java Edition, commands that cannot be executed in command blocks have no success count.</li>\n<li>In Java Edition, success count is always 0 or 1, except for the /execute command.</li>\n</ul>\n<h4>Stored Values</h4>\n<ul>\n<li>Stored values include success value and result value, which are the values passed by other commands to the /execute command.</li>\n<li>These two values can be stored in a specified location by the store subcommand in the /execute command.</li>\n<li>The success value is always 0 or 1. The result value is an integer (rounded down if not).</li>\n</ul>\n<h4>Command Result</h4>\n<ul>\n<li><strong>Unparseable:</strong> If the entered command is unable to be parsed in the server side, it is unparseable.</li>\n<li><strong>Error:</strong> If an error occurs with a command, it means that there's a noticeable bug in the command. It may result in unintended side effects, and it jumps out of the /execute command halfway through, causing some branches to not be executed.</li>\n<li><strong>Void:</strong> Exclusive to /function command. If it is void, the command has no result or success value to be stored by /execute store.</li>\n<li><strong>Terminated:</strong> Exclusive to /execute command. When running a /execute command, if the number of execution branches becomes 0, the command terminates, ending before the last sub-command is executed.</li>\n<li><strong>Failed and Successful:</strong> If a command is not unparseable, erroring, void, nor terminated, it may be failed or successful.</li>\n</ul>\n</div>\n<div id=\"listandsummary\">\n<h2>List and Summary of Commands</h2>\n<h3>Available in Java Edition</h3>\n<p>The table below summarizes all commands available in Java Edition.</p>\n<table>\n<tr><th>Command</th><th>Description</th><th>Op Level</th><th>Multiplayer Only</th></tr>\n<tr><td>/advancement</td><td>Manages advancements.</td><td>2</td><td>No</td></tr>\n<tr><td>/attribute</td><td>Modifies entity attributes.</td><td>2</td><td>No</td></tr>\n<tr><td>/ban</td><td>Adds player(s) to banlist.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/ban-ip</td><td>Adds IP address to banlist.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/banlist</td><td>Displays contents of banlist.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/bossbar</td><td>Creates and modifies bossbars.</td><td>2</td><td>No</td></tr>\n<tr><td>/clear</td><td>Clears items from player inventory.</td><td>2</td><td>No</td></tr>\n<tr><td>/clone</td><td>Copies blocks from one region to another.</td><td>2</td><td>No</td></tr>\n<tr><td>/data</td><td>Gets or sets NBT data on entities or blocks.</td><td>2</td><td>No</td></tr>\n<tr><td>/datapack</td><td>Manages loaded data packs.</td><td>2</td><td>No</td></tr>\n<tr><td>/debug</td><td>Starts or stops a debugging session.</td><td>3</td><td>No</td></tr>\n<tr><td>/defaultgamemode</td><td>Sets the default game mode.</td><td>2</td><td>No</td></tr>\n<tr><td>/deop</td><td>Revokes operator status from player.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/effect</td><td>Applies or removes status effects.</td><td>2</td><td>No</td></tr>\n<tr><td>/enchant</td><td>Applies an enchantment to an item.</td><td>2</td><td>No</td></tr>\n<tr><td>/execute</td><td>Executes another command as another entity or at another location.</td><td>2</td><td>No</td></tr>\n<tr><td>/fill</td><td>Fills a region with a specified block.</td><td>2</td><td>No</td></tr>\n<tr><td>/forceload</td><td>Manages chunk loading.</td><td>2</td><td>No</td></tr>\n<tr><td>/function</td><td>Runs a function file.</td><td>2</td><td>No</td></tr>\n<tr><td>/gamemode</td><td>Changes the player's game mode.</td><td>2</td><td>No</td></tr>\n<tr><td>/gamerule</td><td>Changes game rules.</td><td>2</td><td>No</td></tr>\n<tr><td>/give</td><td>Gives an item to a player.</td><td>2</td><td>No</td></tr>\n<tr><td>/help</td><td>Shows help information.</td><td>1</td><td>No</td></tr>\n<tr><td>/kick</td><td>Kicks a player from the server.</td><td>2</td><td>Yes</td></tr>\n<tr><td>/kill</td><td>Kills entities.</td><td>2</td><td>No</td></tr>\n<tr><td>/list</td><td>Lists online players.</td><td>2</td><td>Yes</td></tr>\n<tr><td>/locate</td><td>Locates the nearest specified structure.</td><td>2</td><td>No</td></tr>\n<tr><td>/loot</td><td>Manages loot.</td><td>2</td><td>No</td></tr>\n<tr><td>/me</td><td>Sends a message as an action.</td><td>1</td><td>No</td></tr>\n<tr><td>/msg</td><td>Sends a private message.</td><td>1</td><td>Yes</td></tr>\n<tr><td>/particle</td><td>Generates particles.</td><td>2</td><td>No</td></tr>\n<tr><td>/playsound</td><td>Plays a sound to players.</td><td>2</td><td>No</td></tr>\n<tr><td>/publish</td><td>Publishes a world to LAN.</td><td>1</td><td>No</td></tr>\n<tr><td>/recipe</td><td>Manages player recipes.</td><td>2</td><td>No</td></tr>\n<tr><td>/reload</td><td>Reloads server data.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/replaceitem</td><td>Replaces items in inventories.</td><td>2</td><td>No</td></tr>\n<tr><td>/say</td><td>Broadcasts a message to all players.</td><td>1</td><td>No</td></tr>\n<tr><td>/scoreboard</td><td>Manages the scoreboard.</td><td>2</td><td>No</td></tr>\n<tr><td>/seed</td><td>Displays the world's seed.</td><td>2</td><td>No</td></tr>\n<tr><td>/setblock</td><td>Sets a block in the world.</td><td>2</td><td>No</td></tr>\n<tr><td>/setworldspawn</td><td>Sets the world's spawn point.</td><td>2</td><td>No</td></tr>\n<tr><td>/spawnpoint</td><td>Sets the spawn point for a player.</td><td>2</td><td>No</td></tr>\n<tr><td>/spreadplayers</td><td>Spreads entities around a point.</td><td>2</td><td>No</td></tr>\n<tr><td>/stats</td><td>Manages command stats.</td><td>2</td><td>No</td></tr>\n<tr><td>/stop</td><td>Stops the server.</td><td>3</td><td>Yes</td></tr>\n<tr><td>/summon</td><td>Summons entities.</td><td>2</td><td>No</td></tr>\n<tr><td>/tag</td><td>Manages entity tags.</td><td>2</td><td>No</td></tr>\n<tr><td>/team</td><td>Manages teams.</td><td>2</td><td>No</td></tr>\n<tr><td>/teleport</td><td>Teleports entities.</td><td>2</td><td>No</td></tr>\n<tr><td>/tellraw</td><td>Sends a raw JSON message.</td><td>2</td><td>No</td></tr>\n<tr><td>/time</td><td>Changes the time of day.</td><td>2</td><td>No</td></tr>\n<tr><td>/title</td><td>Controls the title screen.</td><td>2</td><td>No</td></tr>\n<tr><td>/toggledownfall</td><td>Toggles the weather.</td><td>2</td><td>No</td></tr>\n<tr><td>/tp</td><td>Teleports entities.</td><td>2</td><td>No</td></tr>\n<tr><td>/trigger</td><td>Triggers objectives.</td><td>2</td><td>No</td></tr>\n<tr><td>/weather</td><td>Changes the weather.</td><td>2</td><td>No</td></tr>\n<tr><td>/win</td><td>Sets the win conditions.</td><td>3</td><td>No</td></tr>\n<tr><td>/worldborder</td><td>Controls the world border.</td><td>2</td><td>No</td></tr>\n<tr><td>/xp</td><td>Gives or sets experience points.</td><td>2</td><td>No</td></tr>\n</table>\n</div>",
        "anchors": "Usage|usage\nCommand Guide|commandguide\nArgument Types|argumenttypes\nParsing and Execution|parsingandexecution\nList and Summary of Commands|listandsummary"
    }
           
};

// Function to load content based on the page
function loadContent(pageName) {
    const contentDiv = document.getElementById('page-content');
    if (pages[pageName]) {
        contentDiv.innerHTML = pages[pageName].content;
    } else {
        contentDiv.innerHTML = '<h2>404</h2><p>Page not found.</p>';
    }
}

// Function to create navigation links
function createNavLinks() {
    const navLinks = document.getElementById('nav-links');
    for (const [pageName, pageData] of Object.entries(pages)) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = pageName;
        a.onclick = (e) => {
            e.preventDefault();
            loadContent(pageName);
        };

        li.appendChild(a);

        // Check for anchors and create expandable list if present
        if (pageData.anchors) {
            const ul = document.createElement('ul');
            ul.classList.add('anchors-list');

            pageData.anchors.split('\n').forEach(anchor => {
                const [text, id] = anchor.split('|');
                const anchorLi = document.createElement('li');
                anchorLi.innerHTML = `<a href="#${id}">${text}</a>`;
                ul.appendChild(anchorLi);
            });

            li.classList.add('expandable');
            li.appendChild(ul);

            // Toggle the expandable list
            a.onclick = (e) => {
                e.preventDefault();
                li.classList.toggle('open');
                loadContent(pageName);
            };
        }

        navLinks.appendChild(li);
    }
}

// Initialize the wiki
document.addEventListener('DOMContentLoaded', () => {
    createNavLinks();
    loadContent('Home'); // Load default page

    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Highlight the active link
            document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
