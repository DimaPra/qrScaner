import { useEffect, useState } from "react";
import { check, PERMISSIONS } from "react-native-permissions";

export const useCameraPermission = () => {
    const [permissionStatus, setPermissionStatus] = useState('');

    useEffect(() => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => { setPermissionStatus(result) })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return { permissionStatus };
}

