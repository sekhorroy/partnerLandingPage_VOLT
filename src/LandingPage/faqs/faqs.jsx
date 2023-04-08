import styles from "./faqs.module.css";
import FaqCollapsible from "./faqsItemsCollasible";
import { isMobile } from "@/configs/utils";
import { helpLineNumberLink, PartnerLink } from "@/configs/constants";
import {ButtonComponent} from "@/components/button";

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
    question: "Tell me more about Volt Money.",
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

function Faqs() {
  const _isMobile = isMobile();

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
        {faqsItem &&
          faqsItem.map((item, key) => {
            return (
              <FaqCollapsible
                key={key}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
      </div>
      {/*<div>*/}
      {/*  <ButtonComponent label={} type={} />*/}
      {/*</div>*/}
    </div>
  );
}

export default Faqs;
