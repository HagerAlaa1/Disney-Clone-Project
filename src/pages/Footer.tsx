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
      <section className="bg-[#0F1116]  py-10 px-5 lg:px-20 lg:py-20 ">
        <Container>
          <div className="flex justify-between items-start flex-col md:flex-row lg:mr-0 lg:gap-15 ">
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className={`${index === 3 ? "hidden lg:block" : "block"} pt-5 first:pt-0 md:pt-0`}
              >
                {link.title && (
                  <h3 className="text-[12px] lg:text-[16px] font-medium leading-4.5 lg:leading-6">
                    {link.title}
                  </h3>
                )}
                <ul className="flex flex-row lg:flex-col flex-wrap my-3 gap-3 lg:gap-2">
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
                          <span>{item.name}</span>
                          {item.lang === language && (
                            <img
                              src="/public/images/icon-correct.svg"
                              className={`h-5 w-5`}
                            />
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {socialLinks.map((item, index) => (
              <div key={index} className="pt-5 md:pt-0">
                {item.title && <h3>{item.title}</h3>}
                <div className="flex flex-wrap justify-between items-center gap-6 mt-3 mb-6">
                  {item.links.map((img) => (
                    <a href={img.url} target="_blank" rel="noopener noreferrer">
                      <img src={img.image} alt={img.name} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <div className="text-[#8f98b2] flex flex-col flex-wrap justify-between ">
              <p className="text-[10px font-medium leading-4">
                ©Disney. All rights reserved | © {getCurrentYear} TAS Rights
                Management LLC.
              </p>
              <ul className="flex gap-5">
                {copyRightLinks.map((link, i) => (
                  <li key={i}>
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
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;

//flex-1 md:flex-wrap lg:flex-nowrap justify-between items-start flex-col md:flex-row gap-5 md:gap-12 py-10 px-10 lg:py-20 lg:px-30
