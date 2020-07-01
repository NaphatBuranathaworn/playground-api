module.exports = {
  apps : [{
    name: 'hello',
    script: 'app.js',
    watch: true,
    autorestart: true,
    instances: 1,
    args: 'one two',
    env: {
      PORT: 3000,
      NODE_ENV: 'development'
    },
    production: {
      PORT: 80,
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
