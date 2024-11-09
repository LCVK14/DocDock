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
        ></Card>
        <Card
          image={
            "https://as2.ftcdn.net/v2/jpg/01/02/11/67/1000_F_102116769_8Megknwvgkv6ENd9HpJZQZPbGCTCUt4S.jpg"
          }
          name={"Ointment"}
        ></Card>
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/02/38/46/94/1000_F_238469477_GEoeZEOuud9YeYKXnhaGmpL76a7UGnJM.jpg"
          }
          name={"Cough Syrup"}
        ></Card>
      </div>
    </>
  );
};

export default Prescription;
