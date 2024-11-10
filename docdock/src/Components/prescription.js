import Card from "./Card";

const Prescription = () => {
  return (
    <>
      <h2 className="text-center display-6">Medication</h2>
      <div className="bg-offwhite mx-5 py-2">
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/05/52/46/14/1000_F_552461425_SztS9w0oaTzpvFK4IozNl1bXgAjXotnm.jpg"
          }
          name={"Tylenol"}
          desc={{
            active_ingredient:
              "Acetaminophen. This is the active ingredient in Tylenol, used for pain relief and fever reduction.",
            uses: "Relieves mild to moderate pain, such as headaches, toothaches, menstrual cramps, muscle aches, and backaches. Also Reduces fever.",
            dosage:
              "Typical adult dosage: 500–1000 mg every 4–6 hours as needed, not exceeding 3,000–4,000 mg per day (varies by product and age group). For children: Dosing is based on age and weight; check the package or consult with a pediatrician.",
          }}
        ></Card>
        <Card
          image={
            "https://as2.ftcdn.net/v2/jpg/01/02/11/67/1000_F_102116769_8Megknwvgkv6ENd9HpJZQZPbGCTCUt4S.jpg"
          }
          name={"Ointment"}
          desc={{
            active_ingredient:
              "Hydrocortisone: A mild steroid that reduces itching, redness, and inflammation associated with rashes or eczema.",
            uses: "Helps heal minor cuts, scrapes, and burns. Reduces symptoms of itching, swelling, and pain. Treats skin infections",
            dosage:
              "Clean and dry the affected area before application. Apply a thin layer over the affected area as directed on the label, typically 1–3 times daily. Cover with a bandage if recommended or as needed.",
          }}
        ></Card>
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/02/38/46/94/1000_F_238469477_GEoeZEOuud9YeYKXnhaGmpL76a7UGnJM.jpg"
          }
          name={"Cough Syrup"}
          desc={{
            active_ingredient:
              "Dextromethorphan: A cough suppressant that reduces the urge to cough.",
            uses: "Provides temporary relief of coughs. Some cough syrups may also relieve other symptoms like congestion, runny nose, or throat irritation.",
            dosage:
              "Adults and Children Over 12: Typically, take as directed on the package, usually every 4–6 hours as needed. Avoid exceeding the maximum daily dosage. Children Under 12: Cough syrups for children have specific formulations and dosages; check product labeling or consult a pediatrician before use.",
          }}
        ></Card>
      </div>
    </>
  );
};

export default Prescription;
