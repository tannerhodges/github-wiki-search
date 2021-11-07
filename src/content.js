(() => {
  /**
   * Init GitHub Wiki Search.
   * @return void
   */
  function init() {
    // Find the wiki sidebar.
    const sidebar = document.querySelector('.wiki-rightbar');

    // If there isn't a sidebar, this isn't a wiki page. Exit!
    if (!sidebar) {
      return;
    }

    // If the sidebar already has a wiki search, abort!
    if (sidebar.querySelector('#github-wiki-search')) {
      return;
    }

    // Get search URL for the current repo.
    const search = window.location.pathname.replace(/(\/.*?\/.*?\/)wiki.*/, '$1search');

    // Add search form to the top of the sidebar.
    sidebar.insertAdjacentHTML('afterbegin', `
      <form id="github-wiki-search" class="Box Box--condensed box-shadow mb-4" action="${search}" method="GET">
        <div class="Box-header">
          <h3 class="Box-title mb-2">Search Wiki</h3>
          <input class="form-control input-sm input-block" type="text" name="q" placeholder="Enter keywords…" aria-label="Enter keywords…" autocomplete="off">
          <input type="hidden" name="type" value="Wikis">
        </div>
      </form>
    `);
  }

  // Initialize on DOMContentLoaded.
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // Initialize again after PJAX page loads.
  window.addEventListener('pjax:end', init);
})();
