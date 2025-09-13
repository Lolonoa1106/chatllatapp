import { useTranslation } from "react-i18next";

const Faqs = () => {
    const { t } = useTranslation();

    const faqs = [
    {
      question: t("faqs.question1"),
      answer: t("faqs.answer1"),
    },
    {
      question: t("faqs.question2"),
      answer: t("faqs.answer2"),
    },
    {
      question: t("faqs.question3"),
      answer: t("faqs.answer3"),
    },
    {
      question: t("faqs.question4"),
      answer: t("faqs.answer4"),
    },
  ];

  return faqs;
}

export default Faqs;