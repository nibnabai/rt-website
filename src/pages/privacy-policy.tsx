import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const getStaticProps = () => {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL ?? '';
  return {
    props: {
      meta: {
        title: 'Privacy Policy - RipeText',
        description:
          'Privacy Policy for RipeText by nibnab, Inc. Learn how we collect, use, and protect your data.',
        ogImage: `${siteUrl}/social-share.png`,
        url: `${siteUrl}/privacy-policy`
      }
    }
  };
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen scroll-smooth overflow-x-hidden">
        <Navbar />
        <main className="pt-[70px] bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16 font-geist text-[#546087] [&_h1]:text-lp-text-title [&_h2]:font-geist [&_h2]:text-lp-text-title [&_h3]:font-geist [&_h3]:text-lp-text-title [&_strong]:font-semibold [&_strong]:text-lp-text-title [&_a]:text-lp-accent-blue hover:[&_a]:text-lp-text-title">
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-2 text-center">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#636a7e] mb-12 text-center">
              Effective Date: April 6, 2026
            </p>

            {/* 1. Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to RipeText. This Privacy Policy is provided by nibnab,
                Inc., a Delaware corporation doing business as RipeText
                (&quot;RipeText,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). This Privacy Policy describes how we collect,
                use, disclose, and otherwise process personal information in
                connection with our website, platform, and related services
                (collectively, the &quot;Service&quot;), as well as your rights
                and choices regarding such information.
              </p>
              <p className="mb-4">
                RipeText is an AI-powered customer support analytics platform
                that helps organizations analyze support conversations, extract
                insights, identify trends, and improve the quality of their
                customer service operations. By accessing or using our Service,
                you acknowledge that you have read, understood, and agree to the
                practices described in this Privacy Policy. If you do not agree
                with this Privacy Policy, please do not access or use our
                Service.
              </p>
              <p className="mb-4">
                This Privacy Policy applies to all users of the Service,
                including organizational administrators, team members, and any
                other individuals who interact with our platform. It covers
                information collected through our website, application, APIs,
                and any other means through which you may interact with
                RipeText.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information in several ways depending on how you
                interact with our Service. The categories of information we
                collect include the following:
              </p>

              <h3 className="text-lg font-medium mb-2">
                2.1 Account Information
              </h3>
              <p className="mb-4">
                When you create an account on RipeText, we collect personal
                information necessary to establish and maintain your account.
                This includes your name, email address, and profile picture. You
                may register using Google Single Sign-On (SSO), in which case we
                receive your name, email address, and profile image from Google,
                or via Magic Link email authentication, in which case we collect
                the email address you provide. We store authentication session
                data in our database to manage your access to the Service.
              </p>

              <h3 className="text-lg font-medium mb-2">
                2.2 Organization Data
              </h3>
              <p className="mb-4">
                RipeText operates on an organization-based model. When you
                create or join an organization, we collect the organization name
                and manage member roles and permissions within that
                organization. This information is used to facilitate
                collaboration and access control within your team.
              </p>

              <h3 className="text-lg font-medium mb-2">
                2.3 Support Platform Data
              </h3>
              <p className="mb-4">
                The core functionality of RipeText involves ingesting and
                analyzing customer support data from third-party platforms. When
                you connect your support platform accounts, we collect data from
                the following integrated systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Zendesk:</span> Support tickets,
                  conversations, messages, agent metadata (names, roles,
                  performance metrics), and customer metadata (names, email
                  addresses, interaction history).
                </li>
                <li>
                  <span className="font-medium">Intercom:</span> Conversations,
                  messages, agent metadata, customer metadata, and related
                  support interaction data.
                </li>
                <li>
                  <span className="font-medium">Front:</span> Conversations,
                  messages, agent metadata, customer metadata, and associated
                  communication records.
                </li>
              </ul>
              <p className="mb-4">
                This data is connected via OAuth authorization and webhooks.
                When you authorize a connection, you grant RipeText permission
                to access and retrieve data from the respective platform on your
                behalf. Webhook integrations enable real-time data
                synchronization, allowing RipeText to receive new conversations
                and updates as they occur in your support platform.
              </p>

              <h3 className="text-lg font-medium mb-2">
                2.4 Usage Data and Analytics
              </h3>
              <p className="mb-4">
                We automatically collect information about how you interact with
                our Service. This includes pages visited, features used, actions
                taken, time spent on the platform, browser type, device
                information, IP address, and referring URLs. We use the
                following analytics services to collect and process this data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">PostHog:</span> Product
                  analytics including feature usage, user flows, and behavioral
                  data.
                </li>
                <li>
                  <span className="font-medium">Google Analytics:</span> Website
                  traffic analysis, user demographics, and engagement metrics.
                </li>
                <li>
                  <span className="font-medium">Vercel Speed Insights:</span>{' '}
                  Performance monitoring including page load times and web
                  vitals.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                2.5 Error Tracking Data
              </h3>
              <p className="mb-4">
                We use Sentry for error tracking and application performance
                monitoring. When errors occur, Sentry may collect technical
                information including error messages, stack traces, browser and
                device information, and the state of the application at the time
                of the error. This data is used solely for diagnosing and
                resolving technical issues.
              </p>

              <h3 className="text-lg font-medium mb-2">
                2.6 Payment Information
              </h3>
              <p className="mb-4">
                We use Stripe as our payment processor. When you subscribe to a
                paid plan, your payment card details are collected and processed
                directly by Stripe. We do not receive or store your full credit
                card number, CVV, or other sensitive payment card data. We
                retain only your Stripe customer ID, subscription status, and
                billing history to manage your account and provide customer
                support related to billing inquiries.
              </p>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>

              <h3 className="text-lg font-medium mb-2">
                3.1 Providing and Operating the Service
              </h3>
              <p className="mb-4">
                We process your support platform data using artificial
                intelligence and machine learning to deliver the core features
                of RipeText, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">AI-powered analysis</span> of
                  customer support conversations to surface actionable insights.
                </li>
                <li>
                  <span className="font-medium">Topic generation</span> to
                  automatically categorize and cluster support interactions by
                  subject matter.
                </li>
                <li>
                  <span className="font-medium">Issue extraction</span> to
                  identify recurring customer problems and pain points.
                </li>
                <li>
                  <span className="font-medium">Agent evaluation</span> to
                  assess support representative performance and identify areas
                  for improvement.
                </li>
                <li>
                  <span className="font-medium">Training recommendations</span>{' '}
                  to suggest targeted coaching and development opportunities for
                  support teams.
                </li>
                <li>
                  <span className="font-medium">Sentiment analysis</span> to
                  gauge customer satisfaction and emotional tone across
                  interactions.
                </li>
                <li>
                  <span className="font-medium">Anomaly detection</span> to
                  alert you to unusual patterns or spikes in support volume,
                  sentiment, or other key metrics.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                3.2 AI and Machine Learning Processing
              </h3>
              <p className="mb-4">
                To power our analytical capabilities, we send conversation data
                to third-party AI providers, specifically OpenAI and Anthropic,
                via their APIs. These providers process the data to generate
                analysis results, summaries, and insights. Additionally, we
                generate vector embeddings of conversation data and store them
                in a Weaviate vector database to enable semantic search
                functionality, allowing you to find relevant conversations based
                on meaning rather than exact keyword matches.
              </p>

              <h3 className="text-lg font-medium mb-2">
                3.3 Improving the Service
              </h3>
              <p className="mb-4">
                We use usage data and analytics to understand how users interact
                with our platform, identify areas for improvement, develop new
                features, optimize performance, and enhance the overall user
                experience. We may also use aggregated, de-identified data for
                research and development purposes.
              </p>

              <h3 className="text-lg font-medium mb-2">3.4 Communications</h3>
              <p className="mb-4">
                We use your email address to send transactional communications
                related to your account and use of the Service, such as account
                verification, magic link authentication emails, subscription
                confirmations, billing receipts, and important service updates.
                Transactional emails are delivered through Postmark. We may also
                send you product announcements and feature updates, from which
                you may opt out at any time.
              </p>

              <h3 className="text-lg font-medium mb-2">
                3.5 Payment Processing
              </h3>
              <p className="mb-4">
                We use Stripe to process subscription payments. Your payment
                information is transmitted directly to Stripe and is subject to
                Stripe&apos;s privacy policy. We use your Stripe customer ID and
                subscription status to manage your access to paid features and
                maintain billing records.
              </p>
            </section>

            {/* 4. Data Sharing and Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                4. Data Sharing and Third-Party Services
              </h2>
              <p className="mb-4">
                We do not sell your personal information. We share information
                with third parties only as described in this Privacy Policy and
                as necessary to provide and improve the Service. The following
                categories describe the third-party services with which your
                data may be shared:
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.1 AI Processing Providers
              </h3>
              <p className="mb-4">
                We transmit customer support conversation data to{' '}
                <span className="font-medium">OpenAI</span> and{' '}
                <span className="font-medium">Anthropic</span> via their
                respective APIs for the purpose of AI-powered analysis, insight
                generation, and natural language processing. Data sent to these
                providers is used solely to generate responses and analysis for
                your account and is subject to each provider&apos;s data
                processing agreements and privacy policies.
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.2 Cloud Infrastructure
              </h3>
              <p className="mb-4">
                Our Service is hosted on cloud infrastructure provided by{' '}
                <span className="font-medium">Amazon Web Services (AWS)</span>{' '}
                and{' '}
                <span className="font-medium">Google Cloud Platform (GCP)</span>
                . AWS S3 is used for object storage, and GCP provides additional
                compute and service infrastructure. These providers process data
                on our behalf pursuant to their respective data processing
                agreements.
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.3 Analytics Providers
              </h3>
              <p className="mb-4">
                We share usage data with{' '}
                <span className="font-medium">PostHog</span> for product
                analytics, <span className="font-medium">Google Analytics</span>{' '}
                for website traffic analysis, and{' '}
                <span className="font-medium">Vercel Speed Insights</span> for
                performance monitoring. These services receive information about
                your interactions with our Service to help us understand usage
                patterns and improve performance.
              </p>

              <h3 className="text-lg font-medium mb-2">4.4 Error Tracking</h3>
              <p className="mb-4">
                <span className="font-medium">Sentry</span> receives technical
                error data, including stack traces, browser information, and
                application state at the time of errors, to help us identify and
                resolve issues with the Service.
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.5 Payment Processing
              </h3>
              <p className="mb-4">
                <span className="font-medium">Stripe</span> processes all
                payment transactions. When you provide payment information, it
                is transmitted directly to Stripe and is subject to
                Stripe&apos;s privacy policy and PCI-DSS compliance standards.
              </p>

              <h3 className="text-lg font-medium mb-2">4.6 Email Services</h3>
              <p className="mb-4">
                <span className="font-medium">Postmark</span> is used to deliver
                transactional emails, including magic link authentication
                emails, account notifications, and billing communications.
                Postmark receives recipient email addresses and email content
                necessary to deliver these messages.
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.7 Support Platform Integrations
              </h3>
              <p className="mb-4">
                When you connect your accounts on{' '}
                <span className="font-medium">Zendesk</span>,{' '}
                <span className="font-medium">Intercom</span>, or{' '}
                <span className="font-medium">Front</span>, bidirectional data
                exchange occurs via OAuth-authenticated API connections and
                webhook integrations. This enables RipeText to ingest your
                support data for analysis and, where applicable, to provide
                functionality that interacts with your support platform.
              </p>

              <h3 className="text-lg font-medium mb-2">
                4.8 Other Third-Party Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Slack:</span> We may send
                  webhook notifications to Slack channels you configure,
                  containing alerts and summaries related to your support data
                  analysis.
                </li>
                <li>
                  <span className="font-medium">Calendly:</span> Scheduling
                  links may be provided for demos or support calls. Calendly
                  collects scheduling information subject to its own privacy
                  policy.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                4.9 Legal and Compliance Disclosures
              </h3>
              <p className="mb-4">
                We may disclose your information if required to do so by law or
                in the good faith belief that such action is necessary to comply
                with a legal obligation, protect and defend our rights or
                property, prevent fraud, protect the personal safety of users of
                the Service or the public, or protect against legal liability.
              </p>
            </section>

            {/* 5. Data Storage and Security */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                5. Data Storage and Security
              </h2>
              <p className="mb-4">
                We take the security of your data seriously and implement
                industry-standard technical and organizational measures to
                protect the information we collect and process.
              </p>

              <h3 className="text-lg font-medium mb-2">
                5.1 Data Storage Infrastructure
              </h3>
              <p className="mb-4">
                Your data is stored using the following systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">PostgreSQL:</span> Our primary
                  relational database, used to store account information,
                  organization data, ingested support data, and application
                  state.
                </li>
                <li>
                  <span className="font-medium">Weaviate:</span> A vector
                  database used to store conversation embeddings that power
                  semantic search and similarity-based retrieval features.
                </li>
                <li>
                  <span className="font-medium">Redis:</span> An in-memory data
                  store used for caching, session management, rate limiting, and
                  transient operational data.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                5.2 Hosting and Deployment
              </h3>
              <p className="mb-4">
                Our Service is hosted on cloud infrastructure provided by Amazon
                Web Services (AWS) and Google Cloud Platform (GCP). Our
                application is deployed and managed using Kubernetes, which
                provides automated scaling, self-healing, and secure
                orchestration of our service components.
              </p>

              <h3 className="text-lg font-medium mb-2">
                5.3 Security Measures
              </h3>
              <p className="mb-4">
                We implement the following security measures to protect your
                data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Encryption in transit:</span>{' '}
                  All data transmitted between your browser and our servers, and
                  between our internal services and third-party providers, is
                  encrypted using TLS (Transport Layer Security).
                </li>
                <li>
                  <span className="font-medium">Access controls:</span>{' '}
                  Role-based access controls ensure that users can only access
                  data within their authorized organization and permission
                  level.
                </li>
                <li>
                  <span className="font-medium">Infrastructure security:</span>{' '}
                  Our Kubernetes-managed deployment includes network policies,
                  resource isolation, and automated security patching.
                </li>
                <li>
                  <span className="font-medium">Third-party security:</span> We
                  select third-party service providers that maintain robust
                  security practices and compliance certifications.
                </li>
              </ul>
              <p className="mb-4">
                While we strive to protect your personal information, no method
                of transmission over the Internet or method of electronic
                storage is completely secure. We cannot guarantee the absolute
                security of your data, but we are committed to implementing and
                maintaining reasonable safeguards appropriate to the sensitivity
                of the information we process.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                6. Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal information for as long as your account
                is active or as needed to provide you with the Service. The
                specific retention periods depend on the type of data and the
                purpose for which it was collected:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Account information</span> is
                  retained for the duration of your active account and for a
                  reasonable period thereafter to fulfill legal obligations and
                  resolve disputes.
                </li>
                <li>
                  <span className="font-medium">Ingested support data</span> is
                  retained for as long as your organization maintains an active
                  subscription and the relevant integration remains connected.
                </li>
                <li>
                  <span className="font-medium">Analytics and usage data</span>{' '}
                  is retained in accordance with the retention policies of the
                  respective analytics providers (PostHog, Google Analytics,
                  Vercel Speed Insights).
                </li>
                <li>
                  <span className="font-medium">Error tracking data</span> is
                  retained by Sentry in accordance with their data retention
                  policies, typically for a limited period sufficient for
                  debugging purposes.
                </li>
                <li>
                  <span className="font-medium">Payment records</span> are
                  retained as required by applicable tax and financial
                  regulations.
                </li>
              </ul>
              <p className="mb-4">
                Upon account deletion or at your request, we will delete or
                anonymize your personal information within thirty (30) days,
                except where retention is required by law or for legitimate
                business purposes such as fraud prevention or compliance with
                legal obligations. Ingested support data, vector embeddings, and
                cached data associated with your organization will be
                permanently removed from our systems, including PostgreSQL,
                Weaviate, and Redis, within this same period. Backup copies may
                persist in encrypted backups for up to an additional sixty (60)
                days before being automatically purged.
              </p>
            </section>

            {/* 7. Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location and applicable law, you may have
                certain rights regarding your personal information. We are
                committed to honoring these rights and will respond to valid
                requests in a timely manner.
              </p>

              <h3 className="text-lg font-medium mb-2">7.1 General Rights</h3>
              <p className="mb-4">
                All users of our Service have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Right to Access:</span> You may
                  request a copy of the personal information we hold about you.
                </li>
                <li>
                  <span className="font-medium">Right to Correction:</span> You
                  may request that we correct inaccurate or incomplete personal
                  information.
                </li>
                <li>
                  <span className="font-medium">Right to Deletion:</span> You
                  may request that we delete your personal information, subject
                  to certain legal exceptions.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Data Portability:
                  </span>{' '}
                  You may request a machine-readable copy of your personal
                  information for transfer to another service.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                7.2 California Residents (CCPA)
              </h3>
              <p className="mb-4">
                If you are a California resident, you have additional rights
                under the California Consumer Privacy Act (CCPA) and the
                California Privacy Rights Act (CPRA), including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Right to Know:</span> You may
                  request that we disclose the categories and specific pieces of
                  personal information we have collected about you, the
                  categories of sources from which it was collected, the
                  business purpose for collecting it, and the categories of
                  third parties with whom we share it.
                </li>
                <li>
                  <span className="font-medium">Right to Delete:</span> You may
                  request deletion of your personal information, subject to
                  certain exceptions permitted by law.
                </li>
                <li>
                  <span className="font-medium">Right to Opt Out of Sale:</span>{' '}
                  We do not sell personal information. However, if our practices
                  change, you will have the right to opt out of any sale of your
                  personal information.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Non-Discrimination:
                  </span>{' '}
                  We will not discriminate against you for exercising any of
                  your CCPA rights.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                7.3 European Residents (GDPR)
              </h3>
              <p className="mb-4">
                If you are located in the European Economic Area (EEA), the
                United Kingdom, or Switzerland, you may have additional rights
                under the General Data Protection Regulation (GDPR) or
                equivalent legislation, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">
                    Right to Restrict Processing:
                  </span>{' '}
                  You may request that we restrict the processing of your
                  personal information in certain circumstances.
                </li>
                <li>
                  <span className="font-medium">Right to Object:</span> You may
                  object to our processing of your personal information where we
                  rely on legitimate interests as our legal basis.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Withdraw Consent:
                  </span>{' '}
                  Where we process your personal information based on consent,
                  you may withdraw your consent at any time without affecting
                  the lawfulness of processing carried out prior to withdrawal.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Lodge a Complaint:
                  </span>{' '}
                  You have the right to lodge a complaint with your local data
                  protection supervisory authority.
                </li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@ripetext.com" className="underline">
                  info@ripetext.com
                </a>
                . We will respond to your request within thirty (30) days, or
                within the timeframe required by applicable law. We may ask you
                to verify your identity before fulfilling your request.
              </p>
            </section>

            {/* 8. Cookies and Tracking Technologies */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to operate and
                improve our Service. Cookies are small data files stored on your
                device that help us recognize your browser and capture certain
                information.
              </p>

              <h3 className="text-lg font-medium mb-2">
                8.1 Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Essential Cookies:</span> These
                  cookies are necessary for the Service to function properly.
                  They include session management cookies that maintain your
                  authenticated state and enable secure access to your account.
                  You cannot opt out of essential cookies as they are required
                  for the Service to operate.
                </li>
                <li>
                  <span className="font-medium">Analytics Cookies:</span> We use
                  cookies from PostHog and Google Analytics to collect
                  anonymized data about how users interact with our Service.
                  This includes information about pages visited, features used,
                  session duration, and navigation paths. These cookies help us
                  understand user behavior and improve our platform.
                </li>
                <li>
                  <span className="font-medium">Performance Cookies:</span>{' '}
                  Vercel Speed Insights uses cookies and tracking scripts to
                  monitor the performance of our website, including page load
                  times and Core Web Vitals metrics.
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">8.2 Managing Cookies</h3>
              <p className="mb-4">
                Most web browsers allow you to manage your cookie preferences
                through browser settings. You can set your browser to refuse
                cookies or to alert you when cookies are being sent. Please note
                that if you disable essential cookies, certain features of the
                Service may not function properly. For analytics cookies, you
                may opt out through the respective provider&apos;s opt-out
                mechanisms.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                9. Children&apos;s Privacy
              </h2>
              <p className="mb-4">
                Our Service is not directed at individuals under the age of
                sixteen (16). We do not knowingly collect personal information
                from children under 16. RipeText is a business-to-business
                platform designed for use by organizations and their authorized
                adult representatives. If we become aware that we have
                inadvertently collected personal information from a child under
                16, we will take steps to delete such information promptly. If
                you believe that a child under 16 has provided us with personal
                information, please contact us immediately at{' '}
                <a href="mailto:info@ripetext.com" className="underline">
                  info@ripetext.com
                </a>{' '}
                so that we can take appropriate action.
              </p>
            </section>

            {/* 10. Changes to This Policy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                10. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, legal requirements, or
                other factors. When we make material changes to this Privacy
                Policy, we will notify you by updating the &quot;Effective
                Date&quot; at the top of this page and, where appropriate,
                providing additional notice such as an email notification or a
                prominent notice within the Service.
              </p>
              <p className="mb-4">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we are protecting your information. Your
                continued use of the Service after any changes to this Privacy
                Policy constitutes your acceptance of the updated policy. If you
                do not agree with the revised Privacy Policy, you should
                discontinue use of the Service and contact us to request
                deletion of your account and associated data.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-8">
                11. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us using
                the information below:
              </p>
              <div className="mb-4">
                <p className="font-medium">nibnab, Inc. dba RipeText</p>
                <p>Attn: Nikolay Tsenkov, CEO</p>
                <p>2810 N Church St PMB 89178</p>
                <p>Wilmington, DE 19802-4447</p>
                <p>United States</p>
              </div>
              <div className="mb-4">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:info@ripetext.com" className="underline">
                    info@ripetext.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +1 (302) 990-0582
                </p>
              </div>
              <p className="mb-4">
                We will make every effort to respond to your inquiry within
                thirty (30) days. For requests related to the exercise of your
                privacy rights, please include sufficient information for us to
                verify your identity and specify the nature of your request.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
