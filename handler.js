'use strict';

module.exports.sayHello = async (event) => {
  console.log('executed');
  // const appConfig = JSON.parse(process.env.APP_CONFIG);
  // console.log(appConfig);
  console.log(JSON.stringify(process.env.APP_CONFIG));

  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}