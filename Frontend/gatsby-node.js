exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/v_lolly/)) {
    page.matchPath = "/v_lolly/*";

    createPage(page);
  }
};
