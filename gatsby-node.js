exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/invite`,
    toPath: `https://discord.com/oauth2/authorize?client_id=978953033989914654&permissions=2147764224&scope=bot%20applications.commands`,
    redirectInBrowser: true,
    isPermanent: true
  }),
  createRedirect({
    fromPath: `/support`,
    toPath: `https://discord.gg/FWjNkNuTzv`,
    redirectInBrowser: true,
    isPermanent: true
  })
}