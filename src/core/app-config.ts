import { SecretsManager } from 'aws-sdk';

let secretsManager: SecretsManager;
const params: any = {};

export async function getAppConfig(service: string) {
  if (params[service]) {
    return params[service];
  }

  const stage = process.env.STAGE || 'dev';
  if (stage === 'dev') {
    const config = getLocalConfig();
    if (config[service]) {
      params[service] = config[service];
      return config[service];
    }
  } else {
    const config = await getAwsSecret(stage, service);
    params[service] = config;
    return config;
  }
}

function getLocalConfig() {
  try {
    const localConfig = require('../../local-config');
    return localConfig;
  } catch (error) {
    console.error('config load error', error.message);
  }
}

async function getAwsSecret(stage: string, parameter: string): Promise<any | undefined> {
  if (!secretsManager) {
    secretsManager = new SecretsManager({ apiVersion: '2017-10-17' });
  }
  const response = await secretsManager.getSecretValue({ SecretId: `${stage}/${parameter}` }).promise();

  if (response.SecretString) {
    const jsonValue = response.SecretString;

    try {
      return JSON.parse(jsonValue);
    } catch (error) {
      return jsonValue;
    }
  }
  return undefined;
}
