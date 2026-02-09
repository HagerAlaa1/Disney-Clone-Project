import { DevicesCard } from "../components/Cards";

const devices = [
  {
    image: "/public/images/tv.webp",
    title: "TV",
    childs: [
      { items: "Amazon Fire TV" },
      { items: "Android TV" },
      { items: "Apple TV" },
      { items: "Chromecast" },
      { items: "LG TV" },
      { items: "Samsung" },
    ],
  },
  {
    image: "/public/images/computer.webp",
    title: "Computer",
    childs: [
      { items: "Chrome OS" },
      { items: "MacOS" },
      { items: "Windows PC" },
    ],
  },
  {
    image: "/public/images/mobile.webp",
    title: "Mobile & Tablet",
    childs: [
      { items: "Android Phones & Tablets" },
      { items: "iPhone and iPad" },
    ],
  },
];
function Devices() {
  return (
    <>
      <section className=" mt-20">
        <div className="text-center H2banner font-semibold tracking-[-0.2px] leading-7 ">
          <h2 className="text-[#e1e6f0]">Compatible devices</h2>
        </div>
        <div className="grid gap-10 md:gap-0 md:grid-cols-3 py-12 px-12">
          {devices.map((device) => (
            <DevicesCard
              key={device.title}
              image={device.image}
              title={device.title}
              items={
                <ul>
                  {device.childs.map((child) => (
                    <li key={child.items} className="flex justify-center pb-1">{child.items}</li>
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