interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1001] p-4">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-950">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              Africa Stablecoin Network
            </h2>
            <p className="text-[#333333] leading-relaxed">
              This General Privacy Policy covers all ASN operations involving
              the collection, use, disclosure, and other processing of personal
              information: organizing events, managing relationships with our
              stakeholders and the public, and the use of our Portal and
              websites.
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Who we are
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              We are the Africa Stablecoin Network and you can find our contact
              information here. For general questions about how we use your
              personal information or any requests relating to your information,
              send an e-mail to{" "}
              <a
                href="mailto:dpo@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                dpo@afristablecoin.org
              </a>
              .
            </p>
            <p className="text-[#333333] leading-relaxed">
              At ASN, we are committed to the use of personal information in a
              reasonable and responsible manner, and will not collect, retain,
              use, or disclose personal information for any purpose other than
              those described in this Policy. We will not collect more
              information than is needed to accomplish the purposes described in
              this Policy, and will not retain any information collected longer
              than is necessary to fulfill those purposes.
            </p>
          </section>

          {/* What Personal Information We Collect */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              What personal information we collect and use
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              Processing personal information is incidental to our operations.
              The categories of personal information we process on a regular
              basis are names (first, last, and nickname), professional
              affiliation, contact details (including job title, mailing
              address, and professional email address), brief biographies, and
              communications you send us.
            </p>
            <p className="text-[#333333] leading-relaxed mb-3">
              We also collect personal information from users that access our
              websites, including users that join our Portal. In addition to the
              categories described above, we collect information about what
              content users of our Portal have interacted with and submitted,
              and users of the Portal may also choose to voluntarily provide us
              with any the following information in association with a user
              account:
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4 ml-4">
              <li>Social media accounts linked to user account</li>
              <li>Profile photograph</li>
              <li>Opt-ins/opt-outs for marketing & working group selections</li>
              <li>Working group membership selections</li>
              <li>A free-text user account bio</li>
              <li>
                User-user interactions — posts visible to the community, private
                "direct messages", "connection/friends" selections
              </li>
              <li>
                Technical information (browser, IP address, information
                retrieved through cookies)
              </li>
              <li>Registration for ASN/associated events</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-3">
              As a rule, we obtain personal information directly from you. If
              you use our Portal, we process information about the content that
              you have posted and/or interacted with through the use of the
              Portal. Additionally, ASN collects some personal information about
              new users of the Portal from ASN stakeholders, where new users are
              added to the Portal as part of their relationship with ASN.
            </p>
            <p className="text-[#333333] leading-relaxed">
              If you are someone we would appreciate engaging with as part of
              our core activity, such as a privacy professional, member of the
              media, or public official, we obtain your contact details and
              affiliation from third parties or from publicly available sources.
            </p>
          </section>

          {/* Why and How We Use Your Information */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Why and how we use your personal information
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              We use this personal information to send you communications
              related to our work, invitations for events or to facilitate your
              participation to our working groups, for conferences and other
              events, and to enable your use of the Portal as is described in
              the ASN Portal Terms and Conditions.
            </p>
            <p className="text-[#333333] leading-relaxed">
              Our email delivery vendor will use a web beacon which tracks
              whether recipients have opened the emails we send in order to
              provide us open rate information about our email communications.
              Please choose plain text email in order to decline this tracking.
              We collect information from users of the Portal regarding the
              submission and sharing of content in order to provide the Portal
              service.
            </p>
          </section>

          {/* Who Has Access */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Who has access to your data
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              Sometimes we share your information with our partners. This
              happens when we co-organize events, panels, or engage in
              initiatives jointly with other entities. The information we share
              is limited to name, affiliation and contact information, and
              exceptionally it may include biographic information.
            </p>
            <p className="text-[#333333] leading-relaxed mb-3">
              We also share your information to third parties that are our
              vendors and process personal information on our behalf and for no
              other purposes. We use:
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4 ml-4">
              <li>an email delivery service,</li>
              <li>an email and virtual common workplace service provider,</li>
              <li>a provider of cloud services,</li>
              <li>an online conference system provider,</li>
              <li>a Customer Relationship Management service provider,</li>
              <li>
                an online registration service provider (for participation to
                events we organize),
              </li>
              <li>a hosting service for our Portal</li>
              <li>a website analytics provider</li>
            </ul>
            <p className="text-[#333333] leading-relaxed mb-3">
              All of these service providers are based in the US and are bound
              by written agreement to use personal information obtained from ASN
              for ASN purposes only and in accordance with our instructions.
            </p>
            <p className="text-[#333333] leading-relaxed">
              We will share your information with authorities only if the law
              requires us to.
            </p>
          </section>

          {/* Analytics */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Analytics
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We use Google Analytics to help us understand how people use our
              website and Portal. We have entered into a data processing
              agreement with Google, and configured our use of Google Analytics
              to protect users' privacy by masking the last octet of visitor IP
              addresses and disabling data sharing with Google. We use the
              OneTrust Cookie Management tool to obtain user consent for cookie
              placement and monitor users' cookie preferences. Additional
              information about how Google uses data received from its partners
              is available here:{" "}
              <a
                href="https://www.google.com/policies/privacy/partners/"
                className="text-blue-950 hover:underline"
              >
                www.google.com/policies/privacy/partners/
              </a>
              .
            </p>
          </section>

          {/* Retention */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Retention
            </h3>
            <p className="text-[#333333] leading-relaxed">
              We only keep your data for as long as you want to hear from us and
              stay connected to our work. This period of time varies, so we
              can't give you a precise number. As a rule, if you are a
              newsletter subscriber, we will continue sending you our newsletter
              until you opt out or our email bounces. In these cases, we will
              proceed to erasing your email address from our database. If you
              work for one of our affiliated organizations, we keep your contact
              information for the duration of the relationship. If you are a
              registrant for one of our events, we are storing your name and
              contact details to send you notice of future events, unless you
              instruct us at registration not to do so.
            </p>
          </section>

          {/* You're in Charge */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              You're in charge
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              If you want to check with us whether we have your personal
              information and what personal information we have about you, if
              you want to correct or update your information or if you want us
              to erase your contact details, send us an e-mail at{" "}
              <a
                href="mailto:dpo@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                dpo@afristablecoin.org
              </a>
              .
            </p>
            <p className="text-[#333333] leading-relaxed">
              Questions regarding use of the Portal should be directed to the
              Support Team at{" "}
              <a
                href="mailto:info@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                info@afristablecoin.org
              </a>
              .
            </p>
          </section>

          {/* EU/EEA Section */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Are you based in the EU/EEA?
            </h3>
            <p className="text-[#333333] leading-relaxed mb-4">
              If you are based in the EU or EEA and interact with us, the
              processing of your personal data (or personal information) may
              fall under the General Data Protection Regulation. This depends on
              whether your personal data is processed in the context of us
              providing you services or monitoring your behavior. All the
              information above is applicable to you as well. In addition:
            </p>

            <h4 className="text-lg font-semibold text-blue-950 mb-3">
              Legal bases and purposes
            </h4>
            <p className="text-[#333333] leading-relaxed mb-3">
              Know that we are the controller of the processing of personal data
              in relation to conducting our activity. We process your personal
              data:
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 mb-4 ml-4">
              <li>
                on the basis of your consent when you subscribe to our
                newsletters, when you request to be included among our contacts
                for future events or to follow our activity, when we take photos
                during the events we organize in the EU and when our website
                places non-essential cookies on your device.
              </li>
              <li>
                on the basis of necessity to enter a contract or for the
                performance of a contract when you provide us information to
                register for participation to the conferences and other events
                we organize, or when we create a Portal user account for you,
                either on behalf of one of our Members and upon your acceptance
                or upon your request.
              </li>
              <li>
                on the basis of our legitimate interests to engage with relevant
                stakeholders to promote principled data practices in support of
                emerging technologies, and communicate with representatives of
                our Members for the purpose of providing our services.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-950 mb-3">
              Your rights
            </h4>
            <p className="text-[#333333] leading-relaxed mb-3">
              You have the right to obtain access, rectification, erasure,
              restriction of personal data, portability of personal data and to
              object to the processing, under the conditions and restrictions
              laid out in Chapter III of the GDPR. You can also withdraw your
              consent at any time, when processing is based on consent, as
              described above. Just send us an e-mail at{" "}
              <a
                href="mailto:dpo@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                dpo@afristablecoin.org
              </a>{" "}
              with any request you may have regarding these rights or, if your
              request relates to processing carried out in the context of the
              ASN Portal, reach out to us at{" "}
              <a
                href="mailto:info@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                info@afristablecoin.org
              </a>
              .
            </p>

            <h4 className="text-lg font-semibold text-blue-950 mb-3">
              International transfers
            </h4>
            <p className="text-[#333333] leading-relaxed mb-3">
              We transfer your personal data to the United States whenever you
              interact with us. The US has not sought, nor obtained adequacy
              status from the European Union.
            </p>
            <p className="text-[#333333] leading-relaxed mb-3">
              We transfer your personal data on the basis of the derogations in
              Article 49 GDPR, particularly: consent, necessity to enter and for
              the performance of a contract, and our compelling legitimate
              interests to engage with stakeholders to advance our mission.
            </p>
            <p className="text-[#333333] leading-relaxed">
              In order to safeguard your personal data, we directly apply the
              GDPR provisions to your personal data. As a matter of principle,
              we do not engage in any onward transfers regarding your data,
              beyond the access that our processors have to your data.
            </p>

            <h4 className="text-lg font-semibold text-blue-950 mb-3">
              Concerns
            </h4>
            <p className="text-[#333333] leading-relaxed">
              If you have concerns, questions or requests about how we process
              personal data, write to us at{" "}
              <a
                href="mailto:dpo@afristablecoin.org"
                className="text-blue-950 hover:underline"
              >
                dpo@afristablecoin.org
              </a>
              . If we will not be able to ease your concerns, you can address
              them to the data protection Supervisory Authority in your country,
              pursuant to Article 77 GDPR.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Changes to this Privacy Policy
            </h3>
            <p className="text-[#333333] leading-relaxed mb-3">
              If we make any material changes to our privacy policy, we will
              notify you by posting the revised policy with the date of revision
              on this page and provide notice of this change on our website home
              page and on the ASN Portal, as applicable. We will duly inform you
              of any changes via our platform and we will give you the
              opportunity to express your consent for processing your data for
              different and new purposes, or we will in any case inform you
              about the legal basis of such processing other than consent.
            </p>
            <p className="text-[#333333] leading-relaxed font-semibold">
              Last Updated on August 20, 2025
            </p>
          </section>
        </div>

        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-blue-950 text-white font-semibold rounded-lg hover:bg-[#3b4220] transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
