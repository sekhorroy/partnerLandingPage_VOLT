import styles from "./faqs.module.css";
import FaqCollapsible from "./faqsItemsCollasible";
import { getParamsLink, isMobile } from "@/configs/utils";
import { helpLineNumberLink, PartnerLink } from "@/configs/constants";
import { useEffect, useMemo, useState } from "react";

const faqsItem = [
  {
    question: "What are the benefits of becoming a Volt Partner?",
    answer: () => {
      return (
        <>
          <p>
            Volt partners can help mutual fund investors avoid untimely
            redemptions and get easy access to cash at favorable terms.
            Investors can also save LTCG and STCG taxes for short term cash
            requirements.
          </p>
          <p>
            By referring mutual fund investors, Volt partners can earn account
            opening fees and trail income on usage.
          </p>
          <p>
            By referring advisors & MFDs, Volt partners can earn an additional
            income based on the referred partner’s earning.
          </p>
          <p>
            To know more details, empanel as a{" "}
            <a href={PartnerLink} target="_blank">
              Volt partner now.
            </a>{" "}
          </p>
        </>
      );
    },
  },
  {
    question: "Can I only refer customers whose funds I manage?",
    answer: () => {
      return (
        <>
          No, you can refer anyone! Always ensure that they use your unique
          customer referral link to register on our website to ensure that we
          recognize your referral.
        </>
      );
    },
  },
  {
    question: "When and how will my earnings be credited?",
    answer: () => {
      return (
        <>
          <p>
            Your monthly earnings will be deposited to your account by the 7th
            of the next month.
          </p>
          <p>
            After getting empanelled as a Volt Partner, you can provide your
            details such as PAN, bank account details, etc.
          </p>
        </>
      );
    },
  },
  {
    question: "Do I need a valid ARN number to become a Volt Partner?",
    answer: () => {
      return <span>No, ARN is not mandatory to become a Volt Partner.</span>;
    },
  },
  {
    question: "How does Volt Money ensure my privacy and security?",
    answer: () => {
      return (
        <>
          <p>
            Volt Money uses one time password(OTP) to authenticate important
            requests.
          </p>
          <p>
            All data is stored on secured servers. We adhere to the best
            security practices required for BFSI.
          </p>
        </>
      );
    },
  },
  {
    question: "How do I track my referrals and earnings from Volt Money?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Volt Money will be sharing summary & detailed reports for tracking
              your referrals & earnings on a monthly basis.
            </li>
            <li>
              We will also be sharing the current status of all the customers
              and partners that you have referred to us in the monthly summary.
              This information will also be available on the partner dashboard
              soon.
            </li>
            <li>
              Our team is constantly working on enhancing the Volt partner
              dashboard so that this information is readily available. You can
              currently request this information by sending us an e-mail on
              <span> </span>
              <a href="mailto:support@voltmoney.in">support@voltmoney.in</a>.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question:
      "What happens if I referred a customer or partner but forgot to send them my unique link?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Please call or WhatsApp us immediately on{" "}
              <a href={helpLineNumberLink} target="_parent">
                +91 96117 49295
              </a>{" "}
              and inform us of your referrals.
            </li>
            <li>
              In case you are unable to reach us on the above number, please
              drop us an email at <span />
              <a href="mailto:support@voltmoney.in">
                support@voltmoney.in
              </a>{" "}
              with all the relevant details and our support team will reach out
              to you at the earliest.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Can I get custom co-branded marketing material from Volt?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Absolutely! We regularly send our partners co-branding materials
              customized for their needs. Please reach out to our partner
              specific contact number{" "}
              <a href={helpLineNumberLink} target="_parent">
                +91 96117 49295
              </a>{" "}
              in case you need any new customization.
            </li>
          </ul>
        </>
      );
    },
  },
];

