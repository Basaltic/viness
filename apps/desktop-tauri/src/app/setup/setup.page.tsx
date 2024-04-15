import { Button } from 'ui/components/button';
// import { dialog } from '@tauri-apps/api';
// import { appConfigDir } from '@tauri-apps/api/path';

/**
 *
 */
export function AppSetupPage() {
    // const handleSelect = async () => {
    //     const appDirectory = await appConfigDir();
    //     const selected = await dialog.open({ directory: true, multiple: false, defaultPath: appDirectory });
    // };

    // const handleDoSetup = async () => {
    //     // create new creative library & select that library as the active library
    // };

    return (
        <div>
            <Button>选择创意库存储位置</Button>
        </div>
    );
}
