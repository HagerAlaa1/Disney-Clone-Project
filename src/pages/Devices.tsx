import { useTranslation } from "react-i18next";
import { DevicesCard } from "../components/Cards";

const devicesImages = [
  "/public/images/tv.webp",
  "/public/images/computer.webp",
  "/public/images/mobile.webp",
];
function Devices() {
  const { t } = useTranslation("common");
  const devices = t("devices.items", { returnObjects: true }) as Array<{
    title: string;
    list: string[];
  }>;
  return (
    <>
      <section className=" mt-20">
        <div className="text-center H2banner font-semibold tracking-[-0.2px] leading-7 ">
          <h2 className="text-[#e1e6f0]">{t("devices.title")}</h2>
        </div>
        <div className="grid gap-10 md:gap-0 md:grid-cols-3 py-12 px-12">
          {devices.map((device, i) => (
            <DevicesCard
              key={i}
              image={devicesImages[i]}
              title={device.title}
              items={
                <ul>
                  {device.list.map((child, i) => (
                    <li key={i} className="flex justify-center pb-1">
                      {child}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Devices;

//min-h-182.5
// flex justify-center items-start flex-col
