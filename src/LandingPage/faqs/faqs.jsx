import styles from "./faqs.module.css";
import FaqCollapsible from "./faqsItemsCollasible";
import { isMobile } from "@/configs/utils";

const faqsItem = [
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
          the utilized amount and for the duration the funds are utilized.You
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
              Debt & ELSS funds (units held less than 3 years) are also
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
      {/*
                    <button className="Faqs_ContainerViewMoreButton">
                      View More
                    </button>
                */}
    </div>
  );
}

export default Faqs;
