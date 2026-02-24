import Container from "@/components/Container";
import { useState } from "react";

interface FooterLinks {
  title?: string;
  links: {
    name: string;
    url?: string;
    lang?: string;
  }[];
}
const footerLinks: FooterLinks[] = [
  {
    title: "Company",
    links: [
      {
        name: "Supported Devices",
        url: "https://help.apps.disneyplus.com/eg/en/support/solutions/articles/68000001619-supported-devices-on-disney",
      },
    ],
  },
  {
    title: "View Website in",
    links: [
      {
        name: "English",
        lang: "en",
      },
      { name: "العربية", lang: "ar" },
    ],
  },
  {
    title: "Need Help?",
    links: [
      {
        name: "Help",
        url: "https://help.apps.disneyplus.com/eg/en/support/home",
      },
      {
        name: "Feedback",
        url: "https://help.apps.disneyplus.com/eg/en/support/tickets/feedback",
      },
    ],
  },
  {
    title: "Popular Sections",
    links: [
      {
        name: "Disney+ Egypt",
        url: "#",
      },
      {
        name: "Movies",
        url: "#",
      },
      {
        name: "Series",
        url: "#",
      },
      {
        name: "Originals",
        url: "#",
      },
    ],
  },
];
const socialLinks = [
  {
    title: "Connect with Us",
    links: [
      {
        name: "Facebook",
        image: "/public/images/facebook-iconify.svg",
        url: "https://www.facebook.com/DisneyPlusMENA/",
      },
      {
        name: "Twitter",
        image: "/public/images/twitter-iconify.svg",
        url: "https://x.com/disneyplus_mena",
      },
      {
        name: "Instagram",
        image: "/public/images/instagram-iconify.svg",
        url: "https://www.instagram.com/disneyplusmena/",
      },
    ],
  },
];
const copyRightLinks = [
  {
    name: "Privacy Policy",
    url: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/",
  },
  {
    name: "Cookie Policy",
    url: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/cookies-policy/",
  },
  {
    name: "Subscriber Agreement",
    url: "https://www.apps.disneyplus.com/subscriberagreement/eg/eng",
  },
  {
    name: "EMEA Privacy Rights",
    url: "https://privacy.thewaltdisneycompany.com/ar/current-privacy-policy-ar/emea-privacy-rights-ar/",
  },
  { name: "Manage Preferences" },
];
function Footer() {
  const [language, setLanguage] = useState("en");
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <section className="bg-[#0F1116] pt-10 pb-5 px-5 lg:px-20 lg:pt-20 lg:pb-5">
        <div className="flex justify-between items-start flex-col md:flex-row mx-0 lg:gap-15 ">
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className={`${index === 3 ? "hidden lg:block" : "block"} pt-3 first:pt-0 md:pt-0`}
            >
              {link.title && (
                <h3 className="text-[12px] lg:text-[16px] font-medium leading-4.5 lg:leading-6">
                  {link.title}
                </h3>
              )}
              <ul className="flex flex-col flex-wrap my-3 gap-3 lg:gap-2">
                {link.links.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => setLanguage(item.lang as "en" | "ar")}
                    className="text-[#8f98b2] cursor-pointer text-[10px] lg:text-[14px] font-medium leading-4 lg:leading-5 flex gap-5 "
                  >
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <>
                        {item.lang === language && (
                          <img
                            src="/public/images/icon-correct.svg"
                            className={`h-5 w-5`}
                          />
                        )}
                        <span>{item.name}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {socialLinks.map((item, i) => (
            <div key={i} className="pt-5 md:pt-0">
              {item.title && (
                <h3 className="text-[12px] lg:text-[16px] font-medium leading-4.5 lg:leading-6">
                  {item.title}
                </h3>
              )}
              <div className="flex flex-wrap justify-between items-center gap-6 mt-3 mb-6">
                {item.links.map((img) => (
                  <a key={img.name} href={img.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img.image}
                      alt={img.name}
                      className="object-cover"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#8f98b2] flex flex-col flex-wrap justify-between text-[10px]">
            <p className="text-[10px] md:text-[12px] lg:text-[14px] font-medium leading-4 md:leading-4.5 lg:leading-5 flex w-[80%]">
              ©Disney. All rights reserved | © {getCurrentYear} TAS Rights
              Management LLC.
            </p>
            <ul className="flex gap-3 flex-row flex-wrap mt-2 mb-6">
              {copyRightLinks.map((link, j) => (
                <li
                  key={j}
                  className="md:text-[12px] lg:text-[14px] md:leading-4.5 lg:leading-5"
                >
                  {link.url ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span>{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-5 max-w-70 lg:max-w-80">
            <div className="">
              <a
                href="https://play.google.com/store/search?q=disney&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/google-playstore.webp"
                  alt="google playstore"
                  className="object-cover"
                />
              </a>
            </div>
            <div className="">
              <a
                href="https://apps.apple.com/eg/app/disney/id1614201510"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/images/ios-appstore.webp"
                  alt="ios playstore"
                  className="object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
