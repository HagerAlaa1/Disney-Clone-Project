import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQ() {
  return (
    <>
      <section className="relative text-center mt-20">
        <div>
          <h2 className="text-white text-center text-[20px] md:text-[32px] lg:text-[42px] font-semibold tracking-[-0.2px] md:tracking-[-0.4px] leading-7 md:leading-10.5 lg:leading-13.5 mb-4 md:mb-10">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto w-4/5 text-[#8f98b2]">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Disney+?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Disney+ is the dedicated streaming home of your favourite
                  stories from Disney, Pixar, Marvel, Star Wars, National
                  Geographic; as well as a huge range of general entertainment
                  with Star - all in one place. With thousands of movies, TV
                  series, and exclusive Originals to choose from, there's
                  something for everyone on Disney+. Subscribers can also enjoy
                  a number of benefits included in their subscription, such as:
                </p>
                <ul className="list-disc list-outside space-y-2 mt-4 ml-5">
                  <li>
                    <p>
                      {" "}
                      Unlimited downloads on up to 10 devices and up to 7
                      different profiles
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      A robust parental controls system including dedicated
                      profiles for children.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      4K UHD streaming with Dolby Vision and Dolby Atmos support
                      on compatible devices for no extra cost
                    </p>
                  </li>
                  <li>
                    <p> Up to 4 screens can stream simultaneously</p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What can I watch on Disney+?</AccordionTrigger>
              <AccordionContent>
                <p>
                  With thousands of films and series from the greatest
                  storytellers around the globe and more added each month, you
                  will always find something to watch on Disney+{" "}
                </p>
                <ul className="list-disc list-outside space-y-2 mt-4 ml-5">
                  <li>
                    <p>
                      The biggest animated blockbusters from Disney, like The
                      Lion King and Encanto
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Heart-warming storytelling for all ages from the
                      masterminds at Pixar such as Luca and Turning Red
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Experience the ever-growing story of the Marvel Cinematic
                      Universe like never before with must-see exclusive
                      Original series from Marvel Studios She-Hulk and Moon
                      Knight
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Relive the epic Saga in a galaxy far away with Star Wars
                      hit series, like The Mandalorian and Andor
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Open your eyes to the beauty of our planet with fearless
                      National Geographic explorers and a number of insightful
                      documentaries, like Gordon Ramsay: Uncharted and Welcome
                      to Earth
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      With Star you will find the most talked about bingeable
                      series like the global phenomenon The Walking Dead and
                      Grey's Anatomy
                    </p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How much does Disney+ cost?</AccordionTrigger>
              <AccordionContent>
                <br />
                <p>
                  Starting 30th of September, 2025, this subscription price in
                  the Egypt will be revised to 170 EGP a month or 1700 EGP for
                  an annual subscription (12 months for the price of 10*). All
                  new users who subscribe on or after 30th September, 2025 will
                  be charged the revised subscription price.
                </p>
                <br />
                <p>
                  + All users who subscribed before 29th of September, 2025 will
                  be charged at the revised subscription prices on the next
                  billing date that occurs on or after 4th of November, 2025.
                </p>
                <br />
                <p>
                  {" "}
                  *Saving compared to 12 months of the monthly subscription
                  price.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What devices are supported?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Disney+ supports mobile devices, web browsers, game consoles,
                  set-top boxes, and smart TVs. Click{" "}
                  <a
                    href="https://help.apps.disneyplus.com/eg/en/support/solutions/articles/68000001619-supported-devices-on-disney"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for the full list.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there any commitment when signing up for Disney+?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Is there any commitment when signing up for Disney+?There are
                  no commitments and you can cancel at any time, effective at
                  the end of your current payment period. Just follow the below
                  5 easy steps:{" "}
                </p>
                <p>1. Go to www.disneyplus.com and log in</p>
                <br />
                <p>2. Select your Profile</p>
                <br />
                <p>3. Select Account</p>
                <br />
                <p>4. Select Cancel Subscription</p>
                <br />
                <p>5. Select Complete Cancellation to confirm</p>
                <br />
                <p>
                  For more information click{" "}
                  <a
                    href="https://www.apps.disneyplus.com/subscriberagreement/eg/eng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .{" "}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;
