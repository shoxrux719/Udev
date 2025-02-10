import { useState, useEffect } from "react";
import CustomButton from "./CustomBtn";
import { t } from "i18next";

function Location() {
    const [time, setTime] = useState<number>(7199); // 01:59:59 in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number): string => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <>
        <div className="flex items-center justify-between bg-black text-white px-6 py-3 rounded-lg w-full">
            <p className="text-xl font-bold"> {t("Sale_banner")}</p>
            <p className="text-2xl font-semibold">{formatTime(time)}</p>
            <CustomButton text="button.more" />

        </div>
        </>
    );
}

export default Location;