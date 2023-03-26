import { useEffect, useState } from "react";
import { check, PERMISSIONS } from "react-native-permissions";
import { usePermissionCamera } from "../../permissionCamera/presenter/usePermission/usePermission";

export const useCameraPermission = () => {
    const [permissionStatus, setPermissionStatus] = useState('');

    useEffect(() => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => { setPermissionStatus(result) })
            .catch((error) => {
                console.log(error);
            });
        usePermissionCamera()
    }, []);

    return { permissionStatus };
};

