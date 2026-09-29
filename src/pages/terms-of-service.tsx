import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  return {
    props: {
      meta: {
        title: 'Terms of Service - RipeText',
        description:
          'Terms of Service for RipeText, an AI-powered performance analytics platform for customer support teams. Read our terms governing use of the Service.',
        ogImage: `${siteUrl}/social-share.png`,
        url: `${siteUrl}/terms-of-service`
      }
    }
  };
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="min-h-screen scroll-smooth overflow-x-hidden">
        <Navbar />
        <main className="pt-[70px] bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16 font-geist text-[#546087] [&_h1]:text-lp-text-title [&_h2]:font-geist [&_h2]:text-lp-text-title [&_h3]:font-geist [&_h3]:text-lp-text-title [&_strong]:font-semibold [&_strong]:text-lp-text-title [&_a]:text-lp-accent-blue hover:[&_a]:text-lp-text-title">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-2 text-center">
              Terms of Service
            </h1>
            <p className="text-sm text-[#636a7e] mb-12 text-center">
              Effective Date: April 6, 2026
            </p>

            {/* 1. Introduction and Acceptance */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                1. Introduction and Acceptance
              </h2>
              <p className="mb-4">
                Welcome to RipeText, a product of nibnab, Inc., a Delaware
                corporation doing business as RipeText (&quot;Company,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms
                of Service (&quot;Terms&quot;) govern your access to and use of
                the RipeText platform, including our website, applications,
                APIs, AI-powered analytics features, and all related services
                (collectively, the &quot;Service&quot;).
              </p>
              <p className="mb-4">
                By creating an account, accessing, or using the Service in any
                manner, you (&quot;User,&quot; &quot;you,&quot; or
                &quot;your&quot;) acknowledge that you have read, understood,
                and agree to be bound by these Terms, as well as our Privacy
                Policy, which is incorporated herein by reference. If you are
                using the Service on behalf of an organization, you represent
                and warrant that you have the authority to bind that
                organization to these Terms, and references to &quot;you&quot;
                shall include that organization.
              </p>
              <p className="mb-4">
                If you do not agree to these Terms, you must not access or use
                the Service. We reserve the right to update or modify these
                Terms at any time by posting the revised version on our website.
                Your continued use of the Service following any such changes
                constitutes your acceptance of the updated Terms. We encourage
                you to review these Terms periodically.
              </p>
            </section>

            {/* 2. Definitions */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                2. Definitions
              </h2>
              <p className="mb-4">
                For the purposes of these Terms, the following definitions
                apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">&quot;Service&quot;</span> means
                  the RipeText platform, including all features, tools,
                  dashboards, AI analytics capabilities, APIs, integrations, and
                  related services provided by nibnab, Inc.
                </li>
                <li>
                  <span className="font-medium">&quot;User&quot;</span> means
                  any individual who creates an account on or accesses the
                  Service, whether as an Owner, Admin, or Member of an
                  Organization.
                </li>
                <li>
                  <span className="font-medium">&quot;Organization&quot;</span>{' '}
                  means a team, company, or entity created within the Service by
                  a User for the purpose of managing customer support analytics
                  and team performance.
                </li>
                <li>
                  <span className="font-medium">&quot;Content&quot;</span> means
                  all data, text, conversations, messages, analytics results,
                  reports, insights, and other materials generated, uploaded,
                  ingested, or displayed through the Service.
                </li>
                <li>
                  <span className="font-medium">
                    &quot;Integrated Platform&quot;
                  </span>{' '}
                  means any third-party customer support platform connected to
                  the Service, including but not limited to Zendesk, Intercom,
                  and Front.
                </li>
                <li>
                  <span className="font-medium">&quot;User Data&quot;</span>{' '}
                  means all data provided by or on behalf of a User or
                  Organization, including customer support conversations,
                  tickets, agent information, and any other data ingested from
                  Integrated Platforms.
                </li>
                <li>
                  <span className="font-medium">
                    &quot;AI-Generated Insights&quot;
                  </span>{' '}
                  means all analytics, evaluations, recommendations, topic
                  classifications, sentiment scores, and other outputs produced
                  by the Service&apos;s artificial intelligence and machine
                  learning features.
                </li>
                <li>
                  <span className="font-medium">
                    &quot;Subscription Plan&quot;
                  </span>{' '}
                  means the specific tier of service selected by a User or
                  Organization, whether free or paid, as described on the
                  RipeText pricing page.
                </li>
              </ul>
            </section>

            {/* 3. Account Registration and Security */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                3. Account Registration and Security
              </h2>
              <h3 className="text-lg font-medium mb-2">3.1 Registration</h3>
              <p className="mb-4">
                To access the Service, you must create an account by
                authenticating via Magic Link (a passwordless email-based
                authentication method) or Google Single Sign-On (SSO). You agree
                to provide accurate, current, and complete information during
                registration and to update such information as necessary to
                maintain its accuracy.
              </p>
              <h3 className="text-lg font-medium mb-2">
                3.2 Organizations and Roles
              </h3>
              <p className="mb-4">
                Upon registration, you may create or join an Organization. Each
                Organization supports the following user roles:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Owner:</span> The User who
                  created the Organization. Owners have full administrative
                  control, including billing management, member management, and
                  the ability to delete the Organization.
                </li>
                <li>
                  <span className="font-medium">Admin:</span> Users granted
                  elevated privileges by the Owner, including the ability to
                  manage integrations, invite members, and configure
                  Organization settings.
                </li>
                <li>
                  <span className="font-medium">Member:</span> Users invited to
                  an Organization with standard access to dashboards, analytics,
                  and reports as permitted by the Organization&apos;s
                  Subscription Plan.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-2">
                3.3 Invitation System
              </h3>
              <p className="mb-4">
                Owners and Admins may invite additional Users to join their
                Organization via email invitation. By sending an invitation, you
                represent that you have the authority to grant the invited
                individual access to the Organization&apos;s data and analytics.
                Invited Users must accept the invitation and create an account
                to access the Organization.
              </p>
              <h3 className="text-lg font-medium mb-2">3.4 Account Security</h3>
              <p className="mb-4">
                You are responsible for maintaining the security of your account
                and for all activities that occur under your account. You agree
                to immediately notify us at info@ripetext.com if you become
                aware of any unauthorized use of your account or any other
                breach of security. We shall not be liable for any loss or
                damage arising from your failure to maintain the security of
                your account credentials.
              </p>
            </section>

            {/* 4. Description of Service */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                4. Description of Service
              </h2>
              <p className="mb-4">
                RipeText is an AI-powered performance analytics platform
                designed for customer support teams. The Service enables
                Organizations to ingest, analyze, and derive actionable insights
                from customer support conversations sourced from Integrated
                Platforms such as Zendesk, Intercom, and Front.
              </p>
              <h3 className="text-lg font-medium mb-2">4.1 Core Features</h3>
              <p className="mb-4">
                The Service includes, but is not limited to, the following
                features:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Conversation Ingestion:</span>{' '}
                  Automated import and synchronization of customer support
                  conversations from connected Integrated Platforms.
                </li>
                <li>
                  <span className="font-medium">Ivy Agent:</span> An AI-powered
                  conversational assistant that provides on-demand answers and
                  insights about your support team&apos;s performance, trends,
                  and data.
                </li>
                <li>
                  <span className="font-medium">Topic Generation:</span>{' '}
                  Automated identification and categorization of conversation
                  topics using machine learning models.
                </li>
                <li>
                  <span className="font-medium">Issue Extraction:</span>{' '}
                  AI-driven detection of customer issues, pain points, and
                  recurring problems within support conversations.
                </li>
                <li>
                  <span className="font-medium">Agent Evaluation:</span>{' '}
                  Performance scoring and assessment of customer support agents
                  based on conversation quality, response patterns, and
                  resolution effectiveness.
                </li>
                <li>
                  <span className="font-medium">Training Recommendations:</span>{' '}
                  AI-generated coaching suggestions and training content
                  tailored to individual agent performance data.
                </li>
                <li>
                  <span className="font-medium">Sentiment Analysis:</span>{' '}
                  Automated classification of customer and agent sentiment
                  throughout conversations.
                </li>
                <li>
                  <span className="font-medium">Anomaly Detection:</span>{' '}
                  Identification of unusual patterns, spikes, or deviations in
                  support metrics and conversation data.
                </li>
                <li>
                  <span className="font-medium">Semantic Search:</span> Natural
                  language search across ingested conversations and analytics
                  data.
                </li>
                <li>
                  <span className="font-medium">Dashboards and Reporting:</span>{' '}
                  Interactive visualizations, performance dashboards, and
                  exportable reports for team and individual agent analytics.
                </li>
                <li>
                  <span className="font-medium">Coaching Tools:</span> Features
                  designed to help team leads and managers provide targeted
                  feedback and training to support agents.
                </li>
              </ul>
              <p className="mb-4">
                We reserve the right to add, modify, or remove features of the
                Service at any time. Material changes to core features will be
                communicated to active Users via email or in-app notification.
              </p>
            </section>

            {/* 5. Subscription Plans and Payment */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                5. Subscription Plans and Payment
              </h2>
              <h3 className="text-lg font-medium mb-2">
                5.1 Plans and Pricing
              </h3>
              <p className="mb-4">
                The Service is offered under free and paid Subscription Plans.
                Details regarding the features, limitations, and pricing of each
                plan are available on the RipeText pricing page. Paid plans are
                available on a monthly or annual billing cycle.
              </p>
              <h3 className="text-lg font-medium mb-2">5.2 Free Trial</h3>
              <p className="mb-4">
                We may offer a fourteen (14) day free trial for paid
                Subscription Plans. During the trial period, you will have
                access to the features included in the selected plan. At the end
                of the trial period, your account will automatically convert to
                a paid subscription unless you cancel before the trial expires.
                We reserve the right to modify, limit, or discontinue free trial
                offers at any time.
              </p>
              <h3 className="text-lg font-medium mb-2">
                5.3 Payment Processing
              </h3>
              <p className="mb-4">
                All payments are processed through Stripe, a third-party payment
                processor. By subscribing to a paid plan, you agree to provide
                valid payment information and authorize Stripe to charge the
                applicable fees to your designated payment method. Your use of
                Stripe is subject to Stripe&apos;s terms of service and privacy
                policy. We do not store your complete credit card information on
                our servers.
              </p>
              <h3 className="text-lg font-medium mb-2">5.4 Auto-Renewal</h3>
              <p className="mb-4">
                Paid Subscription Plans automatically renew at the end of each
                billing cycle (monthly or annual) unless you cancel prior to the
                renewal date. You will be charged the then-current subscription
                rate at the time of renewal. We will provide reasonable advance
                notice of any price increases before they take effect.
              </p>
              <h3 className="text-lg font-medium mb-2">5.5 Cancellation</h3>
              <p className="mb-4">
                You may cancel your paid Subscription Plan at any time through
                your account settings. Upon cancellation, your subscription will
                remain active until the end of the current billing period, after
                which your account will revert to the free plan (if available)
                or be deactivated. You will not receive a prorated refund for
                the remainder of your billing period.
              </p>
              <h3 className="text-lg font-medium mb-2">5.6 Refund Policy</h3>
              <p className="mb-4">
                All fees paid for the Service are non-refundable, except as
                required by applicable law. This includes, without limitation,
                subscription fees, setup fees, and any other charges associated
                with the Service. If you believe you have been charged in error,
                please contact us at info@ripetext.com within thirty (30) days
                of the charge.
              </p>
            </section>

            {/* 6. User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                6. User Responsibilities
              </h2>
              <h3 className="text-lg font-medium mb-2">
                6.1 Accurate Information
              </h3>
              <p className="mb-4">
                You agree to provide accurate, truthful, and complete
                information when creating your account, setting up your
                Organization, and using the Service. You are responsible for
                keeping your account information up to date.
              </p>
              <h3 className="text-lg font-medium mb-2">
                6.2 Compliance with Integrated Platform Terms
              </h3>
              <p className="mb-4">
                When connecting the Service to Integrated Platforms such as
                Zendesk, Intercom, or Front, you represent and warrant that: (a)
                you have the authority and all necessary permissions to connect
                such platforms and to grant the Service access to the data
                contained therein; (b) your use of the Service in connection
                with such platforms complies with the applicable terms of
                service, acceptable use policies, and privacy policies of those
                Integrated Platforms; and (c) you will not use the Service to
                access or process data from any Integrated Platform in a manner
                that violates any applicable law, regulation, or third-party
                agreement.
              </p>
              <h3 className="text-lg font-medium mb-2">
                6.3 Authorized Access
              </h3>
              <p className="mb-4">
                You are solely responsible for ensuring that all individuals who
                access the Service through your Organization are authorized to
                do so and that their access to customer support data is
                permitted under applicable laws and your Organization&apos;s
                internal policies. You agree to promptly revoke access for any
                User who is no longer authorized.
              </p>
              <h3 className="text-lg font-medium mb-2">6.4 Acceptable Use</h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Use the Service for any unlawful purpose or in violation of
                  any applicable local, state, national, or international law or
                  regulation.
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service, other user
                  accounts, or any systems or networks connected to the Service.
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or otherwise attempt
                  to derive the source code of the Service or any underlying
                  algorithms or models.
                </li>
                <li>
                  Use the Service to transmit any malware, viruses, or other
                  harmful code.
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service or any data contained therein.
                </li>
                <li>
                  Resell, sublicense, or redistribute the Service or any portion
                  thereof without our prior written consent.
                </li>
                <li>
                  Use the Service to scrape, harvest, or collect data in a
                  manner inconsistent with the intended use of the Service.
                </li>
                <li>
                  Misrepresent your identity or affiliation with any person or
                  entity when using the Service.
                </li>
              </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                7. Intellectual Property
              </h2>
              <h3 className="text-lg font-medium mb-2">7.1 RipeText IP</h3>
              <p className="mb-4">
                The Service, including but not limited to its software, code,
                algorithms, artificial intelligence and machine learning models,
                user interface designs, graphics, logos, trademarks, trade
                names, documentation, and all AI-Generated Insights
                methodologies, are the exclusive property of nibnab, Inc. or its
                licensors and are protected by United States and international
                copyright, trademark, patent, trade secret, and other
                intellectual property laws. Nothing in these Terms grants you
                any right, title, or interest in or to the Service or any of its
                components, except for the limited right to use the Service as
                expressly set forth herein.
              </p>
              <h3 className="text-lg font-medium mb-2">
                7.2 Ownership of User Data
              </h3>
              <p className="mb-4">
                You retain all right, title, and interest in and to your User
                Data. Nothing in these Terms transfers ownership of your
                customer support conversations, tickets, agent data, or any
                other data you provide to or through the Service. We claim no
                intellectual property rights over the User Data you submit to
                the Service.
              </p>
              <h3 className="text-lg font-medium mb-2">
                7.3 License to Process Data
              </h3>
              <p className="mb-4">
                By using the Service, you grant nibnab, Inc. a limited,
                non-exclusive, worldwide, royalty-free license to access,
                collect, store, process, analyze, and display your User Data
                solely for the purpose of providing, improving, and maintaining
                the Service. This license includes the right to transmit your
                User Data to third-party AI providers (as described in Section
                8) for the purpose of generating AI-Generated Insights. This
                license terminates upon deletion of your User Data or
                termination of your account, subject to our data retention
                policies described in our Privacy Policy.
              </p>
            </section>

            {/* 8. AI and Machine Learning Disclaimer */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                8. AI and Machine Learning Disclaimer
              </h2>
              <p className="mb-4">
                The Service utilizes artificial intelligence and machine
                learning technologies, including third-party AI services
                provided by OpenAI and Anthropic, to generate analytics,
                evaluations, recommendations, and other AI-Generated Insights.
                By using the Service, you acknowledge and agree to the
                following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Informational Purpose:</span>{' '}
                  All AI-Generated Insights, including but not limited to agent
                  evaluations, topic classifications, sentiment scores, training
                  recommendations, and anomaly detections, are provided for
                  informational purposes only and should not be relied upon as
                  the sole basis for employment decisions, disciplinary actions,
                  or other consequential determinations.
                </li>
                <li>
                  <span className="font-medium">No Guarantee of Accuracy:</span>{' '}
                  While we strive to provide accurate and useful insights, AI
                  and machine learning technologies are inherently probabilistic
                  and may produce inaccurate, incomplete, or biased results. We
                  do not warrant or guarantee the accuracy, completeness,
                  reliability, or suitability of any AI-Generated Insights for
                  any particular purpose.
                </li>
                <li>
                  <span className="font-medium">
                    Third-Party AI Processing:
                  </span>{' '}
                  Portions of your User Data may be transmitted to and processed
                  by OpenAI and Anthropic for the purpose of generating
                  AI-Generated Insights. Such transmission is subject to the
                  respective privacy policies and terms of service of those
                  providers. We select and configure these providers with care,
                  but we do not control their processing practices.
                </li>
                <li>
                  <span className="font-medium">No Guaranteed Outcomes:</span>{' '}
                  Use of the Service does not guarantee any specific business
                  outcomes, improvements in customer support quality, or
                  measurable performance gains. Results may vary based on the
                  volume, quality, and nature of the data provided to the
                  Service.
                </li>
                <li>
                  <span className="font-medium">Human Oversight:</span> You are
                  responsible for exercising independent judgment and applying
                  appropriate human oversight when acting upon AI-Generated
                  Insights. We recommend that all significant decisions informed
                  by the Service be reviewed by qualified personnel within your
                  Organization.
                </li>
              </ul>
            </section>

            {/* 9. Data and Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                9. Data and Privacy
              </h2>
              <p className="mb-4">
                Your privacy is important to us. Our collection, use, storage,
                and disclosure of personal information and User Data are
                governed by our{' '}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
                , which is incorporated into and forms part of these Terms. By
                using the Service, you consent to the data practices described
                in the Privacy Policy.
              </p>
              <p className="mb-4">
                You acknowledge that the Service processes customer support
                data, which may include personal information of your customers
                and support agents. You are responsible for ensuring that your
                use of the Service complies with all applicable data protection
                laws and regulations, including but not limited to the
                California Consumer Privacy Act (CCPA), the General Data
                Protection Regulation (GDPR) where applicable, and any other
                relevant privacy legislation. You agree to obtain all necessary
                consents and authorizations before submitting personal data to
                the Service.
              </p>
            </section>

            {/* 10. Third-Party Integrations */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                10. Third-Party Integrations
              </h2>
              <h3 className="text-lg font-medium mb-2">
                10.1 Integrated Platforms
              </h3>
              <p className="mb-4">
                The Service integrates with third-party customer support
                platforms, including Zendesk, Intercom, and Front (collectively,
                &quot;Integrated Platforms&quot;). These integrations are
                provided to facilitate the ingestion and analysis of your
                customer support data. We are not affiliated with, endorsed by,
                or sponsored by any Integrated Platform unless expressly stated.
              </p>
              <h3 className="text-lg font-medium mb-2">
                10.2 User Responsibilities for Integrations
              </h3>
              <p className="mb-4">
                You are solely responsible for: (a) maintaining valid accounts
                and appropriate permissions on all Integrated Platforms you
                connect to the Service; (b) ensuring that your use of data from
                Integrated Platforms through the Service complies with the terms
                of service and policies of those platforms; and (c) managing and
                revoking integration permissions as necessary. We are not
                responsible for any actions taken by Integrated Platforms,
                including suspension or termination of your account on those
                platforms.
              </p>
              <h3 className="text-lg font-medium mb-2">
                10.3 OAuth Authorization
              </h3>
              <p className="mb-4">
                Connections to Integrated Platforms are established through
                OAuth authorization protocols. By authorizing an integration,
                you grant the Service permission to access and retrieve data
                from the connected platform in accordance with the scope of
                permissions you approve during the authorization process. You
                may revoke this authorization at any time through the Integrated
                Platform&apos;s settings or through your RipeText account
                settings. Revocation of OAuth authorization will prevent further
                data synchronization from the affected platform.
              </p>
            </section>

            {/* 11. Service Availability and Modifications */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                11. Service Availability and Modifications
              </h2>
              <p className="mb-4">
                We strive to maintain the availability and reliability of the
                Service; however, the Service is provided on an &quot;as
                available&quot; basis. We do not guarantee uninterrupted,
                error-free, or secure access to the Service at all times. The
                Service may be subject to scheduled maintenance, unplanned
                outages, or disruptions caused by factors beyond our reasonable
                control.
              </p>
              <p className="mb-4">
                Unless a separate service level agreement (&quot;SLA&quot;) has
                been executed between you and nibnab, Inc., no specific uptime
                guarantee is provided. We shall not be liable for any damages or
                losses resulting from service interruptions, downtime, or
                unavailability.
              </p>
              <p className="mb-4">
                We reserve the right to modify, update, suspend, or discontinue
                any part of the Service at any time, with or without notice. We
                will use commercially reasonable efforts to provide advance
                notice of material changes that significantly affect your use of
                the Service. Continued use of the Service after such
                modifications constitutes acceptance of the updated Service.
              </p>
            </section>

            {/* 12. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                12. Limitation of Liability
              </h2>
              <p className="mb-4 uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL NIBNAB, INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                AFFILIATES, SUCCESSORS, OR ASSIGNS BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY
                DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF
                PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES,
                ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO
                USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
                OF SUCH DAMAGES.
              </p>
              <p className="mb-4 uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL
                AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR
                YOUR USE OF THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE
                TOTAL AMOUNT YOU HAVE PAID TO US IN SUBSCRIPTION FEES DURING THE
                TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE
                TO THE CLAIM; OR (B) ONE HUNDRED UNITED STATES DOLLARS
                ($100.00).
              </p>
              <p className="mb-4">
                The limitations set forth in this section shall apply regardless
                of the form of action, whether in contract, tort (including
                negligence), strict liability, or otherwise, and shall survive
                any termination or expiration of these Terms. Some jurisdictions
                do not allow the exclusion or limitation of certain damages, so
                some of the above limitations may not apply to you.
              </p>
            </section>

            {/* 13. Indemnification */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                13. Indemnification
              </h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless nibnab, Inc.,
                its officers, directors, employees, agents, affiliates,
                successors, and assigns from and against any and all claims,
                liabilities, damages, losses, costs, and expenses (including
                reasonable attorneys&apos; fees and court costs) arising out of
                or relating to: (a) your use of or access to the Service; (b)
                your violation of these Terms; (c) your violation of any
                applicable law, regulation, or third-party right, including any
                intellectual property, privacy, or data protection right; (d)
                any data or content you submit, transmit, or make available
                through the Service; (e) your connection of any Integrated
                Platform to the Service without proper authorization; or (f) any
                dispute between you and a third party arising from your use of
                the Service.
              </p>
              <p className="mb-4">
                We reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate with our defense of
                such claims. You agree not to settle any claim without our prior
                written consent.
              </p>
            </section>

            {/* 14. Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                14. Termination
              </h2>
              <h3 className="text-lg font-medium mb-2">
                14.1 Termination by User
              </h3>
              <p className="mb-4">
                You may terminate your account and stop using the Service at any
                time by canceling your Subscription Plan through your account
                settings or by contacting us at info@ripetext.com. If you are on
                a paid Subscription Plan, cancellation will take effect at the
                end of the current billing period, and you will not be charged
                for subsequent periods.
              </p>
              <h3 className="text-lg font-medium mb-2">
                14.2 Termination by RipeText
              </h3>
              <p className="mb-4">
                We may suspend or terminate your access to the Service, in whole
                or in part, at any time and for any reason, including but not
                limited to: (a) a material breach of these Terms; (b)
                non-payment of subscription fees; (c) conduct that we reasonably
                believe is harmful to other Users, third parties, or the
                business interests of nibnab, Inc.; (d) extended inactivity; or
                (e) a request by law enforcement or other government agency. We
                will use reasonable efforts to provide notice of termination,
                except where immediate termination is necessary to protect the
                Service or other Users.
              </p>
              <h3 className="text-lg font-medium mb-2">
                14.3 Effect of Termination
              </h3>
              <p className="mb-4">
                Upon termination of your account: (a) your right to access and
                use the Service will immediately cease; (b) any outstanding fees
                owed to us will become immediately due and payable; (c) we may
                delete your User Data and account information in accordance with
                our data retention policies as described in our Privacy Policy.
                We will make commercially reasonable efforts to allow you to
                export your data prior to deletion, provided you request such
                export within thirty (30) days of termination. Provisions of
                these Terms that by their nature should survive termination
                shall survive, including but not limited to Sections 7, 8, 12,
                13, 15, 16, and 18.
              </p>
            </section>

            {/* 15. Governing Law */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                15. Governing Law
              </h2>
              <p className="mb-4">
                These Terms and any dispute arising out of or relating to these
                Terms or the Service shall be governed by and construed in
                accordance with the laws of the State of Delaware, United
                States, without regard to its conflict of law principles. The
                application of the United Nations Convention on Contracts for
                the International Sale of Goods is expressly excluded.
              </p>
            </section>

            {/* 16. Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                16. Dispute Resolution
              </h2>
              <h3 className="text-lg font-medium mb-2">
                16.1 Informal Resolution
              </h3>
              <p className="mb-4">
                Before initiating any formal dispute resolution proceeding, you
                agree to first attempt to resolve any dispute, claim, or
                controversy arising out of or relating to these Terms or the
                Service informally by contacting us at info@ripetext.com. We
                will attempt to resolve the dispute informally within thirty
                (30) days of receiving your notice. If the dispute is not
                resolved within this period, either party may proceed as set
                forth below.
              </p>
              <h3 className="text-lg font-medium mb-2">
                16.2 Binding Arbitration
              </h3>
              <p className="mb-4">
                Any dispute, claim, or controversy arising out of or relating to
                these Terms or the breach, termination, enforcement,
                interpretation, or validity thereof, including the determination
                of the scope or applicability of this agreement to arbitrate,
                that cannot be resolved through informal negotiation shall be
                resolved by binding arbitration administered by the American
                Arbitration Association (&quot;AAA&quot;) in accordance with its
                Commercial Arbitration Rules then in effect. The arbitration
                shall be conducted by a single arbitrator, and the seat of
                arbitration shall be Wilmington, Delaware. The arbitrator&apos;s
                decision shall be final and binding and may be entered as a
                judgment in any court of competent jurisdiction.
              </p>
              <h3 className="text-lg font-medium mb-2">
                16.3 Class Action Waiver
              </h3>
              <p className="mb-4 uppercase">
                YOU AND NIBNAB, INC. AGREE THAT EACH PARTY MAY BRING CLAIMS
                AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND
                NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE PROCEEDING. UNLESS BOTH PARTIES AGREE OTHERWISE,
                THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE
                PERSON&apos;S OR PARTY&apos;S CLAIMS AND MAY NOT OTHERWISE
                PRESIDE OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, OR
                CLASS PROCEEDING.
              </p>
              <h3 className="text-lg font-medium mb-2">16.4 Exceptions</h3>
              <p className="mb-4">
                Notwithstanding the foregoing, either party may seek injunctive
                or other equitable relief in the state or federal courts located
                in Wilmington, Delaware, to protect its intellectual property
                rights or to prevent irreparable harm pending the outcome of
                arbitration. Both parties consent to the exclusive jurisdiction
                and venue of such courts for such purposes.
              </p>
            </section>

            {/* 17. Severability */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                17. Severability
              </h2>
              <p className="mb-4">
                If any provision of these Terms is held to be invalid, illegal,
                or unenforceable by a court of competent jurisdiction, such
                provision shall be modified to the minimum extent necessary to
                make it valid, legal, and enforceable while preserving its
                original intent. If such modification is not possible, the
                provision shall be severed from these Terms, and the remaining
                provisions shall continue in full force and effect.
              </p>
            </section>

            {/* 18. Entire Agreement */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                18. Entire Agreement
              </h2>
              <p className="mb-4">
                These Terms, together with the Privacy Policy and any other
                agreements or policies expressly incorporated by reference
                herein, constitute the entire agreement between you and nibnab,
                Inc. with respect to the subject matter hereof and supersede all
                prior or contemporaneous communications, proposals,
                representations, understandings, and agreements, whether written
                or oral, between you and nibnab, Inc. regarding the Service. No
                waiver of any provision of these Terms shall be deemed a further
                or continuing waiver of such provision or any other provision,
                and our failure to assert any right or provision under these
                Terms shall not constitute a waiver of such right or provision.
              </p>
            </section>

            {/* 19. Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                19. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding these
                Terms of Service, please contact us at:
              </p>
              <div className="mb-4">
                <p className="font-medium">nibnab, Inc. (d/b/a RipeText)</p>
                <p>Attn: Nikolay Tsenkov, CEO</p>
                <p>2810 N Church St PMB 89178</p>
                <p>Wilmington, DE 19802-4447</p>
                <p className="mt-2">
                  Email:{' '}
                  <a href="mailto:info@ripetext.com" className="underline">
                    info@ripetext.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+13029900582" className="underline">
                    +1 (302) 990-0582
                  </a>
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
