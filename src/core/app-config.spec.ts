import * as appConfig from "./app-config";

describe('AppConfig', () => {
  describe('when running on dev machine', () => {
    beforeEach(() => {
      process.env.STAGE = 'dev';
    });

    it('should load local config file', async () => {
      const result = await appConfig.getAppConfig("myApp");
      expect(result).toBeTruthy();
    });
  });

});
