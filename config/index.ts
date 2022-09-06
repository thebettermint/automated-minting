import env from './env';
import path from 'path';

const nodes = {
  sb: {
    ip: env['SB_NODE_IP'] || '0.0.0.0',
    port: env['SB_NODE_PORT'] || 9650,
  },
  fl: {
    ip: env['FL_NODE_IP'] || '0.0.0.0',
    port: env['FL_NODE_PORT'] || 9650,
  },
  xrpl: {
    ip: env['XRPL_NODE_IP'] || '0.0.0.0',
    port: env['XRPL_NODE_PORT'] || 9650,
  },
};

export default {
  version: env['VERSION'],
  run: env['NODE_ENV'],
  email: {
    address: env['EMAIL_ADDR'],
    password: env['EMAIL_PASS'],
    host: env['EMAIL_HOST'] || 'smtp.gmail.com',
    port: env['EMAIL_PORT'] || 587,
  },
  db: {
    port: env['DB_PORT'] || 27017,
    name: env['DB_NAME'],
    container: env['DB_CT_NAME'],
    user: env['DB_ROOT_KEY'] || 'root',
    pass: env['DB_ROOT_SECRET'] || 'password',
    uri: env['DB_URI'],
  },
  wallet: {
    address: env['WALLET_ADDRESS'] || '',
    secret: env['WALLET_SECRET'] || '',
  },
  api: {
    port: env['API_PORT'] || 4000,
    key: env['API_KEY'] || '',
    secret: env['API_SECRET'] || '',
  },
  ipfs: {
    domain: env['IPFS_DOMAIN'] || '0.0.0.0',
    port: env['IPFS_PORT'] || '',
  },
  ws: {
    url: env['WS_URL'] || '',
    port: env['WS_PORT'] || 4001,
  },
  jwt: {
    secret: env['JWT_SECRET'],
  },
  nodes: {
    sb: Object.assign(nodes.sb, {
      rpc: `http://${nodes.sb.ip}:${nodes.sb.port}/ext/bc/C/rpc`,
    }),
    fl: Object.assign(nodes.fl, {
      rpc: `http://${nodes.fl.ip}:${nodes.fl.port}/ext/bc/C/rpc`,
    }),
    xrpl: Object.assign(nodes.xrpl, {
      rpc: `http://${nodes.xrpl.ip}:${nodes.xrpl.port}`,
    }),
    xrplnft: Object.assign(nodes.xrpl, {
      rpc: `http://${nodes.xrpl.ip}:${nodes.xrpl.port}`,
      wss: 'wss://xls20-sandbox.rippletest.net:51233',
    }),
  },
  xumm: {
    key: env['XUMM_KEY'] || '',
    secret: env['XUMM_SECRET'] || '',
  },
  directory: path.resolve(__dirname, '..'),
};
