const pages = {};

        // Fetch the wiki JSON data and initialize the page
        async function initializeWiki() {
            try {
                const response = await fetch('wiki.json');
                const data = await response.json();
                Object.assign(pages, data);
                createNavLinks();
                loadContent('Home'); // Load default page if it exists
            } catch (error) {
                console.error('Error loading wiki data:', error);
                document.getElementById('page-content').innerHTML = '<h2>Error</h2><p>Unable to load wiki data.</p>';
            }
        }

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
            navLinks.innerHTML = '';

            for (const [pageName, pageData] of Object.entries(pages)) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = pageName;
                a.onclick = (e) => {
                    e.preventDefault();
                    loadContent(pageName);
                    document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
                    a.classList.add('active');
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
                        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
                        a.classList.add('active');
                    };
                }

                navLinks.appendChild(li);
            }
        }

        // Initialize the wiki on page load
        document.addEventListener('DOMContentLoaded', initializeWiki);