const faqItemInvestor = [
  {
    question: "What is loan against Mutual Funds?",
    answer: () => {
      return (
        <span>
          Loan Against Mutual Funds (LAMF) allows you to borrow cash against
          your mutual fund investments as collateral. You can use Volt to lien
          mark your mutual funds digitally to avail an instant limit without
          losing the ownership of your mutual funds and all the associated
          benefits with it. Funds will be made available in the form of an
          overdraft facility. You can utilize the required amount and repay
          anytime without any prepayment charges. Interest is charged only on
          the utilized amount and for the duration the funds are utilized. You
          can select from a list of 4500+ approved mutual funds from different
          asset management companies (AMCs) in India. You can lien mark mutual
          funds registered with both CAMS & KFintech (earlier known as KARVY),
          Registrars & Transfer Agents (RTAs). We recommend digital LAMF to meet
          any of your financial requirements like travel, gadget purchase,
          balance transfer for your high interest loans, medical emergency.
        </span>
      );
    },
  },
  {
    question: "What are the conditions to get a loan from Volt?\n",
    answer: () => {
      return (
        <>
          <ul>
            <li>You should be between 18 and 65 years of age.</li>
            <li>
              Your entire mutual fund portfolio should not be less than ₹50,000.
            </li>
            <li>
              You should hold Mutual Funds approved with CAMS & Kfintech (RTAs).
              Debt & ELSS funds (units held greater than 3 years) are also
              eligible.
            </li>
            <li>Joint mutual fund holders are not eligible for loan.</li>
            <li>You should be an Indian resident.</li>
          </ul>
          <span>There is no minimum credit score and income requirement.</span>
        </>
      );
    },
  },
  {
    question: "How much money can I borrow as a loan?",
    answer: () => {
      return (
        <>
          You can choose to set up any line amount ranging from Rs. 25,000 to
          Rs. 1 crore. <br></br>Yes! You read it right, you can create line up
          to 1 crore digitally in 5 minutes.
        </>
      );
    },
  },
  {
    question: "Can I choose any date for my monthly loan repayment?",
    answer: () => {
      return (
        <>
          Yes, you can choose to repay when you want. The credit line facility
          offers 100% flexibility for principal repayment. Only the interest
          needs to be repaid after month ends.
        </>
      );
    },
  },
  {
    question: "Do I have to pay interest on the complete line amount?",
    answer: () => {
      return (
        <>
          No, you do not have to pay interest on the complete line amount. Volt
          in completed flexible for the customer and interest is only to be paid
          on the amount used. Interest is calculated daily based on the loan
          outstanding you have day end. Some scenarios to explain:
          <ul>
            <li>
              If loan amount at day end is zero, there will be no interest
              charged for that day.
            </li>
            <li>
              If amount is withdrawn, used and repaid in 10 days, you’ll be only
              charged interest for 10 days.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What are the documents required?",
    answer: () => {
      return (
        <>
          The whole process if 100% digital, hence you don’t need any document
          in physical form. For quick processing, please keep below handy:
          <ul>
            <li>PAN card number</li>
            <li>Email ID associated with CAMS and KARVY</li>
            <li>
              Bank accounts details for account verification and receiving money
            </li>
            <li>Debit card or net banking details for mandate set up</li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What is lien marking/pledging of Mutual Funds?",
    answer: () => {
      return (
        <>
          When you take a loan against your mutual fund units, we lien
          mark/pledge your mutual fund units in the name of the lender, so that
          it cannot be redeemed/sell until you pay back the loan. The lien
          marking process is done 100% digitally and in real-time.
        </>
      );
    },
  },
  {
    question: "How to update your mobile number or email address in your CAS?",
    answer: () => {
      return (
        <>
          You can change your email/mobile number though MFCentral. Steps to
          change email/mobile number:
          <ul>
            <li>Sign up at MFCentral</li>
            <li>Put a service request.</li>
            <li>
              MFCentral will update the email/mobile number on your behalf
              within 1-2 days.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Which mutual fund schemes are eligible to take loans?",
    answer: () => {
      return (
        <>
          More than 4500+ mutual funds from different asset management companies
          (AMCs) in India are eligible to take loans with Volt. Not eligible -
          Tax Saving Fund units with date of purchase less than 3 years, i.e.,
          not matured.
        </>
      );
    },
  },
  {
    question: "How do I check my limit with Volt?",
    answer: () => {
      return (
        <>
          We just need your PAN, mobile number and MF registered email ID to
          check your limit. This is done just after signing up in the journey so
          you know during the journey what you are getting.
        </>
      );
    },
  },
  {
    question: "Do I need to upload CAS to get my limit?",
    answer: () => {
      return <>No. This is done automatically while checking the limit.</>;
    },
  },
  {
    question: "Can I lien mark any mutual fund units of my choice?",
    answer: () => {
      return (
        <>
          Volt is completely flexible in choosing which mutual funds units you
          want to lien mark for setting up the limit. You can change the schemes
          and units and have your own allocation for lien marking.
        </>
      );
    },
  },
  {
    question: "When will my funds be unlienmarked?",
    answer: () => {
      return (
        <>
          This can be done any time upon customer request conditional on current
          loan amount pending against your mutual fund units. Depending on your
          current loan amount/utilisation, you can remove lien from some mutual
          fund units or all mutual funds units you’ve pledged.
        </>
      );
    },
  },
];

const ReferalItem = [
  {
    question: "Who is the referrer and referee?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              A referrer is a Volt Money partner who refers fellow MFDs to
              empanel with Volt Money by sharing their unique invite link.
            </li>
            <li>
              The Referee is a MFD who empanelled with Volt Money using the
              invite link shared by the referrer.
              <br />
              Example: Suppose Mr. Amit is our partner, and he invite Mr.
              Suresh, a fellow MFD, to empanel with Volt Money using his
              referral link. Here, Amit is the referrer, and Suresh is the
              referee.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What is the definition of active referral?",
    answer: () => {
      return (
        <>
          When any MFD empanel with Volt Money using the referral link and sets
          up at least one LAMF limit of Rs. 1 lakh or higher with us, the
          referral will be considered successful.
        </>
      );
    },
  },
  {
    question: "How and when will I get the reward?",
    answer: () => {
      return (
        <>
          <p>
            Eligible Partners will receive rewards within 45 calendar days on
            their registered eMail / SMS / WhatsApp with rewards details
            mentioned in it.
          </p>
        </>
      );
    },
  },
  {
    question: "Where will I find my invite link?",
    answer: () => {
      return (
        <>
          <p>You can get the invite link 2 ways:</p>
          <ul>
            <li>
              Login on partner dashboard to get the invite link{" "}
              <a href={`${PartnerLink}?${getParamsLink()}`}>{PartnerLink}</a>
            </li>
            <li>
              Request for invite link on whatsapp number{" "}
              <a href={"https://api.whatsapp.com/send?phone=919611749295"}>
                https://api.whatsapp.com/send?phone=919611749295
              </a>
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Is there a way for me to track the status of my referrals?",
    answer: () => {
      return (
        <>
          <p>
            {`Yes, you can check the status of your referral on our partner dashboard here {{dashboard_URL}}`}
          </p>
        </>
      );
    },
  },
  {
    question: "Am I eligible for the program if I refer my client?",
    answer: () => {
      return (
        <>
          <p>
            No, in order to be eligible for this referral program, you need to
            invite other MFDs to enroll with Volt Money.
          </p>
        </>
      );
    },
  },
  {
    question:
      "Is there a limit to how many MFD I can refer or the rewards I can earn?",
    answer: () => {
      return (
        <>
          <p>
            The maximum reward we offer is an iPad for referring to 25 MDFs.
            However, you may share as many reference leads as you like, and we
            will get in touch with you if you exceed the 25-referral limit.
          </p>
        </>
      );
    },
  },
  {
    question: "How do I know when I've successfully referred someone?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              We will notify you via WhatsApp and email when your referral
              enrolls and opens a line with Volt Money.
            </li>
            <li>
              You can also check status on our partner dashboard.{" "}
              <a
                href={`${PartnerLink}?${getParamsLink()}`}
              >{`${PartnerLink}`}</a>
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Where can I reach out if my question wasn't answered here?",
    answer: () => {
      return (
        <>
          <p>
            You can write to us at{" "}
            <a href="mailto:support@voltmoney.in">support@voltmoney.in</a> or
            can call on{" "}
            <a href={helpLineNumberLink} target="_parent">
              09611-749-295.
            </a>{" "}
          </p>
        </>
      );
    },
  },
];

const LASItems = [
  {
    question:
      "How does pledging on mutual funds work? Are my mutual funds safe / is there any risk of sell-off?\n",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Investor continues to own the mutual fund even after the pledge is
              marked. Volt Money does not have the right to change the ownership
              of the funds.
            </li>
            <li>
              Volt Money is integrated with SEBI regulated entities such as CAMS
              & KFintech to enable a digital process for pledging.
            </li>
            <li>
              Volt Money is partnered with trusted AAA rated lenders. Our
              lenders are legally obligated to inform your customers whenever a
              shortfall occurs. They will be notified via email at least 7 days
              in advance, and via phone calls at least 2 days in advance.
            </li>
            <li>
              Volt Money ensures that RBI and SEBI regulations are followed at
              every step.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question:
      "Which types of mutual funds are eligible for loan against securities?",
    answer: () => {
      return (
        <>
          <ul>
            <li>Volt Money supports most Equity, Debt, and Hybrid funds.</li>
            <li>
              Volt Money currently does not support retirement, ELSS, and child
              gift funds due to lock-ins preventing them from being sold. We are
              actively working with our lending partners to include free units
              in these funds.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Can I pledge my holdings in my demat account?",
    answer: () => {
      return (
        <>
          <ul>
            <li>Currently, we only support physical / SoA mutual funds.</li>
            <li>
              We’re actively working on adding support for mutual funds & shares
              in the demat account.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question:
      "How can a customer make repayment? How long does it take for the repayment to reflect in my account? ",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              As per regulatory requirements, repayment must be done from the
              bank account of the borrower. Although, the repayment bank account
              number can be different from the account used for withdrawal.
            </li>
            <li>
              {`Repayment needs to be done directly into the lender's bank
                            account. Details are available on the customer's dashboard. Please
                            add the account as a beneficiary to your bank account.`}
            </li>
            <li>
              Supported payment methods are NEFT, RTGS, IMPS. (Note: Repayment
              via UPI is currently NOT supported.)
            </li>
            <li>Repayment will update the account balance by end of day.</li>
            <li>
              In case you are facing any issues, please contact us via phone
              call or WhatsApp on{" "}
              <a href={helpLineNumberLink} target="_parent">
                +91 96117 49295
              </a>{" "}
              or email us at <span />
              <a href="mailto:support@voltmoney.in">support@voltmoney.in</a>.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What lenders does Volt Money support?",
    answer: () => {
      return (
        <>
          <ul>
            <li>Currently, we are tied up with Bajaj Finance Limited.</li>
            <li>
              We are actively working on adding multiple other lenders to bring
              you support for more mutual funds and to provide you with the best
              interest rates in the market.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What are the charges for using my credit line?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Customers are charged a one time flat fee of Rs. 999 + 18% GST
              (Rs. 1,180). This fee is debited directly from the first
              disbursement.
            </li>
            <li>
              A lien-remarking fee of Rs 499 + 18% GST (Rs. 590) is charged on
              an annual basis when the credit line agreement is renewed.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "Are there any hidden charges?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Apart from the fees mentioned above, there are no other hidden
              charges!
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "How can I free my lien marked units?",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Please drop an email to <span />
              <a href="mailto:support@voltmoney.in">support@voltmoney.in</a> or
              call/whatsapp us as{" "}
              <a href={helpLineNumberLink} target="_parent">
                +91 96117 49295git
              </a>
              {". "}
            </li>
            <li>
              The lien unmarking process is completely digital from the customer
              perspective. The unmarking process takes 2-3 business days.
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question: "What documents do my customers need to open a credit line?",
    answer: () => {
      return (
        <>
          Customers need a digital copy of the following. These will be uploaded
          online and there is no physical process involved.
          <ol>
            <li>PAN card - front side image</li>
            <li>AADHAR card - front side image</li>
            <li>AADHAR card - back side image</li>
          </ol>
        </>
      );
    },
  },
];

const AboutVoltMoneyItem = [
  {
    question: "Tell me more aboutPage Volt Money.",
    answer: () => {
      return (
        <>
          <ul>
            <li>
              Volt Money is registered as Salter Technologies Private Limited
              headquartered at Bengaluru.
            </li>
            <li>
              {`We're a very well funded company backed by marquee venture capital
                            investors and industry veterans.`}
            </li>
          </ul>
        </>
      );
    },
  },
  {
    question:
      "Does my referred customer get impacted if Volt Money goes out of business?",
    answer: () => {
      return (
        <>
          <ul>
            <li>No, your referred customer doesn’t get impacted.</li>
            <li>
              Your mutual funds are pledged using SEBI authorized entities such
              as CAMS and KFintech. They will continue to be held in your name.
            </li>
            <li>
              Your credit accounts are opened with trusted AAA rated lenders
              such as Bajaj Finance Limited
            </li>
            <li>
              Rest assured that any changes in Volt Money will not impact your
              agreement with our lenders.
            </li>
          </ul>
        </>
      );
    },
  },
];

export const FaqType = {
  PARTNER: "PARTNER",
  INVESTOR: "INVESTOR",
  INVITE_AND_EARN: "INVITE_AND_EARN",
};

function Faqs({ type }) {
  const _isMobile = isMobile();
  const [_hide, setHide] = useState(true);

  return (
    <div className={styles.Faqs_Container}>
      <div
        className={styles.Faqs_ContainerTitle}
        style={
          !_isMobile
            ? {
                fontFamily: "Inter",
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 16,
              }
            : {
                fontFamily: "Inter",
                fontWeight: "400",
                fontStyle: "normal",
                fontSize: 14,
              }
        }
      >
        Have any doubts?
      </div>
      <h2
        className={styles.Faqs_ContainerSubTitle}
        style={
          _isMobile
            ? {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: 24,
              }
            : {
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: 32,
              }
        }
      >
        Frequently asked questions
      </h2>
      <div className={styles.Faqs_ContainerQuestionItemsContainer}>
        {type === FaqType.PARTNER &&
          faqsItem &&
          faqsItem.map((item, key) => {
            return (
              <FaqCollapsible
                key={key}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        {type === FaqType.INVESTOR &&
          faqItemInvestor &&
          faqItemInvestor.map((item, key) => {
            return (
              <FaqCollapsible
                key={key}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        {type === FaqType.INVITE_AND_EARN &&
          ReferalItem &&
          ReferalItem.map((item, key) => {
            return (
              <FaqCollapsible
                key={key}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Faqs;
