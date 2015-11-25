module.exports = {
  rootPath: rootPath,
  port: process.env.PORT || {{port}},
  includeSourceInLog: true,
  sessionServer: '{{&sessionServer}}',
  rightsServer: '{{&rightsServer}}',
  rostrServer: '{{&rostrServer}}',
  authzServer: '{{&authzServer}}',
  authzAppId: '{{authZAppId}}',
  authzAppSecretFile: '../../../client.sec',
  targetAceEnvironment: '{{aceEnvironment}}',
  targetAceLoginSource: '{{aceLoginSource}}'
};
