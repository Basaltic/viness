/**
 * Settings of the application
 */
export type AppSetting = {};

/**
 * Meta Info of the application
 */
export type AppInfo = {
    version: number;
    setting: AppSetting;
};

export type UsageHistory = {
    /**
     * Latest used library
     */
    current: {
        path: string;
    };
};
