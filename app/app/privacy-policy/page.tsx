import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Kino Games",
  description: "Privacy policy for Kino Games, a service by SpielFabrique 360° UG.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="w-full bg-[#141414] min-h-screen">
        {/* Content container */}
        <div className="w-full max-w-[860px] mx-auto px-[20px] md:px-[40px] pt-[140px] md:pt-[180px] pb-[80px] md:pb-[120px]">

          {/* Page header */}
          <div className="mb-[48px] md:mb-[64px]">
            <h1 className="font-garet font-[850] text-[36px] md:text-[52px] leading-[110%] tracking-[0.7px] uppercase text-[#F6F4F1] mb-[12px]">
              Privacy Policy
            </h1>
            <p className="font-inter text-[14px] font-normal tracking-[0.5px] text-[#F6F4F1]/50">
              Last updated: March 2026
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#2A2A2A] mb-[48px]" />

          {/* Section I */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              I. Controller, Scope
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                Kino Games is a service provided by SpielFabrique 360° UG (haftungsbeschränkt) (hereinafter also referred to as &quot;Spielfabrique&quot; or &quot;Provider&quot;), acting as Controller in accordance with relevant data protection provisions. Please find full company and contact details on the website.
              </p>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                The protection of personal data has the highest priority for us. We would therefore like to inform you about which data we collect when, and how we process your personal data. This privacy notice describes the collection and processing of personal data on the website{" "}
                <Link href="https://kino-games.eu" className="text-[#F9C962] hover:text-[#F6F4F1] transition-colors duration-200 underline underline-offset-2">
                  https://kino-games.eu
                </Link>{" "}
                (hereinafter referred to as &quot;Website&quot;).
              </p>
            </div>
          </section>

          {/* Section II */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[24px]">
              II. General Information About Data Processing
            </h2>

            <div className="flex flex-col gap-[32px]">
              {/* 1 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  1. Purposes of processing
                </h3>
                <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                  In principle, we only process personal data of users as necessary to provide a functional Website, our contents and to provide our services.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  2. Legal basis for the processing of personal data
                </h3>
                <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80 mb-[16px]">
                  We mostly process personal data according to on one of the following legal bases:
                </p>
                <ul className="flex flex-col gap-[12px] pl-[4px]">
                  {[
                    { title: "Consent", body: "Whenever we collect the data subject's consent to the processing of personal data, Art. 6 para. 1 a EU General Data Protection Regulation (GDPR) serves as the legal basis." },
                    { title: "Legal obligation", body: "If the processing of personal data is necessary for compliance with a legal obligation which the Controller is subject to, Art. 6 para. 1 c GDPR serves as the legal basis." },
                    { title: "Contract or pre-contractual measures", body: "If the processing of personal data is necessary for the performance of a contract to which the data subject is party, Art. 6 para. 1 b GDPR serves as the legal basis. This also applies to processing operations that are necessary to carry out pre-contractual measures." },
                    { title: "Legitimate interests", body: "If processing is necessary for the purposes of the legitimate interests pursued by the Controller or a third party and if such interests are not overridden by the interests, fundamental rights and freedoms of the data subject, Art. 6 para. 1 f GDPR serves as the legal basis." },
                  ].map(({ title, body }) => (
                    <li key={title} className="flex gap-[12px] items-start">
                      <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#F9C962] shrink-0" />
                      <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                        <span className="font-semibold text-[#F6F4F1]">{title}:</span>{" "}{body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  3. Data erasure and retention time
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    In principle and unless otherwise stated, your personal data will only be stored until the purpose of the collection and storage is achieved. If the storage is based on your consent, personal data can be stored as long as you do not revoke such consent.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Furthermore, data may be stored if it is required by European or national legal provisions, laws or regulations which we are subject to. Personal data will be blocked or deleted if the retention period set forth by the any such regulations expires, unless further storage is necessary for the conclusion or fulfilment of a contract.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  4. Transfer to third countries
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Unless otherwise stated, all data processing operations take place within the EU or the EEA countries.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Data processing operations carried out by third-party providers established outside the mentioned geographical area may be carried out in part or in full in the countries the respective providers are based in, in accordance with the relevant and applicable data protection regulations.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    A transfer of personal data outside the EU or the EEA shall only take place on the basis of on an adequacy decision of the European Commission or subject to appropriate safeguards, such as standard data protection clauses adopted by the European Commission. A list of current adequacy decisions (as well as information about the effect of the ECJ&apos;s ruling in the case C-311/18 on Privacy Shield) is available on the European Commission&apos;s website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section IV */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              IV. Processing of Personal Data When Submitting an Application
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                If you submit an application to take part in one of our programs for games studios, we will collect the following personal data:
              </p>
              <ul className="flex flex-col gap-[8px] pl-[4px]">
                {[
                  "Full name and address of applicant",
                  "Email address of applicant",
                  "Social network profile links of applicant",
                  "Website of applicant",
                  "Full name and job position of point of contact (POC)",
                  "Email and phone of POC",
                  "Social network profile links of POC",
                ].map((item) => (
                  <li key={item} className="flex gap-[12px] items-start">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#F9C962] shrink-0" />
                    <span className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                The above personal data, alongside further non-personal information, will be processed and used in order to create your user account, evaluate your application and make a decision regarding your participation in the program. In case your application is successful, we will store and process the above-mentioned data for the entire duration of the program for the purpose of executing the participation contract we will enter into with you. Thereafter, we may store your data for a longer period if you provide explicit consent or if required by applicable law. In case your application is unsuccessful, we will retain your data for future opportunities, unless you withdraw your consent. You have the right to withdraw your consent at any time, in which case we will delete your data unless we are legally required to retain it. If you choose not to provide consent, we will delete your data at the end of the program, in accordance with our data retention policy.
              </p>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                The legal basis for processing is therefore art. 6 par. 1 lit. b) GDPR or, in cases where consent is not applicable, our legitimate interest in retaining data for future opportunities (Art. 6 par. 1 lit. f) GDPR).
              </p>
            </div>
          </section>

          {/* Section V */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              V. Data Processors
            </h2>
            <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
              In order to provide our services, we may cooperate with selected third-party providers who process data on our behalf (&quot;Processors&quot;). This applies for instance to hosting providers. All experts, consultants, mentors, and private partnering companies that help us provide our services within the scope of the program will have access to your data, limited strictly to the purpose of fulfilling their duties and responsibilities within the program. As our programs are publicly funded, we may also be required to share your data with public, governmental, or European funding bodies. Where legally required, we have entered into agreements pursuant to Art. 28 GDPR with Processors who process your personal data on our behalf.
            </p>
          </section>

          {/* Section VI */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              VI. Processing in Compliance With a Legal Obligation
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                Please note that, in addition to what specified in this privacy notice, your data may be processed in compliance with legal obligations which we are subject to. For instance, we may be obliged to store your data for a legally determined period to comply with tax law provisions. Please contact us in case you want to learn further details about such processing activities.
              </p>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                In such cases the legal basis of the processing is art. 6 par. 1 lit. c) GDPR.
              </p>
            </div>
          </section>

          {/* Section VII */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[24px]">
              VII. Use of Tracking Technologies
            </h2>

            <div className="flex flex-col gap-[32px]">
              {/* 1 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  1. Description and scope of data processing
                </h3>
                <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                  In order to improve user experience of our Website and to enable selected functions, we implement cookies or other tracking technologies (hereinafter jointly referred to as "Cookies") on various pages. These are small data sets being stored on your device. Some of the Cookies we use expire after the end of the browser session, i.e. after closing your browser (so-called session Cookies). Other Cookies remain on your device and enable us or our partner companies to recognize your browser or device on your next visit (persistent Cookies). You can set your browser preferences in order to be notified about the setting of Cookies and decide individually about accepting or refusing them in certain cases or generally. You can also manually delete Cookies from your device at any time. Failure to accept Cookies may result in minor limitations in our service&apos;s functionalities. Cookies are stored on the user&apos;s computer and from there transmitted to our site. Therefore, you as a user have full control over the use of Cookies. You can deactivate or restrict the transmission of Cookies by adjusting the settings in your Internet browser. Cookies that have already been saved can be deleted at any time. This can also be done automatically. If Cookies are deactivated for our Website, it may no longer be possible to use all functions of the Website in full. You can also manage your cookie preferences via recognized third-party services such as{" "}
                  <Link href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#F9C962] hover:text-[#F6F4F1] transition-colors duration-200 underline underline-offset-2">
                    youronlinechoices.eu
                  </Link>{" "}
                  (if you&apos;re based in the EU).
                </p>
              </div>

              {/* 2 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  2. Strictly necessary Cookies
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Some of the Cookies we use are strictly necessary to allow us to deliver the service you requested or to operate our Website. Some elements of our Website require that your browser be identified after page changes. Such technical Cookies may collect personal information about you, such IP address, log-in information, etc.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    The processing of personal data through strictly necessary cookies – if any – is art. 6 par. 1 lit. f) GDPR. In case such cookies are necessary as a pre-contractual measure or for performing a contract with you, the legal basis is art. 6 par. 1 lit. b) GDPR.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div>
                <h3 className="font-inter text-[16px] md:text-[17px] font-semibold tracking-[0.4px] text-[#F6F4F1] mb-[10px]">
                  3. Other Cookies
                </h3>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    In addition, we use third-party Cookies to monitor and evaluate user behaviour for statistics and market analysis purposes. Such Cookies are provided by third parties and implemented in our Website. Please refer to the following sections for details.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Such Cookies allow us to analyse your use of our service and improve it continuously. Analytics allow us to offer you a better service that meets your interests better.
                  </p>
                  <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                    Unless otherwise specified, the legal basis of processing through other Cookies mentioned below is your consent pursuant to art. 6 par. 1 lit. a) GDPR. Unless otherwise specified, the lifetime of Cookies used based on your consent expires upon withdrawal of your consent.
                  </p>
                </div>
              </div>

              {/* Google Analytics */}
              <div className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-[16px] p-[24px] md:p-[32px]">
                <h3 className="font-inter text-[14px] font-semibold tracking-[1.5px] uppercase text-[#F9C962] mb-[16px]">
                  Google Analytics
                </h3>
                <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                  We implement &quot;Google Analytics&quot;. Google Analytics is a web analysis service provided by Google Inc. The information generated by the Google Analytics Cookie about your use of our Website is generally transmitted to and stored by Google on servers in the United States. IP anonymization has been activated on our Website: this means that the IP address of users based within the European Union or the European Economic Area is abridged, and therefore anonymized, before being transferred abroad. Only in exceptional cases is the unabridged IP address transferred to a Google servers in the USA and shortened there. On our behalf, Google will use this information to evaluate your use of the Website, to draft reports about Website activity and to provide us with other services relating to Website and Internet use. The IP address transmitted by your browser in the context of Google Analytics is not put in relation with other Google data. You may object to the use of Cookies by selecting the appropriate settings on your browser, however please note that doing so may result in limited functionality of this Website. You can also prevent Google from collecting the data generated by the Cookie and relating to your use of the Website (including your IP address) and processing this data by installing the browser plug-in available at:{" "}
                  <Link href="http://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#F9C962] hover:text-[#F6F4F1] transition-colors duration-200 underline underline-offset-2">
                    tools.google.com/dlpage/gaoptout
                  </Link>. To find out further information about how Google handles personal data, please refer to Google&apos;s privacy policy:{" "}
                  <Link href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#F9C962] hover:text-[#F6F4F1] transition-colors duration-200 underline underline-offset-2">
                    policies.google.com/privacy
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section VIII */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              VIII. Promotional E-mail Messages
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                You can subscribe to our newsletter by entering your e-mail address in the respective form. You will then receive an automatic confirmation e-mail to the address you entered, which contains a link. The registration process is only completed once you confirm it by navigating to that link. We use your email address to send you updates, information, and content related to our own services and programs. Your data will be processed by third-party service providers, strictly for the purpose of delivering the newsletter on our behalf, in compliance with applicable data protection laws. These providers do not have the right to use your data for their own purposes. You can withdraw your consent to receive newsletters at any time without stating reasons by following the instructions provided in each newsletter, or by sending us an unambiguous notice at{" "}
                <Link href="mailto:unsubscribe@spielfabrique.eu" className="text-[#F9C962] hover:text-[#F6F4F1] transition-colors duration-200 underline underline-offset-2">
                  unsubscribe@spielfabrique.eu
                </Link>. We will inform you about the right to withdraw your consent upon subscription to the newsletter service and within each newsletter sent. The legal basis for processing your personal data is art. 6 par. 1a) GDPR.
              </p>
            </div>
          </section>

          {/* Section IX */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              IX. Data Subjects&apos; Rights
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                As a data subject, you have the following rights pursuant to the GDPR:
              </p>
              <ul className="flex flex-col gap-[12px] pl-[4px]">
                {[
                  { title: "Right of access", body: "You have the right to ask us for copies of your personal information." },
                  { title: "Right to rectification", body: "You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete." },
                  { title: "Right to erasure", body: "You have the right to ask us to erase your personal information in certain circumstances." },
                  { title: "Right to restriction of processing", body: "You have the right to ask us to restrict the processing of your information in certain circumstances." },
                  { title: "Right to notification", body: "If you have exercised your right to have the Controller rectify, erase or limit the processing, the Controller shall communicate any rectification or erasure of personal data or restriction of processing to each recipient to whom the personal data concerning you have been disclosed, unless this proves impossible or involves disproportionate effort. You have the right to be informed about those recipients." },
                  { title: "Right to object to processing", body: "You have the right to object to the processing of your personal data in certain circumstances." },
                  { title: "Right to withdraw consent", body: "You have the right to withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal." },
                  { title: "Right to data portability", body: "You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex gap-[12px] items-start">
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#F9C962] shrink-0" />
                    <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                      <span className="font-semibold text-[#F6F4F1]">Your {title}:</span>{" "}{body}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. Please reach out for us at the contact details indicated on the Website if you wish to make a request.
              </p>
              <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                <span className="font-semibold text-[#F6F4F1]">Your right to file a complaint:</span>{" "}You can also complain to a data protection authority if you do not agree on how we have used your data.
              </p>

              {/* Right to object callout */}
              <div className="mt-[8px] bg-[#1C1C1C] border border-[#2A2A2A] rounded-[16px] p-[24px] md:p-[32px]">
                <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
                  You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you which is based on Article 6(1)(e) or (f) GDPR; this also applies to profiling based on those provisions. The Controller shall no longer process the personal data unless the Controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims.
                </p>
              </div>
            </div>
          </section>

          {/* Section X */}
          <section className="mb-[48px]">
            <h2 className="font-garet font-[850] text-[22px] md:text-[26px] leading-[120%] tracking-[0.5px] uppercase text-[#F6F4F1] mb-[20px]">
              X. Amendments to This Privacy Notice
            </h2>
            <p className="font-inter text-[16px] md:text-[17px] font-normal leading-[1.75] tracking-[0.3px] text-[#F6F4F1]/80">
              Due to the dynamic development of the Internet, new technologies and possibilities are constantly developing. To enable us to offer you these possibilities and technologies, we reserve the right to change this privacy notice for the future when introducing new, additional or when changing or extending existing services or service elements. The new privacy notice shall apply from the date of its update on the Website.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
