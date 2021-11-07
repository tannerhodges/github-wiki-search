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

    // Get search URL for the current repo.
    const search = window.location.pathname.replace(/(\/.*?\/.*?\/)wiki.*/, '$1search');

    // Add search form to the top of the sidebar.
    sidebar.insertAdjacentHTML('afterbegin', `
      <form class="Box Box--condensed box-shadow mb-4" action="${search}" method="GET">
        <div style="margin: -1px -1px 0; padding: 10px; background-color: #f6f8fa; border: 1px solid #e1e4e8; border-top-left-radius: 6px; border-top-right-radius: 6px;">
          <input class="form-control input-sm input-block" type="text" name="q" placeholder="Search wiki…" aria-label="Search wiki…" autocomplete="off">
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
})();
