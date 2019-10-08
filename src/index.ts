import { getAppConfig } from './core/app-config';

export async function run(event: any): Promise<any> {
  const config = await getAppConfig('example-app/param-name');
  console.log('cron function executed', config);

  return { message: 'Function executed - the secret value is ' + config.paramKey };
}
