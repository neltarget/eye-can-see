import {
  Eye,
  Glasses,
  ShoppingBag,
  Stethoscope,
  Users,
  HeartPulse,
} from "lucide-react";

export const services = [
  {
    id: "general-eye-examination",
    icon: <Eye className="w-10 h-10 text-blue-600" />,
    title: "General Eye Examination",
    shortDescription:
      "Routine vision testing and detailed eye health checks using modern equipment.",
    detail: `Our comprehensive eye examinations ensure early detection of conditions
    such as refractive errors, cataracts, glaucoma, and other eye diseases.
    We use advanced diagnostic equipment to give you accurate results and a
    clear treatment plan. Regular checkups help maintain your vision and
    prevent complications.`,
  },
  {
    id: "cataract-glaucoma-care",
    icon: <HeartPulse className="w-10 h-10 text-blue-600" />,
    title: "Cataract & Glaucoma Care",
    shortDescription:
      "Diagnosis, treatment, and surgical care for cataract and glaucoma patients.",
    detail: `We provide specialized care for patients with cataracts and glaucoma.
    Our treatment includes both medical and surgical options depending on the
    severity of the condition. With Dr. Light’s expertise and advanced
    technology, we ensure patients receive the safest and most effective care.`,
  },
  {
    id: "prescription-glasses",
    icon: <Glasses className="w-10 h-10 text-blue-600" />,
    title: "Prescription Glasses",
    shortDescription:
      "A wide range of stylish and affordable designer frames for every lifestyle.",
    detail: `Sight Givers Eye Clinic offers a wide variety of frames, from
    classic to designer options, at affordable prices. Our lenses are tailored
    to your specific prescription, lifestyle, and comfort. Patients love our
    quick service and attention to detail in fitting the perfect glasses.`,
  },
  {
    id: "contact-lenses",
    icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
    title: "Contact Lenses",
    shortDescription:
      "Comfortable and high-quality lenses available for various prescriptions.",
    detail: `We provide contact lenses that suit different vision needs,
    including daily wear, extended wear, and specialized lenses. Our team
    ensures proper fitting and teaches patients how to handle and care for
    their lenses for comfort and eye health.`,
  },
  {
    id: "treatment-eye-conditions",
    icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
    title: "Treatment of Eye Conditions",
    shortDescription:
      "Comprehensive care for infections, allergies, dry eyes, and other conditions.",
    detail: `We treat a variety of common eye problems including infections,
    allergic reactions, dry eyes, and more. Each patient receives a
    personalized treatment plan based on their symptoms and lifestyle to
    ensure fast relief and long-term eye health.`,
  },
  {
    id: "family-eye-care",
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Family Eye Care",
    shortDescription:
      "Trusted care for children, adults, and seniors to protect vision for life.",
    detail: `From pediatric eye checkups to elderly vision care, we are dedicated
    to the eye health of your whole family. Our approach ensures every family
    member receives the attention and care they need for clear vision and a
    better quality of life.`,
  },
];